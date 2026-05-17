function DeliverySection({
  delivery,
  setDelivery,
}) {
  const handleChange = (e) => {
    const { name, value } = e.target;

    setDelivery({
      ...delivery,
      [name]: value,
    });
  };

  return (
    <section className="card">
      <h2>Delivery & Mobilization</h2>

      <div className="grid-2">
        <input
          type="number"
          name="fuel"
          placeholder="Fuel Cost"
          value={delivery.fuel}
          onChange={handleChange}
        />

        <input
          type="number"
          name="truckRental"
          placeholder="Truck Rental"
          value={delivery.truckRental}
          onChange={handleChange}
        />

        <input
          type="number"
          name="deliveryCharge"
          placeholder="Delivery Charge"
          value={delivery.deliveryCharge}
          onChange={handleChange}
        />

        <input
          type="number"
          name="mobilization"
          placeholder="Mobilization"
          value={delivery.mobilization}
          onChange={handleChange}
        />
      </div>
    </section>
  );
}

export default DeliverySection;