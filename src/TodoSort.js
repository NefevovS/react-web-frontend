import React from 'react';

const TodoSort = ({sort,acceptSort}) => {
    async function handleFormSubmit(event){
        event.preventDefault();
        acceptSort(sort=='1'?"0":"1")
    }
    return (
        <form className='horizontal' onSubmit={handleFormSubmit}>
            {sort=="1"&&
                <input type="submit" value="Вывести все дела вместе"/>}
            {
                sort=="0"&&
                <input type="submit" value="Вывести выполненные дела в конце"/>
            }
                    </form>
    );
};

export default TodoSort;