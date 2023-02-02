import Add from "../images/addAvatar.png"

let Login = () => {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">LYNA CHAT</span>
        <span className="title">Login</span>
        <form action="">
          <input type="email" name="" id="" placeholder="Email" />
          <input type="password" name="" id="" placeholder="Password" />
          <button>Sign in</button>
        </form>
        <p>You don't have an account? Register</p>
      </div>
    </div>
  );
};
export default Login;