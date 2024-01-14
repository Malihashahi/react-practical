import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import style from '../style.module.css'
import swal from 'sweetalert';
//import { useEffect } from 'react/cjs/react.production.min';
import  {useEffect} from 'react';
import { cleanup } from '@testing-library/react';
import axios from 'axios';

const Users = ()=>{
    const navigate = useNavigate();
    const [users, setUsers]= useState([]);
    useEffect(()=>{
    console.log(1);
    setTimeout(()=>{
        console.log(2);
    },1000)
    console.log(3);
    let promise= new Promise (( resolve, reject)=>{
        console.log(1);
        setTimeout(()=>{
            console.log(2);
            resolve(true)
        },1000)

     }).then(res=>{
        console.log(3);
     }).catch(err=>{
        console.log(err)
     })



   axios.get('https://jsonplaceholder.typicode.com/users').then(res=>{
    setUsers(res.data);
   }).catch(err=>{
    console.log(err);
   })
     
    },[]);
    const handleDelete = (itemId)=>{
        swal({
            title: "حذف رکورد !",
            text: `آیا از حذف رکورد ${itemId} اطمینان دارید؟`,
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
              swal("حذف با موفقیت انجام شد", {
                icon: "success",
              });
            } else {
              swal("شما از حذف رکورد منصرف شدید");
            }
          });
    }


    return (
        <div className={`${style.item_content} mt-5 p-4 container-fluid`}>
            <h4 className="text-center">مدیریت کاربران</h4>
            <div className="row my-2 mb-4 justify-content-between w-100 mx-0">
                <div className="form-group col-10 col-md-6 col-lg-4">
                    <input type="text" className="form-control shadow" placeholder="جستجو"/>
                </div>
                <div className="col-2 text-start px-0">
                    <Link to="/user/add">
                        <button className="btn btn-success">
                            <i className="fas fa-plus text-light"></i>
                        </button>
                    </Link>
                </div>
            </div>
            {users.length ?(
     <table className="ta.ble bg-light shadow">
     <thead>
         <tr >
             <th>#</th>
             <th>نام</th>
             <th>نام کاربری</th>
             <th>ایمیل</th>
             <th>عملیات</th>
         </tr>
     </thead>
     <tbody>
   {users.map(u=>(      
   <tr key={u.id} >
   
             <td>{u.id}</td>
             <td>{u.name}</td>
             <td>{u.username}</td>
             <td>{u.email}</td>
             <td>       

                     <i className="fas fa-edit text-warning mx-2 pointer"
                     onClick={()=>navigate("/user/add/2" ,{state:{ x:"react",y:"angular"}})
                 }
                     ></i>
                   
                 <i className="fas fa-trash text-danger mx-2 pointer"
                 onClick={()=>handleDelete(1)}
                 
                 ></i>
             </td>
         </tr>))}
     </tbody>
 </table>
            ):(
                <h4 className="text-center text-info">لطفا صبر کنید</h4>
            )}
            
        </div>
    )

}

export default Users;