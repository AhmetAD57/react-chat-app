import React, {useState} from "react";

export const MessageTypeSection = (props) => {
    const [message, setMessage] = useState();
    

    const onTypingChange = msg => {
        setMessage(msg.target.value);
    }

    const messageSend = (e) => {
        if(message.length != 0){
            props.message(message);
        }
       setMessage("");
    }

   
    
    return (
        <div>
            
            <div>
                <input placeholder="message enter" onChange={onTypingChange} value={message} />
            </div>

            <div>
                <button onClick={()=> messageSend()} type="submit">Send</button>
            </div>
            
        </div>
    );
};
