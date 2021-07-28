import React, {useContext, useState, memo} from 'react';
import './BikeItem.css'
import CloseIcon from "@material-ui/icons/Close"
import NativeSelect from '@material-ui/core/NativeSelect';
import BikeContext from "../context/BikeContext";

const BikeItem = memo(({bikeItem, removeBike}) => {
    const {bikeType, bikeID, bikeColor, bikeName, bikePrice} = bikeItem
    const {setBikeArray, bikeArray} = useContext(BikeContext)

    const closeIconStyle = {
        fontSize: 'medium'
    }

    let initialItemBorderColor = {border: '2px solid #6FCF97'}
    const [itemBorderColor, setItemBorderColor] = useState(initialItemBorderColor);

    const yellowBorder = {
        border: '2px solid #F2994A'
    }
    const redBorder = {
        border: '2px solid #EB5757'
    }

    const onBikeDelete = () => {
        const answer = window.confirm('Ви впевненні?')
        if(answer){
            removeBike(bikeID)
        }
    }

    const handleStatusChange = (event) => {
        if (event.target.value === 'Busy') {   // зміна рамки при зміні статусу
            setItemBorderColor(yellowBorder)
        } else if (event.target.value === 'Unvailable') {
            setItemBorderColor(redBorder)
        } else {
            setItemBorderColor(initialItemBorderColor)
        }
        setBikeArray(bikeArray.map(bike => {      //заміна статусу
            if(bikeID === bike.bikeID){
                bike.status = event.target.value
            }
            return bike
        }));
    };

    return (
        <>
            <div className='bike-item' style={itemBorderColor}>
                <div>
                    <div className='bike-fields'><span
                        className='bike-name'>{bikeName.toUpperCase()} -</span> {bikeType.toUpperCase()} ({bikeColor.toUpperCase()})
                    </div>
                    <div className='bike-id'>ID: {bikeID}</div>
                    <div className='status'>
                        <div>STATUS:</div>
                        <NativeSelect className='select'
                                      onChange={handleStatusChange}
                        >
                            <option value='Available'>Available</option>
                            <option value='Busy'>Busy</option>
                            <option value='Unvailable'>Unvailable</option>
                        </NativeSelect>
                    </div>
                </div>
                <div className='bike-item-right'>
                    <div onClick={onBikeDelete} className='bike-item-right-close'>
                        <CloseIcon style={closeIconStyle}/>
                    </div>
                    <div>{bikePrice} UAH/hr.</div>
                </div>
            </div>
        </>
    );
})

export default BikeItem
