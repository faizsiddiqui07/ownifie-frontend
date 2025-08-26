import React, { useEffect, useState } from "react";
import Card from "./custom-components/Card";
import axios from "axios";
import { base_url } from "@/config/config";

const AllProjects = () => {
  const [allProjects, setAllProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  const funnyMessages = [
    "Warming up bulldozers... 🏗️",
    "Fetching concrete dreams... 💭",
    "Calling real estate superheroes... 🦸",
    "Polishing your villa... 🧽",
  ];

  const [funnyText] = useState(
    funnyMessages[Math.floor(Math.random() * funnyMessages.length)]
  );

  const get_projects = async () => {
    const startTime = Date.now(); 
    try {
      const { data } = await axios.get(`${base_url}/api/allWebsiteProjects`);
      setAllProjects(data.data);
    } catch (error) {
      console.log(error);
    } finally {
      const elapsed = Date.now() - startTime;
      const remainingTime = Math.max(0, 800 - elapsed); 
      setTimeout(() => setLoading(false), remainingTime);
    }
  };

  useEffect(() => {
    get_projects();
  }, []);

  // ✅ Loader UI
  if (loading) {
    return (
      <div className="flex items-center justify-center flex-col gap-y-4 h-[300px]">
        <div className="animate-spin rounded-full h-10 sm:h-16 w-10 sm:w-16 border-t-4 border-b-4 border-[#122F6B]"></div>
        <p className="text-[#122F6B] text-lg font-medium animate-bounce">
          {funnyText}
        </p>
      </div>
    );
  }

  // ✅ No projects
  if (allProjects.length === 0) {
    return (
      <div className="text-center py-10 text-lg text-red-600">
        No Projects Found
      </div>
    );
  }

  // ✅ Projects loaded
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
