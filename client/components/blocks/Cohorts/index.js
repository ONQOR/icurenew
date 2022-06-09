import delve from 'dlv';
import Link from 'next/link';

const Cohort = ({ title, newer, cards }) => {

  return (
    <section className="cohort">
      <div className="container">
        <div className="title">
          <h2>{title}</h2>
        </div>

      {cards &&
        cards.map((item, index) => (
          <div className="row" key={`feature-${index}`}>
            <div className="index">
              <span className="subTitle">{delve(item, "subTitle")}</span>
              <span className="date">{delve(item, "date")}</span>
            </div>
            <div className="text">
              <span>{delve(item, "caption")}</span>
              <h3>{delve(item, "title")}</h3>
            </div>
            <div className="">
              <div className="index-mob">
              <span className="subTitle">{delve(item, "subTitle")}</span>
              <span className="date">{delve(item, "date")}</span>
              </div>
              <div className="text-mob">
              <span>{delve(item, "caption")}</span>
              <h3>{delve(item, "title")}</h3>
              </div>
            </div>
            <div className="btn">
              <Link href={`${delve(item, 'btnUrl')}`} passHref={true}>
                <a><button>Click to Apply</button></a>
              </Link>
            </div>
          </div>
        ))}
        
        </div> 
    </section>
  );
};

Cohort.defaultProps = {};

export default Cohort;
