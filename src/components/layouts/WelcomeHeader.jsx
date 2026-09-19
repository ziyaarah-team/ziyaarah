export default function WelcomeHeader() {
  return (
    <header className="welcome-header">
      <div>
        <p className="welcome-label">WELCOME BACK</p>

        <h1>Assalamu Alaikum, Welcome Back</h1>

        <p className="welcome-subtitle">
          Continue your spiritual journey preparation.
        </p>
      </div>

      <div className="welcome-date">
        <span>🗓️</span>
        <div>
          <small>Today's Journey</small>
          <strong>Keep going!</strong>
        </div>
      </div>
    </header>
  );
}