import delve from 'dlv';
import { getStrapiMedia } from '../../../utils';
import ReactMarkdown from 'react-markdown'

const Text = ({ text, hide }) => {

  return (
    <section className={hide ? "hide" : "text"}>
      <div className="container">
        <ReactMarkdown>{text}</ReactMarkdown>
      </div> 
    </section>
  );
};

Text.defaultProps = {};

export default Text;
