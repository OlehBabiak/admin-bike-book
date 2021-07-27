import './Main.css'
import BikeList from "./bikes/BikeList";
import BikeForm from "./BikeForm";
import Statistics from "./Statistics";
import {useState} from "react";
import ScrollBar from "./scrollBar/ScrollBar";

function Main() {
    const initionalBikesState  = [];
    const [bikeArray, setBikeArray] = useState(initionalBikesState);

    const saveBikedataHandler = (enteredBikeData) => {
        setBikeArray(prevBike => {
            return [enteredBikeData, ...prevBike]
        })
    }
    console.log('!!!!', bikeArray)
    return (
       <div className='main'>
           <div className='bike-list'>
               <ScrollBar item={bikeArray}/>
           </div>
           <div className='vertical-devider'/>
           <div className='bake-data'>
               <BikeForm saveBikedataHandler={saveBikedataHandler}/>
               <div className='horisontal-devider'/>
               <Statistics/>
           </div>
       </div>
    );
}


export default Main
