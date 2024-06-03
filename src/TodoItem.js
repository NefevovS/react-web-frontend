import React from 'react';
import TodoSetDone from "./TodoSetDone";
import TodoDelete from "./TodoDelete";
import {Link} from "react-router-dom";

const TodoItem = ({item}) => {
    return (
        <article className='card'>
            <header>
                {item.done&&
                <h2><del><Link to={`/${item._id}`}>{item.title}</Link></del></h2>}
                {!item.done&&
                    <h2><Link to={`/${item._id}`}>{item.title}</Link></h2>}
            </header>
            <footer>
                {item.desc&&<p>{item.desc}</p>}
                <p className="datetime">{new Date(item.createdAt).toLocaleString()}</p>
                <div className="horizontal">
                    {!item.done&& <TodoSetDone itemId={item._id}/>}
                    <TodoDelete itemId={item._id}/>
                </div>
            </footer>

        </article>
    );
};

export default TodoItem;