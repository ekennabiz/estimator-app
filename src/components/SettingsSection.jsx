function SettingsSection({
  settings,
  setSettings,
}) {
  const handleChange = (e) => {
    const { name, value } = e.target;

    setSettings({
      ...settings,
      [name]: value,
    });
  };

  return (
    <section className="card">
      <h2>Pricing Settings</h2>

      <div className="grid-2">
        <input
          type="number"
          name="overheadPct"
          placeholder="Overhead %"
          value={settings.overheadPct}
          onChange={handleChange}
        />

        <input
          type="number"
          name="profitPct"
          placeholder="Profit %"
          value={settings.profitPct}
          onChange={handleChange}
        />

        <input
          type="number"
          name="taxRate"
          placeholder="Tax Rate %"
          value={settings.taxRate}
          onChange={handleChange}
        />

        <select
          name="discountType"
          value={settings.discountType}
          onChange={handleChange}
        >
          <option value="percent">
            Discount %
          </option>

          <option value="fixed">
            Fixed Discount
          </option>
        </select>

        <input
          type="number"
          name="discountValue"
          placeholder="Discount Value"
          value={settings.discountValue}
          onChange={handleChange}
        />
      </div>
    </section>
  );
}

export default SettingsSection;