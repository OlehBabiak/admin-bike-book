import './BikeList.css'
import BikeItem from "./BikeItem";

function BikeList(props) {
    return (
       <ul className='bike-list'>
           {props.item.map(bikeItem =>
               <BikeItem
               key={bikeItem.id}
               name={bikeItem.name}
               type={bikeItem.type}
               color={bikeItem.color}
               wheelSize={bikeItem.wheelSize}
               price={bikeItem.price}
               id={bikeItem.id}
               description={bikeItem.description}
               />
           )}
       </ul>
    );
}


export default BikeList
