import delve from 'dlv';
import { getStrapiMedia } from '../../../utils';

const Journey = ({ title, subTitle, rows, hide }) => {

  return (
    <section className={hide ? "hide" : "journey"}>
      <div className="container">
        <div className="title">
          <span>{subTitle}</span>
          <h2>{title}</h2>
        </div>
        <div className="row">
             {/* index */}
             <div className="index">
               <span>01</span>
             </div>
             {/* icon */}
             <div className="icons">
   
             </div>
             {/* text */}
             <div className="text">
               <h3>Lean Launch Programme</h3>
               <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
             </div>
             {/* btn */}
             <div className="btn">
               <button>Get In Contact</button>
             </div>
           </div>

        {rows &&
        rows.map((row, index) => (
          <div className="row">
          {/* index */}
          <div className="index">
            <span key={`rowCheck-${index}`}>01</span>
          </div>
          {/* icon */}
          <div className="icons">

          </div>
          {/* text */}
          <div className="text">
            <h3>Lean Launch Programme {delve(row, 'text')}</h3>
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
          </div>
          {/* btn */}
          <div className="btn">
            <button>Get In Contact</button>
          </div>
        </div>
        ))}
      </div> 
    </section>
  );
};

Journey.defaultProps = {};

export default Journey;
