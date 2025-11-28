import React from "react";

const users = [
  { name: "Alice", role: "Admin" },
  { name: "Bob", role: "User" },
];

const AdminPanel = () => {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold text-green-600 mb-4">Admin Panel</h1>
      <table className="w-full border">
        <thead>
          <tr className="bg-green-200">
            <th className="border px-4 py-2">Name</th>
            <th className="border px-4 py-2">Role</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, idx) => (
            <tr key={idx}>
              <td className="border px-4 py-2">{user.name}</td>
              <td className="border px-4 py-2">{user.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminPanel;
