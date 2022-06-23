import delve from 'dlv';
import { getStrapiMedia } from '../../../utils';
import Shape from '../../shared/shape'
import ShapeTwo from '../../shared/shape-two'
import ReactMarkdown from 'react-markdown'

const TextImgShape = ({ caption, title, text, image, hide }) => {

  return (
    <section className={hide ? "hide" : "textImgShape"}>
      <div className="container sb">
        <div className="textImgShape__left"> 
          <span className='caption'>{caption}</span>
          <h2>{title}</h2>
          <p><ReactMarkdown>{text}</ReactMarkdown></p>
        </div>
        <div className="textImgShape__right">
        <ShapeTwo className="shapeTwo"/>
          <img
              src={getStrapiMedia(delve(image, "data.attributes.url"))}
              alt={delve(image, "data.attributes.alternativeText")}
              className=""
            />
        <Shape className="shape"/>
        </div>
      </div> 
    </section>
  );
};

TextImgShape.defaultProps = {};

export default TextImgShape;
 