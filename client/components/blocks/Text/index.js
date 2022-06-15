import delve from 'dlv';
import { getStrapiMedia } from '../../../utils';
import ReactMarkdown from 'react-markdown'

const Text = ({ text }) => {

  return (
    <section className="text">
      <div className="container">
        <ReactMarkdown>{text}</ReactMarkdown>
      </div> 
    </section>
  );
};

Text.defaultProps = {};

export default Text;
