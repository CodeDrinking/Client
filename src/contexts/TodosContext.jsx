import {  useEffect ,useState ,useContext ,createContext} from "react";
import axios from "axios";

export const todosContext = createContext();
const TodosContextProvider = ({children}) =>{
    const [todos, setTodos] = useState([])
    const[user , SetUser] = useState({})
    const getTodosData=()=>{
        axios.get('http://54.64.239.9:8000/api/todos').then((res) => {
            setTodos(res.data);
          });  
    }
    useEffect(() => {
        getTodosData();
      }, []);
    const value = {
        todos,
        getTodosData,
        user,
        SetUser
    }
   
      
    return (
        <todosContext.Provider value={value}>{children}</todosContext.Provider>
    )
};
export const UseTodo =() => useContext(todosContext);
export default TodosContextProvider

// "build": "GENERATE_SOURCEMAP=false react-scripts build",