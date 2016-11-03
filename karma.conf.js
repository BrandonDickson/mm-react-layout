
module.exports = function(config) {
  config.set({

    frameworks:['mocha'],

    browsers:['Chrome'],

    logLevel: config.LOG_INFO,

    files: [
      'src/**/*.spec.js'
    ],

    preprocessors: {
      'src/**/*.spec.js' : ['webpack', 'sourcemap']
    },

    webpack: {
      devtool: 'inline-source-map',
      resolve: {
        extensions: ['','.js']
      },
      module: {
        loaders: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
          }
        ]
      },
      externals: {
        'cheerio': 'window',
        'react/addons': true,
        'react/lib/ExecutionEnvironment': true,
        'react/lib/ReactContext': true
      }
    },

    webpackMiddleware: {
      stats: {
        colors: true
      }
    }

  });
}
