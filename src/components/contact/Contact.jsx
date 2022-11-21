import "./contact.css";
import Phone from "../../img/phone.png";
import Email from "../../img/email.png";
import Address from "../../img/address.png";
import { useContext, useRef, useState } from "react";
import { ThemeContext } from "../../context";

const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false)
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;



  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Let's Connect</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={Phone} alt="" className="c-icon" />
              081 756 0610
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Email} alt="" />
              phiripalesa31@gmail.com
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Address} alt="" />
              Main Reef Road, Uitvalfontein 244-Iq, Krugersdorp
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>Lets chat</b> Get in touch with me.
          </p>
  
        </div>
      </div>
    </div>
  );
};

export default Contact;