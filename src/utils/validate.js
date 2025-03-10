export const validate= (email,password,name="")=>{
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const isEmailValid = emailRegex.test(email);

    const nameRegex = /^[a-zA-Z][a-zA-Z\s'-]{1,49}$/;
    const isNameValid =  nameRegex.test(name);

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    const isPassValid = passwordRegex.test(password);

    if( isEmailValid && isPassValid){
        if(name!=="" && !isNameValid){
            return "Email/Password not Valid";
        }
        else{
            return ""
        }
        
    }
    else{
        return "Email/Password not Valid";
    }
}