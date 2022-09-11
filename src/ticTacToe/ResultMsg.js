import React from "react";
// import "./TicTacToe.css";

const ResultMsg = ({ gameResult, restart }) => {
  const message = () => {
    if (gameResult === "false") {
      return "X's win !";
    } else if (gameResult === "true") {
      return "O's win !";
    } else {
      return "It's a draw !";
    }
  };

  return (
    <div className="resultMsg">
      <div className="MsgContainer">
        <div>{message()}</div>
        <button onClick={restart}>Restart</button>
      </div>
    </div>
  );
};
export default ResultMsg;
