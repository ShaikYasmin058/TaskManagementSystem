// import React from "react";
// import { Link } from "react-router-dom";
// import "../css/style.css";

// const Navbar = () => {
//   return (
//     <nav className="navbar">
//       <h1>GreenTask Pro</h1>

//       <div className="nav-right">
//         {/* <Link to="/" className="nav-item">Dashboard</Link> */}
//         <Link to="/login" className="nav-item">Login</Link>
//         <Link to="/register" className="nav-item">Register</Link>
//         <Link to="/admin" className="nav-item">Admin</Link>
//         <Link to="/" className="nav-item">Dashboard</Link>

//       </div>
//     </nav>
//   );
// };

// export default Navbar;

// import React from "react";
// import { Link } from "react-router-dom";
// import "../css/style.css";

// const Navbar = () => {
//   return (
//     <div className="navbar-top">
//       <h1 className="navbar-title">GreenTask Pro</h1>
//       <div className="nav-top-links">
//         <Link to="/" className="nav-item">Dashboard</Link>
//         <Link to="/login" className="nav-item">Login</Link>
//         <Link to="/register" className="nav-item">Register</Link>
//         <Link to="/admin" className="nav-item">Admin</Link>
//       </div>
//     </div>
//   );
// };

// export default Navbar;



// import React from "react";
// import { Link } from "react-router-dom";
// import "../css/style.css";

// const Navbar = () => {
//   return (
//     <nav className="navbar">
//       <h1 className="navbar-title">GreenTask Pro</h1>
//       <div className="nav-items">
//         <Link to="/" className="nav-item">Dashboard</Link>
//         <Link to="/login" className="nav-item">Login</Link>
//         <Link to="/register" className="nav-item">Register</Link>
//         <Link to="/admin" className="nav-item">Admin</Link>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;







import React from "react";
import { Link } from "react-router-dom";
import "../css/style.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <h1>GreenTask Pro</h1>
      </div>

      <div className="nav-right">
        <Link to="/" className="nav-item">Dashboard</Link>
        <Link to="/login" className="nav-item">Login</Link>
        <Link to="/register" className="nav-item">Register</Link>
        <Link to="/admin" className="nav-item nav-admin">Admin</Link>
      </div>
    </nav>
  );
};

export default Navbar;
