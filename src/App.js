import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home.jsx";
import Journal from "./components/Journal.jsx";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import Footer from './components/Footer.jsx';
// import Form from './components/Form.jsx';
function App() {
  return (
    <Router>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/journal" element={<Journal />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          {/* <Route path="/form" element={<Form />} /> */}
          
        </Routes>
      </div>
      <Footer/>
    </Router>
  );
}

export default App;
