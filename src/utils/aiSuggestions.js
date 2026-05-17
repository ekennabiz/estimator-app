// AI MATERIAL SUGGESTIONS
export const suggestMaterials = (project) => {
  const suggestions = [];

  if (!project.fenceType) return [];

  if (project.fenceType === "chain-link") {
    suggestions.push("Galvanized wire mesh");
    suggestions.push("Tension wire");
    suggestions.push("Line posts");
  }

  if (project.fenceType === "steel") {
    suggestions.push("Steel panels");
    suggestions.push("Primer coating");
    suggestions.push("Welding rods");
  }

  return suggestions;
};

// AI MARKUP SUGGESTION
export const suggestMarkup = (fenceLength) => {
  if (fenceLength < 50) return 30;
  if (fenceLength < 150) return 25;
  if (fenceLength < 300) return 20;
  return 15;
};

// AI COST FORECASTING
export const forecastCost = (totals) => {
  const base = totals.finalSellingPrice || 0;

  return {
    low: base * 0.95,
    expected: base,
    high: base * 1.15,
  };
};