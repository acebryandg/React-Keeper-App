import React, { useState } from "react";

function CreateArea(props) {
  const [inputTitle, setInputTitle] = useState("");
  const [inputContent, setInputContent] = useState("");

  const handleTitleChange = (event) => {
    setInputTitle(event.target.value);
    //console.log(event.target.value);
  };

  const handleContentChange = (event) => {
    setInputContent(event.target.value);
    //console.log(event.target.value);
  };

  return (
    <div>
      <form>
        <input
          name="title"
          placeholder="Title"
          onChange={handleTitleChange}
          value={inputTitle}
        />
        <textarea
          name="content"
          placeholder="Take a note..."
          rows="3"
          onChange={handleContentChange}
          value={inputContent}
        />
        <button
          onClick={(e) => {
            e.preventDefault();
            props.onAdd(inputTitle, inputContent);
            setInputContent("");
            setInputTitle("");
          }}
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
