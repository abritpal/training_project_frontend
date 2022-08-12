import logo from './logo.svg';
import './App.css';
<<<<<<< HEAD
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import ListCustomerReq from './pages/ListCustomerReq';
import AddOnCards from './pages/AddOnCards';
import IncreaseCreditLimit from './pages/IncreaseCreditLimit';
import LostStolenCards from './pages/LostStolenCards';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login></Login>}></Route>
          <Route path="/listcustomerreq" element={<ListCustomerReq/>}></Route>
          <Route path="/addoncards" element={<AddOnCards/>}></Route>
          <Route path="/increasecreditlimit" element={<IncreaseCreditLimit/>}></Route>
          <Route path="/loststolencards" element={<LostStolenCards/>}></Route>

        </Routes>
=======
import LoginScreen from './components/LoginScreen';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path = "/" element = {<LoginScreen/>}></Route>
      </Routes>
>>>>>>> 65caeb52e2978a2329cfdfe0baeb403f141d3237
      </BrowserRouter>
    </div>
  );
}

export default App;
