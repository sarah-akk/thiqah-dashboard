import React, { useState } from "react";
import { FaSearch, FaEye, FaShoppingCart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

interface Student {
  id: number;
  name: string;
  phone: string;
  orderStatus: string;
  amount: string;
}

const initialStudents: Student[] = [
  {
    id: 1,
    name: "Ahmed Ali",
    phone: "+1234567890",
    orderStatus: "تم الدفع",
    amount: "20$",
  },
  {
    id: 2,
    name: "Sara Mohammed",
    phone: "+0987654321",
    orderStatus: "لم يتم الدفع",
    amount: "0$",
  },
  {
    id: 3,
    name: "Omar Ibrahim",
    phone: "+1122334455",
    orderStatus: "تم الدفع",
    amount: "20$",
  },
];

const Students: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [students, setStudents] = useState<Student[]>(initialStudents);
  const navigate = useNavigate();

  const filteredStudents = students.filter(
    (student) =>
      student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.phone.includes(searchTerm)
  );

  return (
    <div
      className="p-6 bg-gray-50 min-h-screen mt-15"
      style={{ direction: "rtl" }}
    >
      <h1 className="text-2xl font-semibold mb-6 text-gray-800">الطلاب</h1>

      <div className="mb-4 flex items-center">
        <input
          type="text"
          placeholder="بحث بالاسم أو رقم الهاتف"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button className="mr-2 p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400">
          <FaSearch />
        </button>
      </div>

      <div className="overflow-x-auto bg-white rounded-lg shadow-md">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                اسم الطالب
              </th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                رقم الهاتف
              </th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                الاختبارات
              </th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                حالة الدفع
              </th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                قيمة الدفعة
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredStudents.map((student) => (
              <tr key={student.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {student.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {student.phone}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium items-center">
                  <button
                    className="text-blue-500 hover:text-blue-700"
                    onClick={() => navigate("/home/students/tests")}
                  >
                    <FaEye title="عرض الاختبارات" size={20} />
                  </button>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {student.orderStatus}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {student.amount}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium items-center">
                  <button className="text-white bg-red-700 hover:bg-red-900 p-1 rounded">
                    الغاء الاشتراك
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Students;
