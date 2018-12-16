
import React, {Component} from 'react'
import './Input.css'


const Input = (props)=>{
    var inputElement = null;
    switch(props.elementType){
        case 'input':
            inputElement = <input 
            type= {props.type}  
            onBlur={(event) => props.onChange(event, props.id)} 
            className="form-control" 
            id={props.id} 
            placeholder={props.placeholder}/>
        break
        case 'date' : 
            inputElement = <input type={props.type} className="form-control-range" id={props.id}/>
        
        break
        default :
    }

    return (
        <div className="form-group">
        <label className='label' htmlFor={props.id}>{props.label}</label>
        {inputElement}
        {!props.isValid && props.touched && <span className="invalid-feedback" style={{display : 'inline'}}>{'!!! '+ props.message}</span>}
        </div>
    )
    
    }


export default Input