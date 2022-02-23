import React from 'react'
import { MessageBox } from './MessageBox'

export const ChatMessagesSection = ({chatMessages}) => {
  

  return (
    <>
      <ul>
        {chatMessages.map((msg, index) => <MessageBox key={index} currentMessage={msg} />)}
        
      </ul>
      
    </>

  )
}
