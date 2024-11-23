import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.jsx";
import Home from "./components/Home/Home.jsx";
import Journal from "./components/Journal/Journal.jsx";
import About from "./components/About/About.jsx";
import Contact from "./components/Contact/Contact.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Form from './components/Form/Form.jsx'
import EditBlogs from './components/EditBlogs/EditBlogs.jsx';
import JournalDetails from './components/JournalDetails/JournalDetails.jsx'
import Login from './components/Login/Login.jsx';
function App() {
  return (
    <Router>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/journal" element={<Journal />} />
          <Route path="/journal/:id" element={<JournalDetails />} /> {/* Detail page */}
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/form" element={<Form />} />
          <Route path="/editblogs" element={<EditBlogs />} />
          <Route path="/login" element={<Login />} />

        </Routes>
      </div>
      <Footer/>
    </Router>
  );
}

export default App;
