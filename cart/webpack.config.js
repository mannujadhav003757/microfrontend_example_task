const htmlWebpackPlugIn = require('html-webpack-plugin')
const ModuleFederationPlugIn = require('webpack/lib/container/ModuleFederationPlugin')

module.exports={
    mode:'development',
    devServer:{
        port:8084
    },
    plugins:[
        new ModuleFederationPlugIn({
            name:'cart',
            filename:'remoteEntry.js',
            exposes:{
                './CartShow':'./src/bootstrap'
            },
            // shared:['faker']
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