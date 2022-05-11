export default function Nav(props) {
  //   let nameList = [...props.name];
  //   console.log(nameList);
  //   console.log(...props.names);
  //   console.log(props.player);
  return (
    <div className="player d-flex justify-content-around">
      <button onClick={() => props.sort(props.player)}>Names</button>
      <button onClick={() => props.sort1(props.player)}>Score</button>
    </div>
  );
}
