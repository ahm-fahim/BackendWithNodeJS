import { useEffect, useState } from "react";
import "./App.css";
import Notes from "./components/notes";
import { useParams } from "react-router-dom";
import titleImg from "../src/assets/3968691.jpg";

function App() {
  const [notes, setNotes] = useState([]);
  const { id } = useParams();
  const [updateNote, setUpdateNote] = useState(null);

  // Fetch single note for update
  useEffect(() => {
    if (id) {
      fetch(`http://localhost:5001/notes/${id}`)
        .then((res) => res.json())
        .then((data) => {
          setUpdateNote(data);
        });
    } else {
      setUpdateNote(null); // Clear the update note if no ID
    }
  }, [id]);

  // Fetch all notes
  useEffect(() => {
    fetch("http://localhost:5001/notes")
      .then((res) => res.json())
      .then((data) => setNotes(data));
  }, []);

  // Update note
  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value.trim();
    const details = form.details.value.trim();

    if (!title || !details) {
      alert("Please fill out both fields before updating.");
      return;
    }

    const updatedNotes = { title, details };

    fetch(`http://localhost:5001/notes/${updateNote._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedNotes),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          alert("Updated Successfully");
          form.reset();
          setUpdateNote(null);

          // Update the notes state directly
          setNotes((prevNotes) =>
            prevNotes.map((note) =>
              note._id === updateNote._id ? { ...note, title, details } : note
            )
          );
        }
      });
  };

  // Add a new note
  const handlePost = (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value.trim();
    const details = form.details.value.trim();

    if (!title || !details) {
      alert("Please fill out both fields before adding.");
      return;
    }

    const newNote = { title, details };

    fetch("http://localhost:5001/notes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newNote),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("Successfully added");
          form.reset();

          // Add the new note directly to the state
          setNotes((prevNotes) => [
            ...prevNotes,
            { _id: data.insertedId, title, details },
          ]);
        }
      });
  };

  // Delete a note
  const handleDelete = (_id) => {
    fetch(`http://localhost:5001/notes/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          alert("Deleted Successfully!");
          setNotes((prevNotes) => prevNotes.filter((note) => note._id !== _id));
        }
      });
  };

  // Handle form submission
  const handleFormSubmit = (e) => {
    if (updateNote) {
      handleUpdate(e);
    } else {
      handlePost(e);
    }
  };

  return (
    <div className="bg-base-200 m-2">
      <div className="grid lg:grid-cols-3 gap-4 mb-5">
        <form
          onSubmit={handleFormSubmit}
          className="lg:order-1 order-2 flex flex-col justify-center items-center"
        >
          <input
            defaultValue={updateNote?.title || ""}
            type="text"
            className="w-full h-10 border my-2 rounded-md p-1 shadow-xl"
            name="title"
            placeholder="Notes Key Word"
          />
          <textarea
            defaultValue={updateNote?.details || ""}
            className="w-full h-56 border my-2 rounded-md p-1 shadow-xl"
            name="details"
            placeholder="Notes in Details"
          />
          <button
            type="submit"
            className="w-full shadow-xl bg-rose-500 text-white px-4 py-2 rounded-md font-bold"
          >
            {updateNote ? "Update Note" : "Add Note"}
          </button>
        </form>
        <div className="lg:order-2 order-1 h-68 rounded-md m-2 lg:col-span-2 text-center flex flex-col justify-center items-center">
          <img src={titleImg} alt="" className="h-96" />
          <h1 className="text-4xl font-bold text-gray-800 font-serif">
            Notes Park
          </h1>
          <p className="text-gray-400">
            Note Your Daily Tasks to Make Your Life Easier and More Productive.
          </p>
        </div>
      </div>
      <div className="grid lg:grid-cols-3 gap-10">
        {notes.map((note) => (
          <Notes key={note._id} note={note} handleDelete={handleDelete} />
        ))}
      </div>
    </div>
  );
}

export default App;
