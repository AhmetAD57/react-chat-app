import React from 'react'
import { userLogin , userLogout} from '../firebase/FirebaseConfig';


const LoginPage = () => {
 
  
    return (
    <div>
        <p>Login Page</p>
        <hr />
        <button onClick={userLogin}>Login</button>
        <button onClick={userLogout}>Login</button>
    </div>
  )
}

export default LoginPage;
