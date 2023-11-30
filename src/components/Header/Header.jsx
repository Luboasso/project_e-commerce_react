import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/UserContext/UserState";
import { UserOutlined, LogoutOutlined, LoginOutlined } from "@ant-design/icons";

const Header = () => {
  const { user, logout } = useContext(UserContext);
  return (
    <header>
      <h1>Miraculous Store</h1>
      <nav>
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/shop">Shop</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/signup">Sign up</Link>
          </li>

          {user ? (
            (
            (
              <Link to="/profile">
                {user.first_name}
                <UserOutlined />
              </Link>
            ),(<Link to="/cart">Cart</Link>),
            (<Link to="/logout" onClick={logout} ><LogoutOutlined /> Log out</Link>))
          ) : (
            <Link to="/login"><LoginOutlined /> Log in</Link>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
