import { useState } from "react";
import { todaysDate } from "./todaysDate";

const date = new Date().toISOString().split("T")[0];
console.log(date);

function MainUi({
  setAuthStatus,
  authStatus,
  addNewArrivalBtn,
  setAddNewArrivalBtn,
  newGuestObj,
  guests,
  arrivalDate,
  departureDate,
}) {
  const [siteOpen, setSiteOpen] = useState("");
  const [showAllArrivals, setShowAllArrivals] = useState(false);

  function handleShowAllArrivals() {
    console.log(showAllArrivals);
    setShowAllArrivals((prev) => !prev);
  }
  function handleLogOut() {
    setAuthStatus((authStatus) => !authStatus);
  }

  function handleOnClick(text) {
    console.log(siteOpen);
    setSiteOpen(text);
  }

  return (
    <div className="MainUi-container">
      <div>
        <SideBar
          onClick={handleOnClick}
          setSiteOpen={setSiteOpen}
          sethAuthState={setAuthStatus}
          onSetAuthStatus={handleLogOut}
        />
      </div>

      <div className="dashboard-container">
        <NavBar />
        {siteOpen === "" ? (
          <MainWindowShortInfo setSiteOpen={setSiteOpen} />
        ) : siteOpen === "Anreisen" ? (
          <Arrivals
            addNewArrivalBtn={addNewArrivalBtn}
            setAddNewArrivalBtn={setAddNewArrivalBtn}
            guests={guests}
            showAllArrivals={showAllArrivals}
            onShowAllArrivals={handleShowAllArrivals}
            setShowAllArrivals={setShowAllArrivals}
          />
        ) : siteOpen === "Abreisen" ? (
          <Departures />
        ) : siteOpen === "Im Haus" ? (
          <InHaus />
        ) : siteOpen === "Zimmer Management" ? (
          <RoomMenagamenet />
        ) : siteOpen === "Mitarbeiter" ? (
          <CoWorkers />
        ) : siteOpen === "Verwaltung" ? (
          <Maintance />
        ) : (
          <MainWindowShortInfo />
        )}
      </div>
    </div>
  );
}

// SIDEBAR

function SideBar({
  onClick,
  setSiteOpen,
  setAuthState,
  authState,
  onSetAuthStatus,
}) {
  return (
    <div className="sidebar-container">
      <img
        onClick={() => setSiteOpen("")}
        className="logo-sidebar"
        src="/Hotel_Flow__1_-removebg-preview.png"
        alt="App Logo"
      />
      <ul className="ul-sidebar">
        <ListElement
          onClick={onClick}
          text="Anreisen"
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6"
              className="icons"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z"
              />
            </svg>
          }
        />
        <ListElement
          onClick={onClick}
          text="Abreisen"
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6"
              className="icons"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M22 10.5h-6m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM4 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 10.374 21c-2.331 0-4.512-.645-6.374-1.766Z"
              />
            </svg>
          }
        />
        <ListElement
          onClick={onClick}
          text="Im Haus"
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6"
              className="icons"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"
              />
            </svg>
          }
        />
        <ListElement
          onClick={onClick}
          text="Zimmer Management"
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6"
              className="icons"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21"
              />
            </svg>
          }
        />
        <ListElement
          onClick={onClick}
          text="Mitarbeiter"
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6"
              className="icons"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"
              />
            </svg>
          }
        />
        <ListElement
          onClick={onClick}
          text="Verwaltung"
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6"
              className="icons"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z"
              />
            </svg>
          }
        />
        <button className="log-out btn" onClick={onSetAuthStatus}>
          Auslogen
        </button>
      </ul>
    </div>
  );
}

function ListElement({ text, onClick, icon }) {
  return (
    <li onClick={() => onClick(text)} key={text}>
      <span>{icon}</span>
      {text}
    </li>
  );
}

// NAVBAR

function NavBar() {
  return (
    <div className="navbar-container">
      <h4>Wilkommen zurück Haris</h4>
      <p>{todaysDate(date)}</p>
    </div>
  );
}

// SHORT INFO - STATS

function MainWindowShortInfo({ setSiteOpen }) {
  return (
    <div className="mainWindow-container">
      <ShortInfo
        setSiteOpen={setSiteOpen}
        className="mainWindow-short-info"
        text="Anreisen"
        nummer="18"
      />
      <ShortInfo
        setSiteOpen={setSiteOpen}
        className="mainWindow-short-info mainWindow-short-info-abreisen"
        text="Abreisen"
        nummer="3"
      />
      <ShortInfo
        setSiteOpen={setSiteOpen}
        className="mainWindow-short-info mainWindow-short-info-im-haus"
        text="Im Haus"
        nummer="4"
      />
      <ShortInfo
        setSiteOpen={setSiteOpen}
        className="mainWindow-short-info "
        text="Belegt"
        nummer="39%"
      />
    </div>
  );
}

function ShortInfo({ text, nummer, className, setSiteOpen }) {
  return (
    <div className={className} onClick={() => setSiteOpen(text)}>
      <span className="text">{text}</span>
      <span className="nummer">{nummer}</span>
    </div>
  );
}

// ARRIVALS

function Arrivals({
  addNewArrivalBtn,
  setAddNewArrivalBtn,
  guests,
  showAllArrivals,
  setShowAllArrivals,
  onShowAllArrivals,
}) {
  const [isOpen, setIsOpen] = useState(null);
  const [isOpenSidePanel, setIsOpenSidePanel] = useState(false);

  // Stats for todays arrivals
  const totalAdultsArrivals = guests
    .filter((guest) => guest.arrivalDate === todaysDate(date))
    .reduce((acc, guest) => acc + guest.adults, 0);
  const totalKidsArrivals = guests
    .filter((guest) => guest.arrivalDate === todaysDate(date))
    .reduce((acc, guest) => acc + guest.children, 0);
  const averagePricePerRoomArrivals = (
    guests
      .filter((guest) => guest.arrivalDate === todaysDate(date))
      .reduce((acc, guest) => acc + guest.price, 0) /
    guests.filter((guest) => guest.arrivalDate === todaysDate(date)).length
  ).toFixed(2);

  // Stats for arrivals in total

  const totalAdults = guests.reduce((acc, guest) => acc + guest.adults, 0);
  const totalKids = guests.reduce((acc, guest) => acc + guest.children, 0);
  const averagePricePerRoom = (
    guests.reduce((acc, guest) => acc + guest.price, 0) / guests.length
  ).toFixed(2);

  function handleAddNewArrivalBtn() {
    setAddNewArrivalBtn(true);
  }

  function handleOpenSidePanel() {
    console.log("open");
    setIsOpenSidePanel(!isOpenSidePanel);
  }

  function handleOnClick(id) {
    console.log(id);
    if (isOpen === id) setIsOpen(null);
    else setIsOpen(id);
  }

  return (
    <>
      <SideShortInfoArrivals
        className={"btn-absolute-add-new-guest"}
        onAddNewArrival={handleAddNewArrivalBtn}
        addNewArrival={addNewArrivalBtn}
        guests={guests}
      />
      <button
        className="btn-absolute-show-all-guests"
        onClick={onShowAllArrivals}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="#b7e4c7"
          class="stats-add-btn"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"
          />
        </svg>
      </button>

      <div className="ui-container arrivals-container">
        <GuestsArrivalToday
          onClick={handleOnClick}
          isOpen={isOpen}
          guests={guests}
          showAllArrivals={showAllArrivals}
        />
      </div>
      <SideShortInfoArrivals
        className={"btn-absolute-statistics"}
        onOpenSidePanel={handleOpenSidePanel}
        isOpenSidePanel={isOpenSidePanel}
        guests={guests}
        totalAdultsArrivals={totalAdultsArrivals}
        totalKidsArrivals={totalKidsArrivals}
        averagePricePerRoomArrivals={averagePricePerRoomArrivals}
        showAllArrivals={showAllArrivals}
        totalAdults={totalAdults}
        totalKids={totalKids}
        averagePricePerRoom={averagePricePerRoom}
      />
    </>
  );
}

function SideShortInfoArrivals({
  onOpenSidePanel,
  isOpenSidePanel,
  className,
  addNewArrival,
  onAddNewArrival,
  totalAdultsArrivals,
  totalKidsArrivals,
  averagePricePerRoomArrivals,
  guests,
  showAllArrivals,
  totalAdults,
  totalKids,
  averagePricePerRoom,
}) {
  return (
    <>
      <button
        className={className}
        onClick={
          className === "btn-absolute-statistics"
            ? onOpenSidePanel
            : onAddNewArrival
        }
      >
        {className === "btn-absolute-statistics" ? (
          isOpenSidePanel ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="4"
              stroke="red"
              class="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#b7e4c7"
              class="stats-add-btn"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z"
              />
            </svg>
          )
        ) : addNewArrival ? (
          "O"
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#b7e4c7"
            class="stats-add-btn"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z"
            />
          </svg>
        )}
      </button>
      {isOpenSidePanel && !showAllArrivals ? (
        <div className="flex-container">
          {isOpenSidePanel && (
            <>
              <div className="side-short-info">
                <span>Anreisen</span>
                <span>
                  {
                    guests.filter(
                      (guest) => guest.arrivalDate === todaysDate(date),
                    ).length
                  }
                </span>
              </div>
              <div className="side-short-info">
                <span>⌀ Preis</span>
                <span>{averagePricePerRoomArrivals}€</span>
              </div>
              <div className="side-short-info">
                <span>Erwachsene</span>
                <span>{totalAdultsArrivals}</span>
              </div>
              <div className="side-short-info">
                <span>Kinder</span>
                <span>{totalKidsArrivals}</span>
              </div>
            </>
          )}
        </div>
      ) : isOpenSidePanel && showAllArrivals ? (
        <div className="flex-container">
          <div className="side-short-info">
            <span>Anreisen</span>
            <span>{guests.length}</span>
          </div>
          <div className="side-short-info">
            <span>⌀ Preis</span>
            <span>{averagePricePerRoom}€</span>
          </div>
          <div className="side-short-info">
            <span>Erwachsene</span>
            <span>{totalAdults}</span>
          </div>
          <div className="side-short-info">
            <span>Kinder</span>
            <span>{totalKids}</span>
          </div>
        </div>
      ) : null}
    </>
  );
}

console.log(todaysDate());

function GuestsArrivalToday({ isOpen, onClick, guests, showAllArrivals }) {
  console.log(showAllArrivals);

  return (
    <div className="guest-flex">
      {showAllArrivals === false
        ? guests
            .filter((guest) => guest.arrivalDate === todaysDate(date))
            .map((guest) => (
              <div
                key={guest.id}
                className="guest-card"
                // onClick={() => onClick(guest.id)}
                style={
                  isOpen === guest.id ? { backgroundColor: "#dde9e1" } : {}
                }
              >
                <div
                  className="guest-card-short-info"
                  onClick={() => onClick(guest.id)}
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

                {isOpen === guest.id && (
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
                        <strong>Preis:</strong>
                        {guest.price}€
                      </li>
                      <li>
                        <strong>Datum:</strong>
                        {guest.arrivalDate} / {guest.departureDate}
                      </li>
                    </ul>
                    <div className="checkmarks">
                      <button className="guest-card-btn">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="6"
                          stroke="green"
                          class="size-6"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="m4.5 12.75 6 6 9-13.5"
                          />
                        </svg>
                      </button>
                      <button className="guest-card-btn">
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
                )}
              </div>
            ))
        : guests.map((guest) => (
            <div
              key={guest.id}
              className="guest-card"
              // onClick={() => onClick(guest.id)}
              style={isOpen === guest.id ? { backgroundColor: "#dde9e1" } : {}}
            >
              <div
                className="guest-card-short-info"
                onClick={() => onClick(guest.id)}
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

              {isOpen === guest.id && (
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
                      <strong>Preis:</strong>
                      {guest.price}€
                    </li>
                    <li>
                      <strong>Datum:</strong>
                      {guest.arrivalDate} / {guest.departureDate}
                    </li>
                  </ul>
                  <div className="checkmarks">
                    <button className="guest-card-btn">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="6"
                        stroke="green"
                        class="size-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="m4.5 12.75 6 6 9-13.5"
                        />
                      </svg>
                    </button>
                    <button className="guest-card-btn">
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
              )}
            </div>
          ))}
    </div>
  );
}

function Departures() {
  return (
    <div className="ui-container departure-container">
      <h1>Abreisen</h1>
    </div>
  );
}

function InHaus() {
  return (
    <div className="ui-container in-house-container">
      <h1>Im Haus</h1>
    </div>
  );
}

function RoomMenagamenet() {
  return (
    <div className="ui-container">
      <h1>Zimmer Management</h1>
    </div>
  );
}

function CoWorkers() {
  return (
    <div className="ui-container">
      <h1>Mitarbeiter</h1>
    </div>
  );
}

function Maintance() {
  return (
    <div className="ui-container">
      <h1>Verwaltung</h1>
    </div>
  );
}

export default MainUi;
