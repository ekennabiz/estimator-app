import {
  FaCalculator,
  FaFolderOpen,
  FaFileInvoiceDollar,
  FaCog,
} from "react-icons/fa";

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <h2>Peace Tanks</h2>
        <p>Estimator Pro</p>
      </div>

      <nav className="sidebar-nav">
        <button className="sidebar-link active">
          <FaCalculator />
          <span>Estimator</span>
        </button>

        <button className="sidebar-link">
          <FaFolderOpen />
          <span>Projects</span>
        </button>

        <button className="sidebar-link">
          <FaFileInvoiceDollar />
          <span>Proposals</span>
        </button>

        <button className="sidebar-link">
          <FaCog />
          <span>Settings</span>
        </button>
      </nav>
    </aside>
  );
}

export default Sidebar;