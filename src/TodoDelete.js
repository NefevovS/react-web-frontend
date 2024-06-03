import React, {useContext} from 'react';
import {baseUrl, RefreshListContext, TokenContext} from "./utility";

const TodoDelete = ({itemId}) => {
    const token=useContext(TokenContext)
    const refreshList=useContext(RefreshListContext)

    async function handlerFormSubmit(e){
        e.preventDefault()
        const response=await fetch(`${baseUrl}${itemId}/`,{method:"DELETE",headers:{
                Authorization:`Bearer ${token}`
            }})
        if(response.ok){refreshList()}
        else window.alert(response.status+`:`+response.statusText)
    }
    return (
        <form onSubmit={handlerFormSubmit}>
            <input type="submit"className="warning" value="Удалить"/>
        </form>
    );
};


export default TodoDelete;