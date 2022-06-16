import delve from 'dlv';
import { getStrapiMedia } from '../../../utils'; 
import ArticleCard from '../../pages/case-studies/ArticleCard';

const CaseStudies = ({ articles, title, caption, text }) => {

  return (
    <section className="caseStudies">
        <div className="container">
            <div className="title">
                <span className='caption'>{caption}</span>
                <h2>{title}</h2>
                <p>{text} </p>
            </div>

            <div className="colOne">
                {articles &&
                articles.data.map((article, index) => (
                <ArticleCard {...article.attributes} id={article.id} key={index} />
                ))}
            </div>
      
            {/* <div className="colTwo">
                {articles &&
                articles.data.map((article, index) => (
                <ArticleCard {...article.attributes} id={article.id} key={index} />
                ))}
            </div> */}

            <div className="colThree">
                <p>{text}</p>
            </div>
        </div>
    </section>
  );
};

CaseStudies.defaultProps = {};

export default CaseStudies;
