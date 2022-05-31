import delve from 'dlv';
import { getStrapiMedia } from '../../../utils';
import { useState } from 'react';

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
          <span>{caption}</span>
          <h2>{title}</h2>
        </div>
        {/* tab buttons */}
          <div onClick={() => handleClick(1)} className={toggleState === 1 ? "tabs-alt__icon--active tabs-alt__icon" : "tabs-alt__icon"}>
            <img
            />
            <h3>LLP</h3>
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, </p>
          </div>
          <div onClick={() => handleClick(2)} className={toggleState === 2 ? "tabs-alt__icon--active tabs-alt__icon" : "tabs-alt__icon"}>
            <img
            />
            <h3>LLP</h3>
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, </p>
          </div>
          
          <div onClick={() => handleClick(3)} className={toggleState === 3 ? "tabs-alt__icon--active tabs-alt__icon" : "tabs-alt__icon"}>
            <img
            />
            <h3>LLP</h3>
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, </p>
          </div>

        {/* tab content */}
                
        {cards &&
        cards.map((item, index) => (
        <div className={toggleState === index + 1 ? "tabs__content--active" : "tabs__content"}>
          <div className="tabs__content__left">
            <h2>{delve(item, "contentTitle")}</h2>
            <p>{delve(item, "contentText")}</p>
            <button>Get in Contact</button>
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
