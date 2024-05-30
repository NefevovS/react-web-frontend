import React from 'react';

const Logout = ({acceptToken}) => {
    function handleFormSubmit(event){
        event.preventDefault()
        acceptToken(undefined)
    }
    return (
        <form className="horizontal" onSubmit={handleFormSubmit}>
            <input type="submit" className="warning" value="Выйти"/>
        </form>
    );
};

export default Logout;