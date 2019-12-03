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
// =======
//     app.use("/shop",proxy({
// <<<<<<< HEAD
//         target:"https://3g.baobeigezi.com",
// =======
//         target:"http://3g.baobeigezi.com",
// >>>>>>> 3033581f3870ff38bb01e20831752d025ab50ad4
//         changeOrigin:true,
//         // pathRewrite:{
//         //     "^/ajax":""
//         // }
// >>>>>>> 556a5c402b69a3b2419e5b2e3ff00afa608cae3f
//     }))
}))
}

