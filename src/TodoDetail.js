import React, {useContext, useEffect, useState} from 'react';
import {baseUrl, TokenContext} from "./utility";
import {Navigate, useParams} from "react-router-dom";

const TodoDetail = () => {
    const [todo, setTodo] = useState(undefined)
    const token = useContext(TokenContext)
    const {id} = useParams()
    useEffect(() => {
        if (!token) return
        (async () => {
            const response = await fetch(`${baseUrl}${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            if (response.ok) {
                setTodo((await response.json()).todo)
            } else window.alert(response.status + `:` + response.statusText)

        })()
    }, [token, id])
    return (<>
        {!token && <Navigate to="/login" />}
        {token && todo &&
                <>
        {todo.done && <p>Выполнено</p>}
            <h1>{todo.title}</h1>
        {todo.desc && <p>{todo.desc}</p>}
            <p className="datetime">Создано:{new Date(todo.createdAt).toLocaleString()}</p>
        {todo.addendum && <p className="addendum"><img alt="картинка" src={`${baseUrl}uploaded/`+`${todo.addendum}`}/></p>}
            </>}
            </>
            );};

            export default TodoDetail;