import { useState } from "react";
import Login from "./login";
import MainUi from "./mainUI";
import AddNewArrival from "./nerArrivals";

function App() {
  const [authStatus, setAuthStatus] = useState(false);
  const [addNewArrivalBtn, setAddNewArrivalBtn] = useState(false);

  return (
    <div className="App">
      {authStatus ? (
        <MainUi
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
        />
      ) : null}
    </div>
  );
}

export default App;
