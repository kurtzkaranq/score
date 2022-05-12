import "../style/player.css";
import Score from "./Score";
import { useState } from "react";

function Player(props) {

  return (
    <>
      <div className={props.score > props.average ? "playerBG" : "player"}>
        {props.playerData.name}{" "}
        <Score
          name={props.playerData.name}
          score={props.score}
          modifyScore={props.modifyScore}
        />
        {/* <button onClick={() => childToParent(data)}></button> */}
      </div>
    </>
  );
}
export default Player;
