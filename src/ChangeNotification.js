import { useState } from "react";

// export function ChangeNotification({
//   setBookingCanceled,
//   bookingCanceled,
//   guestCheckedIn,
//   setGuestCheckedIn,
//   children,
// }) {
//   const [removeNotification, setRemoveNotification] = useState(false);

//   function handleRemoveNotification() {
//     if (bookingCanceled) setBookingCanceled((prev) => !prev);
//     if (guestCheckedIn) setGuestCheckedIn(false);
//     setRemoveNotification((prev) => !prev);
//   }
//   return (
//     <>
//       {!removeNotification && (
//         <>
//           <div className="overlay-notification"></div>
//           <div className="change-log">
//             <h3>{children}</h3>
//             <button onClick={handleRemoveNotification} className="btn">
//               OK
//             </button>
//           </div>
//         </>
//       )}
//     </>
//   );
// }

export function ChangeNotification({ onClose, children }) {
  return (
    <>
      <div className="overlay-notification"></div>
      <div className="change-log">
        <h3>{children}</h3>
        <button onClick={onClose} className="btn">
          OK
        </button>
      </div>
    </>
  );
}
