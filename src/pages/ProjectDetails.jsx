import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { base_url } from "@/config/config";

import {
  FaHome,
  FaWrench,
  FaBed,
  FaBath,
  FaDoorOpen,
  FaUserFriends,
  FaBook,
  FaBoxOpen,
  FaChair,
  FaDumbbell,
  FaSwimmingPool,
  FaShieldAlt,
  FaTree,
  FaParking,
  FaFireExtinguisher,
  FaWifi,
  FaDog,
  FaChess,
  FaWalking,
  FaRegLightbulb,
} from "react-icons/fa";

import { SiBlockbench } from "react-icons/si";
import { BiCctv } from "react-icons/bi";
import { RiBilliardsFill, RiHomeOfficeLine } from "react-icons/ri";
import { GiCampingTent, GiCricketBat, GiLift, GiSofa } from "react-icons/gi";
import { GrYoga } from "react-icons/gr";
import { SlCalender } from "react-icons/sl";
import { BsArrowsFullscreen } from "react-icons/bs";
import { TbSmartHome, TbToolsKitchen } from "react-icons/tb";
import { IoWater } from "react-icons/io5";
import {
  MdApartment,
  MdLocalLaundryService,
  MdSportsGymnastics,
  MdOutlineElectricBolt,
} from "react-icons/md";

import { PiParkDuotone, PiTarget } from "react-icons/pi";
import { FaScaleBalanced } from "react-icons/fa6";
import { TbMassage } from "react-icons/tb";
import { IoMdBonfire } from "react-icons/io";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import OurProjectsSlider from "./custom-components/OurProjectsSlider";

const ProjectDetails = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState(null);
  const [fullscreenImage, setFullscreenImage] = useState(null);
  const [showProjectDetails, setShowProjectDetails] = useState(false);
  const [funnyText, setFunnyText] = useState("");
  const [selectedAcre, setSelectedAcre] = useState(1);

  const SQFT_PER_ACRE = 43560;
  const RATE_PER_SQFT = 111;
  const IDC_RATE = 30;
  const SA_RATE = 15;
  const ACRE_OPTIONS = [0.5, 1, 2, 3, 5];

  const isFarmProperty =
    project?.projectType === "Farm Lands" ||
    project?.projectType === "Farm Houses";

  const selectedSqft = selectedAcre * SQFT_PER_ACRE;
  const bspTotal =
    isFarmProperty && project?.projectType === "Farm Lands"
      ? selectedSqft * RATE_PER_SQFT
      : 0;
  const idcTotal =
    isFarmProperty && project?.projectType === "Farm Lands"
      ? selectedSqft * IDC_RATE
      : 0;
  const saTotal =
    isFarmProperty && project?.projectType === "Farm Lands"
      ? selectedSqft * SA_RATE
      : 0;
  const farmLandTotal = bspTotal + idcTotal + saTotal;
  // const totalBeforeModule = bspTotal + idcTotal + saTotal;

  const totalFarmHousePrice =
    isFarmProperty && project?.projectType === "Farm Houses"
      ? (project?.farmHouseDetails?.bsp?.total || 0) +
        (project?.farmHouseDetails?.idc?.total || 0) +
        (project?.farmHouseDetails?.servicesAndAmenities?.total || 0)
      : 0;

  const additionalLandCost =
    isFarmProperty && selectedAcre > 1
      ? (selectedAcre - 1) * SQFT_PER_ACRE * RATE_PER_SQFT
      : 0;

  const totalBeforeModule = isFarmProperty
    ? project?.projectType === "Farm Houses"
      ? totalFarmHousePrice + additionalLandCost
      : farmLandTotal
    : smartRound(
        (project?.unitBreakdown?.singleUnit?.totalPropertyValue || 0) +
          (project?.unitBreakdown?.singleUnit?.gst || 0) +
          (project?.unitBreakdown?.singleUnit?.stampDuty || 0)
      );

  const owniBitValue = isFarmProperty
    ? totalBeforeModule
    : smartRound(
        (project?.unitBreakdown?.singleUnit?.totalPropertyValue || 0) +
          (project?.unitBreakdown?.singleUnit?.gst || 0) +
          (project?.unitBreakdown?.singleUnit?.stampDuty || 0)
      );
  const bookingAmount = Math.round(owniBitValue * 0.1).toLocaleString("en-IN");

  const ownershipPlan = {
    firstInstallment: (totalBeforeModule * 0.2).toLocaleString("en-IN"),
    secondInstallment: (totalBeforeModule * 0.1).toLocaleString("en-IN"),
    thirdInstallment: (totalBeforeModule * 0.1).toLocaleString("en-IN"),
    fourthInstallment: (totalBeforeModule * 0.1).toLocaleString("en-IN"),
    fifthInstallment: (totalBeforeModule * 0.1).toLocaleString("en-IN"),
    sixthInstallment: (totalBeforeModule * 0.2).toLocaleString("en-IN"),
    seventhInstallment: (totalBeforeModule * 0.1).toLocaleString("en-IN"),
  };

  const funnyMessages = [
    "Waking up builders... 🏗️",
    "Measuring every brick... 📏",
    "Painting walls pixel by pixel... 🎨",
    "Brewing cement... ☕",
    "Calling in architects from Mars... 🚀",
  ];

  console.log("pro", project);

  useEffect(() => {
    document.body.style.overflowX = fullscreenImage ? "hidden" : "auto";
  }, [fullscreenImage]);

  const getProjectDetails = async () => {
    try {
      const { data } = await axios.post(`${base_url}/api/projectDetails`, {
        projectSlug: slug,
      });
      setProject(data.data);
    } catch (error) {
      console.error("Error fetching project details:", error);
    }
  };

  useEffect(() => {
    if (slug) {
      getProjectDetails();
      const delayTimer = setTimeout(() => {
        setShowProjectDetails(true);
      }, 700);

      const random =
        funnyMessages[Math.floor(Math.random() * funnyMessages.length)];
      setFunnyText(random);

      return () => clearTimeout(delayTimer);
    }
  }, [slug]);

  const handleInquiry = () => {
    navigate("/contact-us#form", {
      state: {
        project: {
          _id: project._id,
          projectName: project.projectName,
        },
      },
    });
  };

  const handleBookForm = () => {
    const isFarmProject =
      project?.projectType === "Farm Lands" ||
      project?.projectType === "Farm Houses";

    const bookingState = {
      project: {
        _id: project._id,
        projectName: project.projectName,
        projectImages: project.projectImages,
        projectType: project.projectType,
        ...(isFarmProject && {
          sqft: selectedSqft,
          totalPrice: totalBeforeModule,
        }),
      },
    };

    navigate(`/book-now/${project._id}`, {
      state: bookingState,
    });
  };

  if (!showProjectDetails || !project) {
    return (
      <div className="flex items-center justify-center flex-col gap-y-4 h-[300px]">
        <div className="animate-spin rounded-full h-10 sm:h-16 w-10 sm:w-16 border-t-4 border-b-4 border-[#122F6B]"></div>
        <p className="text-[#122F6B] text-lg font-medium animate-bounce">
          {funnyText}
        </p>
      </div>
    );
  }

  function smartRound(value) {
    const floor = Math.floor(value);
    return floor;
  }

  const getRoomIcon = (room) => {
    const lower = room.toLowerCase();
    if (lower.includes("bed")) return <FaBed />;
    if (lower.includes("servant")) return <FaBed />;
    if (lower.includes("bath") || lower.includes("toilet")) return <FaBath />;
    if (lower.includes("kitchen")) return <TbToolsKitchen />;
    if (lower.includes("living")) return <GiSofa />;
    if (lower.includes("dining")) return <FaChair />;
    if (lower.includes("guest")) return <FaUserFriends />;
    if (lower.includes("drawing")) return <FaDoorOpen />;
    if (lower.includes("study")) return <FaBook />;
    if (lower.includes("powder")) return <FaBath />;
    if (lower.includes("garden")) return <PiParkDuotone />;
    if (lower.includes("store")) return <FaBoxOpen />;
    if (lower.includes("parking")) return <FaParking />;
    return <FaHome />;
  };

  const getIconForAmenity = (label = "") => {
    const text = label?.toString().toLowerCase();

    // Amenity specific
    if (text.includes("outdoor")) return <MdSportsGymnastics />;
    if (text.includes("gym") || text.includes("gymnasium"))
      return <FaDumbbell />;
    if (text.includes("swimming")) return <FaSwimmingPool />;
    if (text.includes("security")) return <FaShieldAlt />;
    if (text.includes("community") || text.includes("office"))
      return <RiHomeOfficeLine />;
    if (
      text.includes("backup") ||
      text.includes("generator") ||
      text.includes("power") ||
      text.includes("electric")
    )
      return <MdOutlineElectricBolt />;
    if (text.includes("parking")) return <FaParking />;
    if (text.includes("clubhouse") || text.includes("club"))
      return <RiBilliardsFill />;
    if (text.includes("jogging") || text.includes("track"))
      return <FaWalking />;
    if (text.includes("yoga") || text.includes("fitness")) return <GrYoga />;
    if (text.includes("parking")) return <FaParking />;
    if (text.includes("adventure")) return <GiCampingTent />;
    if (text.includes("bonfire")) return <IoMdBonfire />;
    if (text.includes("seating")) return <SiBlockbench />;
    if (text.includes("concierge")) return <MdLocalLaundryService />;
    if (text.includes("automation")) return <TbSmartHome />;
    if (text.includes("lift")) return <GiLift />;
    if (text.includes("fire")) return <FaFireExtinguisher />;
    if (text.includes("water") || text.includes("supply")) return <IoWater />;
    if (text.includes("game") || text.includes("chess")) return <FaChess />;
    if (text.includes("cricket") || text.includes("play"))
      return <GiCricketBat />;
    if (text.includes("spa")) return <TbMassage />;
    if (text.includes("wifi") || text.includes("internet")) return <FaWifi />;
    if (text.includes("garden") || text.includes("park")) return <FaTree />;
    if (text.includes("pet")) return <FaDog />;
    if (text.includes("cctv") || text.includes("camera")) return <BiCctv />;

    return <FaHome />;
  };

  return (
    <div className="w-full overflow-x-hidden bg-gradient-to-br from-[#a0a993] via-white to-slate-100">
      {/* Hero Section */}
      <section className="px-4 sm:px-16 py-5 sm:py-10 ">
        <div className="flex flex-col md:flex-row justify-between items-start gap-6 mb-6">
          <div className=" md:w-auto flex flex-col space-y-3">
            {/* Project Name */}
            <h1
              data-aos="zoom-in-right"
              className="text-xl sm:text-3xl font-bold text-gray-800"
            >
              {project.projectName}
            </h1>

            <div className="flex gap-x-2">
              {["Newly Launched", "Sold Out", "Coming Soon"].includes(
                project.projectStatus
              ) && (
                <span
                  data-aos="flip-left"
                  data-aos-easing="ease-out-cubic"
                  data-aos-duration="2000"
                  className={`px-4 py-1 rounded-full font-semibold text-sm w-fit
            ${
              project.projectStatus === "Sold Out"
                ? "bg-red-200 text-red-700"
                : "bg-blue-200 text-blue-700"
            }`}
                >
                  {project.projectStatus}
                </span>
              )}
              {["Semi-Furnished", "Fully-Furnished", "Unfurnished"].includes(
                project.interiorStatus
              ) && (
                <span
                  data-aos="flip-left"
                  data-aos-easing="ease-out-cubic"
                  data-aos-duration="2000"
                  className={`px-4 py-1 rounded-full font-semibold text-sm w-fit
            ${
              project.interiorStatus === "Semi-Furnished"
                ? "bg-yellow-200 text-yellow-700"
                : project.interiorStatus === "Fully-Furnished"
                ? "bg-green-200 text-green-700"
                : "bg-red-200 text-red-700"
            }`}
                >
                  {project.interiorStatus}
                </span>
              )}
            </div>

            {/* Address + Status Badge */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 mt-2 flex-wrap">
              <p data-aos="zoom-in" className="text-gray-600 break-words">
                {project.projectAddress}
              </p>
            </div>
          </div>

          {/* CTA Button */}
          <div className="w-full md:w-auto">
            <button
              onClick={handleInquiry}
              className="text-sm bg-[#122F6B] hover:bg-[#0f265a] transition-all text-white p-3 rounded-md shadow"
            >
              Enquiry
            </button>
          </div>
        </div>

        <Swiper
          navigation
          modules={[Navigation, Autoplay]}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          spaceBetween={20}
          breakpoints={{
            320: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
          }}
          className="w-full"
        >
          {project.projectImages?.map((img, index) => (
            <SwiperSlide key={index}>
              <img
                src={img.url}
                loading="lazy"
                alt={`Slide ${index + 1}`}
                onClick={() => setFullscreenImage(img.url)}
                className="w-full h-[300px] sm:h-[400px] object-cover rounded-lg shadow-md"
              />
            </SwiperSlide>
          ))}
        </Swiper>
        {fullscreenImage && (
          <div
            className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center overflow-hidden"
            onClick={() => setFullscreenImage(null)}
          >
            <div
              className="relative w-full max-w-screen-xl px-4"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setFullscreenImage(null)}
                className="absolute top-4 right-4 text-white text-3xl font-bold z-50"
              >
                &times;
              </button>

              <img
                src={fullscreenImage}
                loading="lazy"
                alt="Fullscreen"
                className="w-full max-h-[90vh] object-contain rounded-lg"
              />
            </div>
          </div>
        )}
      </section>

      {/* Overview and Details */}
      <section className="px-4 sm:px-16 py-6 sm:py-10 ">
        <div className="grid md:grid-cols-2 gap-6 sm:gap-10">
          {/* Overview */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
              <FaHome className="text-[#122F6B]" />
              Property Overview
            </h2>
            {(project.projectOverview || "").split("...").map((para, idx) => (
              <p
                key={idx}
                data-aos="zoom-in-right"
                className="text-gray-600 leading-relaxed mb-3"
              >
                {para}
              </p>
            ))}
          </div>

          {/* Property Details */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2 flex items-center gap-2">
              <FaWrench className="text-[#122F6B]" />
              Property Details
            </h2>

            {/* Rooms */}
            {project.functionality?.length > 0 && (
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h3 className="font-medium text-gray-700 mb-2 flex items-center gap-2">
                  Functionality
                </h3>
                <div className="flex flex-wrap gap-2 text-sm text-gray-600">
                  {(Array.isArray(project.functionality)
                    ? project.functionality
                    : project.functionality?.split(",")
                  )?.map((item, index) => (
                    <span
                      key={index}
                      data-aos="flip-left"
                      data-aos-easing="ease-out-cubic"
                      data-aos-duration="2000"
                      className="flex items-center gap-1 px-3 py-1 bg-gray-100 border border-gray-300 rounded-full"
                    >
                      {getRoomIcon(item)}
                      {item.trim()}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Amenities */}
            {project.amenities?.length > 0 && (
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h3 className="font-medium text-gray-700 mb-2 flex items-center gap-2">
                  Amenities
                </h3>
                <div className="flex flex-wrap gap-2 text-sm text-gray-600">
                  {(Array.isArray(project.amenities)
                    ? project.amenities
                    : project.amenities?.split(",")
                  )?.map((item, index) => (
                    <span
                      key={index}
                      data-aos="flip-left"
                      data-aos-easing="ease-out-cubic"
                      data-aos-duration="2000"
                      className="flex items-center gap-1 px-3 py-1 bg-gray-100 border border-gray-300 rounded-full"
                    >
                      {getIconForAmenity(item)}
                      {item.trim()}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Land Area & Built-up Area */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {project.landArea && (
                <div className="bg-white p-4 rounded-lg shadow-sm flex gap-3 items-center justify-center">
                  <BsArrowsFullscreen
                    className="text-[#122F6B] mt-1"
                    size={20}
                  />
                  <div
                    data-aos="fade-left"
                    className="flex items-center gap-x-2"
                  >
                    <h3 className="font-medium text-gray-700">Land Area: </h3>
                    <p className="text-gray-500">{project.landArea}</p>
                  </div>
                </div>
              )}

              {project.builtUpArea && (
                <div className="bg-white p-4 rounded-lg shadow-sm flex gap-3 items-center justify-center">
                  <MdApartment className="text-[#122F6B] mt-1" size={20} />
                  <div
                    data-aos="fade-left"
                    className="flex items-center gap-x-2"
                  >
                    <h3 className="font-medium text-gray-700">
                      Built-Up Area:{" "}
                    </h3>
                    <p className="text-gray-500">{project.builtUpArea}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <hr />

      <section className="px-4 sm:px-16 py-8 ">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 text-center">
          {project.targetIRR && (
            <div
              data-aos="fade-up"
              className="bg-gray-100 rounded-xl p-4 shadow-sm flex justify-center items-center gap-x-2"
            >
              <FaScaleBalanced className="text-[#122F6B]" size={40} />
              <div className="text-start">
                <h3 className="text-xl font-semibold">{project.targetIRR}</h3>
                <p className="text-gray-600 mt-1 text-sm">Projected IRR</p>
              </div>
            </div>
          )}

          {project.peRatio && (
            <div
              data-aos="fade-up"
              className="bg-gray-100 rounded-xl p-4 shadow-sm flex justify-center items-center gap-x-2"
            >
              <FaRegLightbulb className="text-[#122F6B]" size={40} />
              <div className="text-start">
                <h3 className="text-xl font-semibold">{project.peRatio}</h3>
                <p className="text-gray-600 mt-1 text-sm">PE Ratio</p>
              </div>
            </div>
          )}

          {project.possessionStatus && (
            <div
              data-aos="fade-up"
              className="bg-gray-100 rounded-xl p-4 shadow-sm flex justify-center items-center gap-x-2"
            >
              <SlCalender className="text-[#122F6B]" size={40} />
              <div className="text-start">
                <h3 className="text-xl font-semibold">
                  {project.possessionStatus}
                </h3>
                <p className="text-gray-600 mt-1 text-sm">Possession Status</p>
              </div>
            </div>
          )}

          {project.targetRentalYield && (
            <div
              data-aos="fade-up"
              className="bg-gray-100 rounded-xl p-4 shadow-sm flex justify-center items-center gap-x-2"
            >
              <PiTarget className="text-[#122F6B]" size={40} />
              <div className="text-start">
                <h3 className="text-xl font-semibold">
                  {project.targetRentalYield}
                </h3>
                <p className="text-gray-600 mt-1 text-sm">
                  Projected Rental Yield
                </p>
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="flex items-center justify-center  px-4 sm:px-16 pb-8">
        <div className="grid md:grid-cols-2 gap-10 items-center max-w-6xl w-full">
          {/* Image Section */}
          <div data-aos="fade-right" className="w-full">
            <img
              src={project.projectImages[0]?.url}
              loading="lazy"
              alt="Property Preview"
              className="rounded-2xl w-full h-[300px] sm:h-[400px] object-cover shadow-md"
            />
          </div>

          {/* Content Section */}
          <div data-aos="fade-left" className="w-full space-y-6">
            <div>
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-2">
                {project?.projectType === "Villas" ||
                project?.projectType === "Studio Apartment"
                  ? "OWN this Property"
                  : "OWN this Property"}
              </h2>
              <h3 className="text-xl font-medium text-[#122F6B]">
                {project?.projectType === "Villas" ||
                project?.projectType === "Studio Apartments" ? (
                  <span>
                    OWNiBIT Value (1/11<sup>th</sup> Fraction)
                  </span>
                ) : (
                  "OWNiPROP Value"
                )}
              </h3>
              {project?.projectType === "Farm Lands" ||
              project?.projectType === "Farm Houses" ? (
                "---"
              ) : (
                <p className="text-3xl text-green-900 mt-2 font-bold">
                  ₹{owniBitValue.toLocaleString("en-IN")}/-
                </p>
              )}
              {/* <p className="text-3xl text-green-900 mt-2 font-bold">
                ₹{owniBitValue.toLocaleString("en-IN")}/-
              </p> */}

              <h4 className="text-base font-medium text-gray-600 mt-8">
                Booking Amount
              </h4>
              {project?.projectType === "Farm Lands" ||
              project?.projectType === "Farm Houses" ? (
                "---"
              ) : (
                <>
                  <p className="text-3xl font-semibold text-gray-900">
                    ₹{bookingAmount.toLocaleString("en-IN")}/-
                  </p>
                  <span className="text-sm text-gray-500 italic">
                    (Inc. of GST)
                  </span>
                </>
              )}
            </div>

            <div className="flex flex-wrap gap-4 mt-4">
              {/* <Link to="/contact-us"> */}
              <button
                onClick={handleInquiry}
                className="bg-[#122F6B] hover:bg-[#0f265a] transition-all text-white px-6 py-3 rounded-md shadow"
              >
                Enquiry
              </button>

              <button
                onClick={handleBookForm}
                className="text-[#122F6B] hover:bg-[#122F6B] hover:text-white transition-all border-2 border-[#122F6B] px-6 py-3 rounded-lg shadow-md"
              >
                Book Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {["villas", "studio apartments"].includes(
        project.projectType?.toLowerCase()
      ) && (
        <section data-aos="zoom-in" className="px-4 sm:px-16  pb-8">
          <div className="max-w-5xl mx-auto">
            <Tabs defaultValue="ownershipPlans" className="w-full">
              {/* Tabs Header */}
              <TabsList className="w-full flex justify-center gap-4 bg-gray-200 rounded-xl p-2 mb-5 shadow-sm">
                <TabsTrigger
                  value="ownershipPlans"
                  className="flex-1 text-center font-semibold py-2 rounded-lg transition-all data-[state=active]:bg-[#122F6B] data-[state=active]:text-white"
                >
                  Ownership Plans
                </TabsTrigger>
                <TabsTrigger
                  value="unitBreakdown"
                  className="flex-1 text-center font-semibold py-2 rounded-lg transition-all data-[state=active]:bg-[#122F6B] data-[state=active]:text-white"
                >
                  Unit Breakdown
                </TabsTrigger>
              </TabsList>

              {/* Ownership Plan Table */}
              <TabsContent value="ownershipPlans">
                <div className="bg-white p-4 sm:p-6 rounded-2xl shadow-md">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4 sm:mb-6 border-b pb-2">
                    Ownership Payment Schedule (
                    {project.projectType?.toUpperCase()} -{" "}
                    {project.projectName?.split(":")[0]?.trim()} @{" "}
                    {project.projectAddress})
                  </h3>

                  <div className="overflow-x-auto">
                    <Table className="min-w-full">
                      <TableHeader>
                        <TableRow className="bg-gray-100">
                          <TableHead className="w-[25%] sm:w-auto whitespace-nowrap"></TableHead>
                          <TableHead className="w-[25%] sm:w-auto whitespace-nowrap"></TableHead>
                          <TableHead className="w-[25%] text-right whitespace-nowrap">
                            Entire Unit
                          </TableHead>
                          <TableHead className="w-[25%] text-right whitespace-nowrap">
                            OWNiBIT (1/11)
                          </TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {[
                          [
                            "Advance",
                            "At the time of Booking",
                            smartRound(owniBitValue * 0.1),
                            smartRound(owniBitValue * 0.1 * 11),
                          ],
                          [
                            "1st Installment",
                            "Within 30 days of Booking",
                            project.ownershipPlan?.firstInstallment,
                            project.ownershipPlan?.firstInstallment * 11,
                          ],
                          [
                            "2nd Installment",
                            "After 60 days of Booking",
                            project.ownershipPlan?.secondInstallment,
                            project.ownershipPlan?.secondInstallment * 11,
                          ],
                          [
                            "3rd Installment",
                            "After 90 days of Booking",
                            project.ownershipPlan?.thirdInstallment,
                            project.ownershipPlan?.thirdInstallment * 11,
                          ],
                          [
                            "4th Installment",
                            "After 120 days of Booking",
                            project.ownershipPlan?.fourthInstallment,
                            project.ownershipPlan?.fourthInstallment * 11,
                          ],
                          [
                            "5th Installment",
                            "After 150 days of Booking",
                            project.ownershipPlan?.fifthInstallment,
                            project.ownershipPlan?.fifthInstallment * 11,
                          ],
                          [
                            "6th Installment",
                            "On completion of Flooring",
                            project.ownershipPlan?.sixthInstallment,
                            project.ownershipPlan?.sixthInstallment * 11,
                          ],
                          [
                            "7th Installment",
                            "At the time of offer of Possession",
                            project.ownershipPlan?.seventhInstallment,
                            project.ownershipPlan?.seventhInstallment * 11,
                          ],
                        ].map(
                          (
                            [label, timeline, ownibitAmount, entireUnitAmount],
                            i
                          ) => (
                            <TableRow
                              key={i}
                              className="hover:bg-gray-50 transition"
                            >
                              <TableCell className="font-medium whitespace-nowrap">
                                {label}
                              </TableCell>
                              <TableCell className="text-gray-500 text-sm whitespace-nowrap">
                                {timeline}
                              </TableCell>
                              <TableCell className="text-right font-semibold text-gray-800 whitespace-nowrap">
                                ₹
                                {entireUnitAmount?.toLocaleString("en-IN") ||
                                  "-"}
                                /-
                              </TableCell>
                              <TableCell className="text-right font-semibold text-gray-800 whitespace-nowrap">
                                ₹{ownibitAmount?.toLocaleString("en-IN") || "-"}
                                /-
                              </TableCell>
                            </TableRow>
                          )
                        )}

                        {/* Total Row */}
                        <TableRow className="bg-gray-50 border-t-2 border-gray-200">
                          <TableCell className="font-medium whitespace-nowrap">
                            <span className="font-bold">Total</span>
                          </TableCell>
                          <TableCell className="text-gray-500 text-sm whitespace-nowrap"></TableCell>
                          <TableCell className="text-right font-bold text-gray-800 whitespace-nowrap">
                            ₹
                            {(
                              smartRound(owniBitValue * 0.1 * 11) +
                              (project.ownershipPlan?.firstInstallment * 11 ||
                                0) +
                              (project.ownershipPlan?.secondInstallment * 11 ||
                                0) +
                              (project.ownershipPlan?.thirdInstallment * 11 ||
                                0) +
                              (project.ownershipPlan?.fourthInstallment * 11 ||
                                0) +
                              (project.ownershipPlan?.fifthInstallment * 11 ||
                                0) +
                              (project.ownershipPlan?.sixthInstallment * 11 ||
                                0) +
                              (project.ownershipPlan?.seventhInstallment * 11 ||
                                0)
                            )?.toLocaleString("en-IN")}
                            /-
                          </TableCell>
                          <TableCell className="text-right font-bold text-gray-800 whitespace-nowrap">
                            ₹
                            {(
                              smartRound(owniBitValue * 0.1) +
                              (project.ownershipPlan?.firstInstallment || 0) +
                              (project.ownershipPlan?.secondInstallment || 0) +
                              (project.ownershipPlan?.thirdInstallment || 0) +
                              (project.ownershipPlan?.fourthInstallment || 0) +
                              (project.ownershipPlan?.fifthInstallment || 0) +
                              (project.ownershipPlan?.sixthInstallment || 0) +
                              (project.ownershipPlan?.seventhInstallment || 0)
                            )?.toLocaleString("en-IN")}
                            /-
                          </TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </div>
                </div>
              </TabsContent>

              {/* Unit Breakdown Table */}
              <TabsContent value="unitBreakdown">
                <div className="bg-white p-6 rounded-2xl shadow-md">
                  <h3 className="text-xl font-semibold text-gray-800 mb-6 border-b pb-2">
                    Unit Cost Breakdown ({project.projectType?.toUpperCase()} -{" "}
                    {project.projectName?.split(":")[0]?.trim()} @{" "}
                    {project.projectAddress})
                  </h3>
                  <Table>
                    <TableHeader>
                      <TableRow className="bg-gray-100">
                        <TableHead className="w-[40%]"></TableHead>
                        <TableHead className="w-[30%] text-right">
                          Entire Unit
                        </TableHead>
                        <TableHead className="text-right w-[30%]">
                          OWNiBIT (1/11)
                        </TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {[
                        [
                          "BSP (All-Inclusive)",
                          project.unitBreakdown?.singleUnit?.totalPropertyValue,
                        ],
                        [
                          "Government Compliances & Facilitation Charges",
                          project.unitBreakdown?.singleUnit?.stampDuty,
                        ],
                        ["GST", project.unitBreakdown?.singleUnit?.gst],
                        [
                          "Furnishing Cost",
                          project.unitBreakdown?.singleUnit?.furnishingCost,
                        ],
                        [
                          "Conveyance Fees",
                          project.unitBreakdown?.singleUnit?.conveyanceFees,
                        ],
                        [
                          "Facilitation Charges",
                          project.unitBreakdown?.singleUnit
                            ?.facilitationCharges,
                        ],
                      ]
                        .filter(([_, brik]) => brik)
                        .map(([label, brik], i) => {
                          const formattedBit =
                            Number(brik).toLocaleString("en-IN");
                          const formattedWhole = Number(
                            brik * 11
                          ).toLocaleString("en-IN");

                          return (
                            <TableRow
                              key={i}
                              className="hover:bg-gray-50 transition"
                            >
                              <TableCell className="font-medium text-gray-700">
                                {label}
                              </TableCell>
                              <TableCell className="text-right">
                                ₹{formattedWhole}/-
                              </TableCell>
                              <TableCell className="text-right">
                                ₹{formattedBit}/-
                              </TableCell>
                            </TableRow>
                          );
                        })}

                      {/* Total Calculation */}
                      {(() => {
                        const bitValues = [
                          project.unitBreakdown?.singleUnit?.totalPropertyValue,
                          project.unitBreakdown?.singleUnit?.stampDuty,
                          project.unitBreakdown?.singleUnit?.gst,
                          project.unitBreakdown?.singleUnit?.furnishingCost,
                          project.unitBreakdown?.singleUnit?.conveyanceFees,
                          project.unitBreakdown?.singleUnit
                            ?.facilitationCharges,
                        ];

                        const totalBit = bitValues.reduce(
                          (acc, val) => acc + (val ? smartRound(val) : 0),
                          0
                        );
                        const totalWhole = totalBit * 11;

                        return (
                          <TableRow className="bg-blue-50 font-bold text-gray-800 border-t-2 border-blue-200">
                            <TableCell>Total</TableCell>
                            <TableCell className="text-right">
                              ₹{smartRound(totalWhole)?.toLocaleString("en-IN")}
                              /-
                            </TableCell>
                            <TableCell className="text-right">
                              ₹{smartRound(totalBit)?.toLocaleString("en-IN")}/-
                            </TableCell>
                          </TableRow>
                        );
                      })()}
                    </TableBody>
                  </Table>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      )}

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
      )}

      {project.projectType === "Farm Houses" && (
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
                  )
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
                                project?.farmHouseDetails?.bsp?.total
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
                                  "en-IN"
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
                                project?.farmHouseDetails?.idc?.total
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
                                  ?.total
                              ).toLocaleString("en-IN")}
                              /-
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

      <OurProjectsSlider excludeProjectId={project._id} />
    </div>
  );
};

export default ProjectDetails;
