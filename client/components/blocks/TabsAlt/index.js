import delve from 'dlv';
import { getStrapiMedia } from '../../../utils';
import { useState } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const TabsAlt = ({ TabsAlt, title, caption, cards,  }) => {

  const [toggleState, setToggleState] = useState(1)
  const handleClick = (index) => {
    setToggleState(index)
    console.log(index)
  }

  return (
    <section className="tabs-alt">
      <div className="container sb center">
        <div className="tabs-alt__title">
          <span className='caption'>{caption}</span>
          <h2>{title}</h2>
        </div>
        {/* tab buttons */}
        {cards &&
        cards.map((item, index) => (
          <div onClick={() => handleClick(index + 1)} className={toggleState === index + 1 ? "tabs-alt__icon--active tabs-alt__icon" : "tabs-alt__icon"}>
            <img
              src={getStrapiMedia(delve(item, "image.data.attributes.url"))}
              alt={delve(item, "image.data.attributes.alternativeText")}
            />
            <h3>{delve(item, "title")}</h3>
            <p>{delve(item, "text")}</p>
          </div>
        ))}
        {/* tab content */}
        {cards &&
        cards.map((item, index) => (
        <div className={toggleState === index + 1 ? "tabs__content--active" : "tabs__content"}>
          <div className="tabs__content__left">
            <h2>{delve(item, "contentTitle")}</h2>
            <p>{delve(item, "contentText")}</p>
            <Link href={`${delve(item, 'btnUrl')}`} passHref={true}>
              <a>
                <button>
                  Get in Contact
                  <FontAwesomeIcon 
                    icon={faArrowRight} 
                    className="arrow-square"  
                  />
                </button>
              </a>
            </Link>
          </div>     
          <div className="tabs__content__right">
            <img
              src={getStrapiMedia(delve(item, "image.data.attributes.url"))}
              alt={delve(item, "image.data.attributes.alternativeText")}
            />
          </div>
        </div>
        ))}
          
      </div> 
    </section>
  );
};

TabsAlt.defaultProps = {};

export default TabsAlt;
