import React from 'react';

const ToDoList = (props) => {
    return (
    <>
        <div className="todo_style">
            {/* <i className="fas fa-times-circle"
            aria-hidden="true" /> */}
            <button onClick={() =>{
                props.onSelect(props.id);
            }}>X</button>
            <li>{props.text}</li>
        </div>
    </>
    );

}
export default ToDoList;