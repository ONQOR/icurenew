import delve from 'dlv';
import { getStrapiMedia } from '../../../utils';

const Quote= ({ image, title, caption, text}) => {

   return (
    <section className="quote">
        <div className="container sb center">
            <p>{text}</p>
            <img
              src={getStrapiMedia(delve(image, "data.attributes.url"))}
            />
            <h4>{title}</h4>
            <span>{caption}</span> 
        </div> 
    </section>
   )
};

Quote.defaultProps = {};

export default Quote;
