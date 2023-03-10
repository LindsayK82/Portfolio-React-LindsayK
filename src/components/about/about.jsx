import "./about.css"

const About = () => {
    return (
        <div className="a">
            <div className="a-left">
                {/* <div className="a-card bg"></div> */}
                <div className="a-card">
                    <h1>Some Skills I Have Learned:</h1>
                    <ul className="a-card-text">
                        <li>HTML; CSS</li>
                        <li>JavaScript</li>
                        <li>Web and Third Party APIs</li>
                        <li>NodeJS</li>
                        <li>OOP</li>
                        <li>Express</li>
                        <li>SQL</li>
                        <li>ORM</li>
                        <li>MVC</li>
                        <li>CS</li>
                        <li>NoSQL</li>
                        <li>State</li>
                        <li>MERN</li>
                    </ul>
                </div>
                {/* <img src="" alt="" className="a.img" /> */}
            </div>
            <div className="a-right">
                <h1 className="a-title">About Me</h1>
                <p className="a-sub">My name is Lindsay Klug. I have worked many different jobs in many different fields, and I am excited to bring all of my past knowledge together with the new knowledge I have recently acquired to create dynamic and interactive web pages that will inspire users to reach greater heights.</p>
                <p className="a-desc">
                    Some of my interests outside of coding include reading, crochet, woodworking, and DIY home improvements. I enjoy getting lost in fantasy worlds created by many wonderful authors, and crocheting brings my mind into focus and relieves stress.
                </p>
            </div>

        </div>
    )
}

export default About;