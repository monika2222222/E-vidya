import React, { useState } from "react";



const Attendance = () => {
  const [attendance, setAttendance] = useState({});
  const [selectedDate, setSelectedDate] = useState(new Date());
  const totalDays = 30; // Example total days in the month (you can calculate this dynamically)
  const attendanceThreshold = 75; // Percentage for low attendance warning

  // Function to toggle attendance for the selected date
  const toggleAttendance = (date) => {
    const dateString = date.toISOString().split("T")[0]; // Format as YYYY-MM-DD
    setAttendance((prev) => ({
      ...prev,
      [dateString]: !prev[dateString],
    }));
  };

  // Calculate attendance percentage
  const presentDays = Object.values(attendance).filter(Boolean).length;
  const attendancePercentage = ((presentDays / totalDays) * 100).toFixed(2);

  return (
    <div className="p-5 bg-white shadow-lg rounded-md">
      <h1 className="text-3xl font-bold mb-4">Attendance</h1>

      {/* Attendance Calendar */}
      <Calendar
        onClickDay={(date) => toggleAttendance(date)}
        value={selectedDate}
        tileClassName={({ date }) => {
          const dateString = date.toISOString().split("T")[0];
          if (attendance[dateString] === true) return "bg-green-500 text-white";
          if (attendance[dateString] === false) return "bg-red-500 text-white";
          return "";
        }}
      />

      {/* Attendance Summary */}
      <div className="mt-6">
        <h2 className="text-2xl font-semibold">Attendance Summary</h2>
        <p className="mt-2 text-lg">
          Total Days Marked: <span className="font-bold">{presentDays}</span> /{" "}
          {totalDays}
        </p>
        <p className="text-lg">
          Attendance Percentage:{" "}
          <span
            className={`font-bold ${
              attendancePercentage < attendanceThreshold ? "text-red-500" : "text-green-500"
            }`}
          >
            {attendancePercentage}%
          </span>
        </p>

        {/* Low Attendance Warning */}
        {attendancePercentage < attendanceThreshold && (
          <div className="mt-4 bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4">
            <p className="font-semibold">
              Warning: Your attendance is below the required {attendanceThreshold}%!
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Attendance;
