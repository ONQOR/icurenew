

const HeroSmall = ({ title, text }) => {

  return (
    <section className="heroSmall">
      <div className="container">
        <h1>{title}</h1>
        <p>{text}</p>
      </div> 
    </section>
  );
};

HeroSmall.defaultProps = {};

export default HeroSmall;
