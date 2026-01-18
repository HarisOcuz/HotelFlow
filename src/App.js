import { useState } from "react";
import Login from "./login";
import MainUi from "./mainUI";
import AddNewArrival from "./nerArrivals";

function App() {
  const [authStatus, setAuthStatus] = useState(false);

  return (
    <div className="App">
      {authStatus ? (
        <MainUi authStatus={authStatus} setAuthStatus={setAuthStatus} />
      ) : (
        <Login authStatus={authStatus} setAuthStatus={setAuthStatus} />
      )}

      {/* <AddNewArrival /> */}
    </div>
  );
}

export default App;
