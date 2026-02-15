import './AnimationControls.css';

export default function AnimationControls({
  isPlaying,
  danceMode,
  speed,
  danceModes,
  onTogglePlay,
  onChangeDanceMode,
  onChangeSpeed,
}) {
  return (
    <div className="controls" role="region" aria-label="Animation controls">
      <button
        className={`play-btn ${isPlaying ? 'playing' : 'paused'}`}
        onClick={onTogglePlay}
        aria-label={isPlaying ? 'Pause animation' : 'Play animation'}
      >
        <span className="play-icon">{isPlaying ? '\u23F8' : '\u25B6'}</span>
        <span className="play-text">{isPlaying ? 'Pause' : 'Play'}</span>
      </button>

      <div className="mode-group">
        <span className="group-label">Dance Style</span>
        <div className="mode-buttons" role="radiogroup" aria-label="Dance mode selection">
          {danceModes.map((mode) => (
            <button
              key={mode.id}
              className={`mode-btn ${danceMode === mode.id ? 'active' : ''}`}
              onClick={() => onChangeDanceMode(mode.id)}
              role="radio"
              aria-checked={danceMode === mode.id}
            >
              {mode.label}
            </button>
          ))}
        </div>
      </div>

      <div className="speed-group">
        <span className="group-label">Speed: {speed.toFixed(1)}x</span>
        <input
          type="range"
          className="speed-slider"
          min="0.3"
          max="3"
          step="0.1"
          value={speed}
          onChange={(e) => onChangeSpeed(parseFloat(e.target.value))}
          aria-label={`Animation speed: ${speed.toFixed(1)}x`}
        />
      </div>
    </div>
  );
}
