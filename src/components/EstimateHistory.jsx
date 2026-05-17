function EstimateHistory({
  estimates,
  loadEstimate,
  searchTerm,
  setSearchTerm,
}) {
  const filtered =
    estimates.filter((item) =>
      item.project.projectName
        ?.toLowerCase()
        .includes(
          searchTerm.toLowerCase()
        )
    );

  return (
    <section className="history-panel">

      <h3>
        Estimate History
      </h3>

      <input
        type="text"
        placeholder="Search estimates..."
        value={searchTerm}
        onChange={(e) =>
          setSearchTerm(
            e.target.value
          )
        }
      />

      <div className="history-list">
        {filtered.map(
          (estimate, index) => (
            <div
              key={index}
              className="history-item"
              onClick={() =>
                loadEstimate(
                  estimate
                )
              }
            >
              <strong>
                {
                  estimate.project
                    .projectName
                }
              </strong>

              <p>
                {
                  estimate.project
                    .clientName
                }
              </p>
            </div>
          )
        )}
      </div>
    </section>
  );
}

export default EstimateHistory;