import delve from 'dlv';
import { getStrapiMedia } from '../../../utils'; 

const CaseStudies = ({ image, title, caption, text }) => {

  return (
    <section className="caseStudies">
        <div className="container">
            <div className="title">
                <span>{caption}</span>
                <h1>{title}</h1>
                <p>{text} loremermsf sdfs df sdf sdf sdf dsf ds fs df dsf dsfssfdssdfsdfsdfsd sdfsdfsdfs sdfsdf sdfsfsf f f fsfdsfs</p>
            </div>

            <div className="colOne">
                <div className="case">
                    <img
                        src={getStrapiMedia(delve(image, "data.attributes.url"))}
                        alt={delve(image, "data.attributes.alternativeText")}
                        className="relative mx-auto shadow-lg rounded-lg w-auto"
                        />
                        <h4>case study 1</h4>
                        <div className='case__filter'></div>
                    <div className='case--hover'>
                        <h5>title</h5>
                        <span>caption</span>
                        <span className='case--hover__time'>6 min</span>
                    </div>
                    </div>
                <div className="case">
                    <img
                        src={getStrapiMedia(delve(image, "data.attributes.url"))}
                        alt={delve(image, "data.attributes.alternativeText")}
                        className="relative mx-auto shadow-lg rounded-lg w-auto"
                    />
                    <h4>case study 1</h4>
                    <div className='case__filter'></div>
                    <div className='case--hover'>
                        <h5>title</h5>
                        <span>caption</span>
                        <span className='case--hover__time'>6 min</span>
                    </div>
                </div>
            </div>

            <div className="colTwo">
                <div className="case">
                    <img
                        src={getStrapiMedia(delve(image, "data.attributes.url"))}
                        alt={delve(image, "data.attributes.alternativeText")}
                        className="relative mx-auto shadow-lg rounded-lg w-auto"
                        />
                        <h4>case study 1</h4>
                        <div className='case__filter'></div>
                    <div className='case--hover'>
                        <h5>title</h5>
                        <span>caption</span>
                        <span className='case--hover__time'>6 min</span>
                    </div>
                    </div>
                <div className="case">
                    <img
                        src={getStrapiMedia(delve(image, "data.attributes.url"))}
                        alt={delve(image, "data.attributes.alternativeText")}
                        className="relative mx-auto shadow-lg rounded-lg w-auto"
                    />
                    <h4>case study 1</h4>
                    <div className='case__filter'></div>
                    <div className='case--hover'>
                        <h5>title</h5>
                        <span>caption</span>
                        <span className='case--hover__time'>6 min</span>
                    </div>
                </div>
            </div>

            <div className="colThree">
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet</p>
            </div>
        </div>
    </section>
  );
};

CaseStudies.defaultProps = {};

export default CaseStudies;
