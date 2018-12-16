
import React, {Component} from 'react'
import './Input.css'

class Input extends Component{
    constructor(props){
        super(props)
        this.state = {
            value : ''
        }
    }

    render(){

    var inputElement = null;
    switch(this.props.elementType){
        case 'input':
            inputElement = <input 
            type= {this.props.type}  
            onBlur={(event) => this.props.onChange(event, this.props.id)} 
            defaultValue = {this.state.value}
            className="form-control" 
            id={this.props.id} 
            placeholder={this.props.placeholder}/>
        break
        case 'date' : 
            inputElement = <input type={this.props.type} className="form-control-range" id={this.props.id}/>
        
        break
        default :
    }

    // console.log(props.isValid)
    return (
        <div className="form-group">
        <label className='label' htmlFor={this.props.id}>{this.props.label}</label>
        {inputElement}
        {!this.props.isValid && this.props.touched && <span className="invalid-feedback" style={{display : 'inline'}}>{'!!! '+ this.props.message}</span>}
        </div>
    )
    
    }
}

export default Input