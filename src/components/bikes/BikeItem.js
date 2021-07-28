import React, {useContext, useState} from 'react';
import './BikeItem.css'
import CloseIcon from "@material-ui/icons/Close"
import NativeSelect from '@material-ui/core/NativeSelect';
import BikeContext from "../context/BikeContext";

function BikeItem(props) {
    let {type, id, color, name, price} = props
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

    const handleStatusChange = (event) => {
        if (event.target.value === 'Busy') {
            setItemBorderColor(yellowBorder)
        } else if (event.target.value === 'Unvailable') {
            setItemBorderColor(redBorder)
        } else {
            setItemBorderColor(initialItemBorderColor)
        }
        setBikeArray(bikeArray.map(bike => {
            if(id === bike.bikeID){
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
                        className='bike-name'>{name.toUpperCase()} -</span> {type.toUpperCase()} ({color.toUpperCase()})
                    </div>
                    <div className='bike-id'>ID: {id}</div>
                    <div className='status'>
                        <div>STATUS:</div>
                        <NativeSelect className='select'
                                      // value={status}
                                      onChange={handleStatusChange}
                        >
                            <option value='Available'>Available</option>
                            <option value='Busy'>Busy</option>
                            <option value='Unvailable'>Unvailable</option>
                        </NativeSelect>
                    </div>
                </div>
                <div className='bike-item-right'>
                    <div className='bike-item-right-close'>
                        <CloseIcon style={closeIconStyle}/>
                    </div>
                    <div>{price} UAH/hr.</div>
                </div>
            </div>
        </>
    );
}

export default BikeItem
