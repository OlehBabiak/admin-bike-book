import React, {useState} from "react";
import BikeContext from "./BikeContext";

function BikeContextprovider({children}) {

    let initionalBikesState  = [];
    const [bikeArray, setBikeArray] = useState(initionalBikesState);


    const onBikeCreate = (newBike) => {
        setBikeArray([newBike, ...bikeArray])
    }

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

    const clearInput = () => {
        setBikeInpuT({ // очищаємо інпут
                bikeName: '',
                bikeType: '',
                bikeColor: '',
                bikeWheelSize: '',
                bikePrice: '',
                bikeID: '',
                bikeDescription: '',
                status: 'Available'
            }
        );
    }


    console.log('!!!', bikeArray)
    return (
       <BikeContext.Provider value={{
           onBikeCreate,
           bikeArray,
           bikeInput,
           setBikeInpuT,
           setBikeArray,
           clearInput,

       }}>
           {children}
       </BikeContext.Provider>
    );
}

export default BikeContextprovider
