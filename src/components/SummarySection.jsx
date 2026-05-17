import { formatCurrency } from '../utils/formatters';

function SummarySection({ totals }) {
  return (
    <aside className="summary card sticky">
      <h2>Estimate Summary</h2>

      <div className="summary-row">
        <span>Materials</span>

        <strong>
          {formatCurrency(
            totals.materialsSubtotal
          )}
        </strong>
      </div>

      <div className="summary-row">
        <span>Labor</span>

        <strong>
          {formatCurrency(
            totals.laborSubtotal
          )}
        </strong>
      </div>

      <div className="summary-row">
        <span>Equipment</span>

        <strong>
          {formatCurrency(
            totals.equipmentSubtotal
          )}
        </strong>
      </div>

      <div className="summary-row">
        <span>Direct Cost</span>

        <strong>
          {formatCurrency(
            totals.directCost
          )}
        </strong>
      </div>

      <div className="summary-row">
        <span>Overhead</span>

        <strong>
          {formatCurrency(
            totals.overheadCost
          )}
        </strong>
      </div>

      <div className="summary-row">
        <span>Profit</span>

        <strong>
          {formatCurrency(
            totals.profit
          )}
        </strong>
      </div>

      <div className="summary-row">
        <span>Discount</span>

        <strong>
          -
          {formatCurrency(
            totals.discount
          )}
        </strong>
      </div>

      <div className="summary-row">
        <span>Tax</span>

        <strong>
          {formatCurrency(totals.tax)}
        </strong>
      </div>

      <div className="summary-row total">
        <span>Final Selling Price</span>

        <strong>
          {formatCurrency(
            totals.finalSellingPrice
          )}
        </strong>
      </div>

      <div className="summary-row">
        <span>Profit Margin</span>

        <strong>
          {totals.profitMargin.toFixed(
            2
          )}
          %
        </strong>
      </div>

      <div className="summary-row">
        <span>Cost / Foot</span>

        <strong>
          {formatCurrency(
            totals.costPerFoot
          )}
        </strong>
      </div>
    </aside>
  );
}

export default SummarySection;