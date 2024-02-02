import React from 'react';
import style from '../style.module.css'
import useTitle from '../hooks/useTitle';
import Counter from './Counter';


const Todos = ()=>{
   useTitle("کارها")
    return (
        <div className={`${style.item_content} mt-5 p-4 container-fluid`}>
            <h4 className="text-center">مدیریت کارها </h4>
            <Counter/>
        </div>
    )

}

export default Todos;