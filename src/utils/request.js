import { fetch as fetchPro } from "whatwg-fetch";
import qs from "qs";


const get = (options) => {
    let url = options.url;
    let data = options.data;
   
    if (data) {
        var str = "";
        for (var key in data) {
            str += "&" + key + "=" + data[key];
        }

        url = url + "?" + str.slice(1);
    }



    var result = fetchPro(url, {
        headers: {
            "content-type": "application/json",
            ...options.headers
        }
    }).then(res => res.json());


    return result;
}


const post = (options) => {
    var result = fetchPro(options.url, {
        method: 'POST',
        credentials: 'include',
        body: qs.stringify(options.data),
        headers: {
            'Accept': 'application/json, text/plain, */*',  
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    }).then(res => res.json())

    return result;
}


export default {
    get,
    post
}