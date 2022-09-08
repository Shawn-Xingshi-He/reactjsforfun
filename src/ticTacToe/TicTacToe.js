import React from "react";
import { useState, useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import "./TicTacToe.css";
import PlayerChoosing from "./PlayerChoosing";
import Cube from "./Cube";
import ResultMsg from "./ResultMsg";

const TicTacToe = () => {
  const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const [inPlayerChoose, setInPlayerChoose] = useState(true);
  const [inGameBoard, setInGameBoard] = useState(false);
  // const myRef = React.Ref();
  // console.log(myRef);

  const [record, setRecord] = useState(Array.from(Array(9), (x) => -1));
  const [currentPlayer, setCurrentPlayer] = useState(false);
  const [gameResult, setGameResult] = useState("");
  const [winP, setWinP] = useState(Array.from(Array(9)));

  const checkStatus = () => {
    const res = winPatterns.some((pattern) => {
      if (
        pattern.every(
          (item) =>
            record[item] === record[pattern[0]] && record[pattern[0]] !== -1
        )
      ) {
        showWinPattern(pattern);
        return true;
      } else {
        return false;
      }
    });
    if (res === true) {
      setGameResult(`${currentPlayer}`);
    } else if (record.every((item) => item !== -1)) {
      setGameResult("draw");
    } else {
      switchPlayer();
    }
  };

  const switchPlayer = () => setCurrentPlayer(!currentPlayer);

  const showWinPattern = (pattern) => {
    const winCubes = [];
    pattern.forEach((index) => {
      const cube = document.querySelectorAll(
        `.cube:nth-of-type(${index + 1})`
      )[0];
      winCubes.push(cube);
    });
    setWinP([...winCubes]);
  };

  const restart = () => {
    setInGameBoard(false);
    setRecord(Array.from(Array(9), (x) => -1));
    setCurrentPlayer(false);
    setGameResult("");
  };

  useEffect(() => {
    if (winP[0] !== undefined) {
      const blink = setInterval(() => {
        winP.forEach((cube) => {
          cube.classList.toggle("win");
        });
      }, 500);
      setTimeout(() => {
        clearInterval(blink);
        winP.forEach((cube) => {
          cube.classList.remove("win");
        });
      }, 2500);
    }
  }, [winP]);

  return (
    <>
      <CSSTransition
        in={inPlayerChoose}
        timeout={100}
        classNames="boardContainer"
        unmountOnExit
        onExited={() => {
          setInGameBoard(true);
        }}
        // ref={myRef}
      >
        <PlayerChoosing
          // ref={myRef}
          setInPlayerChoose={setInPlayerChoose}
          setCurrentPlayer={setCurrentPlayer}
        />
      </CSSTransition>
      <CSSTransition
        in={inGameBoard}
        timeout={500}
        classNames="boardContainer"
        unmountOnExit
        onExited={() => {
          setInPlayerChoose(true);
        }}
      >
        <div className="boardContainer">
          {record.map((__, index) => (
            <Cube
              key={"cube" + index}
              index={index}
              currentPlayer={currentPlayer}
              checkStatus={checkStatus}
              record={record}
              setRecord={setRecord}
            />
          ))}
        </div>
      </CSSTransition>
      {gameResult !== "" && (
        <ResultMsg gameResult={gameResult} restart={restart} />
      )}
    </>
  );
};

export default TicTacToe;
