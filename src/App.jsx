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
import AddChannelPartner from "./pages/AddChannelPartner";
import { HelmetProvider } from "react-helmet-async";
import PrivacyPolicy from "./pages/Privacy-Policy";
import TermsAndCondition from "./pages/Terms&Condition";
import RefundPolicy from "./pages/RefundPolicy";
import Disclaimer from "./pages/Disclaimer";

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
    <HelmetProvider>
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
            <Route path="/add-channel-partner" element={<AddChannelPartner />} />
            {/* <Route path="/channel-partner" element={<ChannelPartner />} /> */}
            {/* <Route path="/blog" element={<Blogs />} /> */}
            {/* <Route path="/blog/:slug" element={<BlogDetail />} /> */}
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/book-now/:projectId" element={<BookNowForm />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-conditions" element={<TermsAndCondition />} />  
            <Route path="/refund-policy" element={<RefundPolicy />} /> 
            <Route path="/disclaimer" element={<Disclaimer />} />  
            <Route path="*" element={<NotFound />} />
          </Routes>
          <ToastContainer position="top-right" autoClose={3000} />
          <WhatsAppFloat />
        </Layout>
        <Footer />
      </BrowserRouter>
      </HelmetProvider>
    </>
  );
};

export default App;


{/* {project.projectType === "Farm Lands" && (
        <section data-aos="zoom-in" className="px-4 sm:px-16  pb-8">
          <div className="max-w-5xl mx-auto">
            <div className="mb-6 text-center">
              <h4 className="text-lg font-medium mb-2 text-gray-700">
                Select Land Area
              </h4>
              <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
                {ACRE_OPTIONS.map((acre) => (
                  <button
                    key={acre}
                    onClick={() => setSelectedAcre(acre)}
                    className={`px-2 sm:px-4 py-2 rounded-full text-sm sm:text-base font-semibold border-2 shadow-sm ${
                      selectedAcre === acre
                        ? "bg-[#122F6B] text-white border-[#122F6B]"
                        : "bg-white text-gray-700 border-gray-300"
                    }`}
                  >
                    {acre} Acre{acre > 1 ? "s" : ""}
                  </button>
                ))}
              </div>
            </div>

            <Tabs defaultValue="unitBreakdown" className="w-full">
              <TabsList className="w-full flex justify-center gap-4 bg-gray-200 rounded-xl p-2 mb-5 shadow-sm">
                <TabsTrigger
                  value="unitBreakdown"
                  className="flex-1 text-center font-semibold py-2 rounded-lg transition-all data-[state=active]:bg-[#122F6B] data-[state=active]:text-white"
                >
                  Unit Breakdown
                </TabsTrigger>
                <TabsTrigger
                  value="ownershipPlans"
                  className="flex-1 text-center font-semibold py-2 rounded-lg transition-all data-[state=active]:bg-[#122F6B] data-[state=active]:text-white"
                >
                  Ownership Plans
                </TabsTrigger>
              </TabsList>

              <TabsContent value="ownershipPlans">
                <div className="bg-white p-6 rounded-2xl shadow-md">
                  <h3 className="text-xl font-semibold text-gray-800 mb-6 border-b pb-2">
                    Ownership Payment Schedule (
                    {project.projectType?.toUpperCase()} -{" "}
                    {project.projectName?.split(":")[0]?.trim()} @{" "}
                    {project.projectAddress})
                  </h3>

                  <Table>
                    <TableBody>
                      {[
                        ["Advance", "At the time of Booking", bookingAmount],
                        [
                          "1st Installment",
                          "Within 30 days of Booking",
                          ownershipPlan.firstInstallment,
                        ],
                        [
                          "2nd Installment",
                          "After 60 days of Booking",
                          ownershipPlan.secondInstallment,
                        ],
                        [
                          "3rd Installment",
                          "After 90 days of Booking",
                          ownershipPlan.thirdInstallment,
                        ],
                        [
                          "4th Installment",
                          "After 120 days of Booking",
                          ownershipPlan.fourthInstallment,
                        ],
                        [
                          "5th Installment",
                          "After 150 days of Booking",
                          ownershipPlan.fifthInstallment,
                        ],
                        [
                          "6th Installment",
                          "On completion of Flooring",
                          ownershipPlan.sixthInstallment,
                        ],
                        [
                          "7th Installment",
                          "At the time of offer of Possession",
                          ownershipPlan.seventhInstallment,
                        ],
                      ].map(([label, timeline, amount], i) => (
                        <TableRow
                          key={i}
                          className="hover:bg-gray-50 transition"
                        >
                          <TableCell className="font-medium">{label}</TableCell>
                          <TableCell className="text-gray-500 text-sm">
                            {timeline}
                          </TableCell>
                          <TableCell className="text-right font-semibold text-gray-800">
                            ₹{amount?.toLocaleString() || "-"}/-
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </TabsContent>

              <TabsContent value="unitBreakdown">
                <div className="bg-white p-6 rounded-2xl shadow-md">
                  <h3 className="text-xl font-semibold text-gray-800 mb-6 border-b pb-2">
                    Unit Cost Breakdown ({project.projectType?.toUpperCase()} -{" "}
                    {project.projectName?.split(":")[0]?.trim()} @{" "}
                    {project.projectAddress})
                  </h3>

                  {project.projectType === "Farm Lands" && (
                    <>
                      <Table>
                        <TableHeader>
                          <TableRow className="bg-gray-100">
                            <TableHead className="text-left">
                              Description
                            </TableHead>
                            <TableHead className="text-right w-[60%]">
                              Amount
                            </TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          <TableRow>
                            <TableCell className="font-medium text-gray-700">
                              BSP (All-Inclusive)
                            </TableCell>
                            <TableCell className="text-right">
                              ₹{parseInt(bspTotal).toLocaleString("en-IN")}/-
                            </TableCell>
                          </TableRow>

                          <TableRow>
                            <TableCell className="font-medium text-gray-700">
                              IDC (Including Horticulture)
                            </TableCell>
                            <TableCell className="text-right">
                              ₹{parseInt(idcTotal).toLocaleString("en-IN")}/-
                            </TableCell>
                          </TableRow>

                          <TableRow>
                            <TableCell className="font-medium text-gray-700">
                              Services & Amenities
                            </TableCell>
                            <TableCell className="text-right">
                              ₹{parseInt(saTotal).toLocaleString("en-IN")}/-
                            </TableCell>
                          </TableRow>

                          <TableRow className="bg-blue-50 font-semibold">
                            <TableCell>Total</TableCell>
                            <TableCell className="text-right">
                              ₹
                              {parseInt(totalBeforeModule).toLocaleString(
                                "en-IN"
                              )}
                              /-
                            </TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </>
                  )}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      )} */}

      {/* {project.projectType === "Farm Houses" && (
        <section data-aos="zoom-in" className="px-4 sm:px-16  pb-8">
          <div className="max-w-5xl mx-auto">
            <div className="mb-6 text-center">
              <h4 className="text-lg font-medium mb-2 text-gray-700">
                Select Land Area (1 acre included in base price)
              </h4>
              <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
                {ACRE_OPTIONS.map((acre) =>
                  acre === 0.5 ? null : (
                    <button
                      key={acre}
                      onClick={() => setSelectedAcre(acre)}
                      className={`px-2 sm:px-4 py-2 rounded-full text-sm sm:text-base font-semibold border-2 shadow-sm ${
                        selectedAcre === acre
                          ? "bg-[#122F6B] text-white border-[#122F6B]"
                          : "bg-white text-gray-700 border-gray-300"
                      }`}
                    >
                      {acre} Acre{acre > 1 ? "s" : ""}
                    </button>
                  ),
                )}
              </div>
              {selectedAcre > 1 && (
                <p className="text-sm text-gray-500 mt-2">
                  Additional {selectedAcre - 1} acre(s) at ₹111/sqft
                </p>
              )}
            </div>

            <Tabs defaultValue="unitBreakdown" className="w-full">
              <TabsList className="w-full flex justify-center gap-4 bg-gray-200 rounded-xl p-2 mb-5 shadow-sm">
                <TabsTrigger
                  value="unitBreakdown"
                  className="flex-1 text-center font-semibold py-2 rounded-lg transition-all data-[state=active]:bg-[#122F6B] data-[state=active]:text-white"
                >
                  Unit Breakdown
                </TabsTrigger>
                <TabsTrigger
                  value="ownershipPlans"
                  className="flex-1 text-center font-semibold py-2 rounded-lg transition-all data-[state=active]:bg-[#122F6B] data-[state=active]:text-white"
                >
                  Ownership Plans
                </TabsTrigger>
              </TabsList>

              <TabsContent value="unitBreakdown">
                <div className="bg-white p-6 rounded-2xl shadow-md">
                  <h3 className="text-xl font-semibold text-gray-800 mb-6 border-b pb-2">
                    Unit Cost Breakdown ({project.projectType?.toUpperCase()} -{" "}
                    {project.projectName?.split(":")[0]?.trim()} @{" "}
                    {project.projectAddress})
                  </h3>

                  {project.projectType === "Farm Houses" && (
                    <>
                      <Table>
                        <TableHeader>
                          <TableRow className="bg-gray-100">
                            <TableHead className="text-left">
                              Description
                            </TableHead>
                            <TableHead className="text-right w-[60%]">
                              Amount
                            </TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          <TableRow>
                            <TableCell className="font-medium text-gray-700">
                              BSP (All-Inclusive)
                            </TableCell>
                            <TableCell className="text-right">
                              ₹
                              {parseInt(
                                project?.farmHouseDetails?.bsp?.total,
                              ).toLocaleString("en-IN")}
                              /-
                            </TableCell>
                          </TableRow>

                          {selectedAcre > 1 && (
                            <TableRow>
                              <TableCell className="font-medium text-gray-700">
                                Additional Land ({selectedAcre - 1} acre(s))
                              </TableCell>
                              <TableCell className="text-right">
                                ₹
                                {parseInt(additionalLandCost).toLocaleString(
                                  "en-IN",
                                )}
                                /-
                              </TableCell>
                            </TableRow>
                          )}

                          <TableRow>
                            <TableCell className="font-medium text-gray-700">
                              IDC (Including Horticulture)
                            </TableCell>
                            <TableCell className="text-right">
                              ₹
                              {parseInt(
                                project?.farmHouseDetails?.idc?.total,
                              ).toLocaleString("en-IN")}
                              /-
                            </TableCell>
                          </TableRow>

                          <TableRow>
                            <TableCell className="font-medium text-gray-700">
                              Services & Amenities
                            </TableCell>
                            <TableCell className="text-right">
                              ₹
                              {parseInt(
                                project?.farmHouseDetails?.servicesAndAmenities
                                  ?.total,
                              ).toLocaleString("en-IN")}
                              /-
                            </TableCell>
                          </TableRow>

                          <TableRow className="bg-blue-50 font-semibold">
                            <TableCell>Total</TableCell>
                            <TableCell className="text-right">
                              ₹
                              {parseInt(totalBeforeModule).toLocaleString(
                                "en-IN",
                              )}
                              /-
                            </TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </>
                  )}
                </div>
              </TabsContent>

              <TabsContent value="ownershipPlans">
                <div className="bg-white p-6 rounded-2xl shadow-md">
                  <h3 className="text-xl font-semibold text-gray-800 mb-6 border-b pb-2">
                    Ownership Payment Schedule (
                    {project.projectType?.toUpperCase()} -{" "}
                    {project.projectName?.split(":")[0]?.trim()} @{" "}
                    {project.projectAddress})
                  </h3>

                  <Table>
                    <TableBody>
                      {[
                        ["Advance", "At the time of Booking", bookingAmount],
                        [
                          "1st Installment",
                          "Within 30 days of Booking",
                          ownershipPlan.firstInstallment,
                        ],
                        [
                          "2nd Installment",
                          "After 60 days of Booking",
                          ownershipPlan.secondInstallment,
                        ],
                        [
                          "3rd Installment",
                          "After 90 days of Booking",
                          ownershipPlan.thirdInstallment,
                        ],
                        [
                          "4th Installment",
                          "After 120 days of Booking",
                          ownershipPlan.fourthInstallment,
                        ],
                        [
                          "5th Installment",
                          "After 150 days of Booking",
                          ownershipPlan.fifthInstallment,
                        ],
                        [
                          "6th Installment",
                          "On completion of Flooring",
                          ownershipPlan.sixthInstallment,
                        ],
                        [
                          "7th Installment",
                          "At the time of offer of Possession",
                          ownershipPlan.seventhInstallment,
                        ],
                      ].map(([label, timeline, amount], i) => (
                        <TableRow
                          key={i}
                          className="hover:bg-gray-50 transition"
                        >
                          <TableCell className="font-medium">{label}</TableCell>
                          <TableCell className="text-gray-500 text-sm">
                            {timeline}
                          </TableCell>
                          <TableCell className="text-right font-semibold text-gray-800">
                            ₹{amount?.toLocaleString() || "-"}/-
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      )} */}