const proxy = require("http-proxy-middleware");


module.exports = (app)=>{
    app.use("/shop",proxy({
        target:"https://3g.baobeigezi.com",
        changeOrigin:true,
        // pathRewrite:{
        //     "^/ajax":""
        // }
    }))
}

