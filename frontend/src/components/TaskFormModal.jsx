import React from "react";

const TaskFormModal = ({ onSubmit }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <form className="bg-white p-4 rounded-md" onSubmit={onSubmit}>
        <input className="border p-2 w-full mb-2" placeholder="Title" />
        <textarea className="border p-2 w-full mb-2" placeholder="Description" />
        <button className="bg-green-600 text-white px-4 py-2 rounded">Add Task</button>
      </form>
    </div>
  );
};

export default TaskFormModal;
