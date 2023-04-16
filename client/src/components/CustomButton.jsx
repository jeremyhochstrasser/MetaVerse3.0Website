import React from 'react'

import state from '../store';
import { useSnapshot } from 'valtio';

import { getContrastingColor } from '../config/helpers';

//take in arguments from the parent component
const CustomButton = ({type, title, customStyles, handleClick}) => {
    const snap = useSnapshot(state)

    //handle if the button is filled or not
    const generateStyle = (type) => {
        if(type === "filled") {
            return{
                backgroundColor: snap.color,
                color: getContrastingColor(snap.color)
            }
        } else if(type === "outline") {
            return{
                borderWidth: '1px',
                borderColor: snap.color,
                color: snap.color
            }
        }
    }


    //return the custom button with the styles and the title
    return (
    <button className={`px-2 py-1.5 flex-1 rounded-md ${customStyles}`}
    style={generateStyle(type)}
    onClick={handleClick}>

        {title}
    </button>
  )
}

export default CustomButton