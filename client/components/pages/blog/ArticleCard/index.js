import delve from "dlv";
import Link from "next/link";
import { getStrapiMedia } from "../../../../utils";

const ArticleCard = ({ slug, title, category, seo, locale, image }) => {
  const description = delve(seo, "metaDescription");

  return (
    <div className="articles__articles-item">
    <Link href={`/blog/${slug}?lang=${locale}`}>
    <a className="">
      {/* <svg
        className="w-4 h-4 ml-2"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M5 12h14"></path>
        <path d="M12 5l7 7-7 7"></path>
      </svg> */}
      <span className="">
        {delve(category, "data.attributes.name")}
      </span>
      <img
        alt={delve(image, "data.attributes.alternativeText")}
        src={getStrapiMedia(delve(image, "data.attributes.url"))}
        className=""
      />
      <h4 className="">
        {title}
      </h4>
      <p className="">{description}</p>
      </a>
    </Link>
    </div>
  );
};

export default ArticleCard;
