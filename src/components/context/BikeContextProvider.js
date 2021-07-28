import React, {useState} from "react";
import BikeContext from "./BikeContext";

function BikeContextprovider({children}) {

    let initionalBikesState  = [];
    const [bikeArray, setBikeArray] = useState(initionalBikesState);

    const [status, setStatus] = useState('Available');

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
        status: status
    });

    const handleChange = (event) => {
        setStatus((bikeInput)=>{
            return {
                ...bikeInput,
                status: event.target.value
            }
        });
    };
    console.log(bikeArray)
    return (
       <BikeContext.Provider value={{
           onBikeCreate,
           bikeArray,
           bikeInput,
           setBikeInpuT,
           handleChange,
           status
       }}>
           {children}
       </BikeContext.Provider>
    );
}

export default BikeContextprovider
