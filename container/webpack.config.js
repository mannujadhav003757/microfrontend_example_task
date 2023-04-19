const htmlWebpackPlugIn = require('html-webpack-plugin')
const ModuleFederationPlugIn = require('webpack/lib/container/ModuleFederationPlugin')
module.exports={
    mode:'development',
    devServer:{
        port:8083
    },
    plugins:[
        new ModuleFederationPlugIn({
            name:'container',
            remotes:{
                products:'products@http://localhost:8082/remoteEntry.js',
                cart:'cart@http://localhost:8084/remoteEntry.js'
            }
        }),
        new htmlWebpackPlugIn({
            template:'./public/index.html'
        })
    ]
}