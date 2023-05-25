import {useState} from 'react'

export function NewTodoForm (props){
    const [newItem,setNewItem] = useState("");

    const handleSubmit=(event)=>{
        event.preventDefault();
        
        let addTodo=props.onSubmitDhwanish;
        if(newItem==="") return;
        addTodo(newItem)
    
        setNewItem("");
    }

    return (
    <form onSubmit={handleSubmit} className="new-item-form">
        <div className="form-row">
            <label htmlFor="item">New Todo</label>
            <input value={newItem}
            onChange={e=>setNewItem(e.target.value)}
            type="text" id="item"></input>
        </div>
        <button className="btn"> Add Todo </button>
    </form>
    );
}