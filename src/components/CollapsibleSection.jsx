import { useState } from "react";

import {
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";

function CollapsibleSection({
  title,
  children,
  defaultOpen = true,
}) {
  const [open, setOpen] =
    useState(defaultOpen);

  return (
    <section className="card collapsible">
      <div
        className="collapse-header"
        onClick={() =>
          setOpen(!open)
        }
      >
        <h2>{title}</h2>

        <button className="icon-btn">
          {open ? (
            <FaChevronUp />
          ) : (
            <FaChevronDown />
          )}
        </button>
      </div>

      {open && (
        <div className="collapse-body">
          {children}
        </div>
      )}
    </section>
  );
}

export default CollapsibleSection;