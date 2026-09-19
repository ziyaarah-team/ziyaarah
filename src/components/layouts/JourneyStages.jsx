const stages = [
  {
    number: 1,
    title: "Travel & Arrival",
    completed: 3,
    total: 4,
    progress: 75,
    status: "In Progress",
  },
  {
    number: 2,
    title: "Miqat",
    completed: 2,
    total: 4,
    progress: 50,
    status: "In Progress",
  },
  {
    number: 3,
    title: "Tawaf",
    completed: 1,
    total: 4,
    progress: 25,
    status: "Started",
  },
  {
    number: 4,
    title: "Sa'i",
    completed: 0,
    total: 4,
    progress: 0,
    status: "Pending",
  },
  {
    number: 5,
    title: "Mina & Arafat",
    completed: 0,
    total: 4,
    progress: 0,
    status: "Pending",
  },
];

export default function JourneyStages() {
  return (
    <section className="journey-stages card">
      <div className="section-heading">
        <div>
          <p className="section-label">PROGRESS</p>
          <h2>Journey Stages</h2>
        </div>

        <span className="stages-count">
          {stages.length} Stages
        </span>
      </div>
      <div className="stages-list">
        {stages.map((stage) => (
          <div className="stage-card" key={stage.number}>
            <div className="stage-number">
              {stage.number}
            </div>

            <div className="stage-content">
              <div className="stage-top">
                <div>
                  <h3>{stage.title}</h3>

                  <p>
                    {stage.completed} of {stage.total} tasks completed
                  </p>
                </div>

                <span
                  className={`stage-status ${
                    stage.progress === 0
                      ? "pending"
                      : "active"
                  }`}
                >
                  {stage.status}
                </span>
              </div>

              <div className="stage-progress">
                <div
                  className="stage-progress-fill"
                  style={{ width: `${stage.progress}%` }}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}