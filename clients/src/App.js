import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Link } from "react-router-dom";
import CanadaSignup from './components/CanadaSignup';
import SriLankaSignup from './components/SriLankaSignup';
import NewZealandSignup from './components/NewZealandSignup';

function App() {
  return (
    <BrowserRouter>
        <h1>Welcome to the Home Page</h1>
        <Link to="/signup/ca">Sign Up (Canada)</Link>
        <Link to="/signup/lk">Sign Up (Sri Lanka)</Link>
        <Link to="/signup/nz">Sign Up (New Zealand)</Link>
        <Routes>
            <Route path='/signup/ca' element={<CanadaSignup />} />
            <Route path='/signup/lk' element={<SriLankaSignup />} />
            <Route path='/signup/nz' element={<NewZealandSignup />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;