import React, { useState } from "react";
import offersData from "../data/offersData";
import { FaEdit, FaTrashAlt, FaPlus } from "react-icons/fa";

interface Offer {
  id: number;
  name: string;
  description: string;
  image: string;
}

const Offers: React.FC = () => {
  const [offers, setOffers] = useState<Offer[]>(offersData);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newOffer, setNewOffer] = useState({
    name: "",
    description: "",
    image: "",
  });

  const handleEdit = (id: number) => {
    console.log(`Edit offer with id: ${id}`);
  };

  const handleDelete = (id: number) => {
    console.log(`Delete offer with id: ${id}`);
  };

  const handleAddOffer = () => {
    if (newOffer.name && newOffer.description && newOffer.image) {
      setOffers((prevOffers) => [
        ...prevOffers,
        { id: Date.now(), ...newOffer },
      ]);
      setNewOffer({ name: "", description: "", image: "" });
      setIsModalOpen(false);
    }
  };

  const handleModalChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setNewOffer((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen mt-18">
      {/* Button to add new offer */}
      <div className="flex justify-start mb-4">
        <button
          onClick={() => setIsModalOpen(true)}
          className="flex items-center space-x-2 px-4 py-2 bg-blue-500 text-white rounded shadow-lg hover:bg-blue-600"
        >
          <FaPlus />
          <span>اضافة عرض</span>
        </button>
      </div>

      <div
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
        style={{ direction: "rtl" }}
      >
        {offers.map((offer: Offer) => (
          <div
            key={offer.id}
            className="bg-white flex flex-row border border-gray-200 rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 relative"
          >
            <img
              src={offer.image}
              alt={offer.name}
              className="w-1/2 h-48 object-cover"
            />
            <div className="p-4 w-full">
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                {offer.name}
              </h2>
              <p className="text-gray-700 mb-4">{offer.description}</p>
              {/* Action icons */}
              <div className="absolute top-2 right-2 flex space-x-2">
                <button
                  onClick={() => handleEdit(offer.id)}
                  className="text-blue-500 hover:text-blue-700"
                >
                  <FaEdit />
                </button>
                <button
                  onClick={() => handleDelete(offer.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  <FaTrashAlt />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for adding a new offer */}
      {isModalOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
          style={{ direction: "rtl" }}
        >
          <div className="bg-white p-6 rounded-lg shadow-lg w-80">
            <h2 className="text-xl font-semibold mb-4">إضافة عرض جديد</h2>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleAddOffer();
              }}
            >
              <label className="block mb-2">
                الاسم:
                <input
                  type="text"
                  name="name"
                  value={newOffer.name}
                  onChange={handleModalChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                  required
                />
              </label>
              <label className="block mb-2">
                الوصف:
                <textarea
                  name="description"
                  value={newOffer.description}
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

export default Offers;
