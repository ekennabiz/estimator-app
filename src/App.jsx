import { useEffect, useMemo, useState } from "react";

import Sidebar from "./components/Sidebar";

import Topbar from "./components/Topbar";
import StatsBar from "./components/StatsBar";

import ProjectInfo from "./components/ProjectInfo";
import SummarySection from "./components/SummarySection";

import MaterialsSection from "./components/MaterialsSection";
import LaborSection from "./components/LaborSection";
import EquipmentSection from "./components/EquipmentSection";
import DeliverySection from "./components/DeliverySection";
import ChargesSection from "./components/ChargesSection";
import SettingsSection from "./components/SettingsSection";


import CollapsibleSection from "./components/CollapsibleSection";

import { calculateTotals } from "./utils/calculations";

import "./styles.css";

function App() {
  // ================= STATE =================
  const [project, setProject] = useState({});
  const [materials, setMaterials] = useState([]);
  const [labor, setLabor] = useState([]);
  const [equipment, setEquipment] = useState([]);
  const [subcontractors] = useState([]);

  const [delivery, setDelivery] = useState({});
  const [charges, setCharges] = useState({});
  const [settings, setSettings] = useState({});

  const [estimates, setEstimates] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  // ================= SAVE =================
  const saveEstimate = () => {
    const data = {
      project,
      materials,
      labor,
      equipment,
      delivery,
      charges,
      settings,
    };

    const updated = [...estimates, data];
    setEstimates(updated);
    localStorage.setItem("fence-estimates", JSON.stringify(updated));
  };

  // ================= LOAD =================
  const loadEstimate = (estimate) => {
    setProject(estimate.project || {});
    setMaterials(estimate.materials || []);
    setLabor(estimate.labor || []);
    setEquipment(estimate.equipment || []);
    setDelivery(estimate.delivery || {});
    setCharges(estimate.charges || {});
    setSettings(estimate.settings || {});
  };

  // ================= INIT =================
  useEffect(() => {
    const saved = localStorage.getItem("fence-estimates");
    if (saved) setEstimates(JSON.parse(saved));
  }, []);

  // ================= TOTALS =================
  const totals = useMemo(() => {
    return calculateTotals({
      materials,
      labor,
      equipment,
      subcontractors,
      delivery,
      charges,
      settings,
      project,
    });
  }, [materials, labor, equipment, subcontractors, delivery, charges, settings, project]);

  // ================= UI =================
  return (
    <div className="app-layout">

      {/* LEFT */}
      <Sidebar />

      {/* CENTER */}
      <div className="app-center">
        <Topbar />
        <StatsBar totals={totals} />

        <div className="app-content">

          <CollapsibleSection title="Project">
            <ProjectInfo project={project} setProject={setProject} />
          </CollapsibleSection>

          <CollapsibleSection title="Materials">
            <MaterialsSection materials={materials} setMaterials={setMaterials} />
          </CollapsibleSection>

          <CollapsibleSection title="Labor">
            <LaborSection labor={labor} setLabor={setLabor} />
          </CollapsibleSection>

          <CollapsibleSection title="Equipment">
            <EquipmentSection equipment={equipment} setEquipment={setEquipment} />
          </CollapsibleSection>

          <CollapsibleSection title="Delivery">
            <DeliverySection delivery={delivery} setDelivery={setDelivery} />
          </CollapsibleSection>

          <CollapsibleSection title="Charges">
            <ChargesSection charges={charges} setCharges={setCharges} />
          </CollapsibleSection>

          <CollapsibleSection title="Settings">
            <SettingsSection settings={settings} setSettings={setSettings} />
          </CollapsibleSection>

          <button onClick={saveEstimate}>Save Estimate</button>
        </div>
      </div>

      {/* RIGHT */}
      <div className="app-right">
        <SummarySection totals={totals} />
      </div>

    </div>
  );
}

export default App;