import "./ProgressBar.css"

export default function ProgressBar({ percent = 30 }) {
  return (
    <div className="progress col-md-5 col-12" style={{ height: "10px" }}>
      <div
        class="progress-bar bg-warning"
        role="progressbar"
        style={{ width: `${percent}%` }}
        aria-valuenow="70"
        aria-valuemin="0"
        aria-valuemax="100"
      />
    </div>
  )
}
