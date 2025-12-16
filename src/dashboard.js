export default Dashboard;

function Dashboard() {
  return (
    <div className="dashboard-container">
      <NavBar />

      <div className="main-window">
        <SideBar />
        <MainDashboard />
      </div>
    </div>
  );
}

function NavBar() {
  return (
    <nav className="navigation-bar">
      <h3>Wilkommen zurück Haris</h3>

      <img src="\Hotel_Flow__1_-removebg-preview.png" alt="Logo" />
    </nav>
  );
}

function SideBar() {
  return (
    <div className="side-bar">
      <Button children={"Anreisen"} />
      <Button children={"Abreisen"} />
      <Button children={"Im Haus"} />
      <Button children={"Mitarbeiter"} />
      <Button children={"Zimmer"} />
      <Widgets />
    </div>
  );
}

function Button({ children }) {
  return <button className="btn">{children}</button>;
}

function Widgets() {
  return (
    <div className="widget-container">
      <h4>Widgets</h4>
      <button className="btn">Rechner</button>
      <button className="btn">Kalendar</button>
      <button className="btn">Abmelden</button>
    </div>
  );
}

function MainDashboard() {
  return (
    <div className="main-dashboard">
      <div className="dashboard-info">
        <span>Freie/Saubere Zimmer</span>
      </div>
    </div>
  );
}
