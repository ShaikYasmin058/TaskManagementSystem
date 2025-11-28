// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";


// const Dashboard = () => {
//   const navigate = useNavigate();
//   const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

//   const [tasks, setTasks] = useState(() => {
//     // Load tasks from localStorage or empty array
//     return JSON.parse(localStorage.getItem("tasks")) || [];
//   });
//   const [search, setSearch] = useState("");
//   const [statusFilter, setStatusFilter] = useState("All Status");

//   // Redirect to login if no user is logged in
//   useEffect(() => {
//     if (!loggedInUser) navigate("/login");
//   }, [loggedInUser, navigate]);

//   // Persist tasks to localStorage whenever they change
//   useEffect(() => {
//     localStorage.setItem("tasks", JSON.stringify(tasks));
//   }, [tasks]);

//   // Logout function
//   const handleLogout = () => {
//     localStorage.removeItem("loggedInUser");
//     navigate("/login");
//   };

//   // Create a new task
//   const handleCreateTask = () => {
//     const taskName = prompt("Enter task name:");
//     if (taskName) {
//       const newTask = {
//         name: taskName,
//         status: "Pending",
//         user: loggedInUser.email,
//       };
//       setTasks([...tasks, newTask]);
//     }
//   };

//   // Toggle task status
//   const toggleStatus = (index) => {
//     const updatedTasks = tasks.map((task, i) =>
//       i === index
//         ? { ...task, status: task.status === "Pending" ? "Completed" : "Pending" }
//         : task
//     );
//     setTasks(updatedTasks);
//   };

//   // Delete a task
//   const deleteTask = (index) => {
//     const updatedTasks = tasks.filter((_, i) => i !== index);
//     setTasks(updatedTasks);
//   };

//   // Filter tasks for logged-in user, search, and status
//   const filteredTasks = tasks
//     .filter((task) => task.user === loggedInUser.email)
//     .filter((task) =>
//       task.name.toLowerCase().includes(search.toLowerCase())
//     )
//     .filter((task) =>
//       statusFilter === "All Status" ? true : task.status === statusFilter
//     );

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 p-8">
//       {/* Header */}
//       <div className="flex justify-between items-center mb-8">
//         <div>
//           <h1 className="text-4xl font-bold text-blue-900">Task Dashboard 🤖</h1>
//           <p className="text-gray-700 mt-1">Hello, {loggedInUser?.email}</p>
//         </div>
//         <button
//           onClick={handleLogout}
//           className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-lg font-semibold shadow"
//         >
//           Logout
//         </button>
//       </div>

//       {/* Task Controls */}
//       <div className="flex flex-wrap justify-between items-center gap-4 mb-6">
//         <div className="flex gap-4 flex-wrap">
//           <input
//             type="text"
//             placeholder="Search tasks..."
//             value={search}
//             onChange={(e) => setSearch(e.target.value)}
//             className="border border-gray-300 p-2 rounded-lg shadow-sm w-64 focus:outline-none focus:ring-2 focus:ring-blue-400"
//           />
//           <select
//             value={statusFilter}
//             onChange={(e) => setStatusFilter(e.target.value)}
//             className="border border-gray-300 p-2 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
//           >
//             <option>All Status</option>
//             <option>Pending</option>
//             <option>Completed</option>
//           </select>
//         </div>
//         <button
//           onClick={handleCreateTask}
//           className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg font-semibold shadow"
//         >
//           + Create Task
//         </button>
//       </div>

//       {/* Task List in Big Card */}
//       <div className="bg-white shadow-xl rounded-2xl p-8 min-h-[300px]">
//         {filteredTasks.length === 0 ? (
//           <p className="text-gray-400 text-lg text-center py-20">
//             No tasks yet. Create your first task! 📝
//           </p>
//         ) : (
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             {filteredTasks.map((task, index) => (
//               <div
//                 key={index}
//                 className="bg-blue-50 p-5 rounded-xl shadow-md flex justify-between items-center"
//               >
//                 <div>
//                   <h2 className="text-lg font-semibold text-blue-900">{task.name}</h2>
//                   <p
//                     className={`mt-1 px-2 py-1 w-max rounded-full text-sm font-medium ${
//                       task.status === "Completed"
//                         ? "bg-green-100 text-green-800"
//                         : "bg-yellow-100 text-yellow-800"
//                     }`}
//                   >
//                     {task.status}
//                   </p>
//                 </div>
//                 <div className="flex flex-col gap-2">
//                   <button
//                     onClick={() => toggleStatus(index)}
//                     className="bg-gray-200 hover:bg-gray-300 px-3 py-1 rounded-lg text-sm font-medium"
//                   >
//                     Toggle
//                   </button>
//                   <button
//                     onClick={() => deleteTask(index)}
//                     className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-lg text-sm font-medium"
//                   >
//                     Delete
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Dashboard;







// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";

// const Dashboard = () => {
//   const navigate = useNavigate();
//   const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

//   const [tasks, setTasks] = useState(() => {
//     return JSON.parse(localStorage.getItem("tasks")) || [];
//   });

//   const [search, setSearch] = useState("");
//   const [statusFilter, setStatusFilter] = useState("All Status");

//   useEffect(() => {
//     if (!loggedInUser) navigate("/login");
//   }, [loggedInUser, navigate]);

//   useEffect(() => {
//     localStorage.setItem("tasks", JSON.stringify(tasks));
//   }, [tasks]);

//   const handleLogout = () => {
//     localStorage.removeItem("loggedInUser");
//     navigate("/login");
//   };

//   const handleCreateTask = () => {
//     const taskName = prompt("Enter task name:");
//     if (taskName) {
//       setTasks([
//         ...tasks,
//         {
//           name: taskName,
//           status: "Pending",
//           user: loggedInUser.email,
//         },
//       ]);
//     }
//   };

//   const toggleStatus = (index) => {
//     const updatedTasks = tasks.map((task, i) =>
//       i === index
//         ? {
//             ...task,
//             status: task.status === "Pending" ? "Completed" : "Pending",
//           }
//         : task
//     );
//     setTasks(updatedTasks);
//   };

//   const deleteTask = (index) => {
//     setTasks(tasks.filter((_, i) => i !== index));
//   };

//   const filteredTasks = tasks
//     .filter((task) => task.user === loggedInUser.email)
//     .filter((task) => task.name.toLowerCase().includes(search.toLowerCase()))
//     .filter((task) =>
//       statusFilter === "All Status" ? true : task.status === statusFilter
//     );

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-indigo-200 to-blue-300 p-8">

//       {/* HEADER */}
//       <div className="flex justify-between items-center mb-10">
//         <div>
//           <h1 className="text-5xl font-extrabold text-blue-900 drop-shadow-md">
//             Welcome Back 👋
//           </h1>
//           <p className="text-gray-700 mt-2 text-lg font-medium">
//             {loggedInUser?.email}
//           </p>
//         </div>

//         <button
//           onClick={handleLogout}
//           className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-xl font-semibold shadow-lg transition-transform hover:scale-105"
//         >
//           Logout
//         </button>
//       </div>

//       {/* CONTROLS */}
//       <div className="flex flex-wrap justify-between items-center mb-8 gap-4">

//         <div className="flex gap-4 flex-wrap">
//           <input
//             type="text"
//             placeholder="Search tasks..."
//             value={search}
//             onChange={(e) => setSearch(e.target.value)}
//             className="border border-gray-300 p-3 rounded-xl shadow bg-white/70 backdrop-blur w-64 focus:ring-2 focus:ring-blue-500 transition"
//           />

//           <select
//             value={statusFilter}
//             onChange={(e) => setStatusFilter(e.target.value)}
//             className="border border-gray-300 p-3 rounded-xl shadow bg-white/70 backdrop-blur focus:ring-2 focus:ring-blue-500 transition"
//           >
//             <option>All Status</option>
//             <option>Pending</option>
//             <option>Completed</option>
//           </select>
//         </div>

//         <div className="flex gap-4">
//           {/* NEW SHOW MY TASKS BUTTON */}
//           <button
//             onClick={() => {
//               setSearch("");
//               setStatusFilter("All Status");
//             }}
//             className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl font-semibold shadow-lg transition-transform hover:scale-105"
//           >
//             Show My Tasks
//           </button>

//           <button
//             onClick={handleCreateTask}
//             className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold shadow-lg transition-transform hover:scale-105"
//           >
//             + Add New Task
//           </button>
//         </div>

//       </div>

//       {/* TASK BOARD */}
//       <div className="bg-white/40 backdrop-blur-xl shadow-2xl rounded-3xl p-10 min-h-[350px] border border-white/30">
//         {filteredTasks.length === 0 ? (
//           <p className="text-gray-600 text-center text-xl py-20 font-medium tracking-wide">
//             No tasks found. Create one! 📝
//           </p>
//         ) : (
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">

//             {filteredTasks.map((task, index) => (
//               <div
//                 key={index}
//                 className="p-6 bg-white rounded-2xl shadow-xl border border-gray-100 hover:shadow-2xl transition"
//               >
//                 <h2 className="text-xl font-bold text-blue-800 tracking-wide">
//                   {task.name}
//                 </h2>

//                 <p
//                   className={`mt-3 px-3 py-1 w-max rounded-full text-sm font-semibold ${
//                     task.status === "Completed"
//                       ? "bg-green-200 text-green-700"
//                       : "bg-yellow-200 text-yellow-700"
//                   }`}
//                 >
//                   {task.status}
//                 </p>

//                 <div className="flex gap-3 mt-5">
//                   <button
//                     onClick={() => toggleStatus(index)}
//                     className="w-full bg-gray-200 hover:bg-gray-300 px-3 py-2 rounded-lg text-sm font-medium transition"
//                   >
//                     {task.status === "Pending"
//                       ? "Mark Completed"
//                       : "Mark Pending"}
//                   </button>

//                   <button
//                     onClick={() => deleteTask(index)}
//                     className="w-full bg-red-500 hover:bg-red-600 text-white px-3 py-2 rounded-lg text-sm font-medium transition"
//                   >
//                     Delete
//                   </button>
//                 </div>
//               </div>
//             ))}

//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Dashboard;














// import React, { useState } from "react";

// const Dashboard = () => {
//   const [showModal, setShowModal] = useState(false);
//   const [title, setTitle] = useState("");
//   const [description, setDescription] = useState("");
//   const [dueDate, setDueDate] = useState("");
//   const [status, setStatus] = useState("Pending");

//   const openModal = () => setShowModal(true);
//   const closeModal = () => {
//     setShowModal(false);
//     setTitle("");
//     setDescription("");
//     setDueDate("");
//     setStatus("Pending");
//   };

//   const handleCreateTask = () => {
//     if (!title) {
//       alert("Title is required!");
//       return;
//     }

//     const newTask = { title, description, dueDate, status };
//     console.log("Task Created:", newTask);

//     closeModal();
//   };

//   return (
//     <div className="dashboard">
//       <h1>Dashboard</h1>

//       {/* Create Task Button */}
//       <button
//         onClick={openModal}
//         style={{
//           padding: "10px 20px",
//           background: "#2ecc71",
//           color: "#fff",
//           border: "none",
//           borderRadius: "5px",
//           cursor: "pointer",
//           marginBottom: "20px",
//         }}
//       >
//         Create Task
//       </button>

//       {/* Popup Modal */}
//       {showModal && (
//         <div
//           style={{
//             position: "fixed",
//             top: 0,
//             left: 0,
//             width: "100%",
//             height: "100%",
//             background: "rgba(0,0,0,0.5)",
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center",
//             zIndex: 1000,
//           }}
//         >
//           <div
//             style={{
//               width: "400px",
//               background: "#fff",
//               padding: "20px",
//               borderRadius: "10px",
//               boxShadow: "0 0 10px rgba(0,0,0,0.3)",
//             }}
//           >
//             <h2>Create New Task</h2>

//             {/* Title */}
//             <label>Title *</label>
//             <input
//               type="text"
//               placeholder="Enter task title"
//               value={title}
//               onChange={(e) => setTitle(e.target.value)}
//               style={{
//                 width: "100%",
//                 padding: "8px",
//                 marginBottom: "10px",
//                 borderRadius: "5px",
//                 border: "1px solid #ccc",
//               }}
//             />

//             {/* Description */}
//             <label>Description</label>
//             <textarea
//               placeholder="Enter task description"
//               value={description}
//               onChange={(e) => setDescription(e.target.value)}
//               style={{
//                 width: "100%",
//                 padding: "8px",
//                 marginBottom: "10px",
//                 borderRadius: "5px",
//                 border: "1px solid #ccc",
//               }}
//             />

//             {/* Due Date */}
//             <label>Due Date</label>
//             <input
//               type="date"
//               value={dueDate}
//               onChange={(e) => setDueDate(e.target.value)}
//               style={{
//                 width: "100%",
//                 padding: "8px",
//                 marginBottom: "10px",
//                 borderRadius: "5px",
//                 border: "1px solid #ccc",
//               }}
//             />

//             {/* Status */}
//             <label>Status *</label>
//             <select
//               value={status}
//               onChange={(e) => setStatus(e.target.value)}
//               style={{
//                 width: "100%",
//                 padding: "8px",
//                 marginBottom: "20px",
//                 borderRadius: "5px",
//                 border: "1px solid #ccc",
//               }}
//             >
//               <option value="Pending">Pending</option>
//               <option value="Completed">Completed</option>
//             </select>

//             {/* Buttons */}
//             <div style={{ display: "flex", justifyContent: "space-between" }}>
//               <button
//                 onClick={closeModal}
//                 style={{
//                   padding: "10px 15px",
//                   background: "#e74c3c",
//                   color: "#fff",
//                   border: "none",
//                   borderRadius: "5px",
//                   cursor: "pointer",
//                 }}
//               >
//                 Cancel
//               </button>

//               <button
//                 onClick={handleCreateTask}
//                 style={{
//                   padding: "10px 15px",
//                   background: "#2ecc71",
//                   color: "#fff",
//                   border: "none",
//                   borderRadius: "5px",
//                   cursor: "pointer",
//                 }}
//               >
//                 Create Task
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Dashboard;








// import React, { useState } from "react";

// const Dashboard = () => {
//   const [showModal, setShowModal] = useState(false);
//   const [title, setTitle] = useState("");
//   const [description, setDescription] = useState("");
//   const [dueDate, setDueDate] = useState("");
//   const [status, setStatus] = useState("Pending");

//   // NEW: tasks array to store created tasks
//   const [tasks, setTasks] = useState([]);

//   const openModal = () => setShowModal(true);
//   const closeModal = () => {
//     setShowModal(false);
//     setTitle("");
//     setDescription("");
//     setDueDate("");
//     setStatus("Pending");
//   };

//   const handleCreateTask = () => {
//     if (!title) {
//       alert("Title is required!");
//       return;
//     }

//     const newTask = { title, description, dueDate, status, id: Date.now() };
//     setTasks([...tasks, newTask]); // ADD TO TASKS STATE

//     closeModal();
//   };

//   const handleDeleteTask = (id) => {
//     setTasks(tasks.filter((task) => task.id !== id));
//   };

//   const toggleStatus = (id) => {
//     setTasks(
//       tasks.map((task) =>
//         task.id === id
//           ? { ...task, status: task.status === "Pending" ? "Completed" : "Pending" }
//           : task
//       )
//     );
//   };

//   return (
//     <div className="dashboard" style={{ padding: "20px" }}>
//       <h1>Dashboard</h1>

//       {/* Create Task Button */}
//       <button
//         onClick={openModal}
//         style={{
//           padding: "10px 20px",
//           background: "#2ecc71",
//           color: "#fff",
//           border: "none",
//           borderRadius: "5px",
//           cursor: "pointer",
//           marginBottom: "20px",
//         }}
//       >
//         Create Task
//       </button>

//       {/* Popup Modal */}
//       {showModal && (
//         <div
//           style={{
//             position: "fixed",
//             top: 0,
//             left: 0,
//             width: "100%",
//             height: "100%",
//             background: "rgba(0,0,0,0.5)",
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center",
//             zIndex: 1000,
//           }}
//         >
//           <div
//             style={{
//               width: "400px",
//               background: "#fff",
//               padding: "20px",
//               borderRadius: "10px",
//               boxShadow: "0 0 10px rgba(0,0,0,0.3)",
//             }}
//           >
//             <h2>Create New Task</h2>

//             <label>Title *</label>
//             <input
//               type="text"
//               placeholder="Enter task title"
//               value={title}
//               onChange={(e) => setTitle(e.target.value)}
//               style={{ width: "100%", padding: "8px", marginBottom: "10px", borderRadius: "5px", border: "1px solid #ccc" }}
//             />

//             <label>Description</label>
//             <textarea
//               placeholder="Enter task description"
//               value={description}
//               onChange={(e) => setDescription(e.target.value)}
//               style={{ width: "100%", padding: "8px", marginBottom: "10px", borderRadius: "5px", border: "1px solid #ccc" }}
//             />

//             <label>Due Date</label>
//             <input
//               type="date"
//               value={dueDate}
//               onChange={(e) => setDueDate(e.target.value)}
//               style={{ width: "100%", padding: "8px", marginBottom: "10px", borderRadius: "5px", border: "1px solid #ccc" }}
//             />

//             <label>Status *</label>
//             <select
//               value={status}
//               onChange={(e) => setStatus(e.target.value)}
//               style={{ width: "100%", padding: "8px", marginBottom: "20px", borderRadius: "5px", border: "1px solid #ccc" }}
//             >
//               <option value="Pending">Pending</option>
//               <option value="Completed">Completed</option>
//             </select>

//             <div style={{ display: "flex", justifyContent: "space-between" }}>
//               <button
//                 onClick={closeModal}
//                 style={{ padding: "10px 15px", background: "#e74c3c", color: "#fff", border: "none", borderRadius: "5px", cursor: "pointer" }}
//               >
//                 Cancel
//               </button>
//               <button
//                 onClick={handleCreateTask}
//                 style={{ padding: "10px 15px", background: "#2ecc71", color: "#fff", border: "none", borderRadius: "5px", cursor: "pointer" }}
//               >
//                 Create Task
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* TASK LIST */}
//       <div style={{ marginTop: "30px" }}>
//         {tasks.length === 0 ? (
//           <p>No tasks yet.</p>
//         ) : (
//           tasks.map((task) => (
//             <div key={task.id} style={{ border: "1px solid #ccc", borderRadius: "5px", padding: "10px", marginBottom: "10px" }}>
//               <h3>{task.title}</h3>
//               <p>{task.description}</p>
//               {task.dueDate && <p>Due: {task.dueDate}</p>}
//               <p>Status: {task.status}</p>
//               <div style={{ display: "flex", gap: "10px" }}>
//                 <button onClick={() => toggleStatus(task.id)} style={{ padding: "5px 10px" }}>
//                   Toggle Status
//                 </button>
//                 <button onClick={() => handleDeleteTask(task.id)} style={{ padding: "5px 10px", background: "#e74c3c", color: "#fff", border: "none" }}>
//                   Delete
//                 </button>
//               </div>
//             </div>
//           ))
//         )}
//       </div>
//     </div>
//   );
// };

// export default Dashboard;














import React, { useState } from "react";

const Dashboard = () => {
  const [showModal, setShowModal] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [status, setStatus] = useState("Pending");
  const [tasks, setTasks] = useState([]);

  const openModal = () => setShowModal(true);
  const closeModal = () => {
    setShowModal(false);
    setTitle("");
    setDescription("");
    setDueDate("");
    setStatus("Pending");
  };

  const handleCreateTask = () => {
    if (!title) {
      alert("Title is required!");
      return;
    }

    const newTask = { title, description, dueDate, status, id: Date.now() };
    setTasks([...tasks, newTask]);
    closeModal();
  };

  const handleDeleteTask = (id) => setTasks(tasks.filter((task) => task.id !== id));

  const toggleStatus = (id) =>
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, status: task.status === "Pending" ? "Completed" : "Pending" }
          : task
      )
    );

  return (
    <div style={{ padding: "40px", fontFamily: "Arial, sans-serif", background: "#f0f2f5", minHeight: "100vh" }}>
      <h1 style={{ textAlign: "center", marginBottom: "30px", color: "#34495e" }}>Dashboard</h1>

      {/* Create Task Button */}
      <div style={{ textAlign: "center", marginBottom: "30px" }}>
        <button
          onClick={openModal}
          style={{
            padding: "12px 25px",
            background: "#3498db",
            color: "#fff",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            fontWeight: "bold",
            transition: "0.3s",
          }}
          onMouseOver={(e) => (e.target.style.background = "#2980b9")}
          onMouseOut={(e) => (e.target.style.background = "#3498db")}
        >
          + Create Task
        </button>
      </div>

      {/* Modal */}
      {showModal && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(0,0,0,0.6)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
          }}
        >
          <div
            style={{
              width: "400px",
              background: "#fff",
              padding: "30px",
              borderRadius: "15px",
              boxShadow: "0 10px 25px rgba(0,0,0,0.3)",
              position: "relative",
              animation: "fadeIn 0.3s ease",
            }}
          >
            <h2 style={{ marginBottom: "20px", color: "#2c3e50" }}>New Task</h2>

            <label style={{ fontWeight: "bold", color: "#34495e" }}>Title *</label>
            <input
              type="text"
              placeholder="Enter task title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              style={{
                width: "100%",
                padding: "10px",
                margin: "8px 0 15px",
                borderRadius: "6px",
                border: "1px solid #ccc",
                outline: "none",
              }}
            />

            <label style={{ fontWeight: "bold", color: "#34495e" }}>Description</label>
            <textarea
              placeholder="Enter task description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              style={{
                width: "100%",
                padding: "10px",
                margin: "8px 0 15px",
                borderRadius: "6px",
                border: "1px solid #ccc",
                outline: "none",
                resize: "vertical",
              }}
            />

            <label style={{ fontWeight: "bold", color: "#34495e" }}>Due Date</label>
            <input
              type="date"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
              style={{
                width: "100%",
                padding: "10px",
                margin: "8px 0 15px",
                borderRadius: "6px",
                border: "1px solid #ccc",
              }}
            />

            <label style={{ fontWeight: "bold", color: "#34495e" }}>Status *</label>
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              style={{
                width: "100%",
                padding: "10px",
                margin: "8px 0 20px",
                borderRadius: "6px",
                border: "1px solid #ccc",
              }}
            >
              <option value="Pending">Pending</option>
              <option value="Completed">Completed</option>
            </select>

            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <button
                onClick={closeModal}
                style={{
                  padding: "10px 15px",
                  background: "#e74c3c",
                  color: "#fff",
                  border: "none",
                  borderRadius: "6px",
                  cursor: "pointer",
                  fontWeight: "bold",
                  transition: "0.3s",
                }}
                onMouseOver={(e) => (e.target.style.background = "#c0392b")}
                onMouseOut={(e) => (e.target.style.background = "#e74c3c")}
              >
                Cancel
              </button>

              <button
                onClick={handleCreateTask}
                style={{
                  padding: "10px 15px",
                  background: "#2ecc71",
                  color: "#fff",
                  border: "none",
                  borderRadius: "6px",
                  cursor: "pointer",
                  fontWeight: "bold",
                  transition: "0.3s",
                }}
                onMouseOver={(e) => (e.target.style.background = "#27ae60")}
                onMouseOut={(e) => (e.target.style.background = "#2ecc71")}
              >
                Create
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Task List */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
          gap: "20px",
          marginTop: "30px",
        }}
      >
        {tasks.length === 0 ? (
          <p style={{ gridColumn: "1/-1", textAlign: "center", color: "#7f8c8d" }}>No tasks yet.</p>
        ) : (
          tasks.map((task) => (
            <div
              key={task.id}
              style={{
                background: "#fff",
                padding: "20px",
                borderRadius: "12px",
                boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
                transition: "transform 0.2s",
              }}
              onMouseOver={(e) => (e.currentTarget.style.transform = "translateY(-5px)")}
              onMouseOut={(e) => (e.currentTarget.style.transform = "translateY(0)")}
            >
              <h3 style={{ marginBottom: "10px", color: "#2c3e50" }}>{task.title}</h3>
              <p style={{ marginBottom: "10px", color: "#7f8c8d" }}>{task.description}</p>
              {task.dueDate && <p style={{ marginBottom: "10px", color: "#34495e" }}>Due: {task.dueDate}</p>}
              <p style={{ marginBottom: "15px" }}>
                Status:{" "}
                <span style={{ fontWeight: "bold", color: task.status === "Pending" ? "#e67e22" : "#27ae60" }}>
                  {task.status}
                </span>
              </p>
              <div style={{ display: "flex", gap: "10px" }}>
                <button
                  onClick={() => toggleStatus(task.id)}
                  style={{
                    padding: "8px 12px",
                    borderRadius: "6px",
                    border: "none",
                    cursor: "pointer",
                    background: "#3498db",
                    color: "#fff",
                    transition: "0.3s",
                  }}
                  onMouseOver={(e) => (e.target.style.background = "#2980b9")}
                  onMouseOut={(e) => (e.target.style.background = "#3498db")}
                >
                  Toggle Status
                </button>
                <button
                  onClick={() => handleDeleteTask(task.id)}
                  style={{
                    padding: "8px 12px",
                    borderRadius: "6px",
                    border: "none",
                    cursor: "pointer",
                    background: "#e74c3c",
                    color: "#fff",
                    transition: "0.3s",
                  }}
                  onMouseOver={(e) => (e.target.style.background = "#c0392b")}
                  onMouseOut={(e) => (e.target.style.background = "#e74c3c")}
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Dashboard;
