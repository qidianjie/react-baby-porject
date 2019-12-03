import http from "utils/axiosrequest";

export const registerApi=(username,password)=>http({
    method:"post",
    url:"/users/register",
    data:{
        username,
        password
    }
})

export const loginApi=(username,password)=>http({
    method:"post",
    url:"/users/login",
    data:{
        username,
        password
    }
})
