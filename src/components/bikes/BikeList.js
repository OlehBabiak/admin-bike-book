import './BikeList.css'
import BikeItem from "./BikeItem";
import {useContext} from "react";
import BikeContext from "../context/BikeContext";

function BikeList() {
    const {bikeArray, removeBike} = useContext(BikeContext)

    return (
       <ul className='bike-list'>
           {bikeArray.map(bikeItem =>
               <BikeItem
               key={bikeItem.bikeID}
               name={bikeItem.bikeName}
               type={bikeItem.bikeType}
               color={bikeItem.bikeColor}
               wheelSize={bikeItem.bikeWheelSize}
               price={bikeItem.bikePrice}
               id={bikeItem.bikeID}
               description={bikeItem.bikeDescription}
               status = {bikeItem.status}
               bikeItem = {bikeItem}
               removeBike={removeBike}
               />
           )}
       </ul>
    );
}


export default BikeList
