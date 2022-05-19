import delve from 'dlv';
import { getStrapiMedia } from '../../../utils';

const Text = ({ text }) => {

  return (
    <section className="text">
      <div className="container">
        <p>{text}</p>
      </div> 
    </section>
  );
};

Text.defaultProps = {};

export default Text;
