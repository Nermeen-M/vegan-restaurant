import { useState } from "react";

// no need to use the prefix entered, just go directly with name, setName, etc
// this component is a bit long
export default function BookingForm() {
  const [enteredName, setEnteredName] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [enteredTime, setEnteredTime] = useState("");
  const [formIsValid, setFormIsValid] = useState(true); // booleans -1 ALWAYS START FALSE, otherwise means you can click enter without typing and send something empty
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  function submitHandler(event) {
    event.preventDefault();

    if (enteredName.trim().length === 0) {
      setFormIsValid(false);
      return;
    }
    setFormIsValid(true);
    setEnteredName("");
    setEnteredEmail("");
    setEnteredDate("");
    setEnteredTime("");
    setShowSuccessMessage(true);
  }

  return (
    <form className="form" onSubmit={submitHandler}>
      <div className="form-field">
        <label htmlFor="name">Full name</label>
        <input
          type="text"
          placeholder="Full name"
          required
          value={enteredName}
          onChange={(event) => setEnteredName(event.target.value)}
        />
      </div>
      <div className="form-field">
        <label htmlFor="email">E-mail Address</label>
        <input
          type="email"
          placeholder="E-mail"
          required
          value={enteredEmail}
          onChange={(event) => setEnteredEmail(event.target.value)}
        />
      </div>
      <div className="form-field">
        <label htmlFor="date">Date</label>
        <input
          type="date"
          required
          value={enteredDate}
          onChange={(event) => setEnteredDate(event.target.value)}
        />
      </div>
      <div className="form-field">
        <label htmlFor="time">Time</label>
        <input
          type="time"
          required
          value={enteredTime}
          onChange={(event) => setEnteredTime(event.target.value)}
        />
      </div>
      {!formIsValid && <p className="error">Please enter a valid name.</p>}
      {showSuccessMessage && (
        <p className="success">Your request has been sent successfully.</p>
      )}

      <button className="primary-button">Book</button>
    </form>
  );
}
