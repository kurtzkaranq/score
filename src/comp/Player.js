import "../style/player.css";
import Score from "./Score";
import { useState } from "react";
import RmvButton from "./RmvButton";

function Player(props) {
  // console.log(props.score);

  return (
    <>
      <div className={props.score > props.average ? "playerBG" : "player"}>
        {props.playerData.image && <img src={props.playerData.image} alt="" />}
        {props.playerData.name}{" "}
        <Score
          name={props.playerData.name}
          score={props.score}
          modifyScore={props.modifyScore}
        />
        <RmvButton
          name={props.playerData.name}
          findPlayerIndex={props.findPlayerIndex}
          Remove={props.Remove}
          playerData={props.playerData}
        />
      </div>
    </>
  );
}
export default Player;
