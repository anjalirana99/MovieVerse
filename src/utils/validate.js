export const validFormData =(name,email,password,isSignIn)=>{
    const isEmailVaild = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)
    const isPasswordValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password)
    if(!isSignIn){
        if(!name || name.trim().length<3) return "Enter a valid full name"
    }
    if(!isEmailVaild) return "Email ID is not valid"
    if(!isPasswordValid) return "Password is not valid"
    return null
}