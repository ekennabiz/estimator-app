import { formatCurrency } from '../utils/formatters';

function ProposalPreview({
  project,
  totals,
}) {
  return (
    <section className="card">
      <h2>Proposal Preview</h2>

      <div className="proposal">
        <h3>
          Peace Tanks Fabrication &
          Fencing
        </h3>

        <p>
          Client:{' '}
          <strong>
            {project.clientName ||
              'N/A'}
          </strong>
        </p>

        <p>
          Project:{' '}
          <strong>
            {project.projectName ||
              'N/A'}
          </strong>
        </p>

        <p>
          Fence Type:{' '}
          <strong>
            {project.fenceType ||
              'N/A'}
          </strong>
        </p>

        <p>
          Fence Length:{' '}
          <strong>
            {project.fenceLength ||
              0}{' '}
            ft
          </strong>
        </p>

        <hr />

        <h3>Pricing Summary</h3>

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
          <span>Tax</span>

          <strong>
            {formatCurrency(
              totals.tax
            )}
          </strong>
        </div>

        <div className="summary-row total">
          <span>Final Price</span>

          <strong>
            {formatCurrency(
              totals.finalSellingPrice
            )}
          </strong>
        </div>

        <hr />

        <p>
          Proposal Valid For 14 Days
        </p>

        <br />

        <div className="signature-area">
          <div>
            ______________________
            <br />
            Contractor Signature
          </div>

          <div>
            ______________________
            <br />
            Client Signature
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProposalPreview;