import Chats from "./Chats";
import Navbar from "./Navbar";
import Search from "./Search";

let Sidebar = () => {
    return(
        <div className="sidebar">
            <Navbar />
            <Search />
            <Chats />
            <Chats />
            <Chats />
        </div>
    );
}
export default Sidebar;