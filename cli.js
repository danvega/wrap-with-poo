#!/usr/bin/env node

const poo = require('./index.js');
const fs = require('fs');

var data = fs.readFileSync(0, 'utf-8');
console.log(poo(data.trimEnd()));
