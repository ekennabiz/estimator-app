function ProjectInfo({
  project,
  setProject,
}) {
  const handleChange = (e) => {
    const { name, value } = e.target;

    setProject({
      ...project,
      [name]: value,
    });
  };

  return (
    <section className="card">
      <h2>Project Information</h2>

      <div className="grid-2">
        <input
          type="text"
          name="projectName"
          placeholder="Project Name"
          value={project.projectName}
          onChange={handleChange}
        />

        <input
          type="text"
          name="clientName"
          placeholder="Client Name"
          value={project.clientName}
          onChange={handleChange}
        />

        <input
          type="number"
          name="fenceLength"
          placeholder="Fence Length (ft)"
          value={project.fenceLength}
          onChange={handleChange}
        />

        <input
          type="number"
          name="fenceHeight"
          placeholder="Fence Height (ft)"
          value={project.fenceHeight}
          onChange={handleChange}
        />
      </div>
    </section>
  );
}

export default ProjectInfo;