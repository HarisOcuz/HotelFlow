import { useState, useRef } from "react";

function AddNewArrival() {
  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);
  const [agent, setAgent] = useState("");
  const [price, setPrice] = useState(0);
  const [addNewGuest, setAddNewGuest] = useState(false);

  function handleSetLastName(e) {
    setLastName(e.target.value);
  }
  function handleSetFirstName(e) {
    setFirstName(e.target.value);
  }
  function handleSetAdults() {}
  function handleSetChildren() {}
  function handleSetAgent() {}
  function handleSetPrice() {}

  function handleSetNewGuest() {
    console.log(lastName.at(0).toUpperCase() + lastName.slice(1));
    console.log(firstName.at(0).toUpperCase() + firstName.slice(1));

    setLastName("");
    setFirstName("");
  }

  return (
    <div className="grid-container">
      <div className="">
        <p>Name</p>
        <input
          type="text"
          placeHolder="Nachname"
          value={lastName}
          onChange={handleSetLastName}
        />
        <p>Vorname</p>
        <input
          type="text"
          placeHolder="Vorname"
          value={firstName}
          onChange={handleSetFirstName}
        />
      </div>
      <div className="">
        <p>Erwachsene:</p>
        <input type="number" value={adults} />
        <p>Kinder:</p>
        <input type="number" value={children} />
      </div>
      <div className="">
        <p>Agent</p>
        <input type="text" placeHolder="Booking, Expedia..." value={agent} />
        <p>Preis</p>
        <input type="number" placeHolder="0,00€" value={price} />
      </div>
      <div className="">
        <button onClick={handleSetNewGuest}>+</button>
        <button>X</button>
      </div>
    </div>
  );
}

export default AddNewArrival;
