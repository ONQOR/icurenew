

const HeroSmall = ({ title, text, hide }) => {

  return (
    <section className={hide ? "hide" : "heroSmall"}>
      <div className="container">
        <h1>{title}</h1>
        <p>{text}</p>
      </div> 
    </section>
  );
};

HeroSmall.defaultProps = {};

export default HeroSmall;
