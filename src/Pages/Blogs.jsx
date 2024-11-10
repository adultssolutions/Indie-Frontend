/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { blogs } from "../constants/index";
import { Button } from "@material-tailwind/react";



const BlogCard = ({ indexv,image, title, excerpt, onClick }) => {
  const navigate = useNavigate(); // Initialize navigate

  const handleClick = () => {
    navigate(`/blogs/${indexv}`); // Navigate to the dynamic URL using the key
  };
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img className="w-full h-64" src={image} alt={title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-blue-600">{title}</div>
        <p className="text-gray-700 text-base">{excerpt.substring(0,120) + "..."}</p>
        <Button
          className="bg-blue-700 rounded-sm mt-4 inline-block"
          onClick={handleClick} // Handle click to navigate
        >
          Read More
        </Button>
      </div>
    </div>
    
  );
};

const BlogModal = ({ isOpen, onClose, blog }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed  inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white lg:w-3/4 sm:w-full rounded-lg p-6 max-w-md w-full">
        <h2 className="font-bold text-xl mb-2">{blog.title}</h2>
        <img className="w-full h-64 mb-4" src={blog.image} alt={blog.title} />
        <p className="text-gray-700 mb-4"><strong></strong> {blog.excerpt}</p>
        {/* <p className="text-gray-700 mb-4"><strong>Content:</strong> {blog.content}</p> */}
        <Button onClick={onClose} className="bg-red-500 text-white">
          Close
        </Button>
      </div>
    </div>
  );
};

const BlogsPage = () => {
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (blog) => {
    setSelectedBlog(blog);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedBlog(null);
    setIsModalOpen(false);
  };

  return (
    <div className="bg-gray-100 py-8">
      {/* Blogs Section */}
      <div className="container mx-auto px-4 md:mt-8">
        <div className="flex flex-wrap justify-center gap-8">
          {blogs.map((blog, index) => (
            <BlogCard
              key={index}
              indexv = {index}
              image={blog.image}
              title={blog.title}
              excerpt={blog.excerpt}
              onClick={() => openModal(blog)}
            />
          ))}
        </div>
      </div>

      {/* Modal for displaying full blog */}
      {selectedBlog && (
        <BlogModal 
          isOpen={isModalOpen} 
          onClose={closeModal} 
          blog={selectedBlog} 
        />
      )}
    </div>
    // <div className="w-3/4 mx-auto px-16">
    //     <CaList className="bg-black"/>
    // </div>
    
  );
};

export default BlogsPage;