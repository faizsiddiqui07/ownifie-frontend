import React, { useEffect, useState, useRef } from "react";
import { base_url } from "@/config/config";
import axios from "axios";
import { toast } from "react-toastify";
import {
  FaCheckCircle,
  FaUpload,
  FaUserTie,
  FaBuilding,
  FaMapMarkerAlt,
  FaIdCard,
} from "react-icons/fa";
import { State, City } from "country-state-city";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import uploadImage from "@/helpers/uploadImage";
import { Helmet } from "react-helmet-async";

const AddChannelPartner = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    phone: "",
    state: "",
    city: "",
    zipCode: "",
    partnerCategory: "",
    panCard: null,
    aadharFront: null,
    aadharBack: null,
    profileImage: null,
    agreed: false,
  });

  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [activeSection, setActiveSection] = useState("personal");

  // Create refs for each section
  const personalSectionRef = useRef(null);
  const locationSectionRef = useRef(null);
  const documentsSectionRef = useRef(null);

  const partnerCategories = [
    { value: "Associate Partner", label: "Associate Partner", icon: FaUserTie },
    { value: "Channel Partner", label: "Channel Partner", icon: FaBuilding },
    {
      value: "Principal Channel Partner",
      label: "Principal Channel Partner",
      icon: FaIdCard,
    },
  ];

  useEffect(() => {
    const allStates = State.getStatesOfCountry("IN");
    setStates(allStates);
  }, []);

  useEffect(() => {
    if (!formData.state) return;
    const selectedState = states.find((s) => s.name === formData.state);
    if (selectedState) {
      const allCities = City.getCitiesOfState("IN", selectedState.isoCode);
      setCities(allCities);
    }
  }, [formData.state, states]);

  // Function to scroll to a specific section
  const scrollToSection = (sectionId) => {
    let targetRef;

    switch (sectionId) {
      case "personal":
        targetRef = personalSectionRef;
        break;
      case "location":
        targetRef = locationSectionRef;
        break;
      case "documents":
        targetRef = documentsSectionRef;
        break;
      default:
        return;
    }

    if (targetRef.current) {
      const headerOffset = 120;
      const elementPosition = targetRef.current.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });

      setActiveSection(sectionId);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // ✅ Step 1: Validation rules
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const phoneRegex = /^[6-9]\d{9}$/; // India phone numbers starting 6-9

      if (!formData.fullname.trim()) {
        toast.error("Full Name is required.");
        setLoading(false);
        return;
      }
      if (!emailRegex.test(formData.email)) {
        toast.error("Please enter a valid email address.");
        setLoading(false);
        return;
      }
      if (!phoneRegex.test(formData.phone)) {
        toast.error("Please enter a valid 10-digit phone number.");
        setLoading(false);
        return;
      }
      if (!formData.state || !formData.city || !formData.zipCode) {
        toast.error("Please fill all fields");
        setLoading(false);
        return;
      }
      if (!formData.partnerCategory) {
        toast.error("Please select a partner category.");
        setLoading(false);
        return;
      }
      if (
        !formData.profileImage ||
        !formData.panCard ||
        !formData.aadharFront ||
        !formData.aadharBack
      ) {
        toast.error("Please upload all required documents.");
        setLoading(false);
        return;
      }
      if (!formData.agreed) {
        toast.error("You must agree to the terms before submitting.");
        setLoading(false);
        return;
      }

      // ✅ Step 2: Upload images only after validation passes
      const profileImage = await uploadImage(formData.profileImage);
      const panCard = await uploadImage(formData.panCard);
      const aadharFront = await uploadImage(formData.aadharFront);
      const aadharBack = await uploadImage(formData.aadharBack);

      const payload = {
        fullname: formData.fullname,
        email: formData.email,
        phone: formData.phone,
        state: formData.state,
        city: formData.city,
        zipCode: formData.zipCode,
        partnerCategory: formData.partnerCategory,
        documents: {
          profileImage,
          panCard,
          aadharFront,
          aadharBack,
        },
        agreed: formData.agreed,
      };

      const res = await axios.post(
        `${base_url}/api/addChannelPartner`,
        payload
      );
      toast.success(res.data.message);

      // Reset form
      setFormData({
        fullname: "",
        email: "",
        phone: "",
        state: "",
        city: "",
        zipCode: "",
        partnerCategory: "",
        panCard: null,
        aadharFront: null,
        aadharBack: null,
        profileImage: null,
        agreed: false,
      });
    } catch (err) {
      console.error(err);
      toast.error(err?.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  const SectionHeader = ({ title, icon: Icon, isActive, onClick }) => (
    <div
      className={`flex items-center space-x-3 p-4 rounded-lg transition-all duration-300 cursor-pointer ${
        isActive
          ? "bg-blue-50 border-l-4 border-blue-600"
          : "bg-gray-50 hover:bg-gray-100"
      }`}
      onClick={onClick}
    >
      <Icon
        className={`text-lg ${isActive ? "text-blue-600" : "text-gray-400"}`}
      />
      <h3
        className={`font-semibold ${
          isActive ? "text-blue-800" : "text-gray-600"
        }`}
      >
        {title}
      </h3>
    </div>
  );

  return (
    <>
      <Helmet>
        {/* Title */}
        <title>Partner with us | Become a Partner - OWNiFiE</title>

        {/* Meta Description */}
        <meta
          name="description"
          content="Join our network of trusted partners and grow your business with premium real estate opportunities"
        />

        {/* Canonical URL to prevent Duplicate Content */}
        <link rel="canonical" href="https://ownifie.com/add-channel-partner" />

        {/* Open Graph Metadata */}
        <meta
          property="og:url"
          content="https://ownifie.com/add-channel-partner"
        />
        <meta
          property="og:title"
          content="Partner with us | Become a Partner - OWNiFiE"
        />
        <meta
          property="og:description"
          content="Join our network of trusted partners and grow your business with premium real estate opportunities"
        />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-[#a0a993] via-white to-slate-100 px-4 sm:px-6 lg:px-16 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-6 sm:mb-10">
            <div className="inline-flex items-center justify-center w-12 sm:w-16 md:w-20 h-12 sm:h-16 md:h-20 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-full mb-4 sm:mb-6">
              <FaUserTie className="text-xl sm:text-2xl md:text-3xl text-white" />
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-2 sm:mb-4">
              Become a Partner
            </h1>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              Join our network of trusted partners and grow your business with
              premium real estate opportunities.
            </p>
          </div>

          {/* Progress Navigation */}
          <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-8">
            {[
              { id: "personal", label: "Personal Info", icon: FaUserTie },
              { id: "location", label: "Location", icon: FaMapMarkerAlt },
              { id: "documents", label: "Documents", icon: FaIdCard },
            ].map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`flex flex-col items-center p-4 rounded-xl border-2 transition-all duration-300 ${
                  activeSection === section.id
                    ? "border-blue-500 bg-blue-50 shadow-md"
                    : "border-gray-200 bg-white hover:border-blue-300 hover:shadow-sm"
                }`}
              >
                <section.icon
                  className={`text-md sm:text-xl mb-2 ${
                    activeSection === section.id
                      ? "text-blue-600"
                      : "text-gray-400"
                  }`}
                />
                <span
                  className={`text-xs sm:text-sm font-medium ${
                    activeSection === section.id
                      ? "text-blue-800"
                      : "text-gray-600"
                  }`}
                >
                  {section.label}
                </span>
              </button>
            ))}
          </div>

          <div className="bg-white/95 backdrop-blur-sm shadow-2xl rounded-3xl p-6 sm:p-8 border border-gray-100">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Personal Information Section */}
              <div ref={personalSectionRef}>
                <SectionHeader
                  title="Personal Information"
                  icon={FaUserTie}
                  isActive={activeSection === "personal"}
                  onClick={() => scrollToSection("personal")}
                />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700 sm:mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      placeholder="Full Name"
                      value={formData.fullname}
                      onChange={(e) =>
                        setFormData({ ...formData, fullname: e.target.value })
                      }
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:border-transparent transition-all duration-200 shadow-sm"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700 sm:mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:border-transparent transition-all duration-200 shadow-sm"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700 sm:mb-2">
                      Contact Number *
                    </label>
                    <input
                      type="tel"
                      placeholder="1234567890"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:border-transparent transition-all duration-200 shadow-sm"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700 sm:mb-4">
                      Partner Category *
                    </label>
                    <Select
                      onValueChange={(value) =>
                        setFormData({ ...formData, partnerCategory: value })
                      }
                      value={formData.partnerCategory}
                    >
                      <SelectTrigger className="w-full px-4 py-6 border border-gray-200 rounded-xl">
                        <SelectValue placeholder="Select your category" />
                      </SelectTrigger>
                      <SelectContent>
                        {partnerCategories.map((category) => {
                          const IconComponent = category.icon;
                          return (
                            <SelectItem
                              key={category.value}
                              value={category.value}
                            >
                              <div className="flex items-center space-x-2">
                                <IconComponent className="text-blue-600" />
                                <span>{category.label}</span>
                              </div>
                            </SelectItem>
                          );
                        })}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              {/* Location Information Section */}
              <div ref={locationSectionRef}>
                <SectionHeader
                  title="Location Details"
                  icon={FaMapMarkerAlt}
                  isActive={activeSection === "location"}
                  onClick={() => scrollToSection("location")}
                />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700 sm:mb-4">
                      State *
                    </label>
                    <Select
                      onValueChange={(value) =>
                        setFormData({ ...formData, state: value, city: "" })
                      }
                      value={formData.state}
                    >
                      <SelectTrigger className="w-full px-4 py-6 border border-gray-200 rounded-xl">
                        <SelectValue placeholder="Select state" />
                      </SelectTrigger>
                      <SelectContent className="w-full mx-4 px-4">
                        {states.map((state) => (
                          <SelectItem key={state.isoCode} value={state.name}>
                            {state.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700 sm:mb-4">
                      City *
                    </label>
                    <Select
                      onValueChange={(value) =>
                        setFormData({ ...formData, city: value })
                      }
                      value={formData.city}
                      disabled={!formData.state}
                    >
                      <SelectTrigger className="w-full px-4 py-6 border border-gray-200 rounded-xl">
                        <SelectValue
                          placeholder={
                            formData.state
                              ? "Select city"
                              : "Select state first"
                          }
                        />
                      </SelectTrigger>
                      <SelectContent>
                        {cities.map((city) => (
                          <SelectItem key={city.name} value={city.name}>
                            {city.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700 sm:mb-2">
                      ZIP Code *
                    </label>
                    <input
                      type="text"
                      placeholder="123456"
                      value={formData.zipCode}
                      onChange={(e) =>
                        setFormData({ ...formData, zipCode: e.target.value })
                      }
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:border-transparent transition-all duration-200 shadow-sm"
                    />
                  </div>
                </div>
              </div>

              {/* Documents Section */}
              <div ref={documentsSectionRef}>
                <SectionHeader
                  title="Required Documents"
                  icon={FaIdCard}
                  isActive={activeSection === "documents"}
                  onClick={() => scrollToSection("documents")}
                />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                  {[
                    {
                      label: "Profile Picture",
                      name: "profileImage",
                      icon: FaUserTie,
                    },
                    { label: "PAN Card", name: "panCard", icon: FaIdCard },
                    {
                      label: "Aadhar Front",
                      name: "aadharFront",
                      icon: FaIdCard,
                    },
                    {
                      label: "Aadhar Back",
                      name: "aadharBack",
                      icon: FaIdCard,
                    },
                  ].map((field) => {
                    const hasFile = formData[field.name];
                    const previewUrl = formData[`${field.name}Preview`];

                    return (
                      <div key={field.name} className="space-y-2">
                        <label className="block text-sm font-medium text-gray-700">
                          {field.label} *
                        </label>
                        <div className="relative border-2 border-dashed border-gray-300 rounded-lg p-4 transition-all duration-200 group cursor-pointer bg-gray-50 hover:border-blue-400">
                          <input
                            type="file"
                            accept="image/*"
                            id={field.name}
                            className="absolute inset-0 opacity-0 cursor-pointer"
                            onChange={(e) => {
                              const file = e.target.files[0];
                              if (file && file.size > 5 * 1024 * 1024) {
                                toast.error("File size must be less than 5MB");
                                return;
                              }
                              if (file) {
                                setFormData((prev) => ({
                                  ...prev,
                                  [field.name]: file,
                                  [`${field.name}Preview`]:
                                    URL.createObjectURL(file),
                                }));
                              }
                            }}
                          />

                          {previewUrl ? (
                            <div className="flex flex-col items-center">
                              <img
                                src={previewUrl}
                                alt="Preview"
                                className="h-16 w-16 object-cover rounded-md mb-2"
                              />
                              <p className="text-xs text-gray-500">
                                Click to change
                              </p>
                            </div>
                          ) : (
                            <div className="text-center">
                              <FaUpload className="mx-auto text-gray-400 mb-2 text-lg" />
                              <p className="text-xs text-gray-500">
                                Click to upload
                              </p>
                              <p className="text-[10px] text-gray-400 mt-1">
                                Max 5MB • JPG, PNG
                              </p>
                            </div>
                          )}

                          {hasFile && (
                            <FaCheckCircle className="absolute top-2 right-2 text-green-500" />
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Terms and Submit */}
              <div className="border-t pt-8">
                <label className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    checked={formData.agreed}
                    onChange={(e) =>
                      setFormData({ ...formData, agreed: e.target.checked })
                    }
                    className="mt-1 h-5 w-5 text-blue-600 border-gray-300 rounded "
                  />
                  <span className="text-sm text-gray-600">
                    I hereby declare that all information provided is true and
                    accurate. I agree to the terms and conditions and give
                    OWNiFiE permission to contact me for partnership
                    opportunities.
                  </span>
                </label>

                <button
                  type="submit"
                  disabled={!formData.agreed || loading}
                  className={`w-full mt-6 py-4 px-6 bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white font-semibold rounded-xl shadow-lg transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none`}
                >
                  {loading ? (
                    <div className="flex items-center justify-center space-x-2">
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      <span>Processing Application...</span>
                    </div>
                  ) : (
                    "Submit Partnership Application"
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddChannelPartner;
