import "./contact.css";
import Phone from "../img/Phone.png";
import Email from "../img/Email.png"
import { useRef } from "react";
import emailjs from '@emailjs/browser';


const Contact = () => {
    const formRef = useRef();
    // const [done, setDone] = useState(false)
    const handleSubmit = (e)=> {
        e.preventDefault();
        emailjs.sendForm('service_dug05p8', 'template_wjipmeg', formRef.current, 'QlfJx8sHRD0VT1I9a')
        .then((result) => {
            console.log(result.text);
            // setDone(true);
        }, (error) => {
            console.log(error.text);
        });
    }
    return (
        <div className="c">
            <div className="c-bg"></div>
            <div className="c-wrapper">
                <div className="c-left">
                    <h1 className="c-title">Contact Me</h1>
                    <div className="c-info">
                        <div className="c-info-item">
                            <img src={Phone} alt="" className="c-icon" />
                            +1-513-807-4414
                        </div>
                        <div className="c-info">
                            <img src={Email} alt="" className="c-icon"/>
                            lindsayklug20@yahoo.com
                        </div>
                    </div>
                </div>
                <div className="c-right">
                    <p className="c-desc">
                        <b>Please conatct me with any questions regarding my portfolio, my life, my interests, or freelancing opportunities!</b> 
                    </p>
                    <form ref={formRef} onSubmit={handleSubmit}>
                        <input type="text" placeholder="Name" name="user_name" />
                        <input type="text" placeholder="Subject" name="user_subject" />
                        <input type="text" placeholder="Email" name="user_email" />
                        <textarea rows="5" placeholder="Message" name="message" />
                        <button>Submit</button>
                        {/* {done && "Thank you!"} */}
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact