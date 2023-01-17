import Intro from "./components/intro/Intro";
import About from "./components/about/about";
import PortfolioList from './components/portfolioList/PortfolioList';
import Contact from './components/contact/Contact';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/navbar/NavBar";

const App = () => {
  return <div>
    <Intro />
    <Router>
    <NavBar />

  <Routes>
    
    <Route path="/" element={<About/>}/>
    <Route path="/portfolio" element={<PortfolioList/>}/>
    <Route path="/contact" element={<Contact />}/>
  </Routes>
  </Router>
  {/* Add footer here */}
  </div>;
};

export default App;