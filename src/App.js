import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Apifetch from './compontents/Apifetch';
import Newnavbar from './compontents/Newnavbar';
import Home from './compontents/Home';

function App() {
  return (
    <div className="App">
      <Newnavbar />
      <Home />
      <Apifetch />
    </div>
  );
}

export default App;
