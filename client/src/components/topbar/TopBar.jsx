import {Link} from "react-router-dom";
import "./topbar.css"
export default function TopBar() {
  const user = false;
  return (
    <div className='top'>
        <div className="topLeft">
            <i className="topIcon fab fa-facebook-square"></i>
            <i className="topIcon fab fa-instagram-square"></i>
            <i className="topIcon fab fa-pinterest-square"></i>
            <i className="topIcon fa-brands fa-square-x-twitter"></i>
        </div>
        <div className="topCenter">
            <ul className="topList">
                <li className="topListItem">
                  <Link className="link" to="/">HOME</Link>
                </li>
                <li className="topListItem">
                  {/* <Link className="link" to="/about">ABOUT</Link> */}
                  ABOUT
                </li>
                <li className="topListItem">CONTACT</li>
                <li className="topListItem">
                  <Link className="link" to="/write">WRITE</Link>
                </li>
                {/* <li className="topListItem"> */}
                  {/* {user && "LOGOUT"} */}
                  {user && <li className="topListItem">LOGOUT </li> }
                {/* </li> */}
            </ul>
        </div>
        <div className="topRight">
          {
            user ? (
              <img
                className="topImg"
                src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                alt=""
              />
            ): (
              // <ul className="topList">
              //   <li className="topListItem">
              //     <Link className="link" to="/login">LOGIN</Link>
              //   </li>
              //   <li className="topListItem">
              //     <Link className="link" to="/register">REGISTER</Link>
              //   </li>
              // </ul>
              <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/login">
                LOGIN
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/register">
                REGISTER
              </Link>
            </li>
          </ul>
            )}
            <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
        </div>
    </div>
  )
}
