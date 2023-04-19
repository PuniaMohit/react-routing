import "./nav.css";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div className="navbar-link-list">
      <div>
        <h3 className="navbar-link">
          <NavLink
            to="/about"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
          >
            Contact
          </NavLink>
          <NavLink
            to="/messages"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
          >
            Messages
          </NavLink>
        </h3>
      </div>
    </div>
  );
};

export default Nav;
