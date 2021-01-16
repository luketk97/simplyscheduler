import logo from "./logo.svg";
import "./App.css";
import * as ReactBootStrap from "react-bootstrap";

const App = () => {
  const players = [
    { position: "valorant", name: "madgod420", team: "1" },
    { position: "warzone", name: "sexy jon", team: "1" },
    { position: "genshin", name: "jamie", team: "2" },
  ];
  const renderPlayer = (player, index) => {
    return (
      <tr key={index}>
        <td>{player.name}</td>
        <td>{player.position}</td>
        <td>{player.team}</td>
      </tr>
    );
  };
  return (
    <div className="App">
      <ReactBootStrap.Table stripped border hover>
        <thread>
          <tr>
            <th>Name</th>
            <th>Position</th>
            <th>Team</th>
          </tr>
        </thread>
        <tbody>{players.map(renderPlayer)}</tbody>
      </ReactBootStrap.Table>
    </div>
  );
};

export default App;
