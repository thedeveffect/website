import React, { useState, useEffect } from "react";
import "../App.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import '../style/Carousel.css';
import random1 from "../assets/random1.jpeg"
export default function Journal() {
  const [blogs, setBlogs] = useState([]);

  // Dynamically import all JSON files from the 'data' folder
  const importAll = (r) => {
    return r.keys().map(r);
  };

  useEffect(() => {
    const loadBlogs = () => {
      const jsonFiles = importAll(require.context('../blog-data', false, /\.json$/));

      const allBlogs = jsonFiles
        .flat()
        .filter(blog => blog && blog.title);  // Ensure valid blogs with titles

      setBlogs(allBlogs);
    };

    loadBlogs();
  }, []);



  return (
    <div className="container mt-4">
    <div>
    <Carousel>
    
     
        <div className="carousel-item">
          <div className="carousel-image">
            <img src={random1} alt="Slide 1" />
          </div>
          <div className="carousel-content">
            <h2>Slide 1 Title</h2>
            <p>This is a paragraph for Slide 1. Add any description you like here.</p>
          </div>
        </div>
        <div className="carousel-item">
          <div className="carousel-image">
            <img src="random1.jpeg" alt="Slide 2" />
          </div>
          <div className="carousel-content">
            <h2>Slide 2 Title</h2>
            <p>This is a paragraph for Slide 2. Add any description you like here.</p>
          </div>
        </div>
        <div className="carousel-item">
          <div className="carousel-image">
            <img src="your-image-url-3.jpg" alt="Slide 3" />
          </div>
          <div className="carousel-content">
            <h2>Slide 3 Title</h2>
            <p>This is a paragraph for Slide 3. Add any description you like here.</p>
          </div>
        </div>
      
            </Carousel>
    </div>
      <div className="row">
        {blogs.length > 0 ? (
          blogs.map((blog, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{blog.title}</h5>
                  <h6 className="card-subtitle mb-2 text-muted">{blog.category}</h6>
                  <p className="card-text">{blog.description}</p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No blogs available.</p>
        )}
      </div>
    </div>
  );
}
