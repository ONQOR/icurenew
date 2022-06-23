import ReactMarkdown from 'react-markdown'

const HeroSmall = ({ title, text, hide }) => {

  return (
    <section className={hide ? "hide" : "heroSmall"}>
      <div className="container">
        <h1>{title}</h1>
        <p><ReactMarkdown>{text}</ReactMarkdown></p>
      </div> 
    </section>
  );
};

HeroSmall.defaultProps = {};

export default HeroSmall;
