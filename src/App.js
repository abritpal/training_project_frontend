import logo from './logo.svg';
import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import ListCustomerReq from './pages/ListCustomerReq';
import AddOnCards from './pages/AddOnCards';
import IncreaseCreditLimit from './pages/IncreaseCreditLimit';
import LostStolenCards from './pages/LostStolenCards';
import ChequeBookRequest from './pages/ChequeBookRequest';
import BackOfficeMenu from './components/BackOfficeMenu';
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
          <Route path="/chequebookrequest" element={<ChequeBookRequest/>}></Route>
          <Route path="/backofficemenu" element={<BackOfficeMenu/>}></Route>
        </Routes>
        </BrowserRouter>
</div>
)}
export default App;
