import { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { AuthContext } from "./context/AuthContext";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import "./style.scss";

function AppRoutes() {

  const {currentUser} = useContext(AuthContext);
  console.log("currentUser", currentUser);

  return (
    <Routes>
      <Route path="/">
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
