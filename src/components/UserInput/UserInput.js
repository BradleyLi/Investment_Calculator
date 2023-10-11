import Input from "../Input/Input"

const UserInput = () => {
  return (
    <form className="form">
      <div className="input-group">
          <Input htmlFor="current-savings" label="Current Savings ($)" id="current-savings" />
          <Input htmlFor="yearly-contribution" label="Yearly Savings ($)" id="yearly-contribution" />
        </div>
        <div className="input-group">
          <Input htmlFor="expected-return" label="Expected Interest (%, per year)" id="expected-return" />
          <Input htmlFor="duration" label="Investment Duration (years)" id="duration" />
        </div>
        <p className="actions">
          <button type="reset" className="buttonAlt">
            Reset
          </button>
          <button type="submit" className="button">
            Calculate
          </button>
        </p>
    </form>
  )
}

export default UserInput;