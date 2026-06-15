export default function ProgressStepper({ step = 1 }) {
  const steps = ['Preparing', 'Ready', 'Collected']
  return (
    <div className="progress-stepper">
      {steps.map((s, i) => (
        <div key={s} className={`step ${i <= step ? 'active' : ''}`}>
          <div className="dot" />
          <div className="label">{s}</div>
        </div>
      ))}
    </div>
  )
}
