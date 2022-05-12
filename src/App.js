import logo from "./logo.svg";
import "./App.css";
import Header from "./comp/Header";
import Player from "./comp/Player";
import Nav from "./comp/Nav";
import { useState, useEffect } from "react";
import Add from "./comp/AddButton";
import AddButton from "./comp/AddButton";
import RmvButton from "./comp/RmvButton";

function App() {
  const [players, setPlayers] = useState([]);
  const [changed, setChanged] = useState(false);
  useEffect(() => {
    setPlayers([
      {
        name: "d",
        age: 19,
        gender: "male",
        score: 1,
      },
      {
        name: "b",
        age: 29,
        gender: "male",
        score: 2,
      },
      {
        name: "c",
        age: 20,
        gender: "male",
        score: 16,
      },
      {
        name: "a",
        age: 29,
        gender: "male",
        score: 15,
      },
    ]);
  }, []);
  useEffect(() => {
    let max = new Object(players[0]);
    max.image = "";
    // console.log(max);
    players.forEach((e) => {
      if (e.score > max.score) {
        max = e;
      }
      e.image = "";
    });

    max.image = "image/crown-solid.svg";
    console.log(max);
    setChanged(!changed);
  }, [players]);

  function modifyScore(name, plusMinus) {
    if (plusMinus == "+") {
      const arr = players;
      arr[findPlayerIndex(name)].score += 1;
      setPlayers([...arr]);
      console.log("inside");
    } else {
      const arr = players;
      arr[findPlayerIndex(name)].score -= 1;
      setPlayers([...arr]);
      // console.log("inside");
    }
  }

  function findPlayerIndex(playerName) {
    let foundIndex = 0;
    players.map((player, index) => {
      if (player.name == playerName) {
        foundIndex = index;
      }
    });
    return foundIndex;
  }

  function sorta() {
    const newName = players.sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      }
    });
    setPlayers([...newName]);
    // console.log(players);
  }
  function sortb() {
    const newScore = players.sort((a, b) => {
      if (a.score > b.score) {
        return -1;
      }
    });
    // console.log([...newScore][0]);
    setPlayers([...newScore]);
    // console.log(players);
    // console.log("aa");
  }

  let total = 0;
  players.forEach((player) => (total += player.score));
  let average = total / players.length;

  function AddData(data) {
    // console.log(data.playerName.value);
    // console.log(data.score.value);
    setPlayers([
      ...players,
      {
        name: data.playerName.value,
        age: 29,
        gender: "male",
        score: parseInt(data.score.value),
      },
    ]);
  }
  function Remove(data) {
    let arr = [...players];
    arr = arr.filter((player) => {
      // console.log(player.name);
      return player.name !== data;
    });
    // console.log([...arr]);
    setPlayers([...arr]);
  }

  return (
    <div className="App">
      <Header number={players.length} />
      <Nav player={players} sort={sorta} sort1={sortb} />
      {players.map((p, i) => {
        return (
          <Player
            score={p.score}
            key={i}
            playerData={p}
            modifyScore={modifyScore}
            average={average}
            Remove={Remove}
            findPlayerIndex={findPlayerIndex}
          />
        );
      })}
      <div className="d-flex justify-content-around">
        <AddButton AddData={AddData} />
      </div>
    </div>
  );
}

export default App;
