import { useState } from 'react';

const Tabs = ({title}) => {

  const [toggleState, setToggle] = useState(1)
  const handleClick = (index) => {
    setToggle(index)
    console.log(index)
  }
  return (
    <section className="tabs">
      <div className="container center">
        <div className="tabs__top">
          <span>ICURe Customers</span>
          <h2>{title}</h2>
          <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.</p>
        </div>

        <div className="tabs__tab">
          <div>
            <span onClick={() => handleClick(1)} className={toggleState === 1 ? "active" : ""}>tabs one</span>
            <span onClick={() => handleClick(2)} className={toggleState === 2 ? "active" : ""}>tabs one</span>
            <span onClick={() => handleClick(3)} className={toggleState === 3 ? "active" : ""}>tabs one</span>
          </div>
        </div>

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

Tabs.defaultProps = {};

export default Tabs;
