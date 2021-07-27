import './BikeList.css'
import BikeItem from "./BikeItem";
import {useContext} from "react";
import BikeContext from "../context/BikeContext";

function BikeList() {
    const {bikeArray} = useContext(BikeContext)
    return (
       <ul className='bike-list'>
           {bikeArray.map(bikeItem =>
               <BikeItem
               key={bikeItem.id}
               name={bikeItem.name}
               type={bikeItem.type}
               color={bikeItem.color}
               wheelSize={bikeItem.wheelSize}
               price={bikeItem.price}
               id={bikeItem.id}
               description={bikeItem.description}
               status = {bikeItem.status}
               />
           )}
       </ul>
    );
}


export default BikeList
