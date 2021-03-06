import React from "react";
// import axios from "axios"; python
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { withRouter } from "react-router";
import { NavLink } from "react-router-dom";

const NavigationComponent = props => {
  const dynamicLink = (route, linkText) => {
    return (
      <div className="nav-link-wrapper">
        <NavLink to={route} activeClassName="nav-link-active">
          {linkText}
        </NavLink>
      </div>
    );
  };

  const handleSignOut = () => {
//     axios PYTHON
//       .delete("https://api.devcamp.space/logout", { withCredentials: true })
//       .then(response => {
//         if (response.status === 200) {
//           props.history.push("/");
//           props.handleSuccessfulLogout();
//         }
//         return response.data;
//       })
//       .catch(error => {
//         console.log("Error signing out", error);
//       });
//   };

  return (
    <div className="nav-wrapper">
      <div className="left-side">
        <div className="nav-link-wrapper">
          <NavLink exact to="/" activeClassName="nav-link-active">
            Home
          </NavLink>
        </div>

        <div className="nav-link-wrapper">
          <NavLink to="/Library" activeClassName="nav-link-active">
            Library
          </NavLink>
        </div>

        <div className="nav-link-wrapper">
          <NavLink to="/Progress" activeClassName="nav-link-active">
            Progress
          </NavLink>
        </div>

        <div className="nav-link-wrapper">
          <NavLink to="/Support" activeClassName="nav-link-active">
            Support
          </NavLink>
        </div>

        {props.loggedInStatus === "LOGGED_IN" ? (
          dynamicLink("/portfolio-manager", "Portfolio Manager")
        ) : null}
      </div>

      <div className="right-side">
        JOHN GARTSU
        {props.loggedInStatus === "LOGGED_IN" ? (
          <a onClick={handleSignOut}>
            <FontAwesomeIcon icon="sign-out-alt" />
          </a>
        ) : null}
      </div>
    </div>
  );
};

export default withRouter(NavigationComponent);