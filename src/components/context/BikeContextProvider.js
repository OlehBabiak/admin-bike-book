import React, {useState} from "react";
import BikeContext from "./BikeContext";

function BikeContextprovider({children}) {
    let initionalBikesState  = [];
    const [bikeArray, setBikeArray] = useState(initionalBikesState);

    const onBikeCreate = (newBike) => {
        setBikeArray([newBike, ...bikeArray])
    }


    return (
       <BikeContext.Provider value={{
           onBikeCreate,
           bikeArray
       }}>
           {children}
       </BikeContext.Provider>
    );
}

export default BikeContextprovider
