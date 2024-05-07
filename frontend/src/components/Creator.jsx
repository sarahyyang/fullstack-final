import React, { useState } from "react";
import axios from "axios"

function Creator(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  const axiosPostData = async() => {
    await axios.post('http://localhost:4000/add', note)
    .then(res => console.log(res.data))
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: "",
    });
    event.preventDefault();
    axiosPostData();
  }

  return (
    <div>
      <form>
        <input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
        />
        <textarea
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows="3"
        />
        <button onClick={submitNote}> Add </button>
      </form>
    </div>
  );
}

export default Creator;
