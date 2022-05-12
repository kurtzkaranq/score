import logo from "./logo.svg";
import "./App.css";
import Header from "./comp/Header";
import Player from "./comp/Player";
import Nav from "./comp/Nav";
import { useState , useEffect} from "react";
import Add from "./comp/AddButton";
import AddButton from "./comp/AddButton";



function App() {
  const [players, setPlayers] = useState([]);
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
        score: 3,
      },
      {
        name: "a",
        age: 29,
        gender: "male",
        score: 4,
      },
    ])
  }, []);

  const [changed, setChanged] = useState(true);

  function modifyScore(name, plusMinus) {
    if (plusMinus == "+") {
      // console.log([...players][1].score++)
      const arr = players
      arr[findPlayerIndex(name)].score +=1
      setPlayers(arr)
      console.log(players);
      setChanged(!changed)
    // setPlayers([...players][findPlayerIndex(name)].score++)
    // debugger
    // [...players][1].score++

    // setPlayers([...players][1].score =[...players][1].score++ )

    // console.log([...players][findPlayerIndex(name)].score++);
    // players[findPlayerIndex(name)].score++

    } else {
      setPlayers([...players][findPlayerIndex(name)].score--)
    }
    // console.log(players[findPlayerIndex(name)].score);
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
    const newName = players.sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      }
    });
    setChanged(!changed);
    setPlayers(newName); 
    console.log(players);

  }
  function sortb() {
    const newScore = players.sort((a, b) => {
      if (a.score > b.score) {
        return -1;
      }
    });
    setChanged(!changed);
    setPlayers(newScore);
    console.log(players);
    console.log('aa');
  }

  let total = 0;
  players.forEach((player) => (total += player.score));
  let average = total / players.length;
  // console.log(average);

  function AddData(data) {

    console.log(data.playerName.value);
    console.log(data.score.value);
    setPlayers([...players, {
      name: data.playerName.value,
      age: 29,
      gender: "male",
      score: parseInt(data.score.value) ,
    }])

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
          />
        );
      })}
      <AddButton AddData={AddData} />
    </div>
  );
}

export default App;
