import { createWriteStream } from 'fs';
import react from 'react';

const Catproduct = ({filterItems,catItems}) => {
    return(
        <>
        <div className="menu-tabs container">
            <div className="menu-tab d-flex justify-content-around ">
            <div className="input-group-btn">
                
                {
                    catItems.map((curelem, index) => {
                        return <button className="btn btn-warning m-5" key={index} onClick={() => filterItems(curelem)}>{curelem}</button>
                    })
                }

                {/* <div className = "menu-tabs container">
                    <div className="menu-tab d-flex justify-content-around">
                        <button className="btn btn-warning " onClick={() => filterItems('CCTV')}>CCTV</button>
                        <button className="btn btn-warning " onClick={() => filterItems('Fire Alarm')}>Fire Alarm</button>
                        <button className="btn btn-warning " onClick={() => filterItems('Security Gadgets')}>Security Gadgets</button>
                        <button className="btn btn-warning " onClick={()=> filterAllItems('CCTV','Fire Alarm','Security Gadgets')}>All</button>
                    </div>
                </div> */}
                
                </div>
                
            </div>
        </div>
        </>
    );
}
export default Catproduct;