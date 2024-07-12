import React from "react";
import './Container.css';
import img from '../assets/background.png';
const Container = () => {
  return (
    <>
       <div className="contain-head ">
          <div>
            <img src={img}/>
             
            <div>
               <h2>Hello,DemoUser</h2>
               
            </div>
          </div>
        

       </div>
    </>
  );
};

export default Container;
