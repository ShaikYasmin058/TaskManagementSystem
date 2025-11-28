








// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "../css/style.css";

// const Login = () => {
//   const navigate = useNavigate();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const users = JSON.parse(localStorage.getItem("users")) || [];
//     const validUser = users.find(
//       (user) => user.email === email && user.password === password
//     );

//     if (validUser) {
//       alert("Login Successful!");
//       localStorage.setItem("loggedInUser", JSON.stringify(validUser)); // store login info
//       navigate("/dashboard"); // updated route
//     } else {
//       setError("Invalid email or password");
//     }
//   };

//   return (
//     <div className="login-background">
//       <div className="login-card">
//         <h1 className="login-title">Login</h1>

//         {error && <p className="error-text">{error}</p>}

//         <form className="login-form" onSubmit={handleSubmit}>
//           <input
//             type="email"
//             placeholder="Email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//             className="login-input"
//           />
//           <input
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//             className="login-input"
//           />
//           <button type="submit" className="login-button">
//             Login
//           </button>
//         </form>

//         <div className="signup-section">
//           <p>Don't have an account?</p>
//           <button
//             onClick={() => navigate("/signup")}
//             className="signup-button"
//           >
//             Sign Up
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;














import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/style.css";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Get all registered users
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const validUser = users.find(
      (user) => user.email === email && user.password === password
    );

    if (validUser) {
      alert("Login Successful!");

      // Save logged-in user in localStorage
      localStorage.setItem("loggedInUser", JSON.stringify(validUser));

      navigate("/dashboard"); // go to Dashboard
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="login-background">
      <div className="login-card">
        <h1 className="login-title">Login</h1>

        {error && <p className="error-text">{error}</p>}

        <form className="login-form" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="login-input"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="login-input"
          />
          <button type="submit" className="login-button">
            Login
          </button>
        </form>

        <div className="signup-section">
          <p>Don't have an account?</p>
          <button
            onClick={() => navigate("/register")}
            className="signup-button"
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;












// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import API from "../api/api"; // Axios instance with baseURL
// import "../css/style.css";

// const Login = () => {
//   const navigate = useNavigate();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const res = await API.post("/auth/login", { email, password });

//       if (res.data.user) {
//         alert("Login Successful!");

//         // Store logged-in user in localStorage (like your old local login)
//         localStorage.setItem("loggedInUser", JSON.stringify(res.data.user));

//         // Optionally store token if you want to make authenticated requests
//         localStorage.setItem("token", res.data.token);

//         navigate("/dashboard");
//       } else {
//         setError("Invalid email or password");
//       }
//     } catch (err) {
//       console.error("LOGIN ERROR:", err);
//       setError(err.response?.data?.message || "Login failed");
//     }
//   };

//   return (
//     <div className="login-background">
//       <div className="login-card">
//         <h1 className="login-title">Login</h1>

//         {error && <p className="error-text">{error}</p>}

//         <form className="login-form" onSubmit={handleSubmit}>
//           <input
//             type="email"
//             placeholder="Email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//             className="login-input"
//           />
//           <input
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//             className="login-input"
//           />
//           <button type="submit" className="login-button">
//             Login
//           </button>
//         </form>

//         <div className="signup-section">
//           <p>Don't have an account?</p>
//           <button
//             onClick={() => navigate("/signup")}
//             className="signup-button"
//           >
//             Sign Up
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;
