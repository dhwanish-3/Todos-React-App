import './App.css';
import {useEffect, useState} from 'react'
import { NewTodoForm } from './components/newTodoForm';
import { TodoList } from './components/todoList';

export default function App() {
  const [todos,setTodos] = useState(()=>{
    const localValue=localStorage.getItem("ITEMS");
    return localValue==null?[]:JSON.parse(localValue);
  });

  useEffect(()=>{
    localStorage.setItem("ITEMS",JSON.stringify(todos));
  },[todos]);

  const addTodo=(title)=>{
    setTodos(currentTodos=>{
      return [...currentTodos,{id:crypto.randomUUID(), title, completed:false}];
    });
  }

  const toggleTodo=(id,completed)=>{
    setTodos(currentTodos=>{
      return currentTodos.map(todo=>{
        if(todo.id===id){
          return {...todo,completed };
        }
        return todo;
      })
    })
  }

  const deleteTodo=(id)=>{
    setTodos(currentTodos=>{
      return currentTodos.filter(todo=>todo.id!==id)
    })
  }
  return (<>
  <NewTodoForm onSubmitDhwanish={addTodo}/>
  <h1 className="header"> Todo List</h1>
  <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
  </>);
}