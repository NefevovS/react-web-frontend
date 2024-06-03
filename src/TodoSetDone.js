import React, {useContext} from 'react';
import {baseUrl, RefreshListContext, TokenContext} from "./utility";

const TodoSetDone = ({itemId}) => {
    const token=useContext(TokenContext)
    const refreshList=useContext(RefreshListContext)

    async function handlerFormSubmit(e){
        e.preventDefault()
        const response=await fetch(`${baseUrl}${itemId}/`,{method:"PUT",headers:{
            Authorization:`Bearer ${token}`
            }})
        if(response.ok){refreshList()}
        else window.alert(response.status+`:`+response.statusText)
    }
    return (
        <form onSubmit={handlerFormSubmit}>
            <input type="submit"className="success" value="Сделано"/>
        </form>
    );
};

export default TodoSetDone;