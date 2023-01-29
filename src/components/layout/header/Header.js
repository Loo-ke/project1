import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { loginState } from "./../../../store/State";
import Nav03 from "../navigation/Nav03";
import Nav02 from "../navigation/Nav02";
import axios from "axios";
import "./Header.scss";

const Header = ({ category }) => {
  const [login, setLogin] = useRecoilState(loginState);
  // const [user, setUser] = useState()

  axios.defaults.withCredentials = true;

  useEffect(() => {
    const isLogin = () => {
      //         axios.post("http://localhost:8080/islogin")
      //         .then((response) => {
      //             if(response.data.message === "로그인 성공") {
      //                 // setLogin(true)
      //                 setUser(response.data)
      //             }
      //         })
      return true;
    };
    isLogin();
  }, [login]);

  return (
    <div className="header">
      <div className="header_wrap">
        <Link to="/">
          <h3 className="header_logo">LOGO</h3>
        </Link>
        {category}
      </div>
      {login ? (
        // <Nav03 nickname={user?.nickname} level={user?.user_level} />
        <Nav03></Nav03>
      ) : (
        <Nav02 />
      )}
    </div>
  );
};

export default Header;
