import React from "react";
import { graphql, Link } from "gatsby";
import "../css/style.css"
import "../css/category.css"
import Layout from "../components/layout";
// 他の必要なインポート

const CategoryTemplate = ({ data }) => {
  const category = data.wpgraphql.category;

  // カテゴリー名の最初の文字を大文字に
  const categoryName = category.name.charAt(0).toUpperCase() + category.name.slice(1);

  return (
    <Layout>
      <div className="container category-container">
        <h1 className="category-title text-center mb-5">{categoryName}</h1>
        <div className="row g-4">
          {category.posts.nodes.map(post => (
            <div className="col-12 col-md-6 col-xl-4" key={post.id}>
              <div className="card h-100">
                <Link to={`/${post.slug}`}>
                  {post.featuredImage?.node?.sourceUrl && (
                    <img
                      src={post.featuredImage.node.sourceUrl}
                      className="card-img-top"
                      alt={post.title}
                    />
                  )}
                  <div className="card-body">
                    <h5 className="card-title">{post.title}</h5>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query($id: ID!) {
    wpgraphql {
      category(id: $id) {
        id
        name
        slug
        posts {
          nodes {
            id
            title
            slug
            featuredImage {
              node {
                sourceUrl
                altText
              }
            }
          }
        }
      }
    }
  }
`;

export default CategoryTemplate;