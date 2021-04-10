import React,{useState,useEffect} from 'react' ;
import './App.css';
//Importing Component 
import Form from './component/Form'
import TodoList from './component/Todolist' ;

function App(){
/********************************UseState**********************************/
  const [inputText , setInputText] = useState("");
  const [todos , setTodos] = useState([]);
  const [status , setStatus] = useState("all");
  const [filteredTodos , setFilteredTodos] = useState([]);
/*******************************LocalStorage*******************************/
 const  setLocalStorage =  () =>{
  if(localStorage.getItem("todos") === null ){
    localStorage.setItem("todos" , JSON.stringify([]));
  }else{
    localStorage.setItem("todos" , JSON.stringify(todos));
  }
} 
const getLocalStorage =  () =>{
  if(localStorage.getItem("todos") === null ){
      localStorage.setItem("todos" , JSON.stringify([]));
  }else{
    var todosLocalStorage = JSON.parse(localStorage.getItem("todos" ));
    setTodos(todosLocalStorage);
  }
}  
/*******************************UseEffect*********************************/
  useEffect(()=>{
    getLocalStorage();
  },[]);

  useEffect(()=>{
    filterHandler(status);
    setLocalStorage();
  },[todos,status]);
/********************************************************************************************/
  const filterHandler = () =>{
    switch(status){
      case "completed" :
        setFilteredTodos(todos.filter( todo => (todo.completed) ));
        break;
      case "uncompleted" :
        setFilteredTodos(todos.filter( todo => !(todo.completed) ));
        break; 
      default :
        setFilteredTodos(todos);
    }
  }
  return (
    <div className="App">
      <header>
        <h1>Your Todo List <li className="far fa-hand-peace"></li></h1>
      </header>
      <Form 
        todos={todos} 
        setTodos={setTodos} 
        inputText={inputText} 
        setInputText={setInputText}
        status={status} 
        setStatus={setStatus}
      />  
      <TodoList 
        todos={todos} 
        setTodos={setTodos} 
        filteredTodos={filteredTodos} 
      />
    </div>
  );
}

export default App;
