import Intro from "./components/intro/Intro";
import About from "./components/about/about";
import PortfolioList from './components/portfolioList/PortfolioList';
import Contact from './components/contact/Contact';

const App = () => {
  return <div>
    <Intro />
    <div><About />
      <div><PortfolioList />
        <div><Contact />
        </div>
      </div>
    </div>
  </div>;
};

export default App;