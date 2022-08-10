import logo from './logo.svg';
import './App.css';
import LoginScreen from './components/LoginScreen';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path = "/" element = {<LoginScreen/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
