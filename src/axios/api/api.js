import {request1, request2} from "@/axios/request";

// Path: src/axios/api/api.js
function login() {
    return request2({
        url: "/login",
        method: "post",
    })
}

export function getDetect() {
    return request1({
        url: "/detect",
        method: "get",
    })
}

export function getDataShow() {
    return request2({
        url: "/pagedList",
        method: "get",
    })
}

export function postData(data){
    return request2({
        url: "/postData",
        method: "post",
        data
    })
}

export function editData(data){
    return request2({
        url: "/editData",
        method: "post",
        data
    })
}
export function deleteData(data){
    return request2({
        url: "/delete",
        method: "post",
        data
    })
}
// export function getUndeliveredList(){
//     return request2({
//         url: "/getUndeliveredList",
//         method: "get",
//     })
// }
