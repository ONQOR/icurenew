import delve from 'dlv';
import { getStrapiMedia } from '../../../utils';

const Contact = ({ image, title, text }) => {

  return (
    <section className="contact">
        <div className="container sb">
            <div className="contact__left">
                <h2>{title}</h2>
                <p>{text}</p>
                <div>
                    <label>Name</label>
                    <input></input>

                    <label>Email</label>
                    <input></input>

                    <label>Enquiry Type</label>
                    <input></input>

                    <label>Background</label>
                    <input></input>

                    <label>Message</label>
                    <textarea></textarea>

                    <input className="submit" type="submit"></input>
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
