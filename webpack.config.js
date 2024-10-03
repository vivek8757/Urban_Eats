const path=require('path');
const HtmlWebpackPlugin=require('html-webpack-plugin');
module.exports={
    mode:'development',
    entry:{
        index:'./src/index.js',
    },
    devtool: 'inline-source-map',
    devServer:{
        static: './dist',
    },
    plugins: [
        new HtmlWebpackPlugin({
            title:"webpack tutorial",
            filename:'index.html',
            inject:'body',
            template: './src/index.html',

        }),
    ],
    output:{
        // filename:'bundle.js',
        filename:'main.js',
        path:path.resolve(__dirname,'dist'),
        clean:true,
        publicPath:'/',
    },
    // optimization:{
    //     runtimechunk: 'single',
    // },
    module: {
        rules: [
          {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
          },
            {
              test: /\.html$/i,
              loader: "html-loader",
            },
          {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: 'asset/resource',
          },
          {
            test: /\.(woff|woff2|eot|ttf|otf)$/i,
            type: 'asset/resource',
          },
          {
            test: /\.(png|jpe?g|gif)$/i,
            use: [
              {
                loader: 'file-loader',
              },
            ],
          },
        
        ],
      },
     
    
     
};
