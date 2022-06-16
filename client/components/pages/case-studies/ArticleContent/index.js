import delve from "dlv";
import "github-markdown-css";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import { getStrapiMedia } from "../../../../utils";
import Container from "../../../shared/Container";

const gfm = require("remark-gfm");

const ArticleContent = ({ attributes }) => {
  const title = delve(attributes, "title");
  const image = delve(attributes, "image");
  const content = delve(attributes, "content");
  const author = delve(attributes, "author");
  const locale = delve(attributes, "locale");
  return (
    <Container>
      <section className="blog">
        <div className="container">

          {/* <div className="">
            <ReactMarkdown
              children={content}
              remarkPlugins={[gfm]}
              linkTarget="_blank"
              components={{
                img: ({ node, ...props }) => (
                  <img src={getStrapiMedia(delve(props, "src"))} />
                ),
              }}
            ></ReactMarkdown>
          </div> */}
    
        </div>
      </section>
    </Container>
  );
};

ArticleContent.defaultProps = {};

export default ArticleContent;
