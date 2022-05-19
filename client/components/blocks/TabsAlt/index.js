import delve from 'dlv';
import { getStrapiMedia } from '../../../utils';
import { useState } from 'react';

const TabsAlt = ({ TabsAlt, title, text }) => {

  const [toggleState, setToggleState] = useState(1)
  const handleClick = (index) => {
    setToggleState(index)
    console.log(index)
  }

  return (
    <section className="tabs-alt">
      <div className="container sb center">
        <div className="tabs-alt__title">
          <span>How It Works</span>
          <h2>Your Journey starts with ICURe</h2>
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
          
        <div className={toggleState === 1 ? "tabs__content--active" : "tabs__content"}>
          <div className="tabs__content__left">
            <h2>Is ICURe right for you?</h2>
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.</p>
          </div>     
          <div className="tabs__content__right">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/c/c8/Altja_j%C3%B5gi_Lahemaal.jpg"
            />
          </div>
        </div>

        <div className={toggleState === 2 ? "tabs__content--active" : "tabs__content"}>
          <div className="tabs__content__left">
            <h2>Is ICURe right for you?</h2>
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.</p>
          </div>     
          <div className="tabs__content__right">
            <img
              src="https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455__340.jpg"
            />
          </div>
        </div>

        <div className={toggleState === 3 ? "tabs__content--active" : "tabs__content"}>
          <div className="tabs__content__left">
            <h2>Is ICURe right for you?</h2>
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.</p>
          </div>     
          <div className="tabs__content__right">
            <img
              src="https://cdn.pixabay.com/photo/2016/10/20/18/35/earth-1756274_1280.jpg"
            />
          </div>
        </div>
          
      </div> 
    </section>
  );
};

TabsAlt.defaultProps = {};

export default TabsAlt;
