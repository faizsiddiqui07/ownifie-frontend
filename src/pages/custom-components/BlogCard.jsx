import React from "react";
import { Link } from "react-router-dom";
import { convert } from "html-to-text";

const BlogCard = ({ blog }) => {
  // ✅ Convert HTML content to plain text and slice first 50 characters
  const plainText = convert(blog?.content || "", {
    wordwrap: false,
    selectors: [{ selector: "img", format: "skip" }],
  });
  const previewText = plainText.slice(0, 200);

  return (
    <div data-aos="zoom-in-up" className="w-full bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-default">
      {/* Image Section */}
      <div>
        <img
          src={blog?.thumbnail?.url}
          loading="lazy"
          className="w-full h-56 object-cover"
          alt="Blog Post"
        />
      </div>

      {/* Content Section */}
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 hover:text-yellow-500 transition-colors duration-300">
          {blog?.title}
        </h3>

        <p className="text-sm text-gray-600 mt-2">
          {previewText}...
        </p>

        <Link
          to={`/blog/${blog?.slug}`}
          className="inline-block mt-4 text-yellow-500 hover:text-yellow-600 font-medium text-sm transition-colors duration-300"
        >
          Read more →
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
