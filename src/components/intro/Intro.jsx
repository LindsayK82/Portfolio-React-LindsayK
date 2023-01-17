import "./intro.css";
import Me from "../intro/img/Me2.jpg";

const Intro = () => {
    return (
        <div className="i">
            <div className="i-left">
                <div className="i-left-wrapper">
                    <h2 className="i-intro">Welcome!</h2>
                    <h1 className="i-name">You have landed on Lindsay Klug's portfolio site!</h1>
                    <div className="i-title">
                        <div className="i-title-wrapper">
                            <div className="i-title-item">Web Developer</div>
                            <div className="i-title-item">UI/UX Designer</div>
                        </div>
                    </div>
                    <div className="i-desc">
                        I am a recent graduate of the Ohio State University FullStack Web Development course. As a motivated and enthusiatic learner and worker, I will bring energy and creativty to any project!
                    </div>
                </div>
            </div>
            <div className="i-right">
                <div className="i-bg"><img src={Me} alt="Lindsay" className="i-img" /></div>

            </div>

        </div>
    )
}

export default Intro;