import React from 'react';

const Todo = ({text,key , setTodos,todos,Todo}) =>{
    //Event 
    const deleteHandler = () =>{
        setTodos(todos.filter(el => el.id !== Todo.id ))
    }
    const CompleHandler = () =>{
        console.log("completed");

        setTodos(todos.map((item)=>{
            if(item.id === Todo.id){
                return {
                    ...item ,
                    completed : !(item.completed )
                }
            }
            return item ;
        }))
    }

    return( 
            
        <div className="text">
            <li className={`todo-item  ${Todo.completed ? "completed" : ""}` }  >
               {text}
            </li>
            
            <button className='complete-btn' onClick={CompleHandler}>
                <i className="fas fa-check"></i>
            </button>

            <button className='trash-btn' onClick={deleteHandler} >
                <i className="fas fa-trash"></i>
            </button>

        </div>
    );
}
 export default Todo ;