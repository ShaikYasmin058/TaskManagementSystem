import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "../css/home.css";

const Home = () => {
  const navigate = useNavigate(); // Initialize navigate

  const handleGetStarted = () => {
    navigate("/"); // Navigate to Dashboard ("/" route)
  };

  return (
    <div className="home-container">
      <div className="hero-section">
        <h1>
          Task Management <span className="highlight">Made Simple</span>
        </h1>
        <p>
          Organize your work, track progress, and achieve your goals with our powerful task management system.
        </p>
        <button className="get-started-btn" onClick={handleGetStarted}>
          Get Started →
        </button>
      </div>

      <div className="features-section">
        <div className="feature-box">
          <div className="feature-icon">✔️</div>
          <h3>Task Organization</h3>
          <p>Create, edit, and organize tasks with titles, descriptions, and due dates.</p>
        </div>

        <div className="feature-box">
          <div className="feature-icon">✔️</div>
          <h3>Status Tracking</h3>
          <p>Track task progress with Pending, In Progress, and Completed statuses.</p>
        </div>

        <div className="feature-box">
          <div className="feature-icon">✔️</div>
          <h3>Role-Based Access</h3>
          <p>Admins can manage all tasks and users, while users manage their own tasks.</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
