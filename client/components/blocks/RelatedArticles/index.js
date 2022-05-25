import ArticleCard from '../../pages/blog/ArticleCard';
import Container from '../../shared/Container';
import Header from '../../shared/Header';

const RelatedArticles = ({ header, articles }) => {
  return (
      <div className="related-articles">
        <div className="container center">
        <h2>title</h2>
          <div className="related-articles__articles sb">
            {articles &&
              articles.data.map((article, index) => (
                <ArticleCard {...article.attributes} key={index} />
              ))}
          </div>
        </div>
      </div>
  );
};

RelatedArticles.defaultProps = {};

export default RelatedArticles;
