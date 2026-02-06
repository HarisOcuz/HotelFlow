import { useState } from "react";

export function ChangeNotification() {
  const [removeNotification, setRemoveNotification] = useState(false);

  function handleRemoveNotification() {
    console.log(removeNotification);

    setRemoveNotification(true);
  }
  return (
    <>
      {!removeNotification && (
        <>
          <div className="overlay-notification"></div>
          <div className="change-log">
            <h3>Buchung wurde storniert</h3>
            <button onClick={handleRemoveNotification} className="btn">
              OK
            </button>
          </div>
        </>
      )}
    </>
  );
}
