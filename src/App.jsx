import React, { useState } from "react";
import "./App.css";
import StaffInterface from "./components/StaffInterface";
import StudentInterface from "./components/StudentInterface";
import NavBar from "./components/Navbar";
import Login from "./components/login";

function App() {
  const [role, setRole] = useState("none"); // Tracks user role ("none", "student", "staff")
  const [visibleComponent, setVisibleComponent] = useState("home"); // Controls main content
  const [userInfo, setUserInfo] = useState(null); // Tracks logged-in user info
  const [isProfileModalOpen, setProfileModalOpen] = useState(false); // Controls modal visibility

  const handleLogout = () => {
    setRole("none"); // Reset to login screen
    setVisibleComponent("home");
    setUserInfo(null);
  };

  return (
    <div>
      {role === "none" && <Login setRole={setRole} setUserInfo={setUserInfo} />}
      {role !== "none" && (
        <>
          {/* Navbar with Logout and MyProfile */}
          <NavBar
            setVisibleComponent={setVisibleComponent}
            visibleComponent={visibleComponent}
            handleLogout={handleLogout}
            userInfo={userInfo}
            openProfileModal={() => setProfileModalOpen(true)} // Open profile modal
          />
          {/* Render interfaces */}
          {role === "student" && <StudentInterface />}
          {role === "staff" && <StaffInterface />}

          {/* MyProfile Modal */}
          {isProfileModalOpen && (
            <div className="fixed inset-0 flex justify-center items-center bg-gray-800 bg-opacity-50 z-50">
              <div className="bg-white p-6 rounded-lg w-[300px] shadow-lg">
                <h2 className="text-xl font-semibold mb-4">My Profile</h2>
                <p><strong>Username:</strong> {userInfo.username}</p>
                <p><strong>Role:</strong> {userInfo.role === "student" ? "Student" : "Staff"}</p>

                <div className="flex gap-4 mt-2">
                  <button
                    onClick={handleLogout}
                    className="gap-2 bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-red-600 shadow-lg transition-transform transform active:scale-95"
                  >
                    <i className="fa-solid fa-sign-out-alt text-lg"></i> Logout
                  </button>

                  <button
                    onClick={() => setProfileModalOpen(false)} // Close modal
                    className=" bg-blue-500 text-white font-bold py-2 px-8 rounded-lg hover:bg-red-600 shadow-lg transition-transform transform active:scale-90"
                  >
                    Close
                  </button>
                </div>


              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default App;
