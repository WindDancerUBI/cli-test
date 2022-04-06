#!/usr/bin/env node

const lib = require('@windhjt/test-lib')
// const sum = lib.sum(1, 2)
// const mul = lib.mul(2, 3)
// const equal = lib.equal(6, 2)
// console.log('sum:', sum, 'mul:', mul, 'equal:', equal)

/** 注册init命令 */
const argv = require("process").argv;
console.log('node执行参数：', argv);

const command = argv[2]; // 第二个参数是命令

// 命令的参数解析
const options = argv.splice(3);
if (options.length > 1) {
  let [option, param] = options
  option = option.replace('--', '')

  if (command) {
    if (lib[command]) {
      lib[command]({ option, param });
    } else {
      console.log('command not found');
    }
  } else {
    console.log('please input command');
  }
}

/** 非命令的参数解析 */
if (command.startsWith('--') || command.startsWith('-')) {
  const globalOption = command.replace(/--|-/g, '');
  if (globalOption === 'version' || globalOption.toLowerCase() === 'v') {
    console.log('1.0.0');
  }
}