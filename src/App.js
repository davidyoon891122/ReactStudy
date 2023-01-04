import './App.css';
import Composition from './components/2-4.Props/Composition';
import Extraction from './components/2-4.Props/Extraction/Extraction';
import ClassComponent from './components/2-5.State/ClassComponent';
import FunctionalComponent from './components/2-5.State/FunctionalComponent';
import ClassLCComponent from './components/2-6.LifeCycle/ClassLCComponent';

function App() {
  return (
    <div className="App">
      <ClassLCComponent />
      <FunctionalComponent />
      <ClassComponent />
      <Composition />
      <Extraction />
    </div>
  );
}

export default App;
