import Cam from "../images/cam.png";
import Add from "../images/add.png";
import More from "../images/more.png";
import Messages from "./Messages";
import Input from "./Input";
import { useContext } from "react";
import { ChatContext } from "../context/ChatContext";

let Chat = () => {
  const { data } = useContext(ChatContext);

  return (
    <div className="chat">
      {data.chatId === "null" ? (
        <div className="startChat">Choose a conversation to start chatting</div>
      ) : (
        <>
          {" "}
          <div className="chatInfo">
            <span>{data.user.displayName}</span>
            <div className="chatIcons">
              <img src={Cam} alt="" />
              <img src={Add} alt="" />
              <img src={More} alt="" />
            </div>
          </div>
          <Messages />
          <Input />
        </>
      )}
    </div>
  );
};
export default Chat;
