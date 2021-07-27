import './Main.css'
import BikeList from "./bikes/BikeList";
import BikeForm from "./BikeForm";
import Statistics from "./Statistics";
import {useContext, useState} from "react";
import ScrollBar from "./scrollBar/ScrollBar";
import BikeContext from "./context/BikeContext";

function Main() {
    return (
       <div className='main'>
           <div className='bike-list'>
               <ScrollBar/>
           </div>
           <div className='vertical-devider'/>
           <div className='bake-data'>
               <BikeForm/>
               <div className='horisontal-devider'/>
               <Statistics/>
           </div>
       </div>
    );
}


export default Main
