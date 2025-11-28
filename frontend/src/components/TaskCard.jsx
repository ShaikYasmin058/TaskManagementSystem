import React from "react";

const TaskCard = ({ task, onEdit }) => {
  const statusColor =
    task.status === "Pending"
      ? "yellow"
      : task.status === "In Progress"
      ? "blue"
      : "green";

  return (
    <div className="bg-white shadow-lg p-4 rounded-lg mb-4 border-l-4 border-gray-200 hover:shadow-xl transition">
      <h3 className="font-bold text-xl mb-2">{task.title}</h3>
      <p className="text-gray-700 mb-2">{task.description}</p>
      <div className="flex items-center justify-between">
        <span className={`text-${statusColor}-600 font-semibold`}>
          {task.status}
        </span>
        <button
          onClick={() => onEdit(task)}
          className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Edit
        </button>
      </div>
    </div>
  );
};

export default TaskCard;
