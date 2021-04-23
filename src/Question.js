import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

// let's destructure...
const Question = ({ title, info }) => {
  // this will be used for our button toggle functionality...
  const [showInfo, setShowInfo] = useState(false);

  // we'll return an article that displays each items title and info...
  return (
    <article className="question"> 
      <header>
        <h4>{title}</h4>
        {/* the onclick function sas that when you click, the new showInfo state will be the opposite of it's previos state */}
        <button className="btn" onClick={() => setShowInfo(!showInfo)}>
          {/* if showInfo is true, the button will display the minus icon, 
      otherwise (by default) the button will display the plus icon*/}
          {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {/* if showInfo is true, THEN (&&) display a <p> tag with the item's info */}
      {/* otherwise it will be hidden by default, since the state of showInfo has been set to "false" */}
      {showInfo && <p>{info}</p>}
    </article>
  );
};

export default Question;
