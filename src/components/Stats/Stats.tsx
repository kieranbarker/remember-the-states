import "./Stats.css";

export interface StatsProps {
  numGuessed?: number;
  numRemaining?: number;
}

export default function Stats({
  numGuessed = 0,
  numRemaining = 0,
}: StatsProps) {
  return (
    <dl className="stats">
      <div>
        <dt className="stats-key">Guessed</dt>
        <dd className="stats-value">{numGuessed}</dd>
      </div>
      <div>
        <dt className="stats-key">Remaining</dt>
        <dd className="stats-value">{numRemaining}</dd>
      </div>
    </dl>
  );
}
