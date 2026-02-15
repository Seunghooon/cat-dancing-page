import Layout from './components/Layout';
import DancingCat from './components/DancingCat';
import AnimationControls from './components/AnimationControls';
import useAnimation from './hooks/useAnimation';
import './styles/animations.css';

function App() {
  const {
    isPlaying,
    danceMode,
    speed,
    danceModes,
    togglePlay,
    changeDanceMode,
    changeSpeed,
  } = useAnimation();

  return (
    <Layout>
      <DancingCat
        isPlaying={isPlaying}
        danceMode={danceMode}
        speed={speed}
      />
      <AnimationControls
        isPlaying={isPlaying}
        danceMode={danceMode}
        speed={speed}
        danceModes={danceModes}
        onTogglePlay={togglePlay}
        onChangeDanceMode={changeDanceMode}
        onChangeSpeed={changeSpeed}
      />
    </Layout>
  );
}

export default App;
