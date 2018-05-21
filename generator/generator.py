#!/usr/bin/env python

import sys
import os
import json
import datetime

from io import open
from os import path
from jinja2 import Environment, BaseLoader
from inflection import underscore, camelize

def generate(input):
    db = json.load(open(os.path.basename('db.json')))

    for command in db['commands']:
        for direction in ['send', 'recv']:
            for i in range(len(command[direction])):
                command[direction][i] = db['chunks'][str(command[direction][i])]

    db['version'] = '123123'
    db['time'] = datetime.datetime.now()

    jinja = Environment(loader=BaseLoader())

    jinja.filters['underscore'] = underscore
    jinja.filters['camelize'] = camelize
    jinja.filters['camelize_small'] = lambda s: camelize(s, False)
    jinja.filters['no_suffix'] = lambda s: '_'.join(s.split('_')[:-1]) or 's'
    jinja.filters['is_buffer'] = lambda s: s[-7:] == '_buffer'

    return jinja.from_string(input).render(db)

if __name__ == '__main__':
    print (generate(sys.stdin.read()))
