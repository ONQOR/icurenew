import delve from 'dlv';
import { getStrapiMedia } from '../../../../utils';
import Link from 'next/link';
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import Shape from '../../../shared/shape'
import { useRouter } from "next/router";
import ReactMarkdown from 'react-markdown'

const CaseHero = ({ cards, pageData, }) => {
  const router = useRouter();
  console.log(pageData);
  const title = pageData.attributes.heroTitle;
  const text = pageData.attributes.heroText;
  const btnUrl = pageData.attributes.heroBtnUrl;
  const btnText = pageData.attributes.heroBtnText
  const card = pageData.attributes
  const image = pageData.attributes.heroText;
  const hide = pageData.attributes.hideHero;

   return (
    <section className={hide ? "hide" : "hero-alt"}>
    <div className="container sb">

      {/* left */}
      <div className="hero-alt__left">
        <div className='hero-alt__left__breadcrumbs'>
          {/* Home <span>/</span> Blog <span>/</span> Casestudy */}
          <span>
           
          </span>
        </div>
   
        <h1>{title}</h1>
        <p><ReactMarkdown>{text}</ReactMarkdown></p>
        {/* left points */}
        <div className="hero-alt__left__points">
        {cards &&
        cards.map((item, index) => (
          <div key={`feature-${index}`}>
            <span>{title}</span>
            <h3>{text}</h3>
          </div>
        ))}
        </div>
        {/* left button */}
          <Link href={btnUrl} passHref={true}>
              <a target="_blank">
                <button>
                  {btnText}
                  <FontAwesomeIcon 
                    icon={faArrowUpRightFromSquare} 
                    className="arrow-square"  
                  />
                </button> 
              </a>
          </Link>
      </div>
      {/* right */}
      <div className="hero-alt__right">
        <img
          src={getStrapiMedia(image)}
        />
        <Shape />
      </div>

    </div> 
    </section>
   )
};

CaseHero.defaultProps = {};

export default CaseHero;
