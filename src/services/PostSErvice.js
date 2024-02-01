import swal from "sweetalert";
import { jpAxios } from "../JpAxios";

export const getPostsService = ()=>{
    return jpAxios.get('/posts');
}

// export const setUserService = async (data)=>{
//     const res = await jpAxios.post('/users' , data);
//     if (res) {
//         console.log(res);
//         swal(`${res.data.name} با موفقیت ایجاد شد`, {
//             icon: "success",
//             buttons: "متوجه شدم",            
//         });
//     }
// }

// export const updateUserService = async (data , userId)=>{
//     const res = await jpAxios.put(`/users/${userId}` , data);
//     if (res) {
//         console.log(res);
//         swal(`${res.data.name} با موفقیت ویرایش شد`, {
//             icon: "success",
//             buttons: "متوجه شدم",            
//         });
//     }
// }
export const setPostService = async (data)=>{
    const res = await jpAxios.post('/posts' , data);
    if (res) {
        console.log(res);
        swal(`${res.data.title} با موفقیت ایجاد شد`, {
            icon: "success",
            buttons: "متوجه شدم",            
        });
    }
}
export const updatePostService = async (data , postId)=>{
    const res = await jpAxios.put(`/posts/${postId}` , data);
    if (res) {
        swal(`${res.data.title} با موفقیت ویرایش شد`, {
            icon: "success",
            buttons: "متوجه شدم",            
        });
    }
}