import delve from "dlv";
import Link from "next/link";
import { useState } from "react";
import { getStrapiMedia } from "../../../../utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const ArticleCard = ({ slug, title, seo, time, caption, image, category }) => {
  const description = delve(seo, "metaDescription");
  const [caseCat, setCaseCat] = useState('');
  var displayCategory = ''
  if(category.data){
    displayCategory = category.data.attributes.name
  }
  // console.log('category',category);
  return (
    <div className="articles__articles-item">
    <Link href={`/case-studies/${slug}`}>
    <a className="">
      <div className="case">
        <img  
            alt={delve(image, "data.attributes.alternativeText")}
            src={getStrapiMedia(delve(image, "data.attributes.url"))}
        />
        <h4>{title}</h4>
        <div className='case__filter-img'></div>
        <div className='case__filter'></div>
          <div className='case--hover'>
              <h5>{title}</h5>
              <span>{displayCategory}</span>
              <span className='case--hover__time'>{time}</span>
              <FontAwesomeIcon icon={faArrowRight} />
          </div>

        </div>
      {/* <p className="">{description}</p> */}
      </a>
    </Link>
    </div>
  );
};

export default ArticleCard;