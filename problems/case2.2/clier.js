#!/usr/bin/env node
var name = process.argv[2]
var _process = require('child_process')
var colors = require('colors/safe')

_process.exec('echo hello ' + name, function (err, stdout, stderr) {
    if (err) throw err;
    console.log(colors.green(stdout))
})
