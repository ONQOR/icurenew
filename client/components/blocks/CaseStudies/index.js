import delve from 'dlv';
import { getStrapiMedia } from '../../../utils'; 
import ArticleCard from '../../pages/case-studies/ArticleCard';
import ReactMarkdown from 'react-markdown'

const CaseStudies = ({ articles, title, caption, text, hide }) => {

  return (
    <section className={hide ? "hide" : "caseStudies"}>
        <div className="container">
            <div className="title">
                <span className='caption'>{caption}</span>
                <h2>{title}</h2>
                <p><ReactMarkdown>{text}</ReactMarkdown></p>
            </div>

            <div className="colOne">
                {articles &&
                articles.data.map((article, index) => (
                <ArticleCard {...article.attributes} id={article.id} key={index} />
                ))}
            </div>

            <div className="colThree">
                <p>{text}</p>
            </div>
        </div>
    </section>
  );
};

CaseStudies.defaultProps = {};

export default CaseStudies;
