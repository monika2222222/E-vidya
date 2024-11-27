import React, { useState } from "react";

const Login = ({ setRole, setUserInfo }) => {
  const [role, setLoginRole] = useState(""); // Track whether user selected 'student' or 'staff'
  const [formData, setFormData] = useState({ username: "", password: "" });

  const handleLogin = () => {
    if (formData.username && formData.password) {
      setUserInfo({ username: formData.username, role });
      setRole(role); // Set role based on selected login type
    } else {
      alert("Please fill out both fields!");
    }
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-slate-100">
      <h1 className="text-4xl font-bold mb-8">Welcome to E-Vidya</h1>

      {/* Login Role Selection */}
      {!role && (
        <div className="flex gap-5">
          <button
            onClick={() => setLoginRole("student")}
            className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition"
          >
            Student Login
          </button>
          <button
            onClick={() => setLoginRole("staff")}
            className="px-6 py-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition"
          >
            Staff Login
          </button>
        </div>
      )}

      {/* Login Form */}
      {role && (
        <div className="w-96 p-6 bg-white shadow-md rounded-lg mt-6 bg-[url('https://i.ibb.co/vYhTFh4/E-Back-Logo.png')] bg-contain bg-no-repeat bg-center opacity-7">
          <h2 className="text-xl font-bold mb-4">
            {role === "student" ? "Student Login" : "Staff Login"}
          </h2>
          <div className="mb-4">
            <label className="block text-black-700 font-medium mb-2">
              Username
            </label>
            <input
              type="text"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.username}
              onChange={(e) =>
                setFormData({ ...formData, username: e.target.value })
              }
              placeholder="Enter your username"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              Password
            </label>
            <input
              type="password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
              placeholder="Enter your password"
            />
          </div>
          <button
            onClick={handleLogin}
            className="w-full py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition"
          >
            Login
          </button>
        </div>
      )}
    </div>
  );
};

export default Login;
