// import Portfolio from "../portfolio/portfolio"
import "./portfolioList.css";
import Portfolio from '../portfolio/Portfolio';
import { projects } from '../../data';

const PortfolioList = () => {
    return (
        <div className="pl">
           <div className="pl-texts">
            <h1 className="pl-title">Lindsay's Portfolio</h1>
           </div>
           <div className="pl-list">
            {projects.map((item) => (            
            <Portfolio key={item.id} img={item.img} link={item.link} />
            ))}
           </div>
        </div>
    )
}

export default PortfolioList