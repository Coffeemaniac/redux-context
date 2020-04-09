import React, { useContext, useState} from 'react';
import ToDoItem from './ToDoItem.js';
import { store } from '../Context/StateProvider.js';
import { v4 as uuidv4 } from 'uuid';

const List = () => {
    const { state, dispatch } = useContext(store);
    const [inputText, setInputText] = useState("");

    const addItem = (e) => {
        e.preventDefault();
        e.stopPropagation();
        const id = uuidv4();

        const payload = {
                            id,
                            desc: inputText,
                            done: false
                        };
        
        dispatch({ type: "ADD_ITEM", payload});
        setInputText("");
    } 



    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", height: "100vh", justifyContent: "center" }}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <div style={{ width: "200px" }}>
                    {
                        state.map((i) => {
                            return <ToDoItem key={i.id} value={i} />
                        })
                    }
                    <div style={{width: "100%", marginTop: "24px" }}>
                        <input type="text" placeholder="Say something!" value={inputText} onChange={(e) => setInputText(e.target.value)}/>
                        <div style={{ backgroundColor: 'grey', width: "30%", textAlign: "center", cursor: "pointer", marginTop: "16px", color: "white", fontWeight: "900", marginLeft: "55px" }} onClick={(e) => {addItem(e)}}>
                            ADD
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default List;