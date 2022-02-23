import React, { useEffect, useState, useRef} from "react";
import { userLogout, onSnapshot, coll, sendMessage, getDocs, query, orderBy , limit} from "../firebase/FirebaseConfig";
import { connect } from 'react-redux';

import { MessageTypeSection } from "./MessageTypeSection";
import { ChatMessagesSection } from "./ChatMessagesSection";

const ChatPage = (props) => {
    const messagesEndRef = useRef(null);
    const [messages, setMessages] = useState([]);
    
    useEffect(() => {
        onSnapshot(query(coll, orderBy("creatingTime")), (querySnapshot) => {
            setMessages([]);
            querySnapshot.docs.map(doc => {
                setMessages(arr => [...arr, doc.data()]);
            });
        });
    }, []);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
    }
   
    useEffect(() => {
        scrollToBottom()
    }, [messages]);

    return (
        <div>
            <div>Chat app</div>
            <button onClick={userLogout}>Logout</button>
            <hr />
            
            <ChatMessagesSection chatMessages={messages} />

            <MessageTypeSection
                typedMessage={(message) => {
                   sendMessage(props.uId, message, props.uImage);
                   
                }}
            />
            <span ref={messagesEndRef}></span>

        </div>
    );
};
const mapStateToProps = (store) => {
    return{
        uId: store.uId,
        uImage: store.uImage
    }
}
export default connect(mapStateToProps)(ChatPage);
