// src/templates/post.js
import React from "react";
import { graphql , Link } from "gatsby";
import single from "../css/single.css";
import Layout from "../components/layout";
import Seo from "../components/seo";

const Post = ({ data }) => {
  const post = data.wpgraphql.postBy;

  return (
    <Layout>
      <Seo title={post.title} description={post.excerpt} />
      <section className="single">
        <div className="container">
          <h2 className="section-title">作品詳細</h2>
          <h3>{post.title}</h3>
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
          <div className="back-link">
              <Link to="/" className="button button--primary">
                ホームに戻る
              </Link>
            </div>
        </div>
      </section>
    </Layout>
  );
};

export const query = graphql`
  query PostBySlug($slug: String!) {
    wpgraphql {
      postBy(slug: $slug) {
        title
        content
        excerpt
      }
    }
  }
`;

export default Post;