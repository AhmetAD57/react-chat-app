import React from 'react'
import { userLogin } from '../firebase/FirebaseConfig';


const LoginPage = () => {
 
  
    return (
    <div>
        <p>Login Page</p>
        <hr />
        <button onClick={userLogin}>Login</button>
        
    </div>
  )
}

export default LoginPage;
