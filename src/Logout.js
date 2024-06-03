import React from 'react';
import {useNavigate} from "react-router-dom";

const Logout = ({acceptToken}) => {
    const redirect=useNavigate()
    function handleFormSubmit(event){
        event.preventDefault()
        acceptToken(undefined)
        redirect("/login")
    }
    return (
        <form className="horizontal" onSubmit={handleFormSubmit}>
            <input type="submit" className="warning" value="Выйти"/>
        </form>
    );
};

export default Logout;