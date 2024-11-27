// StaffInterface.jsx
import React, { useState } from 'react';
import StudentData from './StudentData';
import Attendance from './Attendance';
import StudyMaterial from './StudyMaterial';
import MailBox from './MailBox';
import Scholarship from './Scholarship';
import Announcement from './Announcement';


const StaffInterface = () => {
  const [visibleComponent, setVisibleComponent] = useState("home");

  return (
    <div>
      
      {visibleComponent !== "home" && (
        <button
          onClick={() => setVisibleComponent("home")}
          className="mt-3 ml-auto mb-auto mr-4 flex items-center gap-2   py-2 px-3 rounded-lg  shadow-lg transition-transform transform active:scale-95 "
        >
         <i class="fa-solid fa-house" ></i>
        </button>
      )}

      {/* Banner Image */}
      {visibleComponent === "home" && (
        <div>
          <img
            src="https://i.ibb.co/LkyXWLQ/Staff.png"
            alt="E-Vidya"
            className="h-[50vh] mx-auto mt-2 object-cover"
          />
        </div>
      )}

      {/* Action Cards */}
      {visibleComponent === "home" && (
        <div className="flex flex-wrap justify-around mt-5 p-3">
          <div
            onClick={() => setVisibleComponent("studentData")}
            className="h-[18vh] w-[30vw] mb-3 sm:w-[40vw] md:w-[30vw] bg-slate-500 flex transform transition-transform duration-150 active:scale-95 cursor-pointer"
          >
            <p className="text-white text-2xl font-bold m-auto">
              <i className="fa-solid fa-graduation-cap mr-3"></i> Student Data
            </p>
          </div>

          <div
            onClick={() => setVisibleComponent("attendance")}
            className="h-[18vh] w-[30vw] sm:w-[40vw] md:w-[30vw] bg-slate-500 flex transform transition-transform duration-150 active:scale-95 cursor-pointer"
          >
            <p className="text-white text-2xl font-bold m-auto">
              <i className="fa-solid fa-calendar-check mr-3"></i> Attendance
            </p>
          </div>

          <div
            onClick={() => setVisibleComponent("studyMaterial")}
            className="h-[18vh] w-[30vw] sm:w-[40vw] md:w-[30vw] bg-slate-500 flex transform transition-transform duration-150 active:scale-95 cursor-pointer"
          >
            <p className="text-white text-2xl font-bold m-auto">
              <i className="fa-solid fa-book mr-3"></i> Study Material
            </p>
          </div>

          <div
            onClick={() => setVisibleComponent("scholarship")}
            className="h-[18vh] w-[30vw] sm:w-[40vw] md:w-[30vw] bg-slate-500 flex transform transition-transform duration-150 active:scale-95 cursor-pointer"
          >
            <p className="text-white text-2xl font-bold m-auto">
              <i className="fa-solid fa-money-check mr-3"></i> Scholarship Status
            </p>
          </div>

          <div
            onClick={() => setVisibleComponent("announcement")}
            className="h-[18vh] w-[30vw] sm:w-[40vw] md:w-[30vw] bg-slate-500 flex transform transition-transform duration-150 active:scale-95 cursor-pointer"
          >
            <p className="text-white text-2xl font-bold m-auto">
              <i className="fa-solid fa-bullhorn mr-3"></i> Announcement
            </p>
          </div>

          <div
            onClick={() => setVisibleComponent("mailbox")}
            className="h-[18vh] w-[30vw] sm:w-[40vw] md:w-[30vw] bg-slate-500 flex transform transition-transform duration-150 active:scale-95 cursor-pointer"
          >
            <p className="text-white text-2xl font-bold m-auto">
              <i className="fa-solid fa-envelope mr-3"></i> Mailbox
            </p>
          </div>
        </div>
      )}

      {/* Conditional Rendering of Components */}
      <div>
        {visibleComponent === "studentData" && <StudentData />}
        {visibleComponent === "attendance" && <Attendance />}
        {visibleComponent === "studyMaterial" && <StudyMaterial />}
        {visibleComponent === "scholarship" && <Scholarship />}
        {visibleComponent === "announcement" && <Announcement />}
        {visibleComponent === "mailbox" && <MailBox />}
      </div>
    </div>
  );
};

export default StaffInterface;
