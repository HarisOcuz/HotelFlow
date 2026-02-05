import { useState } from "react";
import Login from "./login";
import MainUi from "./mainUI";
import AddNewArrival from "./AddNewArrivals";

const date = new Date().toISOString().split("T")[0];

function App() {
  const guests2 = [
    {
      id: 1,
      firstName: "Haris",
      lastName: "Ocuz",
      arrivalDate: formatedDate(date),
      departureDate: "22.05.2026",
      bookingAgent: "expedia",
      adults: 2,
      children: 1,
      price: 119,
      inHouse: false,
      roomType: "SDZ",
    },
    {
      id: 2,
      firstName: "Fatima",
      lastName: "Ocuz",
      arrivalDate: "20.05.2026",
      departureDate: "22.05.2026",
      bookingAgent: "booking",
      adults: 1,
      children: 0,
      price: 99,
      inHouse: false,
      roomType: "SDZ",
    },
    {
      id: 3,
      firstName: "Haris",
      lastName: "Ocuz",
      arrivalDate: "20.05.2026",
      departureDate: "22.05.2026",
      bookingAgent: "expedia",
      adults: 2,
      children: 1,
      price: 119,
      inHouse: false,
      roomType: "SDZ",
    },
    {
      id: 4,
      firstName: "Fatima",
      lastName: "Ocuz",
      arrivalDate: "20.05.2026",
      departureDate: "22.05.2026",
      bookingAgent: "booking",
      adults: 1,
      children: 0,
      price: 99,
      inHouse: false,
      roomType: "SDZ",
    },
    {
      id: 5,
      firstName: "Ali",
      lastName: "Ocuz",
      arrivalDate: formatedDate(date),
      departureDate: "22.05.2026",
      bookingAgent: "HRS",
      adults: 2,
      children: 1,
      price: 69,
      inHouse: false,
      roomType: "SDZ",
    },
    {
      id: 6,
      firstName: "Mesa",
      lastName: "Selimovic",
      arrivalDate: "20.09.2026",
      departureDate: formatedDate(date),
      bookingAgent: "tripadvisor",
      adults: 1,
      children: 0,
      price: 199,
      inHouse: false,
      roomType: "SDZ",
    },
    {
      id: 7,
      firstName: "Ali",
      lastName: "Ocuz",
      arrivalDate: "20.05.2026",
      departureDate: "22.05.2026",
      bookingAgent: "HRS",
      adults: 2,
      children: 1,
      price: 69,
      inHouse: false,
      roomType: "SDZ",
    },
    {
      id: 8,
      firstName: "Mesa",
      lastName: "Selimovic",
      arrivalDate: "28.01.2026",
      departureDate: "14.10.2026",
      bookingAgent: "tripadvisor",
      adults: 1,
      children: 0,
      price: 199,
      inHouse: false,
      roomType: "SDZ",
    },
    {
      id: 9,
      firstName: "Ali",
      lastName: "Ocuz",
      arrivalDate: "20.05.2026",
      departureDate: "22.05.2026",
      bookingAgent: "HRS",
      adults: 2,
      children: 1,
      price: 69,
      inHouse: true,
      roomType: "SDZ",
    },
    {
      id: 10,
      firstName: "Mesa",
      lastName: "Selimovic",
      arrivalDate: "20.09.2026",
      departureDate: "14.10.2026",
      bookingAgent: "tripadvisor",
      adults: 1,
      children: 0,
      price: 199.36,
      inHouse: false,
      roomType: "SDZ",
    },
  ];

  // OVO KASNIJE PREBACITI NA FALSE

  const [authStatus, setAuthStatus] = useState(false);
  const [addNewArrivalBtn, setAddNewArrivalBtn] = useState(false);
  const [guests, setGuests] = useState([...guests2]);
  const [arrivalDate, setArrivalDate] = useState(date);
  const [departureDate, setDepartureDate] = useState(arrivalDate);

  function formatedDate(date) {
    const d = new Date(date);
    const day = String(d.getDate()).padStart(2, "0");
    const month = String(d.getMonth() + 1).padStart(2, "0"); // mjeseci od 0
    const year = d.getFullYear();
    return `${day}.${month}.${year}`;
  }

  function handleAddGuest(newGuest) {
    setGuests((prevGuests) => [
      ...prevGuests,
      { ...newGuest, id: prevGuests.length + 1 },
    ]);
  }

  return (
    <div className="App">
      {authStatus ? (
        <MainUi
          setGuests={setGuests}
          guests={guests}
          authStatus={authStatus}
          setAuthStatus={setAuthStatus}
          addNewArrivalBtn={addNewArrivalBtn}
          setAddNewArrivalBtn={setAddNewArrivalBtn}
          arrivalDate={arrivalDate}
          departureDate={departureDate}
          formatedDate={formatedDate}
        />
      ) : (
        <Login authStatus={authStatus} setAuthStatus={setAuthStatus} />
      )}

      {addNewArrivalBtn ? (
        <AddNewArrival
          addNewArrivalBtn={addNewArrivalBtn}
          setAddNewArrivalBtn={setAddNewArrivalBtn}
          onAddGuest={handleAddGuest}
          arrivalDate={arrivalDate}
          departureDate={departureDate}
          setArrivalDate={setArrivalDate}
          setDepartureDate={setDepartureDate}
          formatedDate={formatedDate}
        />
      ) : null}
    </div>
  );
}

export default App;
