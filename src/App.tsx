import Canvas from './canvas';
import { Customizer, Home } from './pages';

const App = () => {
  return (
    <main className="relative w-full h-screen overflow-hidden transition-all">
      <Home />
      <Canvas />
      <Customizer />
    </main>
  );
};

export default App;
