import { useState, useRef } from "react";
import MainUi from "./mainUI";

function AddNewArrival({
  addNewArrivalBtn,
  setAddNewArrivalBtn,
  onAddGuest,
  guests,
  setGuests,
}) {
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
      const newGuest = {
        lastName: lastName[0].toUpperCase() + lastName.slice(1),
        firstName: firstName[0].toLocaleUpperCase() + firstName.slice(1),
        adults,
        children,
        agent,
        price,
      };

      onAddGuest(newGuest);

      setLastName("");
      setFirstName("");
      setAdults("");
      setChildren("");
      setPrice("");
      setAgent("");
      // setAddNewArrivalBtn(false);
    } else {
      alert("Bitte alle Felder ausfüllen");
    }
  }
  console.log(newGuestObj);

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
            className="input-add-guest"
            type="text"
            placeHolder="Nachname"
            value={lastName}
            onChange={handleSetLastName}
          />
          <p>Vorname</p>
          <input
            className="input-add-guest"
            type="text"
            placeHolder="Vorname"
            value={firstName}
            onChange={handleSetFirstName}
          />
        </div>
        <div className="">
          <p>Erwachsene:</p>
          <input
            className="input-add-guest"
            type="number"
            value={adults}
            onChange={handleSetAdults}
          />
          <p>Kinder:</p>
          <input
            className="input-add-guest"
            type="number"
            value={children}
            onChange={handleSetChildren}
          />
        </div>
        <div className="">
          <p>Agent</p>
          <input
            className="input-add-guest"
            type="text"
            placeHolder="Booking, Expedia..."
            value={agent}
            onChange={handleSetAgent}
          />
          <p>Preis</p>
          <input
            className="input-add-guest"
            type="number"
            placeHolder="0,00€"
            value={price}
            onChange={handleSetPrice}
          />
        </div>
        <div className="btns-add-new-guest">
          <button class="btn-add-cancel-guest" onClick={handleSetNewGuest}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="6"
              stroke="green"
              class="btn-add-guest"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m4.5 12.75 6 6 9-13.5"
              />
            </svg>
          </button>
          <button
            className="btn-add-cancel-guest"
            onClick={handleCloseAddNewGuestForm}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="6"
              stroke="red"
              class="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
}

export default AddNewArrival;
