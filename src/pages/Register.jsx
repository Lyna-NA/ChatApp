import Add from "../images/addAvatar.png"

let Register = () => {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">LYNA CHAT</span>
        <span className="title">Register</span>
        <form action="">
          <input type="text" name="" id="" placeholder="Display name" />
          <input type="email" name="" id="" placeholder="Email" />
          <input type="password" name="" id="" placeholder="Password" />
          <input style={{ display: "none" }} type="file" name="" id="file" />
          <label htmlFor="file">
            <img src={Add} alt="" />
            <span>Add an avatar</span>
          </label>
          <button>Sign up</button>
        </form>
        <p>You do have an account? Login</p>
      </div>
    </div>
  );
};
export default Register;