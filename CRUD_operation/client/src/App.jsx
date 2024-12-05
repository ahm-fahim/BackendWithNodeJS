import { useEffect, useState } from "react";
import "./App.css";
import Notes from "./components/notes";

function App() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5001/notes")
      .then((res) => res.json())
      .then((data) => setNotes(data));
  }, []);

  const handlePost = (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const details = form.details.value;
    const notes = { title, details };

    fetch("http://localhost:5001/notes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(notes),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("Successfully added");
          form.reset();
        }
      });
  };

  return (
    <div className="bg-white m-2">
      <div className="grid grid-cols-3 gap-4 mb-5">
        <form onSubmit={handlePost} className="flex flex-col">
          <input
            type="text"
            className=" w-full h-10 border m-2 rounded-md p-1"
            name="title"
            id=""
            placeholder="Notes Key Word"

          />
          <textarea
            type="text"
            className=" w-full h-56 border m-2 rounded-md p-1"
            name="details"
            id=""
            placeholder="Notes in Details"

          />
        
          <button
            type="submit"
            className=" w-full bg-purple-800 text-white px-4 py-2 rounded-md font-bold mx-2"
          >
            Add Notes
          </button>
        </form>
        <div className="bg-purple-800 h-68 rounded-md m-2 col-span-2 text-center  ">
          <h1 className="text-9xl font-extrabold text-white font-serif">Notes Park</h1>
          <p className="text-gray-300 ">Note Your Daily Task, Make Your Life Easy & Productive. </p>
        </div>
      </div>

      <div>
        {notes.map((note) => (
          <Notes key={note._id} note={note} />
        ))}
      </div>
    </div>
  );
}

export default App;
