/*
 * @Author: lmingul
 * @Date: 2021-08-16 00:45:29
 * @LastEditors: lmingul
 * @LastEditTime: 2021-08-22 23:48:00
 * @Description: 
 * @FilePath: \project-test\webpack-test\webpack-test\webpack.config.js
 */


let path = require('path')  // 内置模块，不需要安装
let HtmlWebpackPlugin = require('html-webpack-plugin')
let MiniCssExtractPlugin = require('mini-css-extract-plugin')
let OoptimizeCss = require('optimize-css-assets-webpack-plugin') 
// console.log(path.resolve('dist'))  // 输出结果   f:\project-test\dist
module.exports = {
    // mode:'development', // 模式  默认两种  production 生产模式  development 开发模式
    mode:"production",
    entry:'./src/index.js', // 入口
    output: {  // 出口
        filename:'bundle.js',  // bundle 一束花  意思是打包到一起  打包后的文件名
        // filename:'bundle.[hash:8]js', // 每次修改时都产生不同的文件，防止覆盖 加数字控制显示位数(中间不要有空格)
        path: path.resolve(__dirname,'build'),    // 路径必须是一个绝对路径  resolve 解析   把相对路径转换为绝对路径
                                                 // __dirname 以当前目录下产生一个dist目录                                     
    },
    plugins:[  // 数组， 放着所有的webpack插件 
        new HtmlWebpackPlugin({    // 类 
            template:'./src/index.html', 
            filename:'index.html', // 打包后的名字
        }),
        new MiniCssExtractPlugin({
            filename: 'main.css'

        })
    ],
    module: {  // 模块
        rules: [ 
            {
                test: /\.css$/, 
                use:[
                   MiniCssExtractPlugin.loader,
                    'css-loader',
                    // 'style-loader',
                    {
                        loader:"postcss-loader"
                    }
                ]
            },
            // {
            //     test: /\.less$/, 
            //     use:[
            //         MiniCssExtractPlugin.loader,
            //         'less-loader',
            //     ]

            // }

        ]


    },
}