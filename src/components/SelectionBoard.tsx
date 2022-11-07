import React from "react";
import "../css/App.css";
import { UFO } from "./UFO";
import human from "../assets/human.svg";
import { ShipControl } from "./ShipControl";

const getRandomName = (names: string[]): string => {
  return names[Math.floor(Math.random() * names.length)];
};

export const SelectionBoard = ({ victims }: { victims: string[] }) => {
  const [isKidnapping, setIsKidnapping] = React.useState<boolean>(false);
  const [leftVictims, setLeftVictims] = React.useState<string[]>(victims);
  const [currentVictim, setCurrentVictim] = React.useState<string>("");

  const isOnStart = leftVictims.length === victims.length;

  const handleSelectVictim = () => {
    const victimName = getRandomName(leftVictims);
    setIsKidnapping(true);
    setCurrentVictim(victimName);
    setLeftVictims(leftVictims.filter((name) => name !== victimName));
  };

  React.useEffect(() => {
    if (isKidnapping) setTimeout(() => setIsKidnapping(false), 4000);
  }, [isKidnapping]);

  return (
    <>
      <main className="container">
        <UFO open={isKidnapping} />
        {isKidnapping && (
          <div className="light">
            <img className="human" src={human} alt="human" />
          </div>
        )}
      </main>
      {!isKidnapping && !!leftVictims.length && (
        <ShipControl
          name={currentVictim}
          isDisabled={isKidnapping || !leftVictims.length}
          onClick={handleSelectVictim}
          isOnStart={isOnStart}
        />
      )}
      {/* <footer className="ui panel">
        <div className="content">
          <button
            onClick={handleSelectVictim}
            disabled={isKidnapping || !leftVictims.length}
          >
            Lift Human
          </button>
        </div>
      </footer> */}
    </>
  );
};
