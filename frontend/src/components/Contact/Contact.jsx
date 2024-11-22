import React, { useState, useRef, useMemo, useEffect } from "react";
import JoditEditor from "jodit-react";
import axios from 'axios'
import Button from '@mui/material/Button'

export default function Contact() {
  const editor = useRef(null);
  const [content, setContent] = useState("");
  const handleSubmit = async(e) => {
    e.preventDefault();
    try{
      const response = await axios.post('http://localhost:5000/api/journal',{
        content,
      })
      console.log("Blog saved - DB: ", response.data);
    }catch(error){
      console.error("Error saving journal entry:", error);
    }
  }

  return (
    <>
      <JoditEditor
        ref={editor}
        value={content}
        tabIndex={1} 
        onChange={(newContent) => {
          setContent(newContent);
        }}
      />
      <Button onClick={handleSubmit}>
        Submit
      </Button>
    </>
  );
}
