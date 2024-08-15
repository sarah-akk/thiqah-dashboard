import React, { useState } from "react";
import { FaEdit, FaTrashAlt, FaPlus } from "react-icons/fa";

// Student interface
interface Student {
  id: number;
  name: string;
  grade: number;
  rank: number;
  test: number;
}

// Modal component for adding a student
const AddStudentModal: React.FC<{
  isOpen: boolean;
  onClose: () => void;
  onAdd: (student: Student) => void;
}> = ({ isOpen, onClose, onAdd }) => {
  const [name, setName] = useState("");
  const [grade, setGrade] = useState<number | "">(0);
  const [rank, setRank] = useState<number | "">(0);
  const [test, setTest] = useState<number | "">(0);

  const handleSubmit = () => {
    if (name && grade && rank && test) {
      onAdd({ id: Date.now(), name, grade, rank, test });
      setName("");
      setGrade(0);
      setRank(0);
      setTest(0);
      onClose();
    }
  };

  return isOpen ? (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 bg-black">
      <div className="bg-white p-6 rounded-lg shadow-lg w-80">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">إضافة طالب</h2>
        <label className="block mb-2">
          الاسم:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </label>
        <label className="block mb-2">
          الترتيب:
          <input
            type="number"
            value={rank}
            onChange={(e) => setRank(Number(e.target.value))}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </label>
        <label className="block mb-2">
          العلامة:
          <input
            type="number"
            value={grade}
            onChange={(e) => setGrade(Number(e.target.value))}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </label>
        <label className="block mb-2">
          عدد الاختبارات:
          <input
            type="number"
            value={test}
            onChange={(e) => setTest(Number(e.target.value))}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </label>
        <div className="flex justify-end mt-4 gap-4">
          <button
            onClick={handleSubmit}
            className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            إضافة
          </button>
          <button
            onClick={onClose}
            className="ml-2 px-4 py-2 bg-gray-300 text-gray-700 font-semibold rounded-lg shadow-md hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500"
          >
            إغلاق
          </button>
        </div>
      </div>
    </div>
  ) : null;
};

// Main OutStanding component
const OutStanding: React.FC = () => {
  const [students, setStudents] = useState<Student[]>([
    { id: 1, name: "Ahmed", grade: 95, rank: 1, test: 12 },
    { id: 2, name: "Sara", grade: 90, rank: 2, test: 12 },
    { id: 3, name: "Ali", grade: 85, rank: 3, test: 12 },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddStudent = (student: Student) => {
    setStudents((prevStudents) => [...prevStudents, student]);
  };

  return (
    <div
      className="max-w-5xl mx-auto mt-20 p-6 bg-gray-50 shadow-lg rounded-lg"
      style={{ direction: "rtl" }}
    >
      <h1 className="text-2xl font-semibold mb-6 text-gray-800">
        الطلاب الأوائل
      </h1>
      <ul className="space-y-4">
        {students.map((student) => (
          <li
            key={student.id}
            className="bg-white p-4 rounded-lg shadow-md flex justify-between items-center"
          >
            <div>
              <div className="text-lg font-bold text-gray-800 bg-orange-100 p-2 rounded">
                {student.name}
              </div>
              <div className="text-pink-600 font-semibold mt-1">
                الترتيب: {student.rank}
              </div>
              <div className="text-yellow-500 font-semibold mt-1">
                العلامة: {student.grade} / 100
              </div>
              <div className="text-gray-600 mt-1">
                عدد الاختبارات: {student.test}
              </div>
            </div>
            <div className="flex space-x-3">
              <button className="text-blue-600 hover:text-blue-700">
                <FaEdit />
              </button>
              <button className="text-red-600 hover:text-red-700">
                <FaTrashAlt />
              </button>
            </div>
          </li>
        ))}
      </ul>
      <button
        onClick={() => setIsModalOpen(true)}
        className="mt-6 px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        إضافة طالب
      </button>
      <AddStudentModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAdd={handleAddStudent}
      />
    </div>
  );
};

export default OutStanding;
