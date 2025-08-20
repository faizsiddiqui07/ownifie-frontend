import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import axios from "axios";
import uploadImage from "@/helpers/uploadImage";
import { base_url } from "@/config/config";
import { toast } from "react-toastify";
import { FaCheckCircle } from "react-icons/fa";

const BookNowForm = () => {
  const { projectId } = useParams();
  const location = useLocation();
  const { project } = location.state || {};

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    phone: "",
    state: "",
    city: "",
    zipCode: "",
    panCard: null,
    aadharFront: null,
    aadharBack: null,
    profileImage: null,
    agreed: false,
  });

  const handleSubmit = async (e) => {
    e.preventDefault(); 
    setLoading(true);

    try {
      const profileImage = await uploadImage(formData.profileImage);
      const panCard = await uploadImage(formData.panCard);
      const aadharFront = await uploadImage(formData.aadharFront);
      const aadharBack = await uploadImage(formData.aadharBack);

      const payload = {
        projectId,
        projectName: project?.projectName || "Unnamed Project",
        projectType: project?.projectType,
        user: {
          fullname: formData.fullname,
          email: formData.email,
          phone: formData.phone,
          state: formData.state,
          city: formData.city,
          zipCode: formData.zipCode,
        },
        documents: {
          profileImage,
          panCard,
          aadharFront,
          aadharBack,
        },
        agreed: formData.agreed,
        ...(project?.projectType === "Farm Lands" ||
        project?.projectType === "Farm Houses"
          ? {
              sqft: project?.sqft,
              totalPrice: project?.totalPrice,
            }
          : {}),
      };

      const res = await axios.post(`${base_url}/api/bookProperty`, payload);
      toast.success(res.data.message);

      setFormData({
        fullname: "",
        email: "",
        phone: "",
        state: "",
        city: "",
        zipCode: "",
        panCard: null,
        aadharFront: null,
        aadharBack: null,
        profileImage: null,
        agreed: false,
      });

      document.querySelectorAll('input[type="file"]').forEach((input) => {
        input.value = "";
      });
    } catch (err) {
      console.error(err);
      const backendError = err?.response?.data?.message;
      const frontendError = err?.message;

      toast.error(
        backendError || frontendError || "Something went wrong during booking."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-100 via-white to-slate-100 px-4 sm:px-6 lg:px-16 py-10 sm:py-16">
      <div className="">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-blue-800">
            Book Your Dream Property
          </h2>
          {project?.projectName ? (
            <p className="mt-2 text-base sm:text-lg text-gray-700">
              Project:{" "}
              <span className="font-semibold text-black">
                {project?.projectName}
              </span>
            </p>
          ) : null}

          {project?.selectedAcre && (
            <p className="text-sm text-gray-700 mt-1">
              Selected Land Area:{" "}
              <span className="font-medium">{project?.selectedAcre} Acre</span>
            </p>
          )}

          {project?.sqft && (
            <p className="text-sm text-gray-700">
              Total Sq. Ft:{" "}
              <span className="font-medium">
                {project?.sqft.toLocaleString("en-IN")} sqft
              </span>
            </p>
          )}

          {project?.totalPrice && (
            <p className="text-sm text-gray-700">
              Estimated Total Price:{" "}
              <span className="font-semibold text-green-700">
                ₹{parseInt(project?.totalPrice).toLocaleString("en-IN")}
              </span>
            </p>
          )}
        </div>

        {/* Image + Form Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Left Side: Images */}
          <div className="w-full ">
            {/* Mobile: Show only first image */}
            <div className="block lg:hidden">
              <img
                src={project?.projectImages?.[0]?.url}
                loading="lazy"
                alt="Project Image"
                className="w-full h-60 sm:h-[290px] object-cover rounded-xl shadow-md"
              />
            </div>

            {/* Desktop: Show first 2 images */}
            <div className="hidden lg:block space-y-6">
              {project?.projectImages?.slice(0, 2).map((img, index) => (
                <img
                  key={index}
                  src={img.url}
                  loading="lazy"
                  alt={`Project Image ${index + 1}`}
                  className="w-full h-60 sm:h-[290px] object-cover rounded-xl shadow-md"
                />
              ))}
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="bg-white/90 backdrop-blur-md shadow-xl rounded-2xl p-6 sm:p-8 border border-gray-200 w-full">
            <form
              onSubmit={handleSubmit}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 xl:gap-6"
            >
              {/* Basic Fields */}
              {[
                { name: "fullname", placeholder: "Full Name" },
                { name: "email", placeholder: "Email", type: "email" },
                { name: "state", placeholder: "State" },
                { name: "city", placeholder: "City" },
                { name: "zipCode", placeholder: "Zip Code" },
              ].map((field) => (
                <input
                  key={field.name}
                  type={field.type || "text"}
                  placeholder={field.placeholder}
                  value={formData[field.name] || ""}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
                  onChange={(e) =>
                    setFormData({ ...formData, [field.name]: e.target.value })
                  }
                />
              ))}

              {/* Phone */}
              <div className="">
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                />
              </div>

              {[
                { label: "Profile Picture", name: "profileImage" },
                { label: "Pan Card", name: "panCard" },
                { label: "Aadhar Card (Front)", name: "aadharFront" },
                { label: "Aadhar Card (Back)", name: "aadharBack" },
              ].map((field) => (
                <div key={field.name} className="col-span-1">
                  <label className="block mb-2 text-sm font-semibold text-gray-700">
                    {field.label}
                  </label>

                  <div className="relative border-2 border-dashed border-gray-300 rounded-xl p-4 flex items-center justify-between bg-white hover:border-blue-400 transition duration-150 group">
                    <input
                      type="file"
                      accept="image/*"
                      id={field.name}
                      className="absolute inset-0 opacity-0 cursor-pointer z-10"
                      onChange={(e) => {
                        const file = e.target.files[0];
                        if (file) {
                          setFormData((prev) => ({
                            ...prev,
                            [field.name]: file,
                            [`${field.name}Preview`]: URL.createObjectURL(file),
                          }));
                        }
                      }}
                    />

                    <span className="text-sm text-gray-500 group-hover:text-blue-600">
                      {formData[field.name] ? "Uploaded" : "Click to upload"}
                    </span>

                    {formData[field.name] && (
                      <FaCheckCircle className="text-green-500 text-lg absolute top-4 right-2 z-20" />
                    )}
                  </div>
                </div>
              ))}

              {/* Terms Checkbox */}
              <label className="flex items-start gap-2 sm:col-span-2 text-sm mt-2">
                <input
                  type="checkbox"
                  checked={formData.agreed}
                  onChange={(e) =>
                    setFormData({ ...formData, agreed: e.target.checked })
                  }
                  className="mt-1 accent-blue-600"
                />
                I give OWNiFiE permission to contact me & agree to the terms.
              </label>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={!formData.agreed}
                className={`sm:col-span-2 mt-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-xl font-semibold text-lg transition-transform duration-200 ${
                  !formData.agreed || loading
                    ? "opacity-50 cursor-not-allowed"
                    : ""
                }`}
              >
                {loading ? "Submitting..." : "Submit Booking"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookNowForm;
