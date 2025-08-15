import React, { useEffect, useState } from "react";
import Card from "./custom-components/Card";
import axios from "axios";
import { base_url } from "@/config/config";

const AllProjects = () => {
  const [allProjects, setAllProjects] = useState([]);
  const [showCards, setShowCards] = useState(false);

  const get_projects = async () => {
    try {
      const { data } = await axios.get(`${base_url}/api/allWebsiteProjects`);
      setAllProjects(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    get_projects();

    const delayTimer = setTimeout(() => {
      setShowCards(true);
    }, 700);

    return () => clearTimeout(delayTimer);
  }, []);

  const funnyMessages = [
    "Warming up bulldozers... 🏗️",
    "Fetching concrete dreams... 💭",
    "Calling real estate superheroes... 🦸",
    "Polishing your villa... 🧽",
  ];

  const [funnyText, setFunnyText] = useState("");

  useEffect(() => {
    const random =
      funnyMessages[Math.floor(Math.random() * funnyMessages.length)];
    setFunnyText(random);
  }, []);

  if (!showCards) {
    return (
      <div className="flex items-center justify-center flex-col gap-y-4 h-[300px]">
        <div className="animate-spin rounded-full h-10 sm:h-16 w-10 sm:w-16 border-t-4 border-b-4 border-[#122F6B]"></div>
        <p className="text-[#122F6B] text-lg font-medium animate-bounce">{funnyText}</p>
      </div>
    );
  }

  // 2 seconds ho gaye but koi project nahi mila
  if (showCards && allProjects.length === 0) {
    return (
      <div className="text-center py-10 text-lg text-red-600">
        No Projects Found
      </div>
    );
  }

  // 2 seconds ho gaye aur projects bhi mil gaye
  return (
    <div className="w-full space-y-16 bg-gradient-to-br from-[#a0a993] via-white to-slate-100">
      <section className="px-6 sm:px-16 py-6 sm:py-10">
        <h2 className="text-3xl sm:text-5xl font-bold text-gray-800 mb-8">
          Projects
        </h2>
        <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-6">
          {allProjects.map((project, index) => (
            <Card key={index} data={project} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default AllProjects;
