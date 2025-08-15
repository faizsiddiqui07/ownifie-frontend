import { base_url } from "@/config/config";
import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";

const Form = () => {
  const location = useLocation();
  const { project } = location.state || {};
  const formRef = useRef();

  useEffect(() => {
    if (location.hash === "#form" && formRef.current) {
      setTimeout(() => {
        const top =
          formRef.current.getBoundingClientRect().top + window.pageYOffset;
        const headerOffset = 180;
        window.scrollTo({ top: top - headerOffset, behavior: "smooth" });
      }, 100);
    }
  }, [location]);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = project?._id
      ? { ...formData, projectId: project._id } 
      : { ...formData };

    try {
      setLoading(true);
      const res = await axios.post(`${base_url}/api/contact-query`, payload);

      if (res.data.success) {
        toast.success("Message submitted successfully!");
        setFormData({ fullName: "", email: "", phoneNumber: "", message: "" });
      } else {
        toast.error("Submission failed. Try again.");
      }
    } catch (error) {
      console.error("Submit Error:", error);
      toast.error(error?.response?.data?.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <form
        className="space-y-8"
        ref={formRef}
        id="form"
        onSubmit={handleSubmit}
      >
        {project?.projectName && (
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Project
            </label>
            <input
              type="text"
              value={project.projectName}
              disabled
              className="mt-1 w-full bg-gray-100 text-gray-700 border border-gray-300 rounded-md shadow-sm outline-none p-2"
            />
          </div>
        )}

        <div>
          <label
            htmlFor="fullName"
            className="block text-sm font-medium text-gray-700"
          >
            Name
          </label>
          <input
            type="text"
            id="fullName"
            onChange={handleChange}
            placeholder="Enter your full name"
            value={formData.fullName}
            className="mt-1 w-full border-gray-300 rounded-md shadow-sm p-2"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            onChange={handleChange}
            placeholder="Enter your email"
            value={formData.email}
            className="mt-1 w-full border-gray-300 rounded-md shadow-sm p-2"
          />
        </div>

        <div>
          <label
            htmlFor="phoneNumber"
            className="block text-sm font-medium text-gray-700"
          >
            Phone Number
          </label>
          <input
            type="tel"
            id="phoneNumber"
            onChange={handleChange}
            value={formData.phoneNumber}
            placeholder="Enter your phone number"
            className="mt-1 w-full border-gray-300 rounded-md shadow-sm p-2"
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700"
          >
            Message
          </label>
          <textarea
            id="message"
            rows="4"
            placeholder="Enter your message"
            onChange={handleChange}
            value={formData.message}
            className="mt-1 w-full border-gray-300 rounded-md shadow-sm p-2"
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full py-2 px-4 bg-[#122F6B] hover:bg-[#12306be9] text-white rounded-md shadow transition-all"
        >
          {loading ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default Form;