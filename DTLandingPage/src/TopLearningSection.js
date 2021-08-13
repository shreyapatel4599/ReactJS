import React from 'react';
import ContainerBox from './containerbox';

const TopLearningSection = () => {
    return(
        <div className ="section">
            <div className="heading">
                <h1>Top Learnings</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
            </div>
            <div className="container"> 
                <ContainerBox />
                <ContainerBox />
                <ContainerBox />
                <ContainerBox />
            </div> 
            
        </div>
        
    );
}

export default TopLearningSection;