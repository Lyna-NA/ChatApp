import Cam from "../images/cam.png"
import Add from "../images/add.png"
import More from "../images/more.png"
import Messages from "./Messages";
import Input from "./Input";

let Chat = () => {
    return(
        <div className="chat">
            <div className="chatInfo">
                <span>Lyna</span>
                <div className="chatIcons">
                    <img src={Cam} alt="" />
                    <img src={Add} alt="" />
                    <img src={More} alt="" />
                </div>
            </div>
            <Messages />
            <Input />
        </div>
    );
}
export default Chat;