import delve from 'dlv';
import { getStrapiMedia } from '../../../utils';
import emailjs from '@emailjs/browser';
import React, { useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link';

const Contact = ({ image, title, text }) => {
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
          console.log(result.text);
          setSuccess(2);
      }, (error) => {
          console.log(error.text);
          setErrmsg(`${error.text} happened`);
      });
      e.target.reset();
  };

  return (
    <section className="contact">
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
                    <input required="required" type="text" name="name"></input>

                    <label>Email</label>
                    <input required="required" type="email" name="email"></input>

                    <label>Enquiry Type</label>
                    <input required="required" type="text" name="enquiry"></input>

                    <label>Background</label>
                    <input required="required" type="text" name="background"></input>

                    <label>Message</label>
                    <textarea name="message"></textarea>

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
