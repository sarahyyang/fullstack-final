import React from "react";
import axios from "axios"

function Note(props) {
  const axiosDeleteData = async (unique) => {
    await axios.delete(`http://localhost:4000/delete/${unique}`)
      .then(res => console.log(res.data))
  }

  function handleClick() {
    props.onDelete(props.id);
    axiosDeleteData(props.unique);
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleClick}>DELETE</button>
    </div>
  );
}

export default Note;
