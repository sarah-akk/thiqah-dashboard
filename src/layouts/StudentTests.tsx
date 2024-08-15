import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

interface Test {
  id: number;
  testName: string;
  section: string;
  score: number;
  status: "ناجح" | "راسب";
}

const initialTests: Test[] = [
  {
    id: 1,
    testName: "اختبار الرياضيات",
    section: "الرياضيات",
    score: 85,
    status: "ناجح",
  },
  {
    id: 2,
    testName: "اختبار العلوم",
    section: "العلوم",
    score: 70,
    status: "راسب",
  },
  {
    id: 3,
    testName: "اختبار اللغة العربية",
    section: "اللغة العربية",
    score: 90,
    status: "ناجح",
  },
  {
    id: 4,
    testName: "اختبار اللغة الإنجليزية",
    section: "اللغة الإنجليزية",
    score: 75,
    status: "ناجح",
  },
];

const StudentTests: React.FC = () => {
  const [selectedSection, setSelectedSection] = useState<string>("all");
  const [tests] = useState<Test[]>(initialTests);
  const navigate = useNavigate();
  const handleSectionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedSection(event.target.value);
  };

  const filteredTests =
    selectedSection === "all"
      ? tests
      : tests.filter((test) => test.section === selectedSection);

  return (
    <div
      className="p-6 bg-gray-50 min-h-screen mt-15"
      style={{ direction: "rtl" }}
    >
      <div className="max-w-6xl mx-auto bg-white shadow-md rounded-lg p-6">
        <button
          onClick={() => navigate(-1)}
          className="left-20 absolute mb-4 px-4 py-2 bg-gray-500 text-white bg-orange-400 font-semibold rounded-lg 
          shadow-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-400"
        >
          عودة
        </button>
        <h1 className="text-2xl font-semibold mb-4 text-gray-800">
          اختبارات الطالب
        </h1>

        {/* Filter section */}
        <div className="mb-4 flex items-center">
          <label htmlFor="section" className="text-gray-700 mr-3">
            اختر القسم:
          </label>
          <select
            id="section"
            value={selectedSection}
            onChange={handleSectionChange}
            className="px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 mr-3"
          >
            <option value="all">جميع الأقسام</option>
            <option value="الرياضيات">الرياضيات</option>
            <option value="العلوم">العلوم</option>
            <option value="اللغة العربية">اللغة العربية</option>
            <option value="اللغة الإنجليزية">اللغة الإنجليزية</option>
          </select>

          <label htmlFor="section" className="text-gray-700 mr-3"></label>
          <select
            id="section"
            value={selectedSection}
            onChange={handleSectionChange}
            className="px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 mr-3"
          >
            <option value="all"> حالة الاختبار</option>
            <option value="all"> ناجح</option>
            <option value="الرياضيات">راسب</option>
          </select>
        </div>

        {/* Table for displaying test data */}
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  اسم الاختبار
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  القسم التابع له
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  العلامة
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  النتيجة
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredTests.map((test) => (
                <tr key={test.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {test.testName}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {test.section}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {test.score} / 100
                  </td>
                  <td
                    className={`px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-900 ${test.status == "راسب" ? "text-red-600" : "text-green-600"}`}
                  >
                    {test.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default StudentTests;
