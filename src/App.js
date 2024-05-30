import TodoList from "./TodoList.js"
import {useState} from "react";
import Login from "./Login";
import Logout from "./Logout";


function App() {
    // const token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoibmVmZWRvdl9zQG1haWwucnUiLCJpYXQiOjE3MTcwODIwOTJ9.e6VmFEO5-fIzUW3rxHFWpoByKEqbZPOseEb-MF74r1c"
    const [token,setToken]=useState(undefined)
    function acceptToken(tkn){
        setToken(tkn)
    }
    return (
   <>
       <nav>{
           token && <a href="/" className="brand">
               <span>Список дел</span>
           </a>
       }
           <input type="checkbox" id="bmenub" className="show"/>
           <label htmlFor="bmenub" className="burger pseudo button">&#9776;</label>
           <div className='menu'>{
               token&&<Logout acceptToken={acceptToken}/>
           }</div>
       </nav>

       {!token&&<Login acceptToken={acceptToken}/>}
       {token&&<TodoList token={token}/>}
       <p className="copyright">Все права принадлежат читателю книги</p>
   </>
  );
}

export default App;
