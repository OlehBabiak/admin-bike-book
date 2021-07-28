import React, {useContext, useState} from 'react';
import './BikeItem.css'
import CloseIcon from "@material-ui/icons/Close"
import NativeSelect from '@material-ui/core/NativeSelect';
import BikeContext from "../context/BikeContext";

function BikeItem(props) {
    const {status, handleChange} = useContext(BikeContext)

    const closeIconStyle = {
        fontSize: 'medium'
    }


    return (
        <>
            <div className='bike-item'>
                <div>
                    <div className='bike-fields'><span
                        className='bike-name'>{props.name.toUpperCase()} -</span> {props.type.toUpperCase()} ({props.color.toUpperCase()})
                    </div>
                    <div className='bike-id'>ID: {props.id}</div>
                    <div className='status'>
                        <div>STATUS:</div>
                        <NativeSelect className='select'
                                      value={status}
                                      onChange={handleChange}
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
                    <div>{props.price} UAH/hr.</div>
                </div>
            </div>
        </>
    );
}

export default BikeItem
