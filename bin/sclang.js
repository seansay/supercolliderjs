#!/usr/bin/env node

var
    path = require('path'),
    lib = path.join(__dirname, '../lib/nodejs/'),
    SCLang = require(lib + 'sclang'),
    options = require(lib + 'parse-options');

var s = new SCLang(options());

s.boot();
