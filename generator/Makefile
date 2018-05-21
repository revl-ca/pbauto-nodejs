name = pbauto-nodejs-generator

build:
	docker build -t $(name) .

generate:
	cat templates/PBAutoCommandList.json | docker run -i --rm $(name) > ../PBAutoCommandList.json
	cat templates/PBAutoEnumList.json | docker run -i --rm $(name) > ../PBAutoEnumList.json
	cat templates/PBAutoCommands.js | docker run -i --rm $(name) > ../PBAutoCommands.js

clean:
	docker image rm --force $(name)
	rm -f ../PBAutoCommandList.json
	rm -f ../PBAutoEnumList.json
	rm -f ../PBAutoCommands.js
