import React from 'react';
import './avatar.css';
import Button from 'react-bootstrap/Button'
import Avatarlist from './avatarlist';
const Avatar = (props) => {
const avatarlistarray = [
        {
            id:1,
            name:"Shreya",
            role:"Web Developer"
        },
        {
            id:1,
            name:"Yash",
            role:"Web Developer"
        },
        {
            id:1,
            name:"Siva",
            role:"Web Developer"
        },
        {
            id:1,
            name:"Shreyash",
            role:"Web Developer"
        }
    ]

    const avatarcardarray = avatarlistarray.map(( avatarcard , i ) =>{
        return <Avatarlist id={avatarlistarray[i].name} name={avatarlistarray[i].name} role={avatarlistarray[i].role}/>
            
    }
    
    )
    return(
        <div>
            <h1 className="text-center">Welcome to Avatar World</h1>
            {avatarcardarray}
            
        </div>

    );
}
export default Avatar;