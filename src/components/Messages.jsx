import { doc, onSnapshot } from "firebase/firestore";
import { useContext, useEffect } from "react";
import { useState } from "react";
import { ChatContext } from "../context/ChatContext";
import { db } from "../firebase";
import Message from "./Message";

let Messages = () => {
  const [messages, setMessages] = useState([]);

  const { data } = useContext(ChatContext);

  useEffect(() => {
    const unSub = onSnapshot(doc(db, "chats", data.chatId), (doc) => {
      doc.exists() && setMessages(doc.data().messages);
    });
  }, []);

  return (
    <div className="messages">
        {messages.map((msg) => (
            <Message message ={msg} key={msg.id}/>
        ))}
    </div>
  );
};
export default Messages;