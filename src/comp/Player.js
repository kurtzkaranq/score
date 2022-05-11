import "../style/player.css";
import Score from "./Score";
import { useState } from "react";

function Player(props) {
  // console.log(props);
  const [score, setScore] = useState(props.playerData.score);
  // console.log(props.player);
  // console.log(props);
  return (
    <>
      <p className={score > props.average ? "playerBG" : "player"}>
        {props.playerData.name}{" "}
        <Score
          score={score}
          modifyScore={props.modifyScore}
          setScore={setScore}
        />
        {/* <button onClick={() => childToParent(data)}></button> */}
      </p>
    </>
  );
}
export default Player;
