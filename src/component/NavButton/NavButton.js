import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./NavButton.css";

const NavButton = ({ to, icon, title }) => {
  const location = useLocation();

  const isActive = location.pathname === to;

  return (
    <Link
      className={isActive ? "button-container active" : "button-container"}
      to={to}
    >
      <div className="icon">
        <div className="icon-waraper">
          {icon}
          <p>{title}</p>
        </div>
      </div>
    </Link>
  );
};

export default NavButton;
