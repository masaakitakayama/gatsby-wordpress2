import React from 'react';
import { graphql } from 'gatsby';
import "../css/page.css"
import "../css/about.css"

const Page = ({ data }) => {
  const {
    wpgraphql: { page },
  } = data;



  return (
		<> {/* レイアウトコンポーネントを使用する場合 */}
			<section className='area'>
			<div className='container'>
      <h1 className='main-title'>{page.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: page.content }} />
      {/* その他のフィールドを表示する場合 */}
      {page.featuredImage && (
        <img
          src={page.featuredImage.node.sourceUrl}
          alt={page.featuredImage.node.altText}
        />
				)}
				</div>
				</section>
    </>
  );
};

export default Page;

export const query = graphql`
  query GetPageById($id: ID!) {
    wpgraphql {
      page(id: $id, idType: ID) {
        id
        title
        content
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
`;