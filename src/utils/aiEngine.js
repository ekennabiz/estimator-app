// src/utils/aiEngine.js

export const suggestMaterials = (project) => {
  if (!project?.fenceType) return [];

  switch (project.fenceType.toLowerCase()) {
    case "chain-link":
      return [
        "Galvanized mesh",
        "Line posts",
        "Tension wire",
        "Top rail",
      ];

    case "steel":
      return [
        "Steel panels",
        "Welding rods",
        "Primer coating",
        "Anchor bolts",
      ];

    case "wood":
      return [
        "Pressure-treated lumber",
        "Nails",
        "Concrete mix",
      ];

    default:
      return ["Standard fencing materials"];
  }
};

export const suggestMarkup = (fenceLength = 0) => {
  if (fenceLength < 50) return 30;
  if (fenceLength < 150) return 25;
  if (fenceLength < 300) return 20;
  return 15;
};

export const forecastCost = (totals) => {
  const base = totals?.finalSellingPrice || 0;

  return {
    low: base * 0.95,
    expected: base,
    high: base * 1.15,
  };
};