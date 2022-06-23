import delve from 'dlv';
import { getStrapiMedia } from '../../../utils';
import ReactMarkdown from 'react-markdown'

const TextImg = ({ caption, title, text, image, hide }) => {

  return (
    <section className={hide ? "hide" : "textImg"}>
      <div className="container sb">
        <div className="textImg__left"> 
          <span className='caption'>{caption}</span>
          <h2>{title}</h2>
          <p><ReactMarkdown>{text}</ReactMarkdown></p>
        </div>
        <div className="textImg__right">
          <img
              src={getStrapiMedia(delve(image, "data.attributes.url"))}
              alt={delve(image, "data.attributes.alternativeText")}
              className=""
            />
        </div>
      </div> 
    </section>
  );
};

TextImg.defaultProps = {};

export default TextImg;
