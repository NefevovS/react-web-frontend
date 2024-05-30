import React, {useState} from 'react';
import {baseUrl} from "./utility";

const Login = ({acceptToken}) => {
    const [un, setUn] = useState("")
    const [p, setP] = useState("")
    const [errors, setErrors] = useState({})

    async function handleFormSubmit(event) {
        event.preventDefault();
        const body = new URLSearchParams();
        body.append("username", un)
        body.append("password", p)
        const response = await fetch(`${baseUrl}login/`, {
            method:"post", body: body
        })
        if (response.ok) {
            acceptToken((await response.json()).token)
        } else if (response.status == 406) {
            setErrors((await response.json()).errors)
        } else window.alert(response.status + `:` + response.statusText)
    }


    return (<>
            <h1>
                Вход
            </h1>
        <form onSubmit={handleFormSubmit}>
            <label>Имя пользователя</label>
            <input type="text" value={un} onChange={(event)=>{setUn(event.target.value)}}/>
            <label>Пароль</label>
            <input type="password" value={p} onChange={(event)=>{setP(event.target.value)}}/>
            {errors.password&&
            <div><span className="label error">{errors.password.msg}</span></div>}
            <div className='horizontal'>
                <input type="submit" value="Войти"/>
            </div>
        </form>
        </>);
};

export default Login;