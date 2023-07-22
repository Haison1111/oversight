import logo from './logo.svg';
import './App.css';
import Home from './screens/Home/Home';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Home/>
    </div>
    </BrowserRouter>
  );
}

export default App;
