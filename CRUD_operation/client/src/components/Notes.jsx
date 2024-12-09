import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./Notes.css";

const Notes = ({ note, handleDelete }) => {
  const { _id, title, details } = note;

  return (
    <div className="notesBg  flex flex-col justify-center items-center p-3 my-1">
      <div className="flex flex-col h-3/5 w-3/5">
        <div className="flex items-end gap-2 font-bold text-xl mb-10">
          <Link
            to={`/${_id}`}
            className="bg-green-800  hover:text-white flex justify-center items-center hover:bg-purple-500 text-white rounded-full h-8 w-8"
          >
            +
          </Link>
          <button
            onClick={() => handleDelete(_id)}
            className="bg-black   hover:text-white hover:bg-black-500 text-white rounded-full h-8 w-8"
          >
            x
          </button>
        </div>

        <div className="text-center ">
          <h3 className="text-xl font-bold">{title}</h3>
          <p className="text-gray-400">{details}</p>
        </div>
      </div>
    </div>
  );
};

Notes.propTypes = {
  note: PropTypes.object.isRequired,
  handleDelete: PropTypes.func,
};

export default Notes;
