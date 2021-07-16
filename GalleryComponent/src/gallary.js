import React, { useState } from 'react';
import './avatar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import Product from './product';
import Catproduct from './Catproduct';

const allCatValues = [...new Set(Product.map((curElem) => {
    return curElem.catagory; })), "all"];

const Gallary = () =>{

    const [item,setItem] = useState(Product);
    const [catItems, setCatItems] = useState(allCatValues);

    //console.log(allCatValues);

    const filterItems = (cataitem) =>{

        if(cataitem === "all"){
            setItem(Product);
            return;
        }

        const updateItems = Product.filter((currentelm)=>{
            return currentelm.catagory == cataitem;
        });
        setItem(updateItems);
    }

    // const filterAllItems= (catitem1,catitem2,catitem3) =>{
    //     const updateAllItem = Product.map((currentelem) => {
    //         const {catagory , image} = currentelem;
    //         return currentelem.catagory == catitem1 && currentelem.catagory == catitem2 && currentelem.catagory == catitem3;
    //     });
    //     setItem(updateAllItem);
    // }

        return(
           <>
                <h1 className="text-center mt-5 text-warning">Gallary</h1>
                <hr />
                <Catproduct filterItems={filterItems} catItems={catItems} />
                {/* main display area */}

                
                <div className="container-fluid mt-4">
                    <div className="row">
                        <div className = "col-lg-6 mx-auto">
                            <div className="row">

                {
                    item.map((elem) => {
                        const {productId,catagory,image,name,price} = elem;

                        return (
                            <>
                            <div className="col-lg">
                                <img src={image} alt="" className="image"/>
                                <h5 className="text-center mt-1">{name}</h5>
                                <p className="text-center mt-1">{price}</p>
                            </div>
                            {/* <div className="col-lg">
                                <img src={image} alt="" className="image"/>
                                <h5 className="text-center mt-1">{name}</h5>
                                <p className="text-center mt-1">{price}</p>
                            </div> */}
                            </>
                        )
                    })
                    
                }
                    
                    
                
                                
                            </div>

                        </div>
                    </div>

                </div>
            
            </>

            // main gallary display part

            
        );
    
}
export default Gallary;
