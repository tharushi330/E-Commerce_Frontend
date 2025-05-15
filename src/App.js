
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
    <Routes>
      {/* Main Routes */}
      <Route path="/" element={< Home/>} />
      {/* <Route path="/giftpack"element={<Giftpack/>}/>
      <Route path="/flowers"element={<Flowers/>}/>
      <Route path="/cakes" element={<Cakes/>}/>
      <Route path="/toys" element={<Toys/>}/> */}
      <Route path="/contact" element={<Contact/>}/>
    </Routes>
  </Router>

  

  );
}

export default App;
