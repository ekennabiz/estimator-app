import { suggestMaterials, suggestMarkup, forecastCost } from "../utils/aiEngine";

export default function AiPanel({ project, totals }) {
  const materials = suggestMaterials(project);
  const markup = suggestMarkup(project?.fenceLength);
  const forecast = forecastCost(totals);

  return (
    <div className="card">
      <h3>AI Assistant</h3>

      <div>
        <strong>Suggested Materials:</strong>
        <ul>
          {materials.map((m, i) => (
            <li key={i}>{m}</li>
          ))}
        </ul>
      </div>

      <div style={{ marginTop: "10px" }}>
        <strong>Recommended Markup:</strong> {markup}%
      </div>

      <div style={{ marginTop: "10px" }}>
        <strong>Cost Forecast:</strong>
        <div>Low: ${forecast.low.toFixed(2)}</div>
        <div>Expected: ${forecast.expected.toFixed(2)}</div>
        <div>High: ${forecast.high.toFixed(2)}</div>
      </div>
    </div>
  );
}