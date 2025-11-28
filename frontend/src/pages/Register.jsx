// import React from "react";

// const Register = () => {
//   return (
//     <div className="p-4 max-w-md mx-auto mt-10">
//       <h1 className="text-2xl font-bold mb-4">Register</h1>
//       <form className="space-y-4">
//         <input className="border p-2 w-full" placeholder="Name" />
//         <input className="border p-2 w-full" placeholder="Email" />
//         <input className="border p-2 w-full" placeholder="Password" type="password" />
//         <button className="bg-green-600 text-white px-4 py-2 rounded w-full">Register</button>
//       </form>
//     </div>
//   );
// };

// export default Register;












// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "../css/style.css";

// const Register = () => {
//   const navigate = useNavigate();
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     let users = JSON.parse(localStorage.getItem("users")) || [];

//     // Check if email already exists
//     const existingUser = users.find((user) => user.email === email);
//     if (existingUser) {
//       setError("Email already registered");
//       return;
//     }

//     // Save new user
//     users.push({ name, email, password });
//     localStorage.setItem("users", JSON.stringify(users));

//     alert("Registration Successful!");
//     navigate("/login"); // Redirect to login
//   };

//   return (
//     <div className="login-background">
//       <div className="login-card">
//         <h1 className="login-title">Register</h1>

//         {error && <p className="error-text">{error}</p>}

//         <form className="login-form" onSubmit={handleSubmit}>
//           <input
//             type="text"
//             placeholder="Name"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             required
//             className="login-input"
//           />
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
//             Register
//           </button>
//         </form>

//         <div className="signup-section">
//           <p>Already have an account?</p>
//           <button
//             onClick={() => navigate("/login")}
//             className="signup-button"
//           >
//             Login
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Register;













// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "../css/style.css";

// const Register = () => {
//   const navigate = useNavigate();
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     let users = JSON.parse(localStorage.getItem("users")) || [];

//     // Check if email already exists
//     const existingUser = users.find((user) => user.email === email);
//     if (existingUser) {
//       setError("Email already registered");
//       return;
//     }

//     // Save new user
//     users.push({ name, email, password });
//     localStorage.setItem("users", JSON.stringify(users));

//     alert("Registration Successful!");
//     navigate("/login"); // Redirect to Login after successful registration
//   };

//   return (
//     <div className="login-background">
//       <div className="login-card">
//         <h1 className="login-title">Register</h1>

//         {error && <p className="error-text">{error}</p>}

//         <form className="login-form" onSubmit={handleSubmit}>
//           <input
//             type="text"
//             placeholder="Name"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             required
//             className="login-input"
//           />
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
//             Register
//           </button>
//         </form>

//         <div className="signup-section">
//           <p>Already have an account?</p>
//           <button
//             onClick={() => navigate("/login")}
//             className="signup-button"
//           >
//             Login
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Register;












import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();

    let users = JSON.parse(localStorage.getItem("users")) || [];

    // Check duplicate email
    const exists = users.find(user => user.email === email);
    if (exists) {
      alert("Email already registered!");
      return;
    }

    const newUser = { name, email, password };

    users.push(newUser);

    // Save to localStorage
    localStorage.setItem("users", JSON.stringify(users));

    alert("Registration Successful!");
    navigate("/login");
  };

  return (
    <div className="login-background">
      <div className="login-card">
        <h1 className="login-title">Register</h1>

        <form className="login-form" onSubmit={handleRegister}>
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="login-input"
          />

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
            Register
          </button>
        </form>

        <div className="signup-section">
          <p>Already have an account?</p>
          <button
            onClick={() => navigate("/login")}
            className="signup-button"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
