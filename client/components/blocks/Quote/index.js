import delve from 'dlv';
import { getStrapiMedia } from '../../../utils';

const Quote= ({ }) => {

   return (
    <section className="quote">
        <div className="container sb center">
            <p>“Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no”</p>
            <img />
            <h4>Heading 3</h4>
            <span>Job Role</span> 
        </div> 
    </section>
   )
};

Quote.defaultProps = {};

export default Quote;
