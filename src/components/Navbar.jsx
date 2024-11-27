import React from "react";

const NavBar = ({ setVisibleComponent, visibleComponent, handleLogout, openProfileModal, openNotificationsModal }) => {
  return (
    <nav className="h-[10vh] flex items-center sticky top-0 w-full bg-slate-900 px-4">
      {/* Logo and Title */}
      <img
        className="h-[11vh] w-[5vw] my-auto ml-[2px] cursor-pointer"
        src="https://i.ibb.co/vYhTFh4/E-Back-Logo.png"
        alt="E-Vidya"
        onClick={() => setVisibleComponent("home")}
      />
      <h1 className="font-bold text-2xl my-auto text-white ml-2">E-Vidya</h1>

      {/* Spacer to push buttons to the right */}
      <div className="flex-grow"></div>

      {/* Home Button */}
      {visibleComponent !== "home" && (
        <button
          onClick={() => setVisibleComponent("home")}
          className="mr-4 flex items-center gap-2 bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600 shadow-lg transition-transform transform active:scale-95"
        >
          <i className="fa-solid fa-house text-lg"></i> Home
        </button>
      )}

      {/* MyProfile Button */}
      <button
        onClick={openProfileModal} // Open profile modal
        className="mr-4 mt-2 flex items-center justify-center bg-yellow-500 text-white font-bold w-12 h-12 rounded-full hover:bg-blue-600 shadow-lg transition-transform transform active:scale-95"
      >
        <i className="fa-solid fa-user text-lg" alt="MY profile"></i>
      </button>

      {/* Notification Bell Icon */}
      <button
        onClick={openNotificationsModal} // Open notifications modal (you can add this modal handler)
        className="mr-4 mt-2 flex items-center justify-center bg-red-500 text-white font-bold w-12 h-12 rounded-full hover:bg-blue-600 shadow-lg transition-transform transform active:scale-95"
      >
        <i className="fa-solid fa-bell text-lg"></i>
      </button>

      
    </nav>
  );
};

export default NavBar;
