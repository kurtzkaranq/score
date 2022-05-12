import { useState } from "react";

function Score(props) {
  function clickHandler(e) {
    if (e.target.textContent == "+") {
      props.modifyScore(props.name, '+')
    } else {
      props.modifyScore(props.name, '-')
    }
  }
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
