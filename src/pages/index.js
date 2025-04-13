import React from "react";
import { graphql, Link } from "gatsby";
import '../css/style.css'
import Layout from "../components/layout";
import circle from '../static/circle.png';
import needle from '../static/needle.png';
import SkillsAnimation from '../my_js/skills'; // ← SkillsAnimation コンポーネントをインポート

const IndexPage = ({ data }) => {
  const { wpgraphql } = data;
  const categories = wpgraphql.categories.edges
    .map(({ node }) => node)
    .filter(category => category.slug !== 'uncategorized'); // 'uncategorized' を除外

  return (
    <Layout>
    <section>
      <div className="firstview">
      </div>
      </section>

      <section>
        <div id="About" className="about">
          <div className="container">
            <h2 className="main-title">About</h2>
            <div className="row align-items-center">
              <div className="col-12 col-md-8 col-xl-3 offset-md-2 offset-xl-0">
                <div className="image-outer">
                </div>
              </div>
              <div className="col-12 col-xl-9">
                <span className="name">M.T</span>
                <p className="text">
                  私は中高6年間陸上競技の走幅跳と三段跳をしていました。陸上競技を通して仲間と協力する事の大切さや継続して物事に取り組む事の大切さを学びました。現在利用している就労移行支援で学んだウェブデザイン、動画制作のスキルを生かして様々な会社が抱える課題を解決していきたいです。
                </p>
              </div>
            </div>
            <Link to="/about" className="button">
              自己紹介詳細へ
              <div className="button-left">
                <div className="arrow"></div>
              </div>
            </Link>
          </div>
        </div>
      </section>

        {categories.map(category => (
          <section key={category.slug} className={`${category.slug}`} id={`${category.slug}`}>
            <div className="container">
              <h2 className="sub-title">{category.name}</h2>
              <div className="row g-1">
                {category.posts.nodes.map((post) => (
                  <div className="card col-12 col-md-6 col-xl-4 mt-4" key={post.slug}>
                  <Link to={`/${post.slug}`}>
                    <div className="">
                        {post.featuredImage?.node?.sourceUrl && (
                          <img
                            src={post.featuredImage.node.sourceUrl}
                            className="featuredImage"
                            alt={post.title}
                          />
                        )}
                        <h3 className="card-title h5">{post.title}</h3>
                    </div>
                  </Link>
                  </div>
                ))}
              </div>
              <div className="mt-3">
              <Link className="categoryButton" to={`/category/${category.slug}`}>{category.slug}
                <div className="button-left"></div>
                <div className="arrow"></div>
              </Link>
              </div>
            </div>
          </section>
        ))}

          <section id="Skills" className="skills">
              <div className="container">
                <h2 className="main-title">Skills</h2>
                <div className="outer">
                  <div className="row">
                    <div className="col-12 col-md-6 col-xl-4">
                      <div className="box box-1">
                        <h5 className="box-name">HTML・CSS/Sass</h5>
                        <div className="image-outer image-outer-1">
                          <span className="persent persent-1">80%</span>
                          <img src={circle} alt="" className="circle" />
                          <img src={needle} alt="" className="needle" />
                        </div>
                        <p className="text">どの端末から見ても綺麗に見る事が出来るようなレスポンシブデザインが可能です。BEM記法についての知識があり、即戦力として仕事に取り組む事が出来ます。</p>
                      </div>
                    </div>
                    <div className="col-12 col-md-6 col-xl-4">
                      <div className="box box-2">
                        <h5 className="box-name">Adobe XD</h5>
                        <div className="image-outer image-outer-2">
                          <span className="persent persent-2">90%</span>
                          <img src={circle} alt="" className="circle" />
                          <img src={needle} alt="" className="needle needle-2" />
                        </div>
                        <p className="text">ウェブサイト、バナー等様々な物をXDで効率的に作成する事が出来ます。グリッドを使って規則性を意識したデザインを可能にします。それによりコーディングをより早く、修正を簡単に出来ます。</p>
                      </div>
                    </div>
                    <div className="col-12 col-md-6 col-xl-4">
                      <div className="box box-3">
                        <h5 className="box-name">photoshop</h5>
                        <div className="image-outer image-outer-3">
                          <span className="persent persent-3">70%</span>
                          <img src={circle} alt="" className="circle" />
                          <img src={needle} alt="" className="needle needle-3" />
                        </div>
                        <p className="text">写真のレタッチ、バナー作成、gif動画の作成等様々な編集が出来ます。基本的な操作は問題なく出来ます。光の操り方や合成等も行う事が可能です。</p>
                      </div>
                    </div>

                    <div className="col-12 col-md-6 col-xl-4">
                      <div className="box box-4">
                        <h5 className="box-name">Javascript/jQuery</h5>
                        <div className="image-outer image-outer-4">
                          <span className="persent persent-4">70%</span>
                          <img src={circle} alt="" className="circle" />
                          <img src={needle} alt="" className="needle needle-4" />
                        </div>
                        <p className="text">スライダーの実装やクリックで画像が切り替わる機能等の経験をしました。今後はよりUI、UXを意識したサイトを作成していきたいので、技術を高めていきたいです。</p>
                      </div>
                    </div>
                    <div className="col-12 col-md-6 col-xl-4">
                      <div className="box box-5">
                        <h5 className="box-name">premier pro</h5>
                        <div className="image-outer image-outer-5">
                          <span className="persent persent-5">70%</span>
                          <img src={circle} alt="" className="circle" />
                          <img src={needle} alt="" className="needle needle-5" />
                        </div>
                        <p className="text">不動産、インタビュー動画、自分で構成を考えた動画制作を経験しました。カット、テロップ、音楽の入れ方等基本的な操作は問題なく出来ます。</p>
                      </div>
                    </div>
                    <div className="col-12 col-md-6 col-xl-4">
                      <div className="box box-6">
                        <h5 className="box-name">Aftereffect</h5>
                        <div className="image-outer image-outer-6">
                          <span className="persent persent-6">70%</span>
                          <img src={circle} alt="" className="circle" />
                          <img src={needle} alt="" className="needle needle-6" />
                        </div>
                        <p className="text">自分で構成を考えたwebCMを作成出来ます。基本的な操作は問題なく出来ます。場面の切り替わりを意識して動画制作を行う事が出来、視聴者が楽しめる工夫が出来ます。</p>
                      </div>
                    </div>

                    <div className="col-12 col-md-6 col-xl-4 offset-md-3 offset-xl-0">
                      <div className="box box-7">
                        <h5 className="box-name">WordPress</h5>
                        <div className="image-outer image-outer-7">
                          <span className="persent persent-7">70%</span>
                          <img src={circle} alt="" className="circle" />
                          <img src={needle} alt="" className="needle needle-7" />
                        </div>
                        <p className="text">オリジナルテンプレートの作成、テーマチェック、コンタクトフォーム７を使用したお問い合わせフォームの設置が出来ます。</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <SkillsAnimation /> {/* ← SkillsAnimation コンポーネントをレンダリング */}
          </section>
    </Layout>
  );
};

export const query = graphql`
  query {
    wpgraphql {
      categories {
        edges {
          node {
            id
            name
            slug
            posts(first: 3) {
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
    }
  }
`;

export default IndexPage;