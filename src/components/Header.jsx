import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  // active handler
  const [activeBtn, setActiveBtn] = useState("createBtn");

  return (
    <div className="py-5 mt-2" id="flash-creators-heading">
      {/* For the heading of the flashcard website. */}
      <h2 className="text-4xl font-bold mb-6 text-white">Create Flashcard</h2>

      {/* Navigation button for creating a new flash card. */}
      <Link
        to="/"
        onClick={() => setActiveBtn("createBtn")}
        className="relative px-4 py-3 mr-3 cursor-pointer text-gray-800 pb-3 font-medium"
      >
        Create New
        <span
          id="createBtn"
          style={
            activeBtn === "createBtn" ? { width: "100%" } : { width: "0%" }
          }
        ></span>
      </Link>

      {/* Navigation button to view the previously generated flashcards. */}
      <Link
        to="/myflashcards"
        onClick={() => setActiveBtn("flashBtn")}
        className="relative px-4 py-3 cursor-pointer text-gray-800 pb-3 font-medium"
      >
        My Flashcard
        <span
          id="flashGroup"
          style={activeBtn === "flashBtn" ? { width: "100%" } : { width: "0%" }}
        ></span>
      </Link>
      <hr className="bg-white" style={{ height: "2px", marginTop: "10px" }} />
    </div>
  );
};

export default Header;