import delve from "dlv";
import Link from "next/link";
import { useState } from 'react';
import { getStrapiMedia, getStrapiURL } from "../../../../utils";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const ArticleCard = ({ slug, title, seo, locale, id, caption, time }) => {
  const description = delve(seo, "metaDescription");

  const [imgcard, setImgcard] = useState("")
  async function getServerSideProps(apiId) {
    const res = await fetch(
      getStrapiURL(
        `/articles/`+ apiId +`?populate=localizations,image,author.picture,blocks.articles.image,blocks.faq,blocks.header`
      ) 
    ); 
    const json = await res.json();
    console.log(json.data.attributes.image.data.attributes.url)
    const imgUrl = json.data.attributes.image.data.attributes.url
    setImgcard(imgUrl)
    return json
  }
  getServerSideProps(id)
  console.log('this is the artciles card', id)

  return (
    <div className="articles__articles-item">
    <Link href={`/case-studies/${slug}?lang=${locale}`}>
    <a className="">
      <div className="case">
        <img  
          src={getStrapiMedia(imgcard)}
        />
        <h4>{title}</h4>
        <div className='case__filter-img'></div>
        <div className='case__filter'></div>
          <div className='case--hover'>
              <h5>{title}</h5>
              <span>{caption}</span>
              <span className='case--hover__time'>{time}</span>
              <FontAwesomeIcon icon={faArrowRight} />
          </div>

        </div>
      <p className="">{description}</p>
      </a>
    </Link>
    </div>
  );
};

export default ArticleCard;
