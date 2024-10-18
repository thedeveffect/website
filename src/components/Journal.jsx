import React, { useState, useEffect } from "react";
import "../App.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
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
                <div> 
                    {/* <img src="assets/1.jpeg" /> */}
                    {/* <p className="legend">Legend 1</p> */}
                    <h1>this is first</h1>
                </div>
                <div>
                    {/* <img src="assets/2.jpeg" /> */}
                    {/* <p className="legend">Legend 2</p> */}
                    <h1>this is first</h1>
                </div>
                <div>
                    {/* <img src="assets/3.jpeg" /> */}
                    {/* <p className="legend">Legend 3
                    </p> */}
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
