module.exports = {
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react']
            }
          }
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
        },
        {
          test: /\.gif$/,
          type: 'asset/inline',
        },
        {
          test: /\.(ttf|eot|svg)$/,
          type: 'asset/resource',
        }
      ]
    }
};