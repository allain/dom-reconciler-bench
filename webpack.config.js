var path = require('path')

const imba = {
  entry: './apps/imba/app.imba',
  output: {
    path: __dirname,
    filename: './apps/imba/app.js'
  },
  resolve: { extensions: ['.imba', '.js', '.json'] },
  module: { rules: [{ test: /\.imba$/, loader: 'imba/loader' }] }
}

const react = {
  entry: './apps/react/app.jsx',
  mode: 'development',
  output: {
    path: __dirname,
    filename: './apps/react/app.js'
  },
  resolve: { extensions: ['.jsx', '.js', '.json'] },
  module: {
    rules: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      {
        test: /\.jsx$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: ['@babel/preset-env'],
          plugins: [
            'babel-plugin-rawact',
            '@babel/plugin-syntax-jsx',
            '@babel/plugin-transform-react-jsx'
          ]
        }
      }
    ]
  }
}

const client = {
  entry: './client.imba',
  output: {
    path: __dirname,
    filename: './client.js'
  },
  resolve: { extensions: ['.imba', '.js', '.json'] },
  module: { rules: [{ test: /\.imba$/, loader: 'imba/loader' }] }
}

module.exports = [imba, react, client]
