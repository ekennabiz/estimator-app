import {
  calculateLaborRow,
} from '../utils/calculations';

import { formatCurrency } from '../utils/formatters';

function LaborSection({
  labor,
  setLabor,
}) {
  const addRow = () => {
    setLabor([
      ...labor,
      {
        role: '',
        workers: '',
        hours: '',
        rate: '',
      },
    ]);
  };

  const removeRow = (index) => {
    const updated = [...labor];

    updated.splice(index, 1);

    setLabor(updated);
  };

  const updateRow = (
    index,
    field,
    value
  ) => {
    const updated = [...labor];

    updated[index][field] = value;

    setLabor(updated);
  };

  return (
    <section className="card">
      <div className="section-header">
        <h2>Labor</h2>

        <button onClick={addRow}>
          Add Labor
        </button>
      </div>

      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>Role</th>
              <th>Workers</th>
              <th>Hours</th>
              <th>Rate</th>
              <th>Total</th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            {labor.map(
              (item, index) => (
                <tr key={index}>
                  <td>
                    <input
                      value={item.role}
                      onChange={(e) =>
                        updateRow(
                          index,
                          'role',
                          e.target.value
                        )
                      }
                    />
                  </td>

                  <td>
                    <input
                      type="number"
                      value={
                        item.workers
                      }
                      onChange={(e) =>
                        updateRow(
                          index,
                          'workers',
                          e.target.value
                        )
                      }
                    />
                  </td>

                  <td>
                    <input
                      type="number"
                      value={item.hours}
                      onChange={(e) =>
                        updateRow(
                          index,
                          'hours',
                          e.target.value
                        )
                      }
                    />
                  </td>

                  <td>
                    <input
                      type="number"
                      value={item.rate}
                      onChange={(e) =>
                        updateRow(
                          index,
                          'rate',
                          e.target.value
                        )
                      }
                    />
                  </td>

                  <td>
                    {formatCurrency(
                      calculateLaborRow(
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

export default LaborSection;