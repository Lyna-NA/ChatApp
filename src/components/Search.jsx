import { useState } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase";

let Search = () => {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [err, setErr] = useState(false);

  const searchHandler = async () => {
    // Create a query against the collection "users"
    const q = query(
      collection(db, "users"),
      where("displayName", "==", username)
    );
    try {
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        setUser(doc.data());
        console.log(doc.id, " => ", doc.data());
      });
    } catch (error) {
      setErr(true);
    }
  };

  const handelKey = (event) => {
    event.code === "Enter" && searchHandler();
  };

  return (
    <div className="search">
      <div className="searchForm">
        <input
          type="text"
          name=""
          id=""
          placeholder="Find a user"
          onKeyDown={handelKey}
          onChange={(event) => setUsername(event.target.value)}
        />
      </div>
      {err && <span>User not found!</span>}
      {user && <div className="userChat">
        <img
          src={user.photoURL}
          alt=""
        />
        <div className="userChatInfo">
          <span>{user.displayName}</span>
        </div>
      </div>}
    </div>
  );
};
export default Search;
