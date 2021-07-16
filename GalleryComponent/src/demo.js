import { Component } from "react";
import ReactDom from 'react-dom';
import './demo.css';

const Demo = ({name}) => {


        return(
            <div className="maindiv_style">
                <h1>Hello {name} </h1>
            </div>
        );
    
}
export default Demo;