// StudentInterface.jsx
import React from "react";

const StudentInterface = () => {
  return (
    <div className="p-6">

         {/* Dashboard Title */}
      <h1 className="text-3xl font-bold mb-2 text-center">Student Dashboard</h1>


      {/* Student-related Image */}
      <div className="text-center mb-2">

        <img src="https://i.ibb.co/BCFNPyH/IMG-20241027-200502.png" alt="E-Vidya" border="0" class="h-[50vh] mx-auto mt-2"></img>

      </div>

      {/* Dashboard Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Example Card for Attendance */}
        <div className="bg-purple-200 p-4 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold">Attendance</h2>
          <p className="mt-2">View your attendance record.</p>
        </div>

        {/* Example Card for Marks */}
        <div className="bg-purple-200 p-4 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold">Marks</h2>
          <p className="mt-2">Check your test scores and grades.</p>
        </div>

        {/* Example Card for Assignments */}
        <div className="bg-purple-200 p-4 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold">Assignments</h2>
          <p className="mt-2">View and submit assignments.</p>
        </div>

        {/* Example Card for Reports */}
        <div className="bg-purple-200 p-4 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold">Reports</h2>
          <p className="mt-2">Download your progress report.</p>
        </div>

        {/* Example Card for Profile */}
        <div className="bg-purple-200 p-4 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold">Profile</h2>
          <p className="mt-2">View and update your personal information.</p>
        </div>
      </div>
    </div>
  );
};

export default StudentInterface;
