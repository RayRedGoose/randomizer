import React from "react";
import "./css/App.css";
import { HikersForm } from "./components/HikersForm";
import { SelectionBoard } from "./components/SelectionBoard";

function App() {
  const [hikers, setHikers] = React.useState<string[]>([]);

  return (
    <div className={`App ${!hikers.length ? "day" : "night"}`}>
      <header className="App-header"></header>
      {hikers.length ? (
        <SelectionBoard victims={hikers} />
      ) : (
        <HikersForm submit={setHikers} />
      )}
    </div>
  );
}

export default App;
