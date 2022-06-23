import delve from 'dlv';
import Link from 'next/link';
import AnchorLink from 'react-anchor-link-smooth-scroll'


const Cohort = ({ title, newer, cards, hide }) => {

  return (
    <section className={hide ? "hide" : "cohort"}>
      <div className="container">
        <div className="title">
          <h2>{title}</h2>
        </div>

      {cards &&
        cards.map((item, index) => (
          <div className="row" key={`feature-${index}`}>
            <div className="index">
              <span className="subTitle">{delve(item, "caption")}</span>
              <span className="date">{delve(item, "date")}</span>
            </div>
            <div className="text">
              <span>{delve(item, "subTitle")}</span>
              <h3>{delve(item, "title")}</h3>
            </div>
            <div className="">
              <div className="index-mob">
                <span className="subTitle">{delve(item, "caption")}</span>
                <span className="date">{delve(item, "date")}</span>
              </div>
              <div className="text-mob">
                <span>{delve(item, "subTitle")}</span>
                <h3>{delve(item, "title")}</h3>
              </div>
            </div>
            <div className="btn">
              <Link 
                href={`${delve(item, 'btnUrl')}`} 
                passHref={true}
                >
                <a className={delve(item, 'btnUrl') ? "" : "hide"}><button>{delve(item, "btnText")}</button></a>
              </Link>
              <AnchorLink 
              offset='-75'
              href='#contact'
              >
                <button className={delve(item, 'btnUrl') ? "hide" : ""}>
                  {delve(item, "btnText")}
                </button>
              </AnchorLink>
            </div>
          </div>
        ))}
        
        </div> 
    </section>
  );
};

Cohort.defaultProps = {};

export default Cohort;
