const path = require('path');
const categoryTemplate = require.resolve('./src/templates/category.js');
const postTemplate = require.resolve('./src/templates/post.js');
const pageTemplate = require.resolve('./src/templates/page.js');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  // カテゴリーデータを取得（既存のコード）
  const categoryResult = await graphql(`
    {
      wpgraphql {
        categories {
          nodes {
            id
            slug
          }
        }
      }
    }
  `);

  if (categoryResult.errors) {
    console.error(categoryResult.errors);
    throw new Error("GraphQLクエリ (カテゴリー) でエラーが発生しました");
  }

  const categories = categoryResult.data.wpgraphql.categories.nodes;

  categories.forEach(category => {
    console.log(`カテゴリーページを作成: /category/${category.slug}`);
    createPage({
      path: `/category/${category.slug}`,
      component: categoryTemplate,
      context: {
        id: category.id,
        slug: category.slug,
      },
    });
  });

  // 投稿データを取得（ページネーション対応）
  async function fetchAllPosts(after = null, allPosts = []) {
    const result = await graphql(`
      query AllPostsWithPagination($after: String) {
        wpgraphql {
          posts(first: 100, after: $after) {
            nodes {
              id
              slug
              uri
            }
            pageInfo {
              hasNextPage
              endCursor
            }
          }
        }
      }
    `, { after });

    if (result.errors) {
      console.error(result.errors);
      throw new Error("GraphQLクエリ (投稿) でエラーが発生しました");
    }

    const { nodes, pageInfo } = result.data.wpgraphql.posts;
    const updatedAllPosts = [...allPosts, ...nodes];

    if (pageInfo.hasNextPage) {
      return fetchAllPosts(pageInfo.endCursor, updatedAllPosts);
    }

    return updatedAllPosts;
  }

  const allPosts = await fetchAllPosts();

  allPosts.forEach(post => {
    console.log(`投稿ページを作成: /${post.slug}`);
    createPage({
      path: `/${post.slug}`,
      component: postTemplate,
      context: {
        id: post.id,
        slug: post.slug,
        uri: post.uri,
      },
    });
  });

  // 固定ページデータを取得
  const pageResult = await graphql(`
    {
      wpgraphql {
        pages {
          nodes {
            id
            slug
            uri
            databaseId
          }
        }
      }
    }
  `);

  if (pageResult.errors) {
    console.error(pageResult.errors);
    throw new Error("GraphQLクエリ (固定ページ) でエラーが発生しました");
  }

  const pages = pageResult.data.wpgraphql.pages.nodes;

  pages.forEach(page => {
    // ★ about-detail 専用テンプレートへの条件分岐を削除
    // すべての固定ページに汎用テンプレートを使用
    console.log(`固定ページを作成 (汎用テンプレート): /${page.slug}`);
    createPage({
      path: `/${page.slug}/`,
      component: pageTemplate, // 常に pageTemplate を使用
      context: {
        id: page.id,
        slug: page.slug,
        uri: page.uri,
        databaseId: page.databaseId,
      },
    });
  });
};