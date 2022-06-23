import ArticleCard from '../../pages/case-studies/ArticleCard';
import ReactMarkdown from 'react-markdown'

const RelatedArticles = ({ articles, text, title, caption, hide }) => {

  return (
      <div className={hide ? "hide" : "related-articles"}>
        <div className="container center related-articles__articles sb">
          <div className='related-articles__articles__title center'>
            <span className='caption'>{caption}</span>
            <h2>{title}</h2>
            <p><ReactMarkdown>{text}</ReactMarkdown></p>
          </div>

          {articles &&
            articles.data.map((article, index) => (
              <ArticleCard {...article.attributes} id={article.id} key={index} />
            ))}
        </div>
      </div>
  );
};

RelatedArticles.defaultProps = {};

export default RelatedArticles;
