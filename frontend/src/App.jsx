
// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";
// // import Home from "./pages/Home";
// import Login from "./pages/Login";
// import Register from "./pages/Register";
// import AdminPanel from "./pages/AdminPanel";
// import Dashboard from "./pages/Dashboard";
// import Home from "./pages/Home";


// function App() {
//   return (
//     <Router>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Home />} />            {/* Home page */}
//         <Route path="/dashboard" element={<Dashboard />} />    {/* Dashboard route */}
//         <Route path="/login" element={<Login />} />               {/* fallback to login */}
//         <Route path="/register" element={<Register />} />
//         <Route path="/admin" element={<AdminPanel />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;








import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
// import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AdminPanel from "./pages/AdminPanel";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />            {/* Home page */}
        <Route path="/dashboard" element={<Dashboard />} />    {/* Dashboard route */}
        <Route path="/login" element={<Login />} />               {/* fallback to login */}
        <Route path="/register" element={<Register />} />
        <Route path="/admin" element={<AdminPanel />} />
        {/* <Route path="*" element={<Login />} /> fallback to login */}
      </Routes>
    </Router>
  );
}

export default App;
