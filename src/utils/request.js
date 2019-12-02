import {fetch as fetchPro} from "whatwg-fetch";
import qs from "qs";

const get = (options)=>{
// fetch使用get传参的话，第一个参数是url地址 fetch(url,{})
let url = options.url;
let data = options.data;
if(data){
    var str = "";
    for(var key in data){
        str += "&"+ key + "=" + data[key];
    }
    url = url + "?" + str.slice(1); 
}

    let result = fetchPro(url,{
        "content-type":"application/js",
        ...options.headers
    }).then(res=>res.json());
    return result;
}

const post =(options)=>{
    let result = fetchPro(options.url,{
        method:options.method,
        body:qs.stringify(options.data),
        headers:{
            "content-type":"application/x-www.form-urlencoded"
        }

    }).then(res=>res.json())
    return result;
}

export default {get,post}


// http.get({
//     method:"get",
//     url:"",
//     data:{}
// })
