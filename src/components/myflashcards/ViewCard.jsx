import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux/es/exports";
import { BsArrowLeft, BsPrinter, BsShare, BsDownload } from "react-icons/bs";
import { BiCopy } from "react-icons/bi";
import { CgClose } from "react-icons/cg";

const ViewCard = () => {
  const state = useSelector((state) => state.Reducer);
  // console.log('flashCards: ', state)
  const [cardHandler, setCardHandle] = useState(0);

  // Increament handler
  const increamentHandler = (num, array) => {
    console.log("event flash card", state.groupData);
    if (array.length - 1 > cardHandler) {
      setCardHandle(cardHandler + num);
    } else {
      setCardHandle(0);
    }
  };
  // decreament handler
  const decreamentHandler = (num, array) => {
    if (cardHandler <= 0) {
      setCardHandle(array.length - 1);
    } else if (cardHandler > 0) {
      setCardHandle(cardHandler + num);
    }
  };

  // copy url
  const [copyAlertColor, setCopyAlertColor] = useState("initial");
  const [url, setUrl] = useState();
  const urlCopyHandler = () => {
    navigator.clipboard.writeText(document.location.href);
    setCopyAlertColor("green");
  };

  // share handler for show dispay
  const [share, setShare] = useState("none");
  const shareHandlerOpen = () => {
    setShare("flex");
    setUrl(`${document.location.href}`);
  };
  const shareHandlerClose = () => {
    setShare("none");
  };

  return (
    <div className="mb-12">
      {/* flash cards maincontainer */}
      {state.groupData.map((elem, index) => {
        return index === state.showNum ? (
          <div key={index}>
            {/* Heading maincontainer */}
            <div>
              <Link
                to="/myflashcards"
                className="flex items-center font-extrabold text-white"
              >
                <BsArrowLeft className="text-lg mr-3" />
                <span>{elem.group.groupName}</span>
              </Link>
              <p className="text-base text-white pl-8 pt-4 text-justify">
                {elem.group.description}
              </p>
            </div>
            
            {/* Carousel main container */}
            <div className="flex flex-col items-center justify-center lg:items-start my-11 lg:flex-row lg:justify-between sm:items-center sm:justify-center sm:flex-col mb-14">
              {/* Cards list */}
              <div className="w-full bg-white rounded-lg px-1 shadow-lg lg:w-1/5 sm:w-full ">
                <p className="text-sm px-5 py-2 text-black">Flashcards</p>
                <hr className="bg-gray-200" style={{ height: "1px" }} />
                <h3 className="font-extrabold px-5 py-2 text-red-600">
                  Cards list
                </h3>
                <ul>
                  {elem.state.map((childElement, childIndex) => {
                    return (
                      <li
                        key={childIndex}
                        style={
                          cardHandler === childIndex
                            ? { color: "red" }
                            : { color: "initial" }
                        }
                        onClick={() => setCardHandle(childIndex)}
                        className={`px-5 py-2 cursor-pointer ${
                          cardHandler === childIndex
                            ? "text-red-600 font-bold"
                            : ""
                        }`}
                      >
                        {childIndex + 1}. {childElement.term}
                      </li>
                    );
                  })}
                </ul>
              </div>

              {/*  Carousel container  */}

              <div className="w-full lg:w-2/4 sm:w-full">
                {elem.state.map((childElement, childIndex) => {
                  return cardHandler === childIndex ? (
                    <div
                      key={childIndex}
                      className="w-full flex flex-col justify-between px-5 py-9 sm:flex-col lg:flex-row bg-white rounded-lg shadow-lg"
                    >

                      <div className="w-full text-justify sm:mt-6 lg:mt-0 sm:w-full lg:w-5/5">
                        <p>{childElement.definition}</p>
                      </div>
                    </div>
                  ) : null;
                })}

                <div
                  style={{ userSelect: "none" }}
                  className="px-8 py-6 mt-6 text-center"
                >
                  <span
                    className="text-3xl mr-10 cursor-pointer"
                    onClick={() => decreamentHandler(-1, elem.state)}
                  >
                    &lt;
                  </span>
                  <span className="text-2xl ">
                    {cardHandler + 1}/{elem.state.length}
                  </span>
                  <span
                    className="text-3xl ml-10 cursor-pointer"
                    onClick={() => increamentHandler(1, elem.state)}
                  >
                    &#62;
                  </span>
                </div>
              </div>

              {/* Share icons  */}
              <div className="w-full lg:w-1/5 sm:w-full">
                <div className="mb-2 shadow-lg">
                  <button
                    onClick={shareHandlerOpen}
                    className="bg-white w-full rounded-lg px-4 py-4 font-bold flex items-center text-gray-700"
                  >
                    <BsShare className="mr-5" />
                    <span>Share</span>
                  </button>
                </div>
                <div className="mb-2 shadow-lg">
                  <button className="bg-white w-full rounded-lg px-4 py-4 font-bold flex items-center text-gray-700">
                    <BsDownload className="mr-5" />
                    <span>Download</span>
                  </button>
                </div>
                <div className="mb-2 shadow-lg">
                  <button className="bg-white w-full rounded-lg px-4 py-4 font-bold flex items-center text-gray-700">
                    <BsPrinter className="mr-5" />
                    <span>Print</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : null;
      })}

      {/* Share url copy box */}
      <div className="popupBox" style={{ display: share }}>
        <div className="relative w-11/12 xl:w-2/5 sm:w-11/12 p-3 sm:p-8 bg-white rounded-lg ">
          <h3 className="text-lg font-semibold mb-2">Share</h3>
          <div className="flex sm:items-center flex-col sm:flex-row ">
            <p className="w-3/4 px-4 py-3 rounded-lg outline-dashed outline-1 outline-blue-200">
              <span>Link :</span>&nbsp;&nbsp;
              <span>{url}</span>
            </p>
            <p className="flex mt-3 sm:mt-0">
              <BiCopy
                className="text-2xl ml-4 cursor-pointer"
                onClick={urlCopyHandler}
                style={{ color: copyAlertColor }}
              />
              <BsShare className="text-2xl ml-4 cursor-pointer" />
              <CgClose className="closebtn" onClick={shareHandlerClose} />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewCard;