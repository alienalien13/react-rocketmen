const path = require('path'),
	merge = require('webpack-merge'),
	HtmlWebpackPlugin = require('html-webpack-plugin'),
	ExtractTextWebpackPlugin = require('extract-text-webpack-plugin'),
	UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin'),
	webpack = require('webpack')

const PATHS = {
	src: path.join(__dirname, 'src'),
	dist: path.join(__dirname, 'dist')
}

const common = () => {
	return {
		entry: PATHS.src + '/index.js',
		output: {
			filename: 'js/bundle.js',
			path: PATHS.dist
		},
		module: {
			rules: [
				{
					test: /\.pug$/i,
					loader: 'pug-loader',
                    options: {
                        pretty: true
                    }
				},
				{
					test:/\.jsx?$/i,
					loader: 'babel-loader'
				}
			]
		},
		plugins: [
			new ExtractTextWebpackPlugin('./styles/style.css')
		]
	}
}

const dev = () => {
	return merge(common(),{
		module: {
			rules: [
				{
					test: /\.sass$/i,
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
	return merge(common(),{
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
            new UglifyjsWebpackPlugin({
				comments: false
			})
		]
	})
}

module.exports = (env) => {
	if(env === 'development'){
		return dev()
	}else if(env === 'production'){
		return prod()
	}
}