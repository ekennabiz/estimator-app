export default function AiProposal({ project, totals }) {
  const generateProposal = () => {
    return `
PROJECT PROPOSAL

Project: ${project.projectName}
Client: ${project.clientName}

SCOPE OF WORK:
Installation of fencing system.

TOTAL COST:
$${totals.finalSellingPrice || 0}

TERMS:
- Valid for 14 days
- 50% deposit required
    `;
  };

  return (
    <div className="card">
      <h3>AI Proposal Generator</h3>

      <pre style={{ whiteSpace: "pre-wrap" }}>
        {generateProposal()}
      </pre>
    </div>
  );
}