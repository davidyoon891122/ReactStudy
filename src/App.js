import './App.css';
import ControlledComponent from './components/2-10.Form/ControlledComponent';
import ControlMultiInputs from './components/2-10.Form/ControlMultiInputs';
import UncontrolledComponent from './components/2-10.Form/UncontrolledComponent';

function App() {
  return (
    <div className="App">
      <UncontrolledComponent />
      <ControlledComponent />
      <ControlMultiInputs />
    </div>
  );
}

export default App;
