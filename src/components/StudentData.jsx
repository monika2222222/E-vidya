import React, { useState } from 'react';

function StudentData() {
  const [students, setStudents] = useState([]);
  const [studentName, setStudentName] = useState('');
  const [studentRollNo, setStudentRollNo] = useState('');
  const [studentDivision, setStudentDivision] = useState('');
  const [studentEnrollment, setStudentEnrollment] = useState('');

  // Handle form submission
  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Create a new student object
    const newStudent = {
      rollNo: studentRollNo,
      division: studentDivision,
      enrollment: studentEnrollment,
      name: studentName,
    };

    // Add new student to the list
    setStudents([...students, newStudent]);

    // Reset form inputs
    setStudentName('');
    setStudentRollNo('');
    setStudentDivision('');
    setStudentEnrollment('');
  };

  return (
    <div className="container mx-auto p-6 bg-white shadow-lg rounded-lg mt-6">
      <h1 className="text-3xl font-bold text-center mb-6">Student Data</h1>

      {/* Add Student Form */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">Add Student</h2>
        <form onSubmit={handleFormSubmit} className="flex gap-4">
          <input
            type="text"
            value={studentName}
            onChange={(e) => setStudentName(e.target.value)}
            placeholder="Student Name"
            required
            className="border border-gray-300 p-2 rounded"
          />
          <input
            type="text"
            value={studentRollNo}
            onChange={(e) => setStudentRollNo(e.target.value)}
            placeholder="Roll No"
            required
            className="border border-gray-300 p-2 rounded"
          />
          <input
            type="text"
            value={studentDivision}
            onChange={(e) => setStudentDivision(e.target.value)}
            placeholder="Division (A-C)"
            required
            className="border border-gray-300 p-2 rounded"
          />
          <input
            type="text"
            value={studentEnrollment}
            onChange={(e) => setStudentEnrollment(e.target.value)}
            placeholder="Enrollment No"
            required
            className="border border-gray-300 p-2 rounded"
          />
          <button
            type="submit"
            className="bg-green-500 text-white p-2 rounded hover:bg-green-600"
          >
            Add Student
          </button>
        </form>
      </div>

      {/* Student List Table */}
      <h2 className="text-2xl font-semibold mb-4">Student List</h2>
      <table className="w-full border-collapse table-auto">
        <thead>
          <tr>
            <th className="border p-2">Roll No</th>
            <th className="border p-2">Name</th>
            <th className="border p-2">Division</th>
            <th className="border p-2">Enrollment No</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr key={index}>
              <td className="border p-2">{student.rollNo}</td>
              <td className="border p-2">{student.name}</td>
              <td className="border p-2">{student.division}</td>
              <td className="border p-2">{student.enrollment}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default StudentData;
