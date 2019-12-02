const proxy = require("http-proxy-middleware");


module.exports = (app)=>{
    app.use("/shop",proxy({
<<<<<<< HEAD
        target:"https://3g.baobeigezi.com",
=======
        target:"http://3g.baobeigezi.com",
>>>>>>> 3033581f3870ff38bb01e20831752d025ab50ad4
        changeOrigin:true,
        // pathRewrite:{
        //     "^/ajax":""
        // }
    }))
}

