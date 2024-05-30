import React, {useState} from 'react';

const TodoSearch = ({search,acceptSearch}) => {
    const [s,setS]=useState(search)
    function handleFormSubmit(event){
        event.preventDefault();
        acceptSearch(s)
    }
    return (
        <div>
            <form className='horizontal' onClick={handleFormSubmit}>
                <input type="text" name='search' value={s} onChange={(event)=>setS(event.target.value)}/>
                <input type="submit" value='Найти'/>
            </form>
        </div>
    );
};

export default TodoSearch;