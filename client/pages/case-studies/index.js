import delve from "dlv";
import { useState } from "react";
import { useQuery } from "react-query";
import Layout from "../../components/layout";
import NoResults from "../../components/no-results";
import CaseCard from "../../components/pages/case-studies/CaseCard";
import BlockManager from "../../components/shared/BlockManager";
import Container from "../../components/shared/Container";
import Header from "../../components/shared/Header";
import { getArticles, getData, getStrapiURL } from "../../utils";
import { getLocalizedParams } from "../../utils/localize";
import React, { useEffect } from 'react';

const Articles = ({
  global,
  initialData,
  pageData,
  categories,
  locale,
  perPage,
  preview,
}) => {
  const [categoryId, setCategoryId] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  const blocks = delve(pageData, "attributes.blocks");
  const header = delve(pageData, "attributes.header");
  const categoryText = delve(pageData, "attributes.categoryText");

  const { data, status } = useQuery(
    [
      "articles",
      { category: categoryId },
      { locale: locale },
      { page: pageNumber },
      { perPage },
    ],
    getArticles,
    {
      initialData,
    }
  );

  const lastPage = Math.ceil(data.count / perPage) || 1;
  // console.log(data.articles);
  return (
    <>
    <Layout
      global={global}
      pageData={pageData}
      type="blog-page"
      preview={preview}
    >
    <div className="archive">
        {/* <Header {...header} /> */}
       
        {/* filter dropdown start */}
        {/* <div className="container">
            <label className="text-gray-700">
              <select
                className=""
                onChange={(value) => setCategoryId(value.target.value)}
              >
                <option value="">
                  {categoryId
                    ? "Clear filter"
                    : categoryText || "Select a category"}
                </option>
                {categories &&
                  categories.map((category, index) => (
                    <option
                      key={`categoryOption-${index}`}
                      value={delve(category, "attributes.id")}
                    >
                      {delve(category, "attributes.name")}
                    </option>
                  ))}
              </select>
            </label>
        </div>

        <NoResults status={status} length={delve(data, "articles").length} /> */}
        {/* filter dropdown end */}
       
        {/* article cards start */}
        <div className="container sb"> <h2>Case studies</h2></div>
        <div className="container sb">
          {status === "success" &&
            delve(data, "articles") &&
            data.articles.map((article, index) => (
              
              <CaseCard {...article.attributes} locale={locale} key={index} />
            ))}
        </div>
        {/* article cards end */}

        {/* next/prev start */}
        {/* {data.count > 0 && (
            <div className="archive__buttons">
              <div className="container">
                {/* next */}
                {/* <button
                  type="button"
                  onClick={() => setPageNumber(pageNumber - 1)}
                  disabled={pageNumber <= 1}
                >
                  Previous
                </button> */}
                {/* previous */}
                {/* <button
                  type="button"
                  onClick={() => setPageNumber(pageNumber + 1)}
                  disabled={pageNumber >= lastPage}
                >
                  Next
                </button>
              </div>
            </div>
        )} */}
        {/* next/prev end */}
      <BlockManager blocks={blocks} />
      </div>
    </Layout>
    </>
  );
};

// This gets called on every request
export async function getServerSideProps(context) {
  const { locale } = getLocalizedParams(context.query);
  const data = getData(
    null,
    locale,
    "blog-page",
    "singleType",
    context.preview
  );

  try {
    const resBlogPage = await fetch(delve(data, "data"));
    const blogPage = await resBlogPage.json();
    const perPage = delve(blogPage, "articlesPerPage") || 12;

    const resArticles = await fetch(
      getStrapiURL(
        `/articles?pagination[limit]=${perPage}&locale=${locale}&pagination[withCount]=true&populate=image,category,author`
      )
    );
    const articles = await resArticles.json();

    const resCategories = await fetch(
      getStrapiURL(`/categories?pagination[limit]=99`)
    );
    const categories = await resCategories.json();

    if (!articles.data.length || !categories.data.length) {
      return handleRedirection(slug, context.preview, "");
    }

    return {
      props: {
        initialData: {
          articles: articles.data,
          count: articles.meta.pagination.total,
        },
        pageData: blogPage.data,
        categories: categories.data,
        locale,
        perPage,
        preview: context.preview || null,
      },
    };
  } catch (error) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
}

export default Articles;
