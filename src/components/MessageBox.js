import { browserSessionPersistence } from 'firebase/auth'
import React from 'react'

export const MessageBox = ({currentMessage}) => {
  const {uId, message, profileImageURL, creatingTime} = currentMessage
  return (
   
       <li>
          <p><img src={profileImageURL} alt="" />   {uId}: {message}</p>
       </li>
  
  )
}
