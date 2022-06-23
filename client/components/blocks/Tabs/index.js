import { useState } from 'react';
import delve from 'dlv';
import { getStrapiMedia } from '../../../utils';
import ReactMarkdown from 'react-markdown'

const Tabs = ({cards, title, caption, text, hide }) => {

  const [toggleState, setToggle] = useState(1)
  const handleClick = (index) => {
    setToggle(index)
  }
  return (
    <section className={hide ? "hide" : "tabs"}>
      <div className="container center">
        <div className="tabs__top">
          <span className='caption'>{caption}</span>
          <h2>{title}</h2>
          <p><ReactMarkdown>{text}</ReactMarkdown></p>
        </div>

        <div className="tabs__tab">
          <div>
          {cards &&
            cards.map((item, index) => (
              <span onClick={() => handleClick(index + 1)} className={toggleState === index + 1 ? "active" : ""}>{delve(item, "title")}</span>
            ))}
          </div>
        </div>

        {cards &&
        cards.map((item, index) => (
            <div className={toggleState === index + 1 ? "tabs__content--active" : "tabs__content"} key={`feature-${index}`}>
              <div className="tabs__content__left">
                <h2>{delve(item, "title")}</h2>
                <p><ReactMarkdown>{delve(item, "text")}</ReactMarkdown></p>
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

Tabs.defaultProps = {};

export default Tabs;
