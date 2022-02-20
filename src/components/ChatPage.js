import React, { useEffect, useState } from "react";
import { userLogout, onSnapshot, coll } from "../firebase/FirebaseConfig";

import { MessageTypeSection } from "./MessageTypeSection";
import { ChatMessagesSection } from "./ChatMessagesSection";
const ChatPage = () => {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        //setMessages([]);
        onSnapshot(coll, (querySnapshot) => {
            const data = querySnapshot.docs.map((doc) => {
                setMessages((arr) => [...arr, doc.data()]);
            });
        });
    }, []);

    return (
        <div>
            <div>Chat app</div>
            <button onClick={userLogout}>Logout</button>
            <hr />

            <ChatMessagesSection chatMessages={messages} />

            <MessageTypeSection
                message={(msg) => {
                    console.log(msg);
                }}
            />
        </div>
    );
};

export default ChatPage;
