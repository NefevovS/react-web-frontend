import TodoList from "./TodoList.js"
import {useState} from "react";
import Login from "./Login";
import Logout from "./Logout";
import {TokenContext} from "./utility";
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import TodoDetail from "./TodoDetail";
import TodoAdd from "./TodoAdd";
import Register from "./Register";


function App() {
    const [token, setToken] = useState(undefined)


    function acceptToken(tkn) {
        setToken(tkn)
    }

    return (<BrowserRouter>
        <nav>{token && <Link href="/" className="brand">
            <span>Список дел</span>
        </Link>}
            <input type="checkbox" id="bmenub" className="show"/>
            <label htmlFor="bmenub" className="burger pseudo button">&#9776;</label>
            <div className='menu'>
                {token&&<Link to='/add' className="button">Добавить дело</Link>}
                {token && <Logout acceptToken={acceptToken}/>}</div>
                {!token&& <Link to="/register/" className="button">Зарегистрироваться</Link>}
                {!token&& <Link to="/login/" className="button">Войти</Link>}
        </nav>

        <TokenContext.Provider value={token}>
            <Routes>
                <Route path='/' element={<TodoList/>}/>
                <Route path='/login' element={<Login acceptToken={acceptToken}/>}/>
                <Route path='/add' element={<TodoAdd/>} />
                <Route path='/:id' element={<TodoDetail/>} />
                <Route path='/register' element={<Register/>} />
            </Routes>
        </TokenContext.Provider>


        <p className="copyright">Все права принадлежат читателю книги</p>


    </BrowserRouter>)
}

export default App;
