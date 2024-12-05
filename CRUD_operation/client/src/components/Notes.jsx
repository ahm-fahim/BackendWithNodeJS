import PropTypes from "prop-types";

const Notes = ({ note }) => {
  const { _id, title, details } = note;

  const handleDelete = (_id) => {
    fetch(`http://localhost:5001/notes/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          alert("Deleted Successfully!");
        }
      });
  };
  return (
    <div className="flex rounded-md justify-between bg-gray-100 p-2 my-1">
      <div>
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-gray-400">{details}</p>
      </div>
      <div className="flex gap-2 font-bold text-2xl">
        <button className="bg-purple-800 px-4 hover:text-white hover:bg-purple-500 text-white rounded-md">
          +
        </button>
        <button
          onClick={() => handleDelete(_id)}
          className="bg-black px-4 hover:text-white hover:bg-black-500 text-white rounded-md"
        >
          x
        </button>
      </div>
    </div>
  );
};

Notes.propTypes = {
  note: PropTypes.object.isRequired,
};

export default Notes;
