import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Update = () => {
  const { id } = useParams();
  const [note, setNote] = useState(null);
  console.log("id = ", id);

  useEffect(() => {
    fetch(`http://localhost:5001/notes/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setNote(data);
      });
  }, [id, setNote]);
  return (
    <div>
      <div>
        {note ? (
          <div>
            <h1>{note.title}</h1>
            <p>{note.details}</p>
          </div>
        ) : (
          <p>Loading...</p> // Show loading state while fetching
        )}
      </div>
    </div>
  );
};

export default Update;
