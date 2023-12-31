import logo from './logo.svg';
import './App.css';
import Navbar from './common_componants/Navbar'
import Footer from './common_componants/Footer'
import Home from './componants/Home'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;
