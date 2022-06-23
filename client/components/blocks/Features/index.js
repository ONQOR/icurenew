import delve from 'dlv';
import { getStrapiMedia } from '../../../utils';
import CatCard from '../../pages/case-studies/CatCard';

const Features = ({ cards, title, image, hide, articles }) => {
 
  return (
    <div className={hide ? "hide" : "features"}>
      <div className="container sb">
        <h2>{title}</h2>

           {articles &&
                articles.data.map((article, index) => (
                <CatCard {...article.attributes} id={article.id} key={index} />
            ))}

      </div>
    </div>
  );
};

Features.defaultProps = {};

export default Features;
