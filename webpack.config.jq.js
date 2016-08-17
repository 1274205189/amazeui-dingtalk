export default {
  output: {
    library: 'AMUIDingTalk$',
    libraryTarget: 'umd'
  },
  externals: [
    {
      'jquery': {
        root: 'jQuery',
        commonjs2: 'jquery',
        commonjs: 'jquery',
        amd: 'jquery'
      }
    },
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          plugins: require('./scripts/babel-require-ignore'),
        }
      },
    ]
  },
};
