import React from "react";

const ProfileModal = ({ userInfo, handleLogout, closeModal }) => {
  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
      onClick={closeModal}
    >
      <div
        className="bg-white p-6 rounded-lg w-80"
        onClick={(e) => e.stopPropagation()} // Prevent closing the modal when clicking inside
      >
        <h2 className="text-2xl font-semibold mb-4">My Profile</h2>
        
        {/* Display user info */}
        <div className="mb-4">
          <p className="font-medium">Username: {userInfo.username}</p>
          <p className="font-medium">Email: {userInfo.email}</p>
          <p className="font-medium">Role: {userInfo.role}</p>
        </div>

        {/* Logout Button */}
        <button
          onClick={handleLogout}
          className="w-full py-2 bg-red-500 text-white font-bold rounded-lg hover:bg-red-600 transition"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default ProfileModal;
