const htmlWebpackPlugIn = require('html-webpack-plugin')
const ModuleFederationPlugIn = require('webpack/lib/container/ModuleFederationPlugin')
module.exports={
    mode:'development',
    devServer:{
        port:8082,
    },
    plugins:[
        new ModuleFederationPlugIn({
            name:'products',
            filename:'remoteEntry.js',
            exposes:{
                './ProductsIndex':'./src/bootstrap'
               },
            //    shared:['faker']
            shared:{
                faker:{
                    singleton:true
                }
            }
        }),
        new htmlWebpackPlugIn({
            template:'./public/index.html'
        })
    ]
}