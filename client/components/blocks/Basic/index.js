import delve from 'dlv';
import { getStrapiMedia } from '../../../utils';
import Shape from '../../shared/shape'
import ReactMarkdown from 'react-markdown'

const Basic= ({ title, text, image, hide}) => {

   return (
    <section className={hide ? "hide" : "basic"}>
        <div className="container sb center">
            <h2>{title}</h2>
            <p><ReactMarkdown>{text}</ReactMarkdown></p>
            <img
              src={getStrapiMedia(delve(image, "data.attributes.url"))}
              alt={delve(image, "data.attributes.alternativeText")}
            />
            <Shape />
        </div> 
    </section>
   )
};

Basic.defaultProps = {};

export default Basic;
