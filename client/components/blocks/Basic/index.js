import delve from 'dlv';
import { getStrapiMedia } from '../../../utils';
import Shape from '../../shared/shape'

const Basic= ({ title, text, image, hide}) => {

   return (
    <section className={hide ? "hide" : "basic"}>
        <div className="container sb center">
            <h2>{title}</h2>
            <p>{text}</p>
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
