import delve from 'dlv';
import { getStrapiMedia } from '../../../utils';

const Text = ({ text }) => {

  return (
    <section className="text">
      <div className="container">
        {text}
      </div> 
    </section>
  );
};

Text.defaultProps = {};

export default Text;
