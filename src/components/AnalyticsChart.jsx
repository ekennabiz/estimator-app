import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function AnalyticsChart({
  totals,
}) {
  const data = [
    {
      name: "Materials",
      value:
        totals.materialsSubtotal,
    },

    {
      name: "Labor",
      value:
        totals.laborSubtotal,
    },

    {
      name: "Profit",
      value:
        totals.profit,
    },
  ];

  const COLORS = [
    "#2563eb",
    "#16a34a",
    "#f59e0b",
  ];

  return (
    <section className="card">
      <h2>Cost Analytics</h2>

      <div
        style={{
          width: "100%",
          height: 320,
        }}
      >
        <ResponsiveContainer>
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              outerRadius={110}
              label
            >
              {data.map(
                (
                  entry,
                  index
                ) => (
                  <Cell
                    key={index}
                    fill={
                      COLORS[index]
                    }
                  />
                )
              )}
            </Pie>

            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
}

export default AnalyticsChart;