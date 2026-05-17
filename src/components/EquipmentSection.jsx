import { calculateEquipmentRow } from "../utils/calculations";

import { formatCurrency } from "../utils/formatters";

function EquipmentSection({ equipment, setEquipment }) {
  const addRow = () => {
    setEquipment([
      ...equipment,
      {
        name: "",
        hours: "",
        rate: "",
      },
    ]);
  };

  const removeRow = (index) => {
    const updated = [...equipment];

    updated.splice(index, 1);

    setEquipment(updated);
  };

  const updateRow = (index, field, value) => {
    const updated = [...equipment];

    updated[index][field] = value;

    setEquipment(updated);
  };

  return (
    <section className="card">
      <div className="section-header">
        <h2>Equipment</h2>

        <button onClick={addRow}>Add Equipment</button>
      </div>

      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>Equipment</th>
              <th>Hours</th>
              <th>Rate</th>
              <th>Total</th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            {equipment.map((item, index) => (
              <tr key={index}>
                <td>
                  <input
                    value={item.name}
                    onChange={(e) => updateRow(index, "name", e.target.value)}
                  />
                </td>

                <td>
                  <input
                    type="number"
                    value={item.hours}
                    onChange={(e) => updateRow(index, "hours", e.target.value)}
                  />
                </td>

                <td>
                  <input
                    type="number"
                    value={item.rate}
                    onChange={(e) => updateRow(index, "rate", e.target.value)}
                  />
                </td>

                <td>{formatCurrency(calculateEquipmentRow(item))}</td>

                <td>
                  <button
                    className="danger-btn"
                    onClick={() => removeRow(index)}
                  >
                    X
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default EquipmentSection;
