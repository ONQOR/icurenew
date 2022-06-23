import delve from 'dlv';
import { getStrapiMedia } from '../../../utils';
import ReactMarkdown from 'react-markdown'

const Quote= ({ image, title, caption, text, hide }) => {

   return (
    <section className={hide ? "hide" : "quote"}>
        <div className="container sb center">
            <p>"<ReactMarkdown>{text}</ReactMarkdown>"</p>
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
