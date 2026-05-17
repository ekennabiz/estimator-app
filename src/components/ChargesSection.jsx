function ChargesSection({
  charges,
  setCharges,
}) {
  const handleChange = (e) => {
    const { name, value } = e.target;

    setCharges({
      ...charges,
      [name]: value,
    });
  };

  return (
    <section className="card">
      <h2>Additional Charges</h2>

      <div className="grid-2">
        <input
          type="number"
          name="permitFees"
          placeholder="Permit Fees"
          value={charges.permitFees}
          onChange={handleChange}
        />

        <input
          type="number"
          name="consumables"
          placeholder="Consumables"
          value={charges.consumables}
          onChange={handleChange}
        />

        <input
          type="number"
          name="miscellaneous"
          placeholder="Miscellaneous"
          value={charges.miscellaneous}
          onChange={handleChange}
        />
      </div>
    </section>
  );
}

export default ChargesSection;