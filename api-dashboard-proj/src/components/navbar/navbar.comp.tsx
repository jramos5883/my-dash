import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";
import "./navbar.styles.css";

const Navbar = () => {
  return (
    <Fragment>
      <div className="navbar-container">
        <h1>NavBar!</h1>
        <Outlet />
      </div>
    </Fragment>
  );
};

export default Navbar;
