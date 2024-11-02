import React, { useEffect, useState } from "react";
import axios from "axios";
import { DataGrid } from "@mui/x-data-grid";
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from "@mui/material";

export default function EditBlogs() {
  const [listBlogs, setListBlogs] = useState([]);
  const [open, setOpen] = useState(false);
  const [selectedBlog, setSelectedBlog] = useState({ title: "", category: "", content: "" });

  const fetchListBlogs = async () => {
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

  useEffect(() => {
    fetchListBlogs();
  }, []);

  const handleEditClick = (blog) => {
    setSelectedBlog(blog);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSelectedBlog((prevBlog) => ({
      ...prevBlog,
      [name]: value,
    }));
  };

  const handleSave = async () => {
    try {
      await axios.put(`http://localhost:5000/blogs/${selectedBlog.id}`, selectedBlog);
      setListBlogs((prevBlogs) =>
        prevBlogs.map((blog) => (blog.id === selectedBlog.id ? selectedBlog : blog))
      );
      setOpen(false);
    } catch (err) {
      console.error("Error updating blog: ", err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/blogs/${id}`);
      setListBlogs((prevBlogs) => prevBlogs.filter((blog) => blog.id !== id));
    } catch (err) {
      console.error("Error deleting blog: ", err);
    }
  };

  const columns = [
    { field: "title", headerName: "Title", width: 300, editable: false },
    { field: "category", headerName: "Category", width: 200, editable: false },
    { field: "content", headerName: "Content", width: 300, editable: false }, // Changed from description to content
    {
      field: "actions",
      headerName: "Actions",
      width: 200,
      renderCell: (params) => (
        <>
          <Button
            variant="contained"
            color="primary"
            size="small"
            onClick={() => handleEditClick(params.row)}
          >
            Edit
          </Button>
          <Button
            variant="contained"
            color="secondary"
            size="small"
            style={{ marginLeft: 10 }}
            onClick={() => handleDelete(params.row.id)}
          >
            Delete
          </Button>
        </>
      ),
    },
  ];

  return (
    <div style={{ height: 600, width: "100%" }}>
      <DataGrid rows={listBlogs} columns={columns} />
      
      {/* Edit Modal */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Edit Blog</DialogTitle>
        <DialogContent>
          <TextField
            label="Title"
            name="title"
            value={selectedBlog.title}
            onChange={handleChange}
            fullWidth
            margin="dense"
          />
          <TextField
            label="Category"
            name="category"
            value={selectedBlog.category}
            onChange={handleChange}
            fullWidth
            margin="dense"
          />
          <TextField
            label="Content" // Changed from Description to Content
            name="content"  // Changed from description to content
            value={selectedBlog.content}
            onChange={handleChange}
            fullWidth
            margin="dense"
            multiline
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSave} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
