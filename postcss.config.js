/*
 * @Author: lmingul
 * @Date: 2021-08-22 19:20:07
 * @LastEditors: lmingul
 * @LastEditTime: 2021-08-22 23:30:21
 * @Description: 
 * @FilePath: \project-test\webpack-test\webpack-test\postcss.config.js
 */


// module.exports = {
//     plugins:[require('autoprefixer')()]
// }

module.exports = {
    plugins: [
        require('autoprefixer')
        ({
            "browsers": [
                "defaults",
                "not ie < 11",
                "last 2 versions",
                "> 1%",
                "iOS 7",
                "last 3 iOS versions"
            ]
        })
    ]
}
