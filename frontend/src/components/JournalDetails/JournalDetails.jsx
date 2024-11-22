import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function JournalDetails() {
  const { id } = useParams(); // Get blog ID from URL
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/journal/${id}`);
        setBlog(res.data); // Set blog data
        setLoading(false);
      } catch (err) {
        console.error("Error fetching blog:", err);
        setError("Failed to fetch blog entry.");
        setLoading(false);
      }
    };

    fetchBlog();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "20px",
        borderRadius: "8px",
      }}
      dangerouslySetInnerHTML={{ __html: blog.content }} // Render the blog content
    />
  );
}
