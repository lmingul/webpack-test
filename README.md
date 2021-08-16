# webpack-test
webpack 项目demo 练习上手


# Webpack 

(4.0)

## 介绍

. 简介
webpack  是一个JavaScript模块打包工具，模块打包机，分析项目结构，找到JavaScript模块以及其他的一些浏览器不能直接运行的拓展语言（scss, typescript），并将其打包为合适的格式以供浏览器使用

（后续补图）

. 可以做的事情

1. 代码转换 （es6 -> es5  ,  scss,sass -> css）
2. 文件优化  （压缩代码体积，合并文件）
3. 代码分割  （公共模块抽离。路由懒加载)
4. 模块合并  （）
5. 自动刷新
6. 代码校验
7. 自动发布


- webpack 常见配置 
- webpack高级配置‘
- webpack 优化策略
- ast抽象语法树
- webpack 中的 Tapable   (钩子)
- 掌握webpack 流程，手写webpack
- 手写webpack 中的常见loader
- 手写webpack中的常见plugin


## webpack 安装

- 本地安装

1. 安装包
   webpack  webpack-cli  -D  开发依赖  （上线时不需要这两个包）
   使用yarn 安装

 - yarn init -y   初始化依赖  
   生成package.json  文件

 - yarn add webpack webpack-cli -D 安装webpack
   生成yarn.lock  和node_modules 文件
 - 

## webpack可以进行 0 配置

- 打包工具   -> 输出后的结果 （js模块）
- 打包 （支持我们的js的模块化）

npx webpack  直接运行文件   webpack 5.2 自带命令npx
找寻 node_modules   ->     .bin -> webpack.cmd 文件

```
@IF EXIST "%~dp0\node.exe" (
  "%~dp0\node.exe"  "%~dp0\..\webpack\bin\webpack.js" %*
) ELSE (
  @SETLOCAL
  @SET PATHEXT=%PATHEXT:;.JS;=;%
  node  "%~dp0\..\webpack\bin\webpack.js" %*
)

// 判断是否存在node.exe   有就使用node.exe 执行webpack.js文件
// 没有则使用node  寻找本地文件   
// node_modules   -> webpack -> bin  -> webpack.js

if (!normalizedAnswer) {
			console.error(
				"You need to install 'webpack-cli' to use webpack via CLI.\n" +
					"You can also install the CLI manually."
			);

			return;
		}
		
这里会提升我们安装webpack-cli  这就是webpack 4.0 需要安装 cli 的出处
```

运行命令后会生成一个 dist -> main.js 文件

```tips
 Code Runner 插件 帮我们执行node 代码
```

![code runner](@../src/assets/image/webpack-1.pngimage\webpack-1.png)

新建文件  a.js ,在 index.js 中引用  npx webpak

![code runner](F:\项目记录\前端技术\image\webpack-2.png)

```tips
 HTML Snippets  插件 完整的HTML标签，包括HTML5片段
```

## 手动配置webpack

- 默认配置文件文件的名字    webpack.config.js
  webpack.config.js   /  webpackfile.js
  config-yargs.js 这个文件在哪里呢

文件改名字 
npx webpack  -- config webpack.config.my.js  

通过脚本改名字

```
// package.json
"scripts": {
    "build":"webpack --config webpack.config.my.js" 
  },
  // 执行npm run build 文件即可运行  (npm webpack)
```

通过命令传参

##  强配置

`yarn add webpack-dev-server -D`  安装webpack 依赖

```wargin
由于我直接安装webpack 导致安装到了webpack 5.0版本  以至于导致一些
配置错误 后又进行重新的版本安装.......(哎，以前的视频跟不上版本的变更啊)
```

卸载
yarn remove <packageName>：  移除一个包，会自动更新package.json和yarn.lock
下面是一些定制版本 
yarn add webpack@4.28.2 -D
yarn add webpack-cli@3.1.2  -D
yarn add webpack-dev-server@3.1.14  -D
由于我两个版本都安装了，于是可以看到一些文件上的差异， 比如视频里提到的
webpack-cli bin目录下的文件  生成的bundle.js 文件  
至于哪里不一样，我后面再研究


安装webpack-dev-server 后，执行npx webpack-dev-server 命令可以得到一个网址

![](F:\项目记录\前端技术\image\webpack-dev-server.png)


### 开发服务器的配置

```
 devServer:{   // 开发服务器的配置
        port:3000,  // 端口号
        progress:true, // 进度条
        contentBase:"./build", // 静态服务文件地址 
        compress:true,
    },
```

同时添加脚本

```
"scripts": {
    "build": "webpack --config webpack.config.js",
    "dev":"webpack-dev-server"
  },
```

可以直接运行webpack-dev-server

安装  yarn add html-webpack-plugin -D  
! 又是安装版本的问题
 yarn add --dev html-webpack-plugin@4
(版本问题太害人了！！！！)

https://www.npmjs.com/package/html-webpack-plugin
yarn add  html-webpack-plugin@4.5.2 -D  

具体办法的话还是找到 npm 网址   然后看所需要的webpack 所对应的版本号
看来还是多学多练啊！!(渣渣的心路历程谁能懂...............)

