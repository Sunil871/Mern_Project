import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './common_componants/Navbar';
import Footer from './common_componants/Footer';
import Home from './componants/Home';
import AdminPage from './componants/AdminPage';
import Login from './common_componants/Login';
import Signup from './common_componants/SignUp'


function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <hr />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
