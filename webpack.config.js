// webpack  是node 写出来的   node 写法

let path = require('path')  // 内置模块，不需要安装
let HtmlWebpackPlugin = require('html-webpack-plugin')


// console.log(path.resolve('dist'))  // 输出结果   f:\project-test\dist
module.exports = {
    devServer:{   // 开发服务器的配置
        port:3000,  // 端口号
        progress:true, // 进度条
        contentBase:"./build", // 静态服务文件地址 
        compress:true,


    },
    mode:'development', // 模式  默认两种  production 生产模式  development 开发模式
    entry:'./src/index.js', // 入口
    output: {  // 出口
        filename:'bundle.js',  // bundle 一束花  意思是打包到一起  打包后的文件名
        path: path.resolve(__dirname,'build'),    // 路径必须是一个绝对路径  resolve 解析   把相对路径转换为绝对路径
                                                 // __dirname 以当前目录下产生一个dist目录
                                            
    },
    plugins:[  // 数组， 放着所有的webpack插件
        new HtmlWebpackPlugin({
            template:'./src/index.html', 
            filename:'index.html' // 打包后的名字
        })

    ]
}