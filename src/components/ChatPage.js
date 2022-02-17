import React from 'react'
import { userLogout, getAllMessages } from '../firebase/FirebaseConfig';
import { MessageTypeSection } from './MessageTypeSection';
const ChatPage = () => {
  return (
    <div>
      <div>ChatPage</div>
      <button onClick={userLogout}>Logout</button>
      <hr/>

      <MessageTypeSection message= {(msg) => {
        console.log(msg);
      }} />

      

    </div>
  )
}

export default ChatPage;
