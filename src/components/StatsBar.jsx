import {
  FaDollarSign,
  FaChartLine,
  FaRulerCombined,
} from "react-icons/fa";

import { formatCurrency }
  from "../utils/formatters";

function StatsBar({ totals }) {
  return (
    <section className="stats-grid">

      <div className="stat-card">
        <div className="stat-icon">
          <FaDollarSign />
        </div>

        <div>
          <p>Total Price</p>

          <h3>
            {formatCurrency(
              totals.finalSellingPrice
            )}
          </h3>
        </div>
      </div>

      <div className="stat-card">
        <div className="stat-icon">
          <FaChartLine />
        </div>

        <div>
          <p>Profit Margin</p>

          <h3>
            {totals.profitMargin.toFixed(1)}%
          </h3>
        </div>
      </div>

      <div className="stat-card">
        <div className="stat-icon">
          <FaRulerCombined />
        </div>

        <div>
          <p>Cost Per Foot</p>

          <h3>
            {formatCurrency(
              totals.costPerFoot
            )}
          </h3>
        </div>
      </div>

    </section>
  );
}

export default StatsBar;