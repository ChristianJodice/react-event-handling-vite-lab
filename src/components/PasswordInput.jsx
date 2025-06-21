// Code PasswordInput Component Here
import { useState } from 'react'

function PasswordInput (){
    const [password, setPassword] = useState('')
    
    const handleChange = (e) => {
        setPassword(e.target.value)
        console.log("Entering password...")
    }

    const handleFocus = () => {
        console.log("Focusing on password input")
    }

    const handleBlur = () => {
        console.log("Blurring on password input")
    }
    
    return(
        <input type="password" placeholder="Enter your password" value={password} onChange={handleChange} onFocus={handleFocus} onBlur={handleBlur}/>
    )
}

export default PasswordInput;