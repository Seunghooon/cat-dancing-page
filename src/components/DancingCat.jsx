import catSvg from '../assets/images/cat.svg';
import './DancingCat.css';

export default function DancingCat({ isPlaying, danceMode, speed }) {
  const animationStyle = {
    animationPlayState: isPlaying ? 'running' : 'paused',
    animationDuration: `${1.2 / speed}s`,
  };

  return (
    <div className="dancing-cat-container">
      <div className="music-notes" aria-hidden="true">
        {isPlaying && (
          <>
            <span className="note note-1">&#9835;</span>
            <span className="note note-2">&#9834;</span>
            <span className="note note-3">&#9835;</span>
            <span className="note note-4">&#9834;</span>
          </>
        )}
      </div>

      <div className="sparkles" aria-hidden="true">
        {isPlaying && (
          <>
            <span className="sparkle sparkle-1">&#10022;</span>
            <span className="sparkle sparkle-2">&#10022;</span>
            <span className="sparkle sparkle-3">&#10022;</span>
          </>
        )}
      </div>

      <div
        className={`cat-wrapper dance-${danceMode}`}
        style={animationStyle}
        role="img"
        aria-label={isPlaying ? `Cat dancing in ${danceMode} mode` : 'Cat standing still'}
      >
        <img src={catSvg} alt="Dancing cat" className="cat-image" />
        <div className="cat-shadow" style={animationStyle} />
      </div>

      <div className="dance-floor" />
    </div>
  );
}
