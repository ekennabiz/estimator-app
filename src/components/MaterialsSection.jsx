import {
  calculateMaterialRow,
} from '../utils/calculations';

import { formatCurrency } from '../utils/formatters';

function MaterialsSection({
  materials,
  setMaterials,
}) {
  const addRow = () => {
    setMaterials([
      ...materials,
      {
        name: '',
        quantity: '',
        unit: '',
        unitCost: '',
        waste: '',
      },
    ]);
  };

  const removeRow = (index) => {
    const updated = [...materials];

    updated.splice(index, 1);

    setMaterials(updated);
  };

  const updateRow = (
    index,
    field,
    value
  ) => {
    const updated = [...materials];

    updated[index][field] = value;

    setMaterials(updated);
  };

  return (
    <section className="card">
      <div className="section-header">
        <h2>Materials</h2>

        <button onClick={addRow}>
          Add Material
        </button>
      </div>

      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>Material</th>
              <th>Qty</th>
              <th>Unit</th>
              <th>Unit Cost</th>
              <th>Waste %</th>
              <th>Total</th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            {materials.map(
              (item, index) => (
                <tr key={index}>
                  <td>
                    <input
                      value={item.name}
                      onChange={(e) =>
                        updateRow(
                          index,
                          'name',
                          e.target.value
                        )
                      }
                    />
                  </td>

                  <td>
                    <input
                      type="number"
                      value={
                        item.quantity
                      }
                      onChange={(e) =>
                        updateRow(
                          index,
                          'quantity',
                          e.target.value
                        )
                      }
                    />
                  </td>

                  <td>
                    <input
                      value={item.unit}
                      onChange={(e) =>
                        updateRow(
                          index,
                          'unit',
                          e.target.value
                        )
                      }
                    />
                  </td>

                  <td>
                    <input
                      type="number"
                      value={
                        item.unitCost
                      }
                      onChange={(e) =>
                        updateRow(
                          index,
                          'unitCost',
                          e.target.value
                        )
                      }
                    />
                  </td>

                  <td>
                    <input
                      type="number"
                      value={item.waste}
                      onChange={(e) =>
                        updateRow(
                          index,
                          'waste',
                          e.target.value
                        )
                      }
                    />
                  </td>

                  <td>
                    {formatCurrency(
                      calculateMaterialRow(
                        item
                      )
                    )}
                  </td>

                  <td>
                    <button
                      className="danger-btn"
                      onClick={() =>
                        removeRow(index)
                      }
                    >
                      X
                    </button>
                  </td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default MaterialsSection;