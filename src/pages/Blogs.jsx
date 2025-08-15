import React, { useEffect, useState } from 'react'
import BlogCard from './custom-components/BlogCard';
import axios from 'axios';
import { base_url } from '@/config/config';

const Blogs = () => {

  const [allBlogs,setAllBlogs] = useState([])

  const get_Blogs = async ()=>{
    try {
      const {data} = await axios.get(`${base_url}/api/allWebsiteBlog`);
      setAllBlogs(data.data)
    } catch (error) {
      console.log(error);
    }
  }

 useEffect(() => {
    get_Blogs();
  }, []);

  return ( 
    <div className="w-full space-y-16 bg-gradient-to-br from-[#a0a993] via-white to-slate-100">
    <section className="px-6 sm:px-16 py-6 sm:py-10">
      <h2 className="text-3xl sm:text-5xl font-bold text-gray-800 text-center mb-8">
        Blogs
        <span className="block w-20 h-[3px] bg-[#d08e02] mx-auto mt-2"></span>
      </h2>
      <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {allBlogs.map((project, index) => (
          <BlogCard key={index} blog={project} />
        ))}
      </div>
    </section>
  </div>
  )
}

export default Blogs