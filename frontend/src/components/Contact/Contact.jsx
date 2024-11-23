import React, { useState, useRef } from "react";
import JoditEditor from "jodit-react";
import axios from "axios";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";

export default function Contact() {
  const editor = useRef(null);
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);

  // Handle form submission
  const handleSubmit = async (e) => {
    const token = localStorage.getItem("token"); // Assuming the token is stored in localStorage
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post(
        "http://localhost:5000/api/journal",
        {
          content,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("Blog saved to DB:", response.data);
      setContent("");
    } catch (error) {
      console.error("Error saving journal entry:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {loading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "20px",
          }}
        >
          <CircularProgress />
        </div>
      ) : (
        <>
          <JoditEditor
            ref={editor}
            value={content}
            tabIndex={1}
            onChange={(newContent) => {
              setContent(newContent);
            }}
          />
          <Button
            variant="contained"
            color="primary"
            onClick={handleSubmit}
            style={{ marginTop: "10px" }}
          >
            Submit
          </Button>
        </>
      )}
    </div>
  );
}
