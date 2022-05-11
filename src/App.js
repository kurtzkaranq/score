import logo from "./logo.svg";
import "./App.css";
import Header from "./comp/Header";
import Player from "./comp/Player";
import Nav from "./comp/Nav";
import { useState } from "react";
import Add from "./comp/AddButton";
import AddButton from "./comp/AddButton";

let playersInfo = [
  {
    name: "d",
    age: 19,
    gender: "male",
    score: 315,
  },
  {
    name: "b",
    age: 29,
    gender: "male",
    score: 616,
  },
  {
    name: "c",
    age: 20,
    gender: "male",
    score: 170,
  },
  {
    name: "a",
    age: 29,
    gender: "male",
    score: 128,
  },
];

function App() {
  const [players, setPlayers] = useState(playersInfo);
  const [changed, setChanged] = useState(true);
  function modifyScore(name, plusMinus) {
    if (plusMinus == "+") {
      players[findPlayerIndex(name)].score++;
    } else {
      players[findPlayerIndex(name)].score--;
    }
    console.log(players[findPlayerIndex(name)].score);
  }
  function findPlayerIndex(playerName) {
    let foundIndex = 0;
    players.map((player, index) => {
      if (player.name == playerName) {
        foundIndex = index;
      }
    });
    // console.log(foundIndex);
    return foundIndex;
  }

  function sorta() {
    console.log(players);
    const newName = players.sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      }
    });
    setChanged(!changed);
    setPlayers(newName);
  }
  function sortb() {
    console.log(players);
    const newScore = players.sort((a, b) => {
      if (a.score > b.score) {
        return -1;
      }
    });
    setChanged(!changed);
    setPlayers(newScore);
  }

  let total = 0;
  players.forEach((player) => (total += player.score));
  let average = total / players.length;
  // console.log(average);
  function AddData(data) {
    console.log(data.score.value);
  }

  return (
    <div className="App">
      <Header />
      <Nav player={players} sort={sorta} sort1={sortb} />
      {players.map((p, i) => {
        return (
          <Player
            key={i}
            playerData={p}
            modifyScore={modifyScore}
            average={average}
          />
        );
      })}
      <AddButton AddData={AddData} />
    </div>
  );
}

export default App;
