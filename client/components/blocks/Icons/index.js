import delve from 'dlv';
import { getStrapiMedia } from '../../../utils';

const Icons = ({ icons, title, text }) => {

  return (
    <section className="icons">
      <div className="container sb center">
        <div className="icons__title">
          <span>How It Works</span>
          <h2>Your Journey starts with ICURe</h2>
        </div>
          <div className="icons__icon">
            <img
            />
            <h3>LLP</h3>
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna</p>
          </div>
          <div className="icons__icon">
            <img
            />
            <h3>LLP</h3>
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna</p>
          </div>
          
          <div className="icons__icon">
            <img
            />
            <h3>LLP</h3>
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna</p>
          </div>
          
        {icons &&
        icons.map((item, index) => (
          <div className="icons__icon" key={`feature-${index}`}>
            <img
              src={getStrapiMedia(delve(item, "image.data.attributes.url"))}
              alt={delve(item, "image.data.attributes.alternativeText")}
            />
            <h3>{delve(item, "title")}</h3>
            <p>{delve(item, "text")}</p>
          </div>
        ))}

      </div> 
    </section>
  );
};

Icons.defaultProps = {};

export default Icons;
