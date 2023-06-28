import './App.css';
import Home from './Home';
import ParticlesBg from 'particles-bg'
function App() {
  return (
    <>
    <Home/>
    <ParticlesBg type="polygon" bg={true} />
    </>
  );
}

export default App;
