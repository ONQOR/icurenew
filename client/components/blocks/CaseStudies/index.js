import delve from 'dlv';
import { getStrapiMedia } from '../../../utils'; 
import ArticleCard from '../../pages/blog/ArticleCard';

const CaseStudies = ({ articles, title, caption, text }) => {

  return (
    <section className="caseStudies">
        <div className="container">
            <div className="title">
                <span>{caption}</span>
                <h1>{title}</h1>
                <p>{text} </p>
            </div>

            <div className="colOne">
                {articles &&
                articles.data.map((article, index) => (
                <ArticleCard {...article.attributes} id={article.id} key={index} />
                ))}
            </div>
      
            <div className="colTwo">
                {articles &&
                articles.data.map((article, index) => (
                <ArticleCard {...article.attributes} id={article.id} key={index} />
                ))}
            </div>

            <div className="colThree">
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet</p>
            </div>
        </div>
    </section>
  );
};

CaseStudies.defaultProps = {};

export default CaseStudies;
