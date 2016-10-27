module.exports = {

  devtool: 'source-map',

  entry: {
    main: './src/index.js'
  },

  output: {
    path: __dirname + '/build',
    filename: '[name].js',
    libraryTarget: 'umd'
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query:{
          presets:['es2015'],
          plugins:['babel-plugin-transform-object-rest-spread']
        }
      }
    ]
  }

};
