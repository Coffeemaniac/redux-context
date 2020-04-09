import React, { useContext } from 'react'; 
import { store } from '../Context/StateProvider.js';


const ToDoItem = ({ value }) => {
    const { dispatch } = useContext(store);
    const { done } = value;

    const todoItemClicked = (e) => {
        e.stopPropagation();
        console.log("Item clicked!");
        dispatch({type: "COMPLETED_ITEM", payload: {id: value.id, done: !done}});
    }
    
    return (
    <div onClick={(e) => {todoItemClicked(e)}} style={{textAlign: "left", width: "100%", marginTop: "8px", textDecoration: value.done ? "line-through" : "none"}}>
        { value.desc }
    </div>
    );
}

export default ToDoItem;