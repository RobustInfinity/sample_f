
import isEmpty from '../utils/isEmpty'

const validateInputFeild = function(config, value){

    var message = ''
    var isValid = true;
    
    //checking for empty and null values
    
    if(config.required && isEmpty(value)){

            return { message: 'Feild cannot be empty', isValid : false}

        }
            
        //checking email
        if(config.type === 'email'){
            isValid = /^([a-zA-Z0-9_\-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/.test(value) && isValid;
            if(!isValid){
                message = 'Invalid Email'
            }
            return{isValid : isValid, message : message}
        }

        //checking dob
        if(config.type === 'dob'){
            console.log(value)
            var dob = new Date(value)
            var today = new Date();
            var age = today.getFullYear() - dob.getFullYear();
                console.log(age)
                if(age <= 18 ){
                    message = 'Age should be equl to or more than 18 years'
                    isValid = false
                    if(age < 0){
                        return {isValid : false, message : ' Invalid date'}
                    }
                    return  {isValid : isValid, message : 'Age should be equal to or more than 18 years'}
                }
                
        }

        return{
            message, isValid
        }
}

    

    


export default validateInputFeild