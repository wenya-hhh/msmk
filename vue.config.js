module.exports = {
    // 基本路径  
    publicPath: './',
    // 输出路径   
    outputDir: 'dist',
    // 静态资源    
    assetsDir: './',
    // eslint-loader是否在保存时候检查  
    lintOnSave: true,
    // 服务项配置    
    devServer: {
     
　　 // 设置代理proxy
        proxy: {
           '/http':{
               'target':'https://wap.365msmk.com',//localhost:3000',
               changeOrigin:true,    //表示是否跨域，
               pathRewrite:{           //表示需要rewrite重写的
                   '^/http':'/http ',
               }
           }
        }   
    }
}