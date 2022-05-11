import { useState } from "react";

function Score(props) {
  // console.log(props.clickHandler);
  function clickHandler(e) {
    if (e.target.textContent == "+") {
      props.setScore(props.score + 1);
    } else {
      props.setScore(props.score - 1);
    }
  }
  // console.log(props.playerData);
  return (
    <>
      <div className="score">
        <button onClick={clickHandler}>-</button>
        {props.score}
        <button onClick={clickHandler}>+</button>
      </div>
    </>
  );
}

export default Score;
