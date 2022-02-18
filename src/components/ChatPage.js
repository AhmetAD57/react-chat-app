import React from 'react'
import { userLogout, onSnapshot, coll } from '../firebase/FirebaseConfig';

import { MessageTypeSection } from './MessageTypeSection';
import { ChatMessagesSection } from './ChatMessagesSection';
const ChatPage = () => {
  let allChat = [];
  
  onSnapshot(coll, snapshot =>{
     snapshot.docs.forEach(doc => allChat.push(doc.data()));
     console.log("toggle-------");
  })
  
  return (
    <div>
      <div>ChatPage</div>
      <button onClick={userLogout}>Logout</button>
      <hr/>
     
      <ChatMessagesSection chatMessages={allChat}/>
      


      <MessageTypeSection message= {(msg) => {
        console.log(msg);
      }} />

      

    </div>
  )
}

export default ChatPage;
