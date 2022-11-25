const path = require('path');
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");
const FaviconsWebpackPlugin = require('favicons-webpack-plugin')
const {GenerateSW} = require('workbox-webpack-plugin');
const buildDate = new Date().toISOString(); 
const pageDescription = "3D-Visualisierung der Grundlagen des Buches Inside Corona";
const pageTitle = "Inside Corona 3D";

module.exports = {
  mode: 'production',
  entry: {
    main: {
      import: './src/index.js'
    },
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'docs'),
    clean: true,
    assetModuleFilename: 'img/[name][ext][query]'
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new FaviconsWebpackPlugin({
      logo: './src/graph.png',
      prefix: 'favicons/',
      inject: true,
      favicons: {
        appName: pageTitle,
        appDescription: pageDescription,
        background: '#000',
        theme_color: '#000'
      }
    }),
    new HtmlWebpackPlugin({
      buildDate: buildDate,
      pageTitle: pageTitle,
      pageDescription: pageDescription,
      scriptLoading: 'blocking',
      inject: 'body',
      template: path.resolve(__dirname, 'src', 'index.html'),
    }),
    new GenerateSW({
      // these options encourage the ServiceWorkers to get in there fast
      // and not allow any straggling "old" SWs to hang around
      clientsClaim: true,
      skipWaiting: true,
      exclude: [
        'img/arrow-right.png'
      ],
    }),
    new CopyPlugin({
      patterns: [
        { from: "src/robots.txt", to: "robots.txt" },
        { from: "src/img", to: "img" },
        { from: "src/json", to: "json" },
      ],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader"
        ],
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        type: "asset/resource"
      },
    ]
  },
  optimization: {
    minimizer: [
      // For webpack@5 you can use the `...` syntax to extend existing minimizers (i.e. `terser-webpack-plugin`), uncomment the next line
      '...',
      new CssMinimizerPlugin(),
    ],
    splitChunks: {
      // include all types of chunks
      chunks: 'all',
    },
    minimizer: [
      "...",
      new ImageMinimizerPlugin({
        minimizer: {
          implementation: ImageMinimizerPlugin.imageminMinify,
          options: {
            // Lossless optimization with custom option
            // Feel free to experiment with options for better result for you
            plugins: [
              ["optipng", { optimizationLevel: 5 }],
            ],
          },
        },
      }),
    ],
  },
};
