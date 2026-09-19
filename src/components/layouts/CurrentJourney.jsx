export default function CurrentJourney() {
  return (
    <section className="current-journey card">
      <div className="section-heading">
        <div>
          <p className="section-label">YOUR JOURNEY</p>
          <h2>Current Journey</h2>
        </div>

        <button className="view-button">
          View Details
        </button>
      </div>

      <div className="journey-main">
        <div className="journey-title">
          <div className="journey-icon">
            🕋
          </div>

          <div>
            <h3>Umrah 2026 - Spring</h3>
            <p>Umrah Pilgrimage</p>
          </div>
        </div>

        <div className="journey-status">
          <span>In Progress</span>
        </div>
      </div>

      <div className="journey-progress">
        <div className="progress-info">
          <span>Overall Progress</span>
          <strong>50%</strong>
        </div>

        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{ width: "50%" }}
          ></div>
        </div>
      </div>

      <div className="journey-details">
        <div>
          <span className="detail-icon">📅</span>

          <div>
            <small>Start Date</small>
            <strong>March 14, 2026</strong>
          </div>
        </div>

        <div>
          <span className="detail-icon">🏁</span>

          <div>
            <small>End Date</small>
            <strong>March 21, 2026</strong>
          </div>
        </div>
      </div>
    </section>
  );
}