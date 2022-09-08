import React from "react";
import { CSSTransition } from "react-transition-group";
import { useState } from "react";
import "./Race.css";

const Race = () => {
  const [flip, setFlip] = useState(true);

  return (
    <>
      <CSSTransition in={flip} timeout={5000} classNames="lala" unmountOnExit>
        <div className="raceBoard">Race</div>
      </CSSTransition>
      <button onClick={() => setFlip(true)}>close</button>
      <button onClick={() => setFlip(false)}>open</button>
    </>
  );
};

export default Race;
