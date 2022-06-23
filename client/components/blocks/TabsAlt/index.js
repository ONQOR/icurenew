import delve from 'dlv';
import { getStrapiMedia, getStrapiURL } from '../../../utils';
import { useState } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import ReactMarkdown from 'react-markdown'

const TabsAlt = ({ TabsAlt, title, caption, cards, hide, btnText }) => {

  const [toggleState, setToggleState] = useState(1)
  const handleClick = (index) => {
    setToggleState(index)
    console.log('cards',cards);
  }
  
  return (
    <section className={hide ? "hide" : "tabs-alt"}>
      <div className="container sb center">
        <div className="tabs-alt__title">
          <span className='caption'>{caption}</span>
          <h2>{title}</h2>
        </div>
        {/* tab buttons */}
        {cards &&
        cards.map((item, index) => {
          return (
            <div onClick={() => handleClick(index + 1)} className={toggleState === index + 1 ? "tabs-alt__icon--active tabs-alt__icon" : "tabs-alt__icon"}>
            <img
              src={getStrapiMedia(delve(item, "uploadsUrl"))}
            />
            <h3>{delve(item, "title")}</h3>
            <p>{delve(item, "text")}</p>
            </div>
          )
        })}
        {/* tab content */}
        {cards &&
        cards.map((item, index) => (
        <div className={toggleState === index + 1 ? "tabs__content--active" : "tabs__content"}>
          <div className="tabs__content__left">
            <h2>{delve(item, "contentTitle")}</h2>
            <ReactMarkdown>{delve(item, "contentText")}</ReactMarkdown>
            {item.anchor ?
            <Link 
              href={`${delve(item, 'btnUrl')}`} 
              passHref={true}
              className={delve(item, 'btnUrl') ? "" : "none"}
              >
              <a>
                <button>
                  {delve(item, "btnText")}
                  <FontAwesomeIcon 
                    icon={faArrowRight} 
                    className="arrow-square"  
                  />
                </button>
              </a>
            </Link>
            :
            <AnchorLink 
              offset='-75'
              href='#contact'
              className={delve(item, 'btnUrl') ? "none" : ""}
              >
                <button>
                  {delve(item, "btnText")}
                  <FontAwesomeIcon 
                    icon={faArrowRight} 
                    className="arrow-square"  
                  />
                </button>
            </AnchorLink>
            }
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
