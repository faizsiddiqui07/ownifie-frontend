import React from "react";
import { Link } from "react-router-dom";

const Card = ({ data }) => {
  return (
    <Link
      data-aos="zoom-in-up"
      to={`/projectdetail/${data?.slug || data?._id}`}
      className="w-full block bg-gray-200 rounded-md shadow-md hover:shadow-lg"
    >
      <div className="relative">
        <img
          src={data?.projectImages?.[0]?.url || "/default-image.jpg"} // fallback image
          loading="lazy"
          className="w-full h-60 object-cover rounded-t-md"
          alt={data?.projectName}
        />
        {data?.projectStatus && (
          <span className="absolute bottom-1 left-1 text-white uppercase bg-[#d08e02] py-[2px] px-2 rounded-md text-xs">
            {data.projectStatus}
          </span>
        )}
        {/* {data?.projectType === "Farm Lands" ||
        data?.projectType === "Farm Houses" ? (
          <span className="absolute bottom-1 left-1 text-white  bg-[#972608] shadow-lg py-[4px] px-2 rounded-md text-xs">
            ₹111/- per Sq.Ft.
          </span>
        ) : (
          ""
        )} */}
      </div>
      <div className="p-3">
        <h3 className="text-lg font-medium">
          {data?.projectName || "Unnamed Project"}
        </h3>
        <p className="text-sm text-gray-600 line-clamp-1">
          {data?.projectAddress || "No address available"}
        </p>
        <p className="text-base font-bold text-[#d08e02] mt-1">
          {data?.projectType === "Villas" ||
          data?.projectType === "Studio Apartments"
            ? "OWNiCELL Value: ₹"
            : "OWNiPROP Value: ₹"}
          {data?.projectType === "Villas" ||
          data?.projectType === "Studio Apartments"
            ? Number(data?.projectAmount).toLocaleString("en-IN") || "---"
            : "---"}
          {/* {data?.projectAmount
            ? Number(data?.projectAmount).toLocaleString("en-IN") || "---"
            : "---"} */}
        </p>
      </div>
    </Link>
  );
};

export default Card;
