import React, {useState} from 'react';
import './App.css';
import ToDoList from './ToDoList';

const App = () => {
  const [inputList, setInputList] = useState("");
  const [items , setItems] = useState([]);

  const itemEvent = (e) => {
    setInputList(e.target.value);
  }

  const listOfItems = () => {
    setItems((oldItems) => {
      return [...oldItems , inputList];
      
    })
    setInputList("");
  }

  
    const deleteItem = (id) => {
        console.log("deleted");

        setItems((oldItems)=> {
          return oldItems.filter((arrelem,index) => {
            return index != id;
          })
        })

    };
    
  return(
    <>
    <div className="main_div">
      <div className="center_div">
        <br />
        <h1 className="heading">To Do List</h1>
        <br />
        
        <input type="text" placeholder="add a item" value={inputList} onChange={itemEvent}/>
        <button onClick={listOfItems}>+</button>

        <ol>
         { 
         items.map((itemval, index) => {
           return (
           <ToDoList 
           key={index} 
           id={index} 
           text={itemval}
           onSelect = {deleteItem} />
           );
         })
        }
        </ol>

      </div>

    </div>
    </>
  )
}
export default App;
