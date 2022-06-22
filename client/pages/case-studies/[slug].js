import delve from "dlv";
import Layout from "../../components/layout";
import ArticleContent from "../../components/pages/case-studies/ArticleContent";
import BlockManager from "../../components/shared/BlockManager";
import { getStrapiURL, handleRedirection } from "../../utils";
import { getLocalizedParams } from "../../utils/localize";

const Article = ({ global, pageData, preview }) => {
  const blocks = delve(pageData, "attributes.blocks");
  console.log(pageData)
  return (
    <>
      <Layout
        global={global}
        pageData={pageData}
        preview={preview}
        type="article"
      >
        <ArticleContent {...pageData} />
        {blocks && <BlockManager blocks={blocks} />}
      </Layout>
    </>
  );
};

// This gets called on every request
export async function getServerSideProps(context) {
  const { locale } = getLocalizedParams(context.query);
  const preview = context.preview
    ? "&publicationState=preview&published_at_null=true"
    : "";
  const res = await fetch(
    getStrapiURL(
      `/articles?filters[slug]=${context.params.slug}&locale=${locale}${preview}&populate[blocks][populate]=*&populate=category`
    ) 
  ); 
  const json = await res.json();

  if (!json.data.length) {
    return handleRedirection(context.params.slug, context.preview, "case-studies");
  }

  return {
    props: { pageData: json.data[0], preview: context.preview || null },
  };
}

export default Article;
