import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Slider from './components/Slider';
import Abouthome from './components/Abouthome';
import Coursehome from './components/Coursehome';

function App() {
  return (
    <div className="App">
      <Header/>
      <Slider/>
      <Abouthome/>
      <Coursehome/>
    </div>
  );
}

export default App;
