/*
 * @Title: 脚手架lib库
 * @Author: huangjitao
 * @Date: 2022-04-06 10:49:40
 * @Description: 用于多package的测试
 */
module.exports = {
  sum(a, b) {
    return a + b;
  },
  mul(a, b) {
    return a * b;
  },
  equal (a, b) {
    return a / b
  },
  sub (a, b) {
    return a - b
  },

  // 初始化命令
  init ({ option, param }) {
    console.log("正在初始化，", '参数名为：', option, "参数值为：", param )
  }
}