import delve from "dlv";
import Link from "next/link";
import { useState } from "react";
import { getStrapiMedia, getStrapiURL } from "../../../../utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const CatCard = ({ slug, name, seo, locale, id, text, time }) => {
  const [imgcard, setImgcard] = useState("")
  async function getServerSideProps(catId) {
    const res = await fetch(
      getStrapiURL(
        `/categories/` + catId + `?populate=*`
      ) 
    ); 
    const json = await res.json();
    const imgUrl = json.data.attributes.image.data["0"].attributes.url;
    setImgcard(imgUrl)
    return json
  }
  getServerSideProps(id)

  return (
    <div className="features__item">
        <img 
          src={getStrapiMedia(imgcard)}
        />
        <h4>{name}</h4>
        <p>{text}</p>
    </div>
  );
};

export default CatCard;
