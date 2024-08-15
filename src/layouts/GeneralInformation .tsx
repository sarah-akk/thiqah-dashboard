import React, { useState } from "react";
import {
  FaArrowLeft,
  FaArrowRight,
  FaRocket,
  FaStar,
  FaShieldAlt,
} from "react-icons/fa";

type Feature = {
  icon: JSX.Element;
  text: string;
};

type Location = {
  image: string;
  title: string;
  phone: string;
};

type GeneralInfo = {
  sliderImages: string[];
  whyUs: {
    text: string;
    image: string;
  };
  goals: string[];
  features: Feature[];
  locations: Location[];
  downloadLink: string;
};

// Initial dummy data
const initialData: GeneralInfo = {
  sliderImages: [
    "https://via.placeholder.com/1200x500?text=Image+1",
    "https://via.placeholder.com/1200x500?text=Image+2",
    "https://via.placeholder.com/1200x500?text=Image+3",
  ],
  whyUs: {
    text: "We are committed to providing the best service with high quality and customer satisfaction.",
    image: "https://via.placeholder.com/600x400?text=Why+Us+Image",
  },
  features: [
    { icon: <FaRocket />, text: "Fast and Reliable" },
    { icon: <FaStar />, text: "Excellent Quality" },
    { icon: <FaShieldAlt />, text: "Secure and Safe" },
    { icon: <FaShieldAlt />, text: "Secure and Safe" },
  ],
  locations: [
    {
      image: "https://via.placeholder.com/400x300?text=Location+1",
      title: "Headquarters",
      phone: "+1 234 567 890",
    },
    {
      image: "https://via.placeholder.com/400x300?text=Location+2",
      title: "Branch Office",
      phone: "+1 987 654 321",
    },
  ],
  downloadLink: "",
};

const GeneralInformationDashboard: React.FC = () => {
  const [data, setData] = useState<GeneralInfo>(initialData);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [imagePreviews, setImagePreviews] = useState<string[]>([]);
  const [whyUsImagePreview, setWhyUsImagePreview] = useState<string | null>(
    null
  );
  const [newLocation, setNewLocation] = useState<Location>({
    image: "",
    title: "",
    phone: "",
  });

  // Handlers for images and data updates
  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % data.sliderImages.length);
  };

  const handlePrevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + data.sliderImages.length) % data.sliderImages.length
    );
  };

  const handleSliderImageChange = (index: number, file: File | null) => {
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const updatedImages = [...data.sliderImages];
        updatedImages[index] = reader.result as string;
        setData({ ...data, sliderImages: updatedImages });
        const updatedPreviews = [...imagePreviews];
        updatedPreviews[index] = reader.result as string;
        setImagePreviews(updatedPreviews);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleWhyUsImageChange = (file: File | null) => {
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setWhyUsImagePreview(reader.result as string);
        setData({
          ...data,
          whyUs: { ...data.whyUs, image: reader.result as string },
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleGoalChange = (index: number, text: string) => {
    const updatedGoals = [...data.goals];
    updatedGoals[index] = text;
    setData({ ...data, goals: updatedGoals });
  };

  const handleFeatureChange = (index: number, text: string) => {
    const updatedFeatures = [...data.features];
    updatedFeatures[index] = { ...updatedFeatures[index], text };
    setData({ ...data, features: updatedFeatures });
  };

  const handleLocationChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    field: keyof Location
  ) => {
    setNewLocation({ ...newLocation, [field]: e.target.value });
  };

  const handleLocationImageChange = (file: File | null) => {
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewLocation({ ...newLocation, image: reader.result as string });
      };
      reader.readAsDataURL(file);
    }
  };

  const addLocation = () => {
    if (newLocation.title && newLocation.phone && newLocation.image) {
      setData({ ...data, locations: [...data.locations, newLocation] });
      setNewLocation({ image: "", title: "", phone: "" });
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen" style={{ direction: "rtl" }}>
      <h1 className="text-3xl font-bold mb-6">قسم معلومات عامة</h1>

      {/* Image Slider */}
      <div className="relative mb-12">
        <img
          src={data.sliderImages[currentSlide]}
          alt="Slider"
          className="w-full h-64 object-cover rounded-lg shadow-md"
        />
        <button
          onClick={handlePrevSlide}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white bg-gray-800 p-2 rounded-full shadow-lg"
        >
          <FaArrowLeft size={24} />
        </button>
        <button
          onClick={handleNextSlide}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white bg-gray-800 p-2 rounded-full shadow-lg"
        >
          <FaArrowRight size={24} />
        </button>
      </div>

      {/* Slider Image Inputs */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">تعديل الصور</h2>
        {data.sliderImages.map((image, index) => (
          <div key={index} className="mb-4">
            <label className="block text-gray-700 mb-2">
              صورة {index + 1}:
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) =>
                handleSliderImageChange(
                  index,
                  e.target.files ? e.target.files[0] : null
                )
              }
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
        ))}
      </section>

      {/* نبذة عنا */}
      <section className="mb-12 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-6 md:mb-0">
          <img
            src={whyUsImagePreview || data.whyUs.image}
            alt="Why Us"
            className="w-full h-auto object-cover rounded-lg shadow-md"
          />
          <label className="block text-gray-700 mt-4">تغيير الصورة:</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) =>
              handleWhyUsImageChange(e.target.files ? e.target.files[0] : null)
            }
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="md:w-1/2 md:pr-6">
          <h2 className="text-2xl font-semibold mb-4">نبذة عنا</h2>
          <label className="block text-gray-700 mt-4">تغيير النص:</label>
          <textarea
            value={data.whyUs.text}
            onChange={(e) =>
              setData({
                ...data,
                whyUs: { ...data.whyUs, text: e.target.value },
              })
            }
            className="w-full p-2 border border-gray-300 rounded"
            rows={4}
          />
        </div>
      </section>

      {/* Video Upload */}
      <div className="p-6 bg-gray-50 mt-15">
        <div className="max-w-6xl mx-auto bg-white shadow-md rounded-lg p-6">
          <h1 className="text-2xl font-semibold mb-4 text-gray-800">
            فيديو تعريفي
          </h1>
          <div className="mb-6">
            <label
              htmlFor="video-upload"
              className="block text-gray-700 font-semibold mb-2"
            >
              اختر فيديو:
            </label>
            <input
              id="video-upload"
              type="file"
              accept="video/*"
              // onChange={handleVideoChange}
              className="block w-full text-gray-800 file:border file:rounded-lg file:px-4 file:py-2 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
            />
          </div>
        </div>
      </div>

      {/* شرح عن المنصة */}
      <section className="mb-12 mt-10 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-6 md:mb-0">
          <div className="gap-10 flex flex-row">
            <div>
              <img
                src={whyUsImagePreview || data.whyUs.image}
                alt="Why Us"
                className="w-60 h-30 object-cover rounded-lg shadow-md"
              />
              <img
                src={whyUsImagePreview || data.whyUs.image}
                alt="Why Us"
                className="w-60 h-30 mt-5 object-cover rounded-lg shadow-md"
              />
            </div>
            <div>
              <img
                src={whyUsImagePreview || data.whyUs.image}
                alt="Why Us"
                className="w-40 h-60 object-cover rounded-lg shadow-md"
              />
            </div>
          </div>
          <label className="block text-gray-700 mt-4">شرح عن المنصة</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) =>
              handleWhyUsImageChange(e.target.files ? e.target.files[0] : null)
            }
            className="w-full p-2 border border-gray-300 rounded"
          />
          <input
            type="file"
            accept="image/*"
            onChange={(e) =>
              handleWhyUsImageChange(e.target.files ? e.target.files[0] : null)
            }
            className="w-full p-2 border border-gray-300 rounded"
          />
          <input
            type="file"
            accept="image/*"
            onChange={(e) =>
              handleWhyUsImageChange(e.target.files ? e.target.files[0] : null)
            }
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="md:w-1/2 md:pr-6">
          <h2 className="text-2xl font-semibold mb-4">شرح عن المنصة</h2>
          <label className="block text-gray-700 mt-4">تغيير النص:</label>
          <textarea
            value={data.whyUs.text}
            onChange={(e) =>
              setData({
                ...data,
                whyUs: { ...data.whyUs, text: e.target.value },
              })
            }
            className="w-full p-2 border border-gray-300 rounded"
            rows={4}
          />
        </div>
      </section>

      {/* Our Features Section */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">ميزاتنا</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {data.features.map((feature, index) => (
            <div
              key={index}
              className="flex items-center bg-white p-4 rounded-lg shadow-md"
            >
              <div className="text-3xl text-blue-500 mr-4">{feature.icon}</div>
              <div className="w-full">
                <p className="text-gray-700 mb-2">{feature.text}</p>
                <input
                  type="text"
                  value={feature.text}
                  onChange={(e) => handleFeatureChange(index, e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/*  صاحب المنصة */}
      <section className="mb-12 flex flex-col md:flex-row items-center mt-15">
        <div className="md:w-1/2 mb-6 md:mb-0">
          <img
            src={whyUsImagePreview || data.whyUs.image}
            alt="Why Us"
            className="w-full h-auto object-cover rounded-lg shadow-md"
          />
          <label className="block text-gray-700 mt-4">تغيير الصورة:</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) =>
              handleWhyUsImageChange(e.target.files ? e.target.files[0] : null)
            }
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="md:w-1/2 md:pr-6">
          <h2 className="text-2xl font-semibold mb-4"> صاحب المنصة</h2>
          <label className="block text-gray-700 mt-4">تغيير النص:</label>
          <textarea
            value={data.whyUs.text}
            onChange={(e) =>
              setData({
                ...data,
                whyUs: { ...data.whyUs, text: e.target.value },
              })
            }
            className="w-full p-2 border border-gray-300 rounded"
            rows={4}
          />
        </div>
      </section>

      {/* Video Upload */}
      <div className="p-6 bg-gray-50 mt-15">
        <div className="max-w-6xl mx-auto bg-white shadow-md rounded-lg p-6">
          <h1 className="text-2xl font-semibold mb-4 text-gray-800">
            فيديو تعريفي
          </h1>
          <div className="mb-6">
            <label
              htmlFor="video-upload"
              className="block text-gray-700 font-semibold mb-2"
            >
              اختر فيديو:
            </label>
            <input
              id="video-upload"
              type="file"
              accept="video/*"
              // onChange={handleVideoChange}
              className="block w-full text-gray-800 file:border file:rounded-lg file:px-4 file:py-2 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
            />
          </div>
        </div>
      </div>

      {/* Locations Section */}
      <section className="mb-12 mt-15">
        <h2 className="text-2xl font-semibold mb-4">أماكن تواجدنا</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {data.locations.map((location, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-lg shadow-md flex items-center space-x-4"
            >
              <img
                src={location.image}
                alt={`Location ${index + 1}`}
                className="w-32 h-24 object-cover rounded"
              />
              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  {location.title}
                </h3>
                <p className="text-gray-600">{location.phone}</p>
              </div>
            </div>
          ))}
        </div>
        <h3 className="text-xl font-semibold mb-4">إضافة موقع جديد</h3>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <label className="block text-gray-700 mb-2">صورة الموقع:</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) =>
              handleLocationImageChange(
                e.target.files ? e.target.files[0] : null
              )
            }
            className="w-full p-2 border border-gray-300 rounded mb-4"
          />
          <label className="block text-gray-700 mb-2">عنوان الموقع:</label>
          <input
            type="text"
            value={newLocation.title}
            onChange={(e) => handleLocationChange(e, "title")}
            className="w-full p-2 border border-gray-300 rounded mb-4"
          />
          <label className="block text-gray-700 mb-2">هاتف الموقع:</label>
          <input
            type="text"
            value={newLocation.phone}
            onChange={(e) => handleLocationChange(e, "phone")}
            className="w-full p-2 border border-gray-300 rounded mb-4"
          />
          <button
            onClick={addLocation}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            إضافة موقع
          </button>
        </div>
      </section>

      {/* Download App Link Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">رابط تحميل التطبيق</h2>
        <input
          type="text"
          value={data.downloadLink}
          // onChange={handleDownloadLinkChange}
          placeholder="أدخل رابط تحميل التطبيق هنا"
          className="w-full p-2 border border-gray-300 rounded"
        />
      </section>

      {/* معلومات التواصل */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">ادخل معلومات التواصل </h2>
        <input
          type="text"
          value={data.downloadLink}
          // onChange={handleDownloadLinkChange}
          placeholder="ادحل رقم الهاتف"
          className="w-full p-2 border border-gray-300 rounded"
        />
        <input
          type="text"
          value={data.downloadLink}
          // onChange={handleDownloadLinkChange}
          placeholder="اخل الايميل "
          className="w-full p-2 border border-gray-300 rounded mt-2"
        />
      </section>
    </div>
  );
};

export default GeneralInformationDashboard;
