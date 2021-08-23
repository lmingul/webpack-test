/*
 * @Author: lmingul
 * @Date: 2021-08-16 00:45:13
 * @LastEditors: lmingul
 * @LastEditTime: 2021-08-24 01:10:53
 * @Description: 
 * @FilePath: \project-test\webpack-test\webpack-test\src\index.js
 */
// console.log('hello lmllml')

let str = require('./a.js')

console.log(str + '1')

require('./index.css')

// require('./index.less')

let fn = () => {
    console.log('///////////')
}

fn()

@log  

class A{
    a = 1
}


let a = new A()

console.log(a.a,'打印a')

function log(target) {
    console.log(target,'/////////////')
}

