import React, {useState} from "react";
import BikeContext from "./BikeContext";

function BikeContextprovider({children}) {
    let initionalBikesState  = [];
    const [bikeArray, setBikeArray] = useState(initionalBikesState);

    const [bikeInput, setBikeInpuT] = useState({
        bikeName: '',
        bikeType: '',
        bikeColor: '',
        bikeWheelSize: '',
        bikePrice: '',
        bikeID: '',
        bikeDescription: '',
        status: 'Available'
    });

    const bikeData = {
            name: bikeInput.bikeName,
            type: bikeInput.bikeType,
            color: bikeInput.bikeColor,
            wheelSize: bikeInput.bikeWheelSize,
            price: bikeInput.bikePrice,
            id: bikeInput.bikeID,
            description: bikeInput.bikeDescription,
            status: bikeInput.status
        }




    const onBikeCreate = (newBike) => {
        setBikeArray([newBike, ...bikeArray])
    }


    console.log(bikeArray)

    return (
       <BikeContext.Provider value={{
           onBikeCreate,
           bikeArray,
           bikeInput,
           setBikeInpuT,
           bikeData
       }}>
           {children}
       </BikeContext.Provider>
    );
}

export default BikeContextprovider
