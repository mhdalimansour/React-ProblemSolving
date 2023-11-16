import React, { useState } from "react";
import "./css/country.css";

type ButtonState = "DEFAULT" | "SELECTED" | "WRONG";
type Option = {
  value: string;
  state: ButtonState;
};

function randomize() {
  return Math.random() - 0.5;
}

function CountryCapitalGame({ data }: { data: Record<string, string> }) {
  const [options, setOptions] = useState<Option[]>(
    [...Object.keys(data), ...Object.values(data)]
      .sort(randomize)
      .map((value) => ({
        value,
        state: "DEFAULT",
      }))
  );

  const [selected, setSelected] = useState<Option>();
  const isGameOver = options.length === 0;

  function onButtonClick(option: Option) {
    if (!selected) {
      setSelected(option);
      setOptions(
        options.map((opt) => ({
          ...opt,
          state: opt === option ? "SELECTED" : "DEFAULT",
        }))
      );
    } else {
      if (
        selected.value === data[option.value] ||
        option.value === data[selected.value]
      ) {
        setOptions(
          options.filter((opt) => {
            return !(
              opt.value === selected.value || opt.value === option.value
            );
          })
        );
      } else {
        setOptions(
          options.map((opt) => {
            return opt.value === selected.value || opt.value === option.value
              ? { ...opt, state: "WRONG" }
              : opt;
          })
        );
      }
      setSelected(undefined);
    }
  }

  function getButtonClass(option: Option) {
    if (option.state === "SELECTED") {
      return "selected";
    } else if (option.state === "WRONG") {
      return "wrong";
    } else {
      return "";
    }
  }

  return (
    <>
      <div className="buttons">
        {options.map((option) => (
          <button
            key={option.value}
            className={getButtonClass(option)}
            onClick={() => onButtonClick(option)}
          >
            {option.value}
          </button>
        ))}
        {isGameOver && <p>Congrats!</p>}
      </div>
    </>
  );
}
export default CountryCapitalGame;
