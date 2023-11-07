import React, { useState } from 'react';
import './Box.css'

export default function Boxes(props) {

    const [boxState, setBoxState] = useState(false);

    function reverseBlack() {
        setBoxState(!boxState);
        if (boxState) {
            props.setCountBlack(props.countBlack - 1);
        } else {
            props.setCountBlack(props.countBlack + 1);
        }
    }

    let boxClassName = ''

    if(boxState) {
        boxClassName = 'box blackBox';
    } else {
        boxClassName = 'box';
    }

    return (
        <div className = {boxClassName}  onClick = {reverseBlack}> 
        </div>
    )
}