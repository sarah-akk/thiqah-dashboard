import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import sectionsData from "../data/sectionsData";
import testData from "../data/testData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

interface Section {
  id: number;
  name: string;
  description: string;
  image: string;
}

const SectionInfo: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const sectionId = Number(id);
  const section = sectionsData.find((sec: Section) => sec.id === sectionId);

  if (!section) {
    return <div className="p-6">Section not found</div>;
  }

  const handleTestClick = (testId: number) => {
    navigate(`/home/tests/${testId}`);
  };

  const handleEditClick = (testId: number) => {
    console.log(`Edit test ${testId}`);
  };

  const handleDeleteClick = (testId: number) => {
    console.log(`Delete test ${testId}`);
  };

  const handleNewTestClick = () => {
    navigate("/home/tests/new");
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen mt-18">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden text-right">
        <img
          src={section.image}
          alt={section.name}
          className="w-full h-60 object-cover"
        />
        <div className="p-4">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            {section.name}
          </h1>
          <p className="text-gray-700">{section.description}</p>
        </div>
        <div className="p-6 bg-gray-100 min-h-screen mt-18">
          <h1 className="text-2xl font-bold text-gray-900 mb-6">الاختبارات</h1>
          <button
            onClick={handleNewTestClick}
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 mb-6"
          >
            إضافة اختبار جديد
          </button>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testData.map((test) => (
              <div
                key={test.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 cursor-pointer relative"
                onClick={() => handleTestClick(test.id)}
              >
                <img
                  src={test.image}
                  alt={test.name}
                  className="w-full h-40 object-cover"
                />
                <div className="p-4">
                  <h2 className="text-xl font-semibold text-gray-800 mb-2">
                    {test.name}
                  </h2>
                  <p className="text-gray-600">{test.description}</p>
                </div>
                <div className="absolute top-2 right-2 flex space-x-2">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleEditClick(test.id);
                    }}
                    className="text-blue-500 hover:text-blue-700"
                  >
                    <FontAwesomeIcon icon={faEdit} />
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDeleteClick(test.id);
                    }}
                    className="text-red-500 hover:text-red-700"
                  >
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionInfo;
