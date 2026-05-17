function Topbar() {
  const date =
    new Date().toLocaleDateString();

  return (
    <header className="topbar">
      <div>
        <h1>
          Fence Estimator Dashboard
        </h1>

        <p>
          Manage estimates and proposals
        </p>
      </div>

      <div className="topbar-right">
        <div className="topbar-date">
          {date}
        </div>
      </div>
    </header>
  );
}

export default Topbar;