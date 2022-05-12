import "../style/header.css";

function Header(props) {
  return (
    <div className="header">
      <div className="scoreboard">SCOREBOARD</div>
      <div className="playerNum">player : {props.number}</div>
    </div>
  );
}
export default Header;
