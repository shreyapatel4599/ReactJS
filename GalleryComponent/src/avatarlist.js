import React from 'react';
import './avatar.css';
const Avatarlist = (props) => {
    return(
        
            <div className="avatarstyle bg-success float-left m-5 p-4 ">   
            <img src={`https://joeschmoe.io/api/v1/${props.name}`} alt=""  />    
            
            <h1 className="text-center">{props.name}</h1>
            <p className="text-center">{props.role}</p>
            
        </div>
        
    );
}
export default Avatarlist;