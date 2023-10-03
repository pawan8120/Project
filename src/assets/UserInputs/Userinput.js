import React from "react";
import { useState } from "react";

function Userinput() {
  const [userInput, setUserInput] = useState({
    "current-saving": 1000,
    "yearly-contribution": 1200,
    "expected-return": 7,
    duration: 100,
  });
  const submitHandler = (event) => {
    event.preventDeafult();
  };
  const resetHandler = (event) => {
    setUserInput({
      "current-saving": 1000,
      "yearly-contribution": 1200,
      "expected-return": 7,
      duration: 100,
    });
  };
  const inputChangehandler = (input, value) => {
    setUserInput((prevInput) => {
      return {
        ...prevInput,
        [input]: value,
      };
    });
  };
  return (
    <form onSubmit={submitHandler} className="form">
      <div className="input-group">
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            onChange={(event) =>
              inputChangehandler("current-saving", event.target.value)
            }
            value={useState["current-saving"]}
            type="number"
            id="current-savings"
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            onChange={(event) =>
              inputChangehandler("yearly-contribution", event.target.value)
            }
            value={useState["yearly-contribution"]}
            type="number"
            id="yearly-contribution"
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)gi
          </label>
          <input
            onChange={(event) =>
              inputChangehandler("expected-return", event.target.value)
            }
            value={useState["expected-return"]}
            type="number"
            id="expected-return"
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            onChange={(event) =>
              inputChangehandler("duration", event.target.value)
            }
            value={useState["duration"]}
            type="number"
            id="duration"
          />
        </p>
      </div>
      <p className="actions">
        <button onClick={resetHandler} type="reset" className="buttonAlt">
          Reset
        </button>
        <button type="submit" className="button">
          Calculate
        </button>
      </p>
    </form>
  );
}
export default Userinput;
