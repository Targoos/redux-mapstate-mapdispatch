import React from "react";

const Navbar = ({ user = "Admin" }) => {
  return (
    <nav className="navbar navbar-light bg-light mb-4">
      <h3>
        Bienvenido <span className="badge badge-secondary">{user}</span>
      </h3>
    </nav>
  );
};

export default Navbar;
