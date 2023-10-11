const Input = (props) => {
  return (
    <p>
      <label htmlFor={props.htmlFor}>{props.label}</label>
      <input type="number" id={props.id} />
    </p>
  )
}

export default Input;