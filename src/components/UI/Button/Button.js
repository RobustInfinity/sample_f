

import React from 'react'
import './Button.css'

const Button = (props)=>{

    return(
        <button onSubmit={props.onSubmit} type={props.type} className={[["btn",props.className].join('-'), "btn"].join(" ")}>
        {props.children}</button>
    )
}

export default Button;