import React, { useState } from "react";
import sectionsData from "../data/sectionsData";
import { FaEdit, FaTrashAlt, FaPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

interface Section {
  id: number;
  name: string;
  description: string;
  image: string;
}

const Sections: React.FC = () => {
  const navigate = useNavigate();
  const [sections, setSections] = useState<Section[]>(sectionsData);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newSection, setNewSection] = useState({
    name: "",
    description: "",
    image: "",
  });

  const handleEdit = (id: number) => {
    console.log(`Edit section with id: ${id}`);
  };

  const handleDelete = (id: number) => {
    console.log(`Delete section with id: ${id}`);
  };

  const handleAddSection = () => {
    if (newSection.name && newSection.description && newSection.image) {
      setSections((prevSections) => [
        ...prevSections,
        { id: Date.now(), ...newSection }, // Assign a unique ID
      ]);
      setNewSection({ name: "", description: "", image: "" }); // Clear the form
      setIsModalOpen(false); // Close the modal
    }
  };

  const handleModalChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setNewSection((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen mt-18">
      {/* Button to add new section */}
      <div className="flex justify-start mb-4">
        <button
          onClick={() => setIsModalOpen(true)}
          className="flex items-center space-x-2 px-4 py-2 bg-blue-500 text-white rounded shadow-lg hover:bg-blue-600"
        >
          <FaPlus />
          <span>اضافة قسم</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-right">
        {sections.map((section: Section) => (
          <div
            key={section.id}
            onClick={() => navigate(`/home/sections/${section.id}`)}
            className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 relative"
          >
            <img
              src={section.image}
              alt={section.name}
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2 text-gray-800">
                {section.name}
              </h2>
              <p className="text-gray-600">{section.description}</p>
            </div>
            {/* Action icons */}
            <div className="absolute top-2 right-2 flex space-x-2">
              <button
                onClick={() => handleEdit(section.id)}
                className="text-blue-500 hover:text-blue-700"
              >
                <FaEdit />
              </button>
              <button
                onClick={() => handleDelete(section.id)}
                className="text-red-500 hover:text-red-700"
              >
                <FaTrashAlt />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for adding a new section */}
      {isModalOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50 bg-black"
          style={{ direction: "rtl" }}
        >
          <div className="bg-white p-6 rounded-lg shadow-lg w-80">
            <h2 className="text-xl font-semibold mb-4">إضافة قسم جديد</h2>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleAddSection();
              }}
            >
              <label className="block mb-2">
                الاسم:
                <input
                  type="text"
                  name="name"
                  value={newSection.name}
                  onChange={handleModalChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                  required
                />
              </label>
              <label className="block mb-2">
                الوصف:
                <textarea
                  name="description"
                  value={newSection.description}
                  onChange={handleModalChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                  required
                />
              </label>
              <label className="form-label">
                اضف صورة
                <input
                  type="file"
                  name="profile_picture"
                  accept="image/*"
                  // onChange={handleChange}
                  className="form-input"
                />
              </label>
              <div className="flex justify-end mt-4">
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
                >
                  إضافة
                </button>
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="ml-2 px-4 py-2 bg-gray-300 text-gray-700 font-semibold rounded-lg shadow-md hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500"
                >
                  إغلاق
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sections;
