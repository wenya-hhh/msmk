module.exports = {
<<<<<<< HEAD
    // 基本路径
    publicPath: './',
    // 输出路径
    outputDir: 'dist2',
    // 静态资源
    assetsDir: './',
    // eslint-loader是否在保存时候检查
    lintOnSave: false,
    // 服务项配置
=======
    // 基本路径  
    publicPath: './',
    // 输出路径   
    outputDir: 'dist',
    // 静态资源    
    assetsDir: './',
    // eslint-loader是否在保存时候检查  
    lintOnSave: true,
    // 服务项配置    
>>>>>>> 9b08959d556af362f40c4e9da170f1e497679df4
    devServer: {
        host: 'localhost',
        port: 8080,
        https: false,
        open: true,
<<<<<<< HEAD
  　　 // 设置代理proxy
        proxy: {
           '/api':{
               'target':'https://wap.365msmk.com',//localhost:3000',
               changeOrigin:true,    //表示是否跨域，
               pathRewrite:{           //表示需要rewrite重写的
                   '^/api':' ',
               }
           }
        }
    }
  }
=======
　　 // 设置代理proxy
        // proxy: {
        //    '/api':{
        //        'target':'https://wap.365msmk.com',//localhost:3000',
        //        changeOrigin:true,    //表示是否跨域，
        //        pathRewrite:{           //表示需要rewrite重写的
        //            '^/api':' ',
        //        }
        //    }
        // }   
    }
}
>>>>>>> 9b08959d556af362f40c4e9da170f1e497679df4
