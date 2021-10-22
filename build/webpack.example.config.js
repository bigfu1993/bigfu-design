const Path = require('path')
const Fs = require('fs')
const Webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin') // html模板
const { VueLoaderPlugin } = require('vue-loader') //解析vue模板
let env = process.env.BUILD_ENV

const exampleConfig = function (env) {
	return {
		mode: 'development',
		devtool: 'source-map',
		entry: {
			app: Path.resolve(__dirname, '../examples/index.ts'),
		},
		output: {
			publicPath: '/', // 项目绝对路径 || 线上cdn地址
			assetModuleFilename: 'resources/[fullhash][ext][query]', // 资源文件命名格式
			filename: 'js/[name].[fullhash:8].min.js',
			chunkFilename: 'js/bundle/[name].[fullhash:8].chunk.js',
			path: Path.resolve(__dirname, '../dist'),
		},
		resolve: {
			fallback: {
				"path": require.resolve("path-browserify"),
			},
			extensions: ['.ts', '.js', '.vue', '.json', '.css', '.less'],
			modules: [Path.resolve(__dirname, '../examples'), Path.resolve(__dirname, '../node_modules')],
			alias: {
				'fs': false,
				'@': Path.resolve(__dirname, '../examples'),
				'#': Path.resolve(__dirname, '../examples/assets'),
			}
		},
		devServer: {
			stats: 'errors-warnings',
			host: 'design.mumuxili.com', //指定访问内容
			port: 443,
			https: true,
			proxy: {
				'/get': {
					target: `https://mis-service${env != 'prod' ? env : ''}.mumuxili.com`,
					pathRewrite: {
						'^/get': ''
					},
					changeOrigin: true,
					secure: true
				},
			}
		},
		module: {
			rules: [
				{
					test: /\.tsx?$/,
					exclude: /node_modules/,
					use: [
						{
							loader: 'ts-loader',
							options: {
								appendTsSuffixTo: [/\.vue$/]
							}
						}
					]
				},
				{
					test: /\.jsx?$/,
					exclude: /node_modules/,
					use: {
						loader: 'babel-loader',
						options: {
							cacheDirectory: true,
							cacheCompression: true,
							presets: ['@babel/preset-env', "@babel/preset-typescript"],
							plugins: ['@babel/plugin-proposal-object-rest-spread', '@babel/plugin-transform-runtime', [
								"component", {
									"libraryName": "bigfu-design",
									"styleLibrary": {
										"name": "theme",
										"base": false
									}
								}
							]]
						}
					}
				},
				{
					test: /\.vue$/,
					exclude: /node_modules/,
					use: [
						{
							loader: 'vue-loader'
						}
					]
				},
				{
					test: /\.(c|le|sc)ss$/,
					use: [
						{ loader: env == 'prod' ? MiniCssExtractPlugin.loader : 'style-loader' },
						{ loader: 'css-loader' },
						{ loader: 'less-loader' },
						{
							loader: 'postcss-loader',
							options: {
								postcssOptions: {
									plugins: [
										['postcss-preset-env'],
										['autoprefixer']
									],
								},
							}
						},
					]
				},
				{
					test: /\.(png|jpg|jpeg|svg|gif)/,
					type: 'asset',
					parser: {
						dataUrlCondition: {
							maxSize: 8 * 1024 // 8kb
						}
					}
				}
			]
		},
		plugins: [
			new HtmlWebpackPlugin({
				template: Path.resolve(__dirname, '../examples/template/index.html'),
				filename: 'index.html',
				hash: true
			}),
			new VueLoaderPlugin(),
			new Webpack.DefinePlugin({
				'process.env': {
					BUILD_ENV: JSON.stringify(process.env.BUILD_ENV),
					RUN_TYPE: JSON.stringify(process.env.RUN_TYPE)
				}
			}),
			new Webpack.HotModuleReplacementPlugin()
		],
	}
}
module.exports = exampleConfig(env)
