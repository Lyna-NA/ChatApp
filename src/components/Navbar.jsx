let Navbar = () => {
    return(
        <div className="navbar">
            <span className="logo">LYNA CHAT</span>
            <div className="user">
                <img src="https://images.pexels.com/photos/4511649/pexels-photo-4511649.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                <span>Lyna</span>
                <button>Logout</button>
            </div>
        </div>
    );
}
export default Navbar;