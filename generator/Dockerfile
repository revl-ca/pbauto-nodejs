FROM python:3-alpine
LABEL maintainer="steve@revl.ca"
COPY requirements.txt requirements.txt
RUN pip install -r requirements.txt
COPY . .
CMD ["python", "generator.py"]
