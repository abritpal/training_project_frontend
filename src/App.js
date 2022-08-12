import logo from './logo.svg';
import './App.css';
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
      </BrowserRouter>
    </div>
  );
}

export default App;
