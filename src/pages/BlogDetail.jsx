import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { base_url } from "@/config/config";

const BlogDetail = () => {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);

  const getBlogDetails = async () => {
    try {
      const { data } = await axios.post(`${base_url}/api/blogDetails`, {
        blogSlug: slug,
      });
      setBlog(data.data);
    } catch (error) {
      console.error("Error fetching blog details:", error);
    }
  };

  useEffect(() => {
    if (slug) getBlogDetails();
  }, [slug]);

  if (!blog) {
    return (
      <div className="w-full flex justify-center items-center h-screen text-xl text-gray-500">
        Loading blog...
      </div>
    );
  }

  return (
    <div className="w-full px-4 sm:px-8 md:px-16 lg:px-40 py-10 bg-gradient-to-br from-[#a0a993] via-white to-slate-100">
      {/* Title */}
      <header className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 leading-snug">
          {blog.title}
        </h1>
      </header>

      {/* Thumbnail Image */}
      {blog.thumbnail?.url && (
        <div className="w-full rounded-xl overflow-hidden shadow-lg mb-10">
          <img
            src={blog.thumbnail.url}
            alt={blog.title}
            loading="lazy"
            className="w-full object-cover h-[300px] md:h-[650px]"
          />
        </div>
      )}

      {/* Blog Content */}
      <article
        className="prose prose-lg max-w-none text-gray-900"
        dangerouslySetInnerHTML={{ __html: blog.content }}
      />
    </div>
  );
};

export default BlogDetail;
