import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Creator from "./Creator";
import Note from "./Note";
import axios from "axios"

function App() {
  const [currNotes, setNotes] = useState([]);

  useEffect( () => {
    let processing = true
    axiosGetData(processing)
    return () => {
        processing = false
    }
  },[currNotes])

  const axiosGetData = async(processing) => {
    await axios.get('http://localhost:4000/notes')
    .then(res => {
        if (processing) {
            setNotes(res.data)
        }
    })
    .catch(err => console.log(err))
  }

  function addNote(note) {
    setNotes((prevNotes) => {
      return [...prevNotes, note];
    });
  }

  function deleteNote(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />

      <Creator onAdd={addNote} />

      {currNotes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            unique={noteItem._id}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        );
      })}

      <Footer />
    </div>
  );
}

export default App;
