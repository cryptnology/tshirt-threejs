import Canvas from './canvas';
import { Header } from './components';
import { Customizer, Home } from './pages';

const App = () => {
  return (
    <main className="relative w-full h-screen overflow-hidden transition-all">
      <Header />
      <Home />
      <Canvas />
      <Customizer />
    </main>
  );
};

export default App;
