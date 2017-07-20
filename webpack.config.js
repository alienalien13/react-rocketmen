const path = require('path'),
	merge = require('webpack-merge'),
	HtmlWebpackPlugin = require('html-webpack-plugin'),
	ExtractTextWebpackPlugin = require('extract-text-webpack-plugin'),
	UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin')

const PATHS = {
	src: path.join(__dirname, 'src'),
	dist: path.join(__dirname, 'dist')
}

const common = () => {
	return {
		entry: PATHS.src + '/index.js',
		output: {
			filename: 'bundle.js',
			path: PATHS.dist + "/js/"
		},
		module: {
			rules: [
				{
					test: /\.pug$/i,
					use: 'pug-loader',
                    options: {
                        pretty: true
                    }
				}
			]
		},
		plugin: [
			new ExtractTextWebpackPlugin('./styles/style.css')
		]
	}
}

const dev = () => {
	return merge(common,{
		module: {
			rules: [
				{
					test: /\.scss$/i,
					use: ExtractTextWebpackPlugin.extract({
						fallback: 'style-loader',
						use: [
							'css-loader',
							'sass-loader'
						]
					})
				}
			]
		},
		plugins: [
			new HtmlWebpackPlugin({
				filename: 'index.html',
				template: PATHS.src + '/index.pug'
			})
		],
		devServer: {

		}
	})
}

const prod = () => {
	return merge(common,{
		module: {
			rules: [
				{
					test: /\.sass$/i,
					use: ExtractTextWebpackPlugin.extract({
						fallback: 'style-loader',
						use: [
							'css-loader',
							'postcss-loader',
							'sass-loader'
						]
					})
				}
			]
		},
		plugins: [
			new HtmlWebpackPlugin({
				filename: 'index.html',
				template: PATHS.src + '/index.pug',
                minify: {
                    collapseWhitespace: true,
                    collapseInlineTagWhitespace: true,
                }
			}),
            new webpack.optimize.UglifyJsPlugin({})
		]
	})
}

module.exports = (env) => {
	if(env === 'development'){
		return dev
	}else if(env === 'production'){
		return prod
	}
}