import { useState, useRef } from "react";

function AddNewArrival({ addNewArrivalBtn, setAddNewArrivalBtn }) {
  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [adults, setAdults] = useState("");
  const [children, setChildren] = useState("");
  const [agent, setAgent] = useState("");
  const [price, setPrice] = useState("");
  const [newGuestObj, setNewGuestObj] = useState({});

  function handleSetLastName(e) {
    setLastName(e.target.value);
  }
  function handleSetFirstName(e) {
    setFirstName(e.target.value);
  }
  function handleSetAdults(e) {
    setAdults(Number(e.target.value));
  }
  function handleSetChildren(e) {
    setChildren(Number(e.target.value));
  }
  function handleSetAgent(e) {
    setAgent(e.target.value);
  }
  function handleSetPrice(e) {
    setPrice(Number(e.target.value));
  }

  function handleSetNewGuest() {
    if (
      lastName.length > 0 ||
      firstName.length > 0 ||
      adults > 0 ||
      agent.length > 0 ||
      price > 0
    ) {
      console.log(lastName.at(0).toUpperCase() + lastName.slice(1));
      console.log(firstName.at(0).toUpperCase() + firstName.slice(1));
      console.log(adults, children, agent, price);

      const newGuest = {
        lastName: lastName[0].toUpperCase() + lastName.slice(1),
        firstName: firstName[0].toLocaleUpperCase() + firstName.slice(1),
        adults,
        children,
        agent,
        price,
      };

      setNewGuestObj({ ...newGuest });

      setLastName("");
      setFirstName("");
      setAdults("");
      setChildren("");
      setPrice("");
      setAgent("");
      setAddNewArrivalBtn(false);
    } else {
      alert("Bitte alle Felder ausfüllen");
    }
  }

  function handleCloseAddNewGuestForm() {
    setAddNewArrivalBtn(!addNewArrivalBtn);
  }

  return (
    <>
      <div className="overlay"></div>
      <div className="grid-container-add-guest-form">
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
          <input type="number" value={adults} onChange={handleSetAdults} />
          <p>Kinder:</p>
          <input type="number" value={children} onChange={handleSetChildren} />
        </div>
        <div className="">
          <p>Agent</p>
          <input
            type="text"
            placeHolder="Booking, Expedia..."
            value={agent}
            onChange={handleSetAgent}
          />
          <p>Preis</p>
          <input
            type="number"
            placeHolder="0,00€"
            value={price}
            onChange={handleSetPrice}
          />
        </div>
        <div className="">
          <button onClick={handleSetNewGuest}>+</button>
          <button onClick={handleCloseAddNewGuestForm}>X</button>
        </div>
      </div>
    </>
  );
}

export default AddNewArrival;
