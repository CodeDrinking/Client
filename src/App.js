import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router , Routes , Route  } from "react-router-dom"
import Todos from './components/Todos';
import Todo from "./components/Todo"
import SignUpUser from "./components/SignUpUser"
import Login from './components/Login';
import UserProfile from "./components/UserProfile"
import TodosContextProvider from './contexts/TodosContext'



function App() {
  return (
    <div className="App">
      <TodosContextProvider>
      <Router>
        <Routes>
          {/* <Route path='/auth' element={<NavBar/>}/> */}
          <Route path='/' element= {<Todos/>}/>
          <Route path='/todo/:id' element={<Todo/>}/>
          <Route path='/register' element={<SignUpUser/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/profile' element={<UserProfile/>}/>
        </Routes>
      </Router>
      </TodosContextProvider>
    </div>
  );
}

export default App;
