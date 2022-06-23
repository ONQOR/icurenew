import delve from "dlv";
import Link from "next/link";
import { useState } from "react";
import { getStrapiMedia, getStrapiURL } from "../../../../utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const ArticleCard = ({ slug, title, seo, id, caption, time }) => {
  const description = delve(seo, "metaDescription");

  const [imgcard, setImgcard] = useState("")
  const [cardCategory, setcardCategory] = useState("")
  async function getServerSideProps(apiId) {
    const res = await fetch(
      getStrapiURL(
        `/articles/`+ apiId +`?populate=*`
      ) 
    ); 
    const json = await res.json();
    const imgUrl = json.data.attributes.image.data.attributes.url
    setImgcard(imgUrl);
    if(json.data.attributes.category.data){
      setcardCategory(json.data.attributes.category.data.attributes.name);
    }
    console.log(json);
    return json
  }
  getServerSideProps(id)

  return (
    <div className="articles__articles-item">
    <Link href={`/case-studies/${slug}`}>
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
              <span>{cardCategory}</span>
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
