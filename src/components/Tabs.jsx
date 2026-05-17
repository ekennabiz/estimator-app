function Tabs({
  activeTab,
  setActiveTab,
}) {
  return (
    <div className="tabs">
      <button
        className={
          activeTab === "estimate"
            ? "tab active-tab"
            : "tab"
        }
        onClick={() =>
          setActiveTab("estimate")
        }
      >
        Estimate
      </button>

      <button
        className={
          activeTab === "proposal"
            ? "tab active-tab"
            : "tab"
        }
        onClick={() =>
          setActiveTab("proposal")
        }
      >
        Proposal
      </button>

      <button
        className={
          activeTab === "reports"
            ? "tab active-tab"
            : "tab"
        }
        onClick={() =>
          setActiveTab("reports")
        }
      >
        Reports
      </button>
    </div>
  );
}

export default Tabs;