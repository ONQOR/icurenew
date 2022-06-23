import delve from 'dlv';
import { getStrapiMedia } from '../../../utils';
import emailjs from '@emailjs/browser';
import React, { useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link';

const Contact = ({ image, title, text, hide, cards }) => {
  const form = useRef();
  const [success, setSuccess] = useState(1);
  const [errmsg, setErrmsg] = useState("");

  const handleClick = (i) => {
    setSuccess(i)
  }

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_0fofleh', 'template_oaxvorw', form.current, 'M6vPRuNldmA6uFaF3')
      .then((result) => {
          setSuccess(2);
      }, (error) => {
          setErrmsg(`${error.text} happened`);
      });
      e.target.reset();
  };

  return (
    <section id="contact" className={hide ? "hide" : "contact"}>
        <div className="container sb">
            <div className="contact__left">
                <h2 className={success === 1 ? "active" : "none"}>{title}</h2>
                <p className={success === 1 ? "active" : "none"}>{text}</p>
                {/* form */}
                <form 
                  ref={form} 
                  onSubmit={sendEmail}
                  className={success === 1 ? "active" : ""}
                  >
                    <label>Name</label>
                    <input required="required" type="text" name="name" placeholder="John Doe"></input>

                    <label>Email</label>
                    <input required="required" type="email" name="email" placeholder="john.doe@email.com"></input>

                    {/* enquire dropdown */}
                    <label>Enquiry Type</label>
                    <select name="enquiry" required="required" placeholder='select here'>
                    <option value="" disabled selected>Select your option</option>
                      {cards &&
                        cards.map((item, index) => (
                          <option class={delve(item, "enquire") ? "" : "hide"} value={delve(item, "enquire")}>
                            {delve(item, "enquire")}
                          </option>
                      ))}
                    </select>

                    {/* background dropdown */}
                    <label>Background</label>
                    <select name="background" required="required" placeholder='select here'>
                    <option value="" disabled selected>Select your option</option>
                    {cards &&
                        cards.map((item, index) => (
                          <option class={delve(item, "background") ? "" : "hide"} value={delve(item, "background")}>
                           {delve(item, "background")}
                          </option>
                      ))}
                    </select>

                    <label>Message</label>
                    <textarea name="message" placeholder="Message"></textarea>

                    <label className='radio'>
                      <input required="required" type="checkbox"></input>
                      <span>
                        I accept ICURe's&nbsp; 
                        <Link href="/privacy" passHref={true}>
                          <a>terms and conditions</a>
                        </Link>
                      </span>
                    </label>
                    
                    <h4>{errmsg}</h4>
                    <input className="submit" type="submit"></input>
                </form>
                {/* success */}
                <div className={success === 2 ? "active" : ""}>
                  <h3>Success!</h3>
                  <p>Your message has been received,
                  We’ll respond within 7 working days!</p>
                  <FontAwesomeIcon
                    icon={faCheck}
                  />
                  <p>Any other questions?</p>
                  <button onClick={() => handleClick(1)}>Send Another Message</button>
                </div>
            </div>
            {/* right */}
            <div className="contact__right">
            <img
              src={getStrapiMedia(delve(image, "data.attributes.url"))}
              alt={delve(image, "data.attributes.alternativeText")}
            />
            </div>
        </div>
    </section>
  );
};

Contact.defaultProps = {};

export default Contact;
