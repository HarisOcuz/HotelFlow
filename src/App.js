import { useState } from "react";
import Login from "./login";
import MainUi from "./mainUI";
import AddNewArrival from "./AddNewArrivals";

const guests2 = [
  {
    id: 1,
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
    id: 6,
    firstName: "Mesa",
    lastName: "Selimovic",
    arrivalDate: "20.09.2026",
    departureDate: "14.10.2026",
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
    arrivalDate: "20.09.2026",
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
    inHouse: false,
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

function App() {
  // OVO KASNIJE PREBACITI NA FALSE

  const [authStatus, setAuthStatus] = useState(true);
  const [addNewArrivalBtn, setAddNewArrivalBtn] = useState(false);
  const [guests, setGuests] = useState([...guests2]);

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
          guests={guests}
          authStatus={authStatus}
          setAuthStatus={setAuthStatus}
          addNewArrivalBtn={addNewArrivalBtn}
          setAddNewArrivalBtn={setAddNewArrivalBtn}
        />
      ) : (
        <Login authStatus={authStatus} setAuthStatus={setAuthStatus} />
      )}

      {addNewArrivalBtn ? (
        <AddNewArrival
          addNewArrivalBtn={addNewArrivalBtn}
          setAddNewArrivalBtn={setAddNewArrivalBtn}
          onAddGuest={handleAddGuest}
        />
      ) : null}
    </div>
  );
}

export default App;
