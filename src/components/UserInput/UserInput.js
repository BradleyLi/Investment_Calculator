import { useState } from 'react';
import Input from '../Input/Input';

const UserInput = () => {
  const initialUserInput = {
    'current-savings': 1200,
    'yearly-contribution': 1000,
    'expected-return': 5,
    duration: 5,
  };

  const [userInput, setUserInput] = useState(initialUserInput);

  const submitHandler = () => {
    console.log('submit...');
  };

  const resetHandler = () => {
    setUserInput(initialUserInput)
  };

  const inputChangeHandler = (input, value) => {
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
        <Input
          onChange={(event) =>
            inputChangeHandler(
              'current-savings',
              event.target.value
            )
          }
          htmlFor="current-savings"
          label="Current Savings ($)"
          id="current-savings"
        />
        <Input
          onChange={(event) =>
            inputChangeHandler(
              'yearly-contribution',
              event.target.value
            )
          }
          htmlFor="yearly-contribution"
          label="Yearly Savings ($)"
          id="yearly-contribution"
        />
      </div>
      <div className="input-group">
        <Input
          onChange={(event) =>
            inputChangeHandler(
              'expected-return',
              event.target.value
            )
          }
          htmlFor="expected-return"
          label="Expected Interest (%, per year)"
          id="expected-return"
        />
        <Input
          onChange={(event) =>
            inputChangeHandler('duration', event.target.value)
          }
          htmlFor="duration"
          label="Investment Duration (years)"
          id="duration"
        />
      </div>
      <p className="actions">
        <button
          onClick={resetHandler}
          type="reset"
          className="buttonAlt"
        >
          Reset
        </button>
        <button type="submit" className="button">
          Calculate
        </button>
      </p>
    </form>
  );
};

export default UserInput;
