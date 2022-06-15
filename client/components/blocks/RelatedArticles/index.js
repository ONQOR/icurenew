import ArticleCard from '../../pages/blog/ArticleCard';

const RelatedArticles = ({ articles, text, title, caption }) => {

  return (
      <div className="related-articles">
        <div className="container center related-articles__articles sb">
          <div className='related-articles__articles__title center'>
            <span className='caption'>{caption}</span>
            <h2>{title}</h2>
            <p>{text}</p>
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
