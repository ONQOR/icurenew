import delve from 'dlv';
import { getStrapiMedia } from '../../../utils'; 

const CaseStudies = ({ image, title }) => {

  return (
    <section className="caseStudies">
        <div className="container">
            <div className="title">
                <span>Our Case Studies</span>
                <h1>Turn our success into your success…</h1>
            </div>

            <div className="colOne">
                <div className="case">
                    <img
                        src={getStrapiMedia(delve(image, "data.attributes.url"))}
                        alt={delve(image, "data.attributes.alternativeText")}
                        className="relative mx-auto shadow-lg rounded-lg w-auto"
                        />
                        <h3>case study 1</h3>
                    </div>
                <div className="case">
                    <img
                        src={getStrapiMedia(delve(image, "data.attributes.url"))}
                        alt={delve(image, "data.attributes.alternativeText")}
                        className="relative mx-auto shadow-lg rounded-lg w-auto"
                    />
                    <h3>case study 1</h3>
                </div>
            </div>

            <div className="colTwo">
                <div className="case">
                    <img
                        src={getStrapiMedia(delve(image, "data.attributes.url"))}
                        alt={delve(image, "data.attributes.alternativeText")}
                        className="relative mx-auto shadow-lg rounded-lg w-auto"
                        />
                        <h3>case study 1</h3>
                    </div>
                <div className="case">
                    <img
                        src={getStrapiMedia(delve(image, "data.attributes.url"))}
                        alt={delve(image, "data.attributes.alternativeText")}
                        className="relative mx-auto shadow-lg rounded-lg w-auto"
                    />
                    <h3>case study 1</h3>
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
