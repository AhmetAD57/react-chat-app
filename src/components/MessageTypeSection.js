import React, {useState} from "react";

export const MessageTypeSection = (props) => {
    const [message, setMessage] = useState("");
    
    const messageSend = (e) => {
        if(message.length != 0){
            props.typedMessage(message);
        }
       setMessage("");
    }

   
    
    return (
        <div>
            
            <div>
                <input placeholder="message enter" onChange={(e) => setMessage(e.target.value)} value={message} />
            </div>

            <div>
                <button onClick={()=> messageSend()} type="submit">Send</button>
            </div>
            
        </div>
    );
};
