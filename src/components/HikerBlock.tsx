import React from "react";
import hiker from "../assets/adventurer-m.png";
import hikerF from "../assets/adventurer-f.png";

interface HikerBlockProps {
  name: string;
  removeName: (id: string) => void;
}

export const HikerBlock = ({ name, removeName }: HikerBlockProps) => {
  return (
    <li className="hiker-block">
      <img src={/raisa|jaclyn|my/gi.test(name) ? hikerF : hiker} alt="hiker" />
      <p>{name}</p>
      <button onClick={() => removeName(name)}>&#x00d7;</button>
    </li>
  );
};
