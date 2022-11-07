import React, { FormEvent } from "react";
import "../css/Form.css";
import { HikerBlock } from "./HikerBlock";
import bookmark from "../assets/bookmark.png";

interface HikersFormProps {
  submit: (cms: string[]) => void;
}

export const HikersForm = ({ submit }: HikersFormProps) => {
  const [names, setNames] = React.useState<string[]>([]);
  const [inputValue, setInputValue] = React.useState<string>("");

  const handleSubmit = (e: any) => {
    submit(names);
  };

  const handleChange = (e: any) => {
    setInputValue(e.target.value);
  };

  const handleAddName = (e: FormEvent) => {
    e.preventDefault();
    if (inputValue) {
      setNames([...names, inputValue]);
      setInputValue("");
    }
  };

  const handleRemoveName = (id: string) =>
    setNames(names.filter((name) => name !== id));

  const saveInLocalStorage = () => {
    if (names.length) localStorage.setItem("names", JSON.stringify(names));
  };

  React.useEffect(() => {
    const names = localStorage.getItem("names");
    if (names) setNames(JSON.parse(names));
  }, []);

  return (
    <main className="camp-list-wrapper">
      <h2>Hikers List</h2>
      <ul>
        {names.map((name) => (
          <HikerBlock key={name} name={name} removeName={handleRemoveName} />
        ))}
      </ul>
      <form className="camp-form" onSubmit={handleAddName}>
        <input
          type="text"
          name="name"
          value={inputValue}
          onChange={handleChange}
          placeholder="Enter name"
        />
        <input type="submit" value="Add name" className="secondary-button" />
      </form>
      {!!names.length && (
        <div className="control">
          <button
            type="button"
            onClick={saveInLocalStorage}
            className="secondary-button"
          >
            <img src={bookmark} alt="bookmark" />
            <p>Save team</p>
          </button>
          <button
            type="button"
            onClick={handleSubmit}
            className="primary-button"
          >
            Go to the Camp
          </button>
        </div>
      )}
    </main>
  );
};
