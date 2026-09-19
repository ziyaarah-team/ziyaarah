export default function StatsCard({
  title,
  value,
  description,
  icon,
  iconClass = "",
}) {
  return (
    <article className="stats-card">
      <div>
        <p className="stats-title">{title}</p>

        <h2 className="stats-value">{value}</h2>

        {description && (
          <p className="stats-description">
            {description}
          </p>
        )}
      </div>

      <div className={`stats-icon ${iconClass}`}>
        {icon}
      </div>
    </article>
  );
}