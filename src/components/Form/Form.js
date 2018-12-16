import React,{Component} from 'react'
import Input from '../UI/Input/Input'
import Button from '../UI/Button/Button'
import validateInputFeild from '../../validation/validate'
import API from '../../axios' 
import './Form.css'


class Form extends Component{
    constructor(props){
        super(props);
        this.state = {
            form : {
                name : {
                    elementType : 'input',
                    type: 'text',
                    placeholder : 'Enter Name',
                    label : 'Name',
                    value : '',
                    validations : {
                        validationFailMessage : '',
                        isValid : false,
                        required : true,
                        type : 'name'
                    }
                },
                email : {
                    elementType : 'input',
                    type: 'email',
                    placeholder : 'e.g. : abc@mail.com',
                    value : '',
                    label : 'Email',
                    validations : {
                        validationFailMessage : '',
                        isValid : false,
                        required : true,
                        type : 'email'
                    }
                },
                dob : {
                    elementType : 'input',
                    type: 'date',
                    placeholder : 'yyyy-mm-dd',
                    value : '',
                    label : 'D.O.B.',
                    validations : {
                        validationFailMessage : '',
                        isValid : false,
                        required : true,
                        type : 'dob'
                    }
                },
                phoneNumber:{
                    elementType : 'input',
                    type: 'text',
                    placeholder : 'e.g. : 9876543210',
                    value : '',
                    label : 'Phone Number',
                    touched : false,
                    validations : {
                        validationFailMessage : '',
                        isValid : false,
                        required : true,
                        type : 'phoneNumber'
                    }
                }
            },

            //message for user on invalid input,
            //successfull submission and
            //duplicate user
            message : '',

            //change when data is sent
            sentStatus : false

        }
    }

    formChangeHandler = (event, element)=>{

        //fetching the value from input feild,
        //performing validation for evry value
        // updating state accordingly 
        var formElements = {...this.state.form}
        var felidElement = formElements[element]
        felidElement.value = event.target.value
        var {isValid, message} = validateInputFeild(felidElement.validations,felidElement.value)
        felidElement.validations.isValid = isValid
        felidElement.validations.validationFailMessage = message
        felidElement.touched = true        
        this.setState({[formElements] : felidElement, message : "" })   

    }
    
    formSumbitHandler = (event)=>{
        event.preventDefault()
        
        var form = {...this.state.form}
        var data = {}
        var isFormValid = true
        for(var key in form){
            var feild = {...form[key]}

            //preparing obj to be sent on request
            data[key] = feild.value

            //checking validity for overall form
            var validation = {...feild.validations}
            if(!validation.isValid){
                isFormValid = validation.isValid
            }
        }
            console.log(isFormValid)

        if(isFormValid){
            event.target.reset();
            //send request to server form is valid
            console.log(data)
            API.post('/user-form',data)
            .then((response)=>{
                var data = response.data
                if(response.status === 200 && response.statusText === 'OK'){
                    this.setState({message : data.message, sentStatus : true})
                }else{
                    this.setState({message : data.message})
                }
            })
            .catch((error)=>{
                console.log(error)
            })
        }else{

            //if any of the feild is empty and user
            //force to submit then send this message
            this.setState({message : 'Invalid Details'})
        }    
    }

    render(){
         
        var form = this.state.form
        var message =this.state.message
        var alertClass = ''
        alertClass = 'alert-success alert message'

        //hide, if no message
        if(message.length === 0){
            alertClass = 'hide'
        }
        
        var formElement = [];
        for( var key in form){
            formElement.push({id : key, value : form[key]})
        }
        return(
            <div className='container col-md-6 cover'>
            {<div className={alertClass}  role="alert">
            {message}
          </div>}
            <form className='form' onSubmit = {(event)=>{this.formSumbitHandler(event)}}>
            {formElement.map((formElement)=>{
                return <Input key={formElement.value.label}
                label={formElement.value.label} 
                id={formElement.value.validations.type}
                elementType={formElement.value.elementType} 
                type={formElement.value.type} 
                onChange={this.formChangeHandler} 
                isValid={formElement.value.validations.isValid} 
                touched={formElement.value.touched}
                message={formElement.value.validations.validationFailMessage}
                placeholder={formElement.value.placeholder}></Input>
            })}
            <Button className='primary' type='Submit'>SUBMIT</Button> 
            </form>
            </div>
        )
    }
}

export default Form
