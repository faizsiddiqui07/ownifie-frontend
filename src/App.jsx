import React, { useEffect, useState } from "react";
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Header from "./pages/custom-components/Header";
import Footer from "./pages/custom-components/Footer";
import HowItWorks from "./pages/HowItWorks";
import AllProjects from "./pages/AllProjects";
import FAQs from "./pages/FAQs";
import ContactUs from "./pages/ContactUs";
import ChannelPartner from "./pages/ChannelPartner";
import Blogs from "./pages/Blogs";
import AboutUs from "./pages/AboutUs";
import PropertyManagement from "./pages/PropertyManagement";
import ProjectDetails from "./pages/ProjectDetails";
import BlogDetail from "./pages/BlogDetail";
import NotFound from "./pages/NotFound";
import BusinessModel from "./pages/BusinessModel";
import Expertise from "./pages/Expertise";
import WhyChoose from "./pages/WhyChoose";
import CoreFunctionality from "./pages/CoreFunctionality";
import Layout from "./pages/custom-components/Layout";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import BookNowForm from "./pages/custom-components/BookNowForm";
import Preloader from "./pages/custom-components/Preloader";
import WhatsAppFloat from "./pages/custom-components/WhatsAppFloat";

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1800,
    });
  }, []);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={loading ? <Preloader /> : <HomePage />} />
            <Route path="/projects" element={<AllProjects />} />
            <Route path="/business-model" element={<BusinessModel />} />
            <Route path="/projectdetail/:slug" element={<ProjectDetails />} />
            <Route path="/why-choose" element={<WhyChoose />} />
            <Route path="/core-functionality" element={<CoreFunctionality />} />
            {/* <Route path="/faq" element={<FAQs />} /> */}
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/property-management" element={<PropertyManagement />} />
            {/* <Route path="/channel-partner" element={<ChannelPartner />} /> */}
            {/* <Route path="/blog" element={<Blogs />} /> */}
            {/* <Route path="/blog/:slug" element={<BlogDetail />} /> */}
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/book-now/:projectId" element={<BookNowForm />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <ToastContainer position="top-right" autoClose={3000} />
          <WhatsAppFloat />
        </Layout>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
