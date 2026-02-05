import { useState } from "react";

export function InHouseGuests({ guests }) {
  const [isOpenGuestCard, setIsOpenGuestCard] = useState(null);

  function handleOnClickOpenGuestCard(id) {
    console.log(id);
    if (isOpenGuestCard === id) setIsOpenGuestCard(null);
    else setIsOpenGuestCard(id);
  }

  return (
    <div className="guest-flex">
      {guests
        .filter((guest) => guest.inHouse === true)
        .map((guest) => (
          <div
            key={guest.id}
            className="guest-card"
            style={
              isOpenGuestCard === guest.id ? { backgroundColor: "#dde9e1" } : {}
            }
          >
            <div
              className="guest-card-short-info"
              onClick={() => handleOnClickOpenGuestCard(guest.id)}
            >
              <div>
                <h3>{guest.firstName + " " + guest.lastName}</h3>
              </div>
              <div className="center-el">
                <h3>{guest.arrivalDate}</h3>
                <h3>{guest.departureDate}</h3>
              </div>
              <div className="center-el">
                <h3>Agent</h3>
                <h3>{guest.bookingAgent}</h3>
              </div>
              <div className="center-el">
                <h3>Zimmertyp</h3>
                <h3>{guest.roomType}</h3>
              </div>
              <div className="center-el">
                <h3>Preis</h3>
                <h3>{guest.price} €</h3>
              </div>
            </div>

            {isOpenGuestCard === guest.id && (
              <div className="guest-card-open">
                <ul>
                  <li>
                    <strong>Erwachsene:</strong> {guest.adults}
                  </li>
                  <li>
                    <strong>Kinder:</strong> {guest.children}
                  </li>
                  <li>
                    <strong>Zimmertyp:</strong> {guest.roomType}
                  </li>
                </ul>
                <ul>
                  <li>
                    <strong>Zahlungsart:</strong> KK
                  </li>
                  <li>
                    <strong>Preis:</strong> {guest.price}€
                  </li>
                  <li>
                    <strong>Datum:</strong> {guest.arrivalDate} /{" "}
                    {guest.departureDate}
                  </li>
                </ul>
                <div className="checkmarks">
                  <button className="guest-card-btn">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="6"
                      stroke="green"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m4.5 12.75 6 6 9-13.5"
                      />
                    </svg>
                  </button>
                  <button className="guest-card-btn">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="6"
                      stroke="red"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18 18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
    </div>
  );
}
