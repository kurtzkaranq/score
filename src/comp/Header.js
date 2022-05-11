import "../style/header.css";

function Header() {
  let number = 4;
  return (
    <div className="header">
      <div className="scoreboard">SCOREBOARD</div>
      <div className="playerNum">player : {number}</div>
    </div>
  );
}
export default Header;
