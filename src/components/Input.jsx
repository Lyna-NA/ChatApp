import Img from "../images/img.png";
import Attach from "../images/attach.png";

let Input = () => {
  return (
    <div className="input">
      <input type="text" name="" id="" placeholder="Type something..." />
      <div className="send">
        <img src={Attach} alt="" />
        <input type="file" name="" id="file" style={{ display: "none" }} />
        <label htmlFor="file">
          <img src={Img} alt="" />
        </label>
        <button>Send</button>
      </div>
    </div>
  );
};
export default Input;
