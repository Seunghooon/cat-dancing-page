import { useState, useCallback } from 'react';

const DANCE_MODES = [
  { id: 'bounce', label: 'Bounce', icon: '^^' },
  { id: 'sway', label: 'Sway', icon: '~' },
  { id: 'spin', label: 'Spin', icon: '@' },
];

export default function useAnimation() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [danceMode, setDanceMode] = useState('bounce');
  const [speed, setSpeed] = useState(1);

  const togglePlay = useCallback(() => {
    setIsPlaying(prev => !prev);
  }, []);

  const changeDanceMode = useCallback((mode) => {
    setDanceMode(mode);
  }, []);

  const changeSpeed = useCallback((newSpeed) => {
    setSpeed(newSpeed);
  }, []);

  return {
    isPlaying,
    danceMode,
    speed,
    danceModes: DANCE_MODES,
    togglePlay,
    changeDanceMode,
    changeSpeed,
  };
}
