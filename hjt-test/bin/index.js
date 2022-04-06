#!/usr/bin/env node

const lib = require('@windhjt/test-lib')
const sum = lib.sum(1, 2)
const mul = lib.mul(2, 3)
const equal = lib.equal(6, 2)
console.log('sum:', sum, 'mul:', mul, 'equal:', equal)
