function Header() {
  const date = new Date().toLocaleDateString();

  const estimateNumber = `EST-${Date.now()}`;

  return (
    <header className="header">
      <div>
        <h1>Your Estimator</h1>

        <p>
          Professional Fence Estimating &
          Proposal Software
        </p>
      </div>

      <div className="header-right">
        <div>{date}</div>
        <div>{estimateNumber}</div>
      </div>
    </header>
  );
}

export default Header;