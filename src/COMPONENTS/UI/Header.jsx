import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";

export const Headers = () => {
  const [show, setShow] = useState(false);
  const handleButtonToggle = () => {
    setShow(!show);
  };
  return (
    <header>
      <div className="container">
        <div className="grid navbar-grid">
          <div className="Logo">
            <NavLink to="/" className="Logo">
              <h1>ShellSpace</h1>
            </NavLink>
          </div>

          <nav
            className={show ? "menu-mobile" : "menu-web"}
          >
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/Practice">Practice</NavLink>
              </li>
              <li>
                <NavLink to="/challenges">Challenges</NavLink>
              </li>
              <li>
                <NavLink to="/leaderboard">Leaderboard</NavLink>
              </li>
              <li>
                <NavLink to="/login">Login</NavLink>
              </li>
            </ul>
          </nav>

          <div className="ham-menu">
            <button onClick={handleButtonToggle}>
              <GiHamburgerMenu />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};