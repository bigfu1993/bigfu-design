const Path = require('path') // 路径解析器
const Fs = require('fs')  // 文件模块
const Webpack = require('webpack') // webpack对象暴露内置模板
const MiniCssExtractPlugin = require('mini-css-extract-plugin') // 提取css文件
const { VueLoaderPlugin } = require('vue-loader') //解析vue模板
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); // 清空模板

const baseConfig = function (env) {
  let conf = {
    mode: 'production',
    devtool: 'source-map',
    entry: {
      index: Path.resolve(__dirname, `../packages/index.ts`)
    },
    output: {
      path: Path.resolve(__dirname, '../lib'),
      publicPath: '/',
      filename: '[name].js',
      library: 'bigfu-design', // 指定require时的模块名
      libraryTarget: 'umd', // 指定输出格式
      umdNamedDefine: true // 会对UMD的构建过程中的AMD模块命名，否则使用匿名的define。
    },
    resolve: {
      extensions: ['.ts', '.js', '.vue', '.json', '.css', '.less'],
      modules: [Path.resolve(__dirname, '../views'), Path.resolve(__dirname, '../node_modules')],
      alias: {
        '@': Path.resolve(__dirname, '../views'),
        '#': Path.resolve(__dirname, '../views/assets'),
      }
    },
    module: {
      rules: [
        {
          test: /\.d\.ts$/,
          loader: 'ignore-loader'
        },
        {
          test: /\.tsx?$/,
          exclude: /node_modules|\.d\.ts$/,
          use: [
            {
              loader: 'ts-loader',
              options: {
                appendTsSuffixTo: [/\.vue$/],
                compilerOptions: {
                  declaration: true,
                  declarationDir: Path.resolve(__dirname, '../lib/types')
                }
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
              plugins: ['@babel/plugin-proposal-object-rest-spread', '@babel/plugin-transform-runtime']
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
            { loader: MiniCssExtractPlugin.loader },
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
      new CleanWebpackPlugin(),
      new VueLoaderPlugin(),
      new MiniCssExtractPlugin({
        filename: 'theme/[name].css'
      }),
      new Webpack.DefinePlugin({
        'process.env': {
          BUILD_ENV: JSON.stringify(process.env.BUILD_ENV),
          RUN_TYPE: JSON.stringify(process.env.RUN_TYPE)
        }
      }),
    ],
    // optimization: {
    // 	splitChunks: {
    // 		cacheGroups: {
    // 			vendor: {
    // 				test: /[\\/]node_modules[\\/]/,
    // 				name: 'index',
    // 				chunks: 'all'
    // 			}
    // 		}
    // 	},
    // }
  }
  return conf
}
module.exports = baseConfig('prod')
