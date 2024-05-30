import React, {useEffect, useState} from 'react';
import {baseUrl} from "./utility";
import TodoItem from "./TodoItem.js"
import TodoSort from "./TodoSort.js"
import TodoSearch from "./TodoSearch.js"

const TodoList = ({token}) => {
    const [todos, setTodos] = useState([])
    const [search,setSearch]=useState("")
    const [sort,setSort]=useState("0")
     function acceptSearch(searchWord){
        setSearch(searchWord)
     }
     function acceptSort(sortOrder){
        setSort(sortOrder)
     }


    useEffect(() => {
        (async () => {
            const params=new URLSearchParams();
            if(search){
                params.append('search',search)
            }
            params.append("doneAtLast",sort)

            const response = await fetch(`${baseUrl}?${params}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            if (response.ok)
                setTodos((await response.json()).todos)
            else
                window.alert(response.status+`: `+response.statusText)
        })();

    }, [token,search,sort])
    return (
        <>
            <TodoSearch search={search} acceptSearch={acceptSearch}/>
            <TodoSort sort={sort} acceptSort={acceptSort}/>
            <h1 className='heading'>Запланированные дела</h1>
            {todos.map((item)=>
                <TodoItem key={item.id} item={item}/>
            )}
        </>
    );
};

export default TodoList;