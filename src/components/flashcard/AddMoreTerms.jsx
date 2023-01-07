import React from "react";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import { deleteInputBox } from "../../redux/action/Action";
import { useDispatch, useSelector } from "react-redux";

const AddMoreTerms = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.Reducer.inputData);

  // onchange handler
  const onchangeHandler = () => {
    console.log("onchange");
  };

  return (
    <React.Fragment>
      {state.length > 0 &&
        state.map((elem, index) => (
          <div
            key={index}
            className="mb-4 flex flex-col sm:justify-start sm:flex-row "
          >
            <div className="relative flex flex-col mb-3 sm:mb-0 w-full sm:w-2/6 mr-4 ">
              <span id="num" className="bg-yellow-400">
                {index + 1}
              </span>

              {/* Enter term input box heading - After clicking on "Add More" */}
              <label htmlFor="term" className="text-black pb-3 font-medium">
                Enter Term*
              </label>

              {/* Enter term input box - After clicking on "Add More" */}
              <input
                type="text"
                id="term"
                name="term"
                value={elem.term}
                onChange={onchangeHandler}
                placeholder="Enter the term title here."
                className="py-4 px-5 outline outline-2 rounded outline-gray-400 border-r-8"
              />
            </div>
            <div className="flex flex-col  w-full sm:w-2/6  mr-4">

              {/* Enter definition input box heading - After clicking on "Add More" */}
              <label htmlFor="define" className="text-black pb-3 font-medium">
                Enter definition*
              </label>

              {/* Enter definition input box - After clicking on "Add More" */}
              <textarea
                id="define"
                name="definition"
                value={elem.definition}
                onChange={onchangeHandler}
                placeholder="Enter the term definition here."
                className="py-1 px-5 outline outline-2 rounded outline-gray-400 border-r-8"
              ></textarea>
            </div>
            <div className="flex justify-end items-end sm:mt-0 mt-2">

              {/* Edit Button */}
              <button className="px-5 text-2xl py-2 text-blue-700 rounded-md mr-2">
                <AiOutlineEdit />
              </button>
              
              {/* Delete Button */}
              <button
                className="px-5 py-2 rounded text-2xl text-red-700"
                onClick={() => dispatch(deleteInputBox(index))}
              >
                <AiOutlineDelete />
              </button>
            </div>
          </div>
        ))}
    </React.Fragment>
  );
};

export default AddMoreTerms;