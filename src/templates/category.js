import React from "react";
import { graphql, Link } from "gatsby";
import "../css/style.css"
import "../css/category.css"
import Layout from "../components/layout";
// 他の必要なインポート

const CategoryPage = ({ data, pageContext }) => {
  // データがない場合のフォールバック処理
  const categoryData = data?.wpgraphql?.category;
  const { slug } = pageContext;

  // データが完全に読み込まれるまでローディング表示
  if (!categoryData) {
    return (
      <Layout>
        <div>カテゴリーデータを読み込み中...</div>
      </Layout>
    );
  }

  const posts = categoryData.posts?.nodes || [];
  const categoryName = categoryData.name || slug;
  const excerptMaxLength = 30;

  const truncateExcerpt = (excerpt) => {
    const plainTextExcerpt = excerpt.replace(/<[^>]*>/g, ''); // HTMLタグを取り除く
    return plainTextExcerpt.length > excerptMaxLength
      ? plainTextExcerpt.slice(0, excerptMaxLength) + '...'
      : plainTextExcerpt;
  };

  return (
    <Layout>
      {posts.length > 0 ? (
        <div className="container">
          <h2 className="main-title">{categoryName}</h2>
          <div className="row">
            {posts.map(post => (
              <div className="col-12 col-md-6 col-xl-4 card mt-4" key={post.id}>
               <Link to={`/${post.slug}`}>
                <div className="image-wrapper">
                {post.featuredImage?.node && (
                  <img className="image"
                    src={post.featuredImage.node.sourceUrl}
                    alt={post.featuredImage.node.altText || post.title}
                    style={{
                      maxWidth: '100%',
                      height: 'auto'
                    }}
                  />
                  )}
                </div>
                <h3>{post.title}</h3>
                <p className={`$post.slug-paragraph`} dangerouslySetInnerHTML={{ __html: truncateExcerpt(post.excerpt) }} />
                {/* その他の投稿情報 */}
                </Link>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <p>このカテゴリには投稿がありません。</p>
      )}
    </Layout>
  );
};

export default CategoryPage;

// GraphQLクエリの修正
export const query = graphql`
  query CategoryQuery($id: ID!) {
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
            date
            excerpt
            featuredImage {
              node {
                sourceUrl
                altText
                mediaDetails {
                  width
                  height
                }
              }
            }
          }
        }
      }
    }
  }
`;