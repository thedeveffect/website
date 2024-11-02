import React, { useEffect, useState } from "react";
import axios from "axios";
import { DataGrid } from "@mui/x-data-grid";

export default function EditBlogs() {
  const [listBlogs, setListBlogs] = useState([]);

  const column = [
    {
      field: "title",
      headerName: "Title",
      width: 300,
      editable: true,
    },
    {
      field: "id",
      headerName: "ID",
      width: 250,
      editable: true,
    },
    {
      field: "category",
      headerName: "Category",
      width: 200,
      editable: true,
    },
    {
        field: "date",
        headerName: "Posted On",
        width: 200,
        editable: true,
      },
  ];

  useEffect(() => {
    const fetchListBlgos = async () => {
      try {
        const response = await axios.get("http://localhost:5000/blogs");
        const blogsWithId = response.data.map((blog) => ({
          id: blog._id,
          ...blog,
        }));
        setListBlogs(blogsWithId);
      } catch (err) {
        console.error("Error fetching blogs: ", err);
      }
    };
    fetchListBlgos();
  }, []);

  console.log(listBlogs);
  
  return (
    <>
      <DataGrid rows={listBlogs} columns={column} />
    </>
  );
}
