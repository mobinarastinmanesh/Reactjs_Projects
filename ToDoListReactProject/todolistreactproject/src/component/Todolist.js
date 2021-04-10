import React from 'react';
import Todo from './Todo' ;

const ToDoList = ({todos , setTodos ,  filteredTodos}) =>{
   
    return(
        <div className="todo-container">
          <ul className="todo-list">
            {Array.from(filteredTodos).map(
                (todo)=>(
                      <Todo 
                        text={todo.text}
                        key={todo.id}
                        setTodos={setTodos}
                        todos={todos}
                        Todo = {todo}
                     />
                )
              )
            }
          </ul>
        </div>
    )
}
export default ToDoList ;