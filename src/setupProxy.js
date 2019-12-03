const proxy = require("http-proxy-middleware");


module.exports = (app)=>{
    // app.use("/ajax",proxy({
    //     target:"https://api.ricebook.com",
    //     changeOrigin:true,
    //     pathRewrite:{
    //         "^/ajax":""
    //     }
    // }))
    app.use("/shop",proxy({
        target:"https://3g.baobeigezi.com",
        changeOrigin:true,
        // pathRewrite:{
        //     "^/ajax":""
        // }
    }))
    
    app.use("/users",proxy({
        target:"http://39.105.204.151:3000",
        changeOrigin:true,
    }))
}

