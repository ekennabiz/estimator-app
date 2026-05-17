export const safeNumber = (value) => {
  const num = parseFloat(value);

  return isNaN(num) ? 0 : num;
};

export const calculateMaterialRow = (
  item
) => {
  const qty = safeNumber(item.quantity);

  const unitCost = safeNumber(
    item.unitCost
  );

  const waste = safeNumber(item.waste);

  return (
    qty *
    unitCost *
    (1 + waste / 100)
  );
};

export const calculateLaborRow = (
  item
) => {
  return (
    safeNumber(item.workers) *
    safeNumber(item.hours) *
    safeNumber(item.rate)
  );
};

export const calculateEquipmentRow = (
  item
) => {
  return (
    safeNumber(item.hours) *
    safeNumber(item.rate)
  );
};

export const calculateTotals = ({
  materials,
  labor,
  equipment,
  subcontractors,
  delivery,
  charges,
  settings,
  project,
}) => {
  const materialsSubtotal =
    materials.reduce((sum, item) => {
      return (
        sum +
        calculateMaterialRow(item)
      );
    }, 0);

  const laborSubtotal = labor.reduce(
    (sum, item) => {
      return (
        sum + calculateLaborRow(item)
      );
    },
    0
  );

  const equipmentSubtotal =
    equipment.reduce((sum, item) => {
      return (
        sum +
        calculateEquipmentRow(item)
      );
    }, 0);

  const subcontractorSubtotal =
    subcontractors.reduce(
      (sum, item) =>
        sum +
        safeNumber(item.cost),
      0
    );

  const deliverySubtotal =
    safeNumber(delivery.fuel) +
    safeNumber(delivery.truckRental) +
    safeNumber(
      delivery.deliveryCharge
    ) +
    safeNumber(delivery.mobilization);

  const additionalChargesSubtotal =
    safeNumber(charges.permitFees) +
    safeNumber(charges.consumables) +
    safeNumber(
      charges.miscellaneous
    );

  const directCost =
    materialsSubtotal +
    laborSubtotal +
    equipmentSubtotal +
    subcontractorSubtotal +
    deliverySubtotal +
    additionalChargesSubtotal;

  const overheadCost =
    (directCost *
      safeNumber(
        settings.overheadPct
      )) /
    100;

  const profit =
    ((directCost + overheadCost) *
      safeNumber(settings.profitPct)) /
    100;

  const subtotalBeforeDiscount =
    directCost +
    overheadCost +
    profit;

  let discount = 0;

  if (
    settings.discountType ===
    'percent'
  ) {
    discount =
      (subtotalBeforeDiscount *
        safeNumber(
          settings.discountValue
        )) /
      100;
  } else {
    discount = safeNumber(
      settings.discountValue
    );
  }

  const taxableAmount = Math.max(
    0,
    subtotalBeforeDiscount - discount
  );

  const tax =
    (taxableAmount *
      safeNumber(settings.taxRate)) /
    100;

  const finalSellingPrice =
    taxableAmount + tax;

  const profitMargin =
    finalSellingPrice > 0
      ? (profit / finalSellingPrice) *
        100
      : 0;

  const fenceLength = safeNumber(
    project.fenceLength
  );

  const costPerFoot =
    fenceLength > 0
      ? finalSellingPrice /
        fenceLength
      : 0;

  return {
    materialsSubtotal,
    laborSubtotal,
    equipmentSubtotal,
    subcontractorSubtotal,
    deliverySubtotal,
    additionalChargesSubtotal,
    directCost,
    overheadCost,
    profit,
    subtotalBeforeDiscount,
    discount,
    taxableAmount,
    tax,
    finalSellingPrice,
    profitMargin,
    costPerFoot,
  };
};