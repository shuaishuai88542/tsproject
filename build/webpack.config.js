const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
module.exports = {
	//编译入口文件
	entry: "./src/index.ts",
	//指定编译完输出文件
	output: {
		filename: "main.js"
	},
	resolve: {
		//自动解析后缀拓展
		extensions: ['.ts', '.tsx', '.js']
	},
	module:{
		//指定后缀文件处理
		rules:[{
			//匹配文件后缀
			test:/\.tsx?$/,
			//使用ts loader解析
			use:'ts-loader',
			//排除文件
			exclude:/node_modules/
		}]
	},
	//判断本地开发还是上线打包
	devtool:process.env.NODE_ENV === 'production' ? false : 'inline-source-map',
	devServer:{
		contentBase:"./dist",
		stats:'errors-only',
		compress:false,
		host:'localhost',
		port:8089
	},
	plugins:[
		new CleanWebpackPlugin({
			cleanOnceBeforeBuildPatterns:['./dist']
		}),
		new HtmlWebpackPlugin({
			template:'./src/template/index.html'
		})
	]
}