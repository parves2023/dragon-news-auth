import { Link } from "react-router-dom";
import userIcon from "../assets/user.png";
import { useContext } from "react";
import { AuthContex } from "../providers/AuthProviders";
const Navbar = () => {

  const {user,logOut} = useContext(AuthContex);

  return (
    <div className="flex justify-between items-center">
      <div className=""></div>
      <div className="nav space-x-5">
        <Link to="/">Home</Link>
        <Link to="/career">Career</Link>
        <Link to="/about">About</Link>
        <Link to="/Login">Login</Link>
      </div>
      <div className="login flex gap-2 items-center">
        <div className=" ">
          <img src={userIcon} alt="" />
        </div>
        {
          user ? <button className="btn btn-neutral rounded-none" onClick={logOut}>LogOut</button>:<Link to={"/login"} className="btn btn-neutral rounded-none">Login</Link>
        }
      </div>
    </div>
  );
};

export default Navbar;
