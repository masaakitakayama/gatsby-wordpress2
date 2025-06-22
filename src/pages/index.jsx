import React, { useEffect, useRef, useCallback } from "react";
import { graphql, Link } from "gatsby";
import { useLocation } from '@reach/router';
import '../css/style.css';
import Layout from "../components/layout";
import circle from '../static/circle.png';
import needle from '../static/needle.png';
import SkillsAnimation from '../my_js/skills';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitText from 'gsap/SplitText';
import Logo2 from "../components/Logo2";
import AnimatedSvg from '../components/AnimatedSvg';
import Logo from "../components/Logo"

const IndexPage = ({ data }) => {
  const wpgraphql = data?.wpgraphql;
  const location = useLocation();
  const isFirstLoad = useRef(true);
  const aboutTitleRef = useRef(null);
  const skillsTitleRef = useRef(null);
  const categoryTitleRefs = useRef({});
  const firstviewRef = useRef(null);
  const logoRef = useRef(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      gsap.registerPlugin(ScrollTrigger);
    }

    // Firstviewアニメーション
    if (firstviewRef.current) {
      const waves = firstviewRef.current.querySelectorAll('.firstview__wave');

      // 継続的な波のアニメーションのみ維持
      gsap.to(waves, {
        rotation: "+=360",
        duration: waves.length * 8,
        repeat: -1,
        ease: "none",
        stagger: {
          each: 8,
          repeat: -1
        }
      });
    }
  }, []);

  // カテゴリータイトルのアニメーション用のuseEffect
  useEffect(() => {
    if (!wpgraphql?.categories?.edges || typeof window === 'undefined') return;

    const categories = wpgraphql.categories.edges
      .map(({ node }) => node)
      .filter(category => category.slug !== 'uncategorized');

    categories.forEach(category => {
      const element = categoryTitleRefs.current[category.slug];
      if (element) {
        // 初期状態を設定
        gsap.set(element, {
          opacity: 0,
          y: 60,
          className: 'sub-title'
        });

        // アニメーションを設定
        gsap.to(element, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: element,
            start: "top 70%",
            end: "bottom 30%",
            toggleClass: { targets: element, className: "visible" },
            once: true
          }
        });
      }
    });
  }, [wpgraphql]);

  useEffect(() => {
    if (isFirstLoad.current) {
      isFirstLoad.current = false;
      return;
    }

    if (location.hash) {
      const id = location.hash.substring(1);
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location.hash]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      gsap.registerPlugin(ScrollTrigger);

      // カテゴリーごとのカードアニメーション
      document.querySelectorAll('.category-section').forEach((section) => {
        const cards = section.querySelectorAll('.card');

        gsap.set(cards, {
          opacity: 0
        });

        gsap.to(cards, {
          opacity: 1,
          duration: 1,
          stagger: {
            each: 0.25,
            ease: "none"
          },
          ease: "power1.inOut",
          scrollTrigger: {
            trigger: section,
            start: "top 50%",
            end: "bottom 20%",
            toggleActions: "play none none none",
            markers: false,
            once: true
          }
        });
      });

      // About title animation
      if (aboutTitleRef.current) {
        gsap.set(aboutTitleRef.current, {
          opacity: 0,
          y: 30,
          className: 'main-title'
        });

        gsap.to(aboutTitleRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: aboutTitleRef.current,
            start: "top 70%",
            end: "bottom 30%",
            toggleClass: { targets: aboutTitleRef.current, className: "visible" },
            once: true
          }
        });
      }

      // Skills title animation
      if (skillsTitleRef.current) {
        gsap.set(skillsTitleRef.current, {
          opacity: 0,
          y: 30,
          className: 'main-title'
        });

        gsap.to(skillsTitleRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: skillsTitleRef.current,
            start: "top 70%",
            end: "bottom 30%",
            toggleClass: { targets: skillsTitleRef.current, className: "visible" },
            once: true
          }
        });
      }
    }
  }, []);

  // ScrollAnimatedText コンポーネントの定義
  const ScrollAnimatedText = ({
    targetElement,
    splitType = 'chars',
    animationProps = { y: 50, opacity: 0, duration: 0.5, ease: "power3.out", stagger: 0.02 }, // 初期値に戻す
    scrollTriggerProps = { start: "top 70%", end: "bottom 30%" }, // 初期値に戻す
    once = false,
  }) => {
    const splitTextRef = useRef(null);
    let split;
    let animation;

    useEffect(() => {
      gsap.registerPlugin(ScrollTrigger, SplitText);

      const element = targetElement?.current || targetElement;

      if (element) {
        let animatedTarget = element;
        if (splitType) {
          split = new SplitText(element, { type: splitType });
          splitTextRef.current = split;
          animatedTarget = split.chars;
        }

        // 初期状態で非表示にするなど、アニメーション前の状態を設定
        // animationProps に opacity: 0 が含まれているため、これは不要かもしれません
        // 必要に応じて、gsap.set(animatedTarget, { opacity: 0 }); などを追加
        // ただし、animationPropsにy:30, opacity:0が含まれているので、
        // fromアニメーションは自動的に初期状態を処理します。
        // もし要素が最初から見えてしまっているなら、CSSで初期状態を非表示にするか、
        // より早い段階でgsap.setで初期状態を設定する必要があります。

        animation = gsap.from(animatedTarget, {
          ...animationProps,
          scrollTrigger: {
            trigger: element,
            ...scrollTriggerProps,
            once: once,
          },
        });
      }

      return () => {
        if (splitTextRef.current) {
          splitTextRef.current.revert();
        }
        animation && animation.kill();
      };
    }, [targetElement, splitType, JSON.stringify(animationProps), JSON.stringify(scrollTriggerProps), once]); // オブジェクトは依存配列に直接入れられないので、JSON.stringify を使うか、分解する

    return null;
  };

  // ★ 2. categories の定義は、データが利用可能になってから行う
  // この if 文は Hooks の呼び出し順序に影響しないように、
  // Hooks の定義の後に配置する
  if (!wpgraphql?.categories?.edges) {
    console.warn("カテゴリーデータがまだ読み込まれていません:", wpgraphql);
    return <p>カテゴリーデータを読み込み中...</p>;
  }

  const categories = wpgraphql.categories.edges
    .map(({ node }) => node)
    .filter(category => category.slug !== 'uncategorized');

  // コンソールで categoryTitleRefs を確認する場合は、
  // 開発時のみ:
  // useEffect(() => {
  //   console.log("Current categoryTitleRefs (after data loaded):", categoryTitleRefs.current);
  // }, [categories]); // categories の更新時や初回レンダリング後に確認

  return (
    <Layout location={location}>
      <section>
        <div className="firstview" ref={firstviewRef}>
          <div className="firstview__animation">
            <div className="firstview__wave wave1"></div>
            <div className="firstview__wave wave2"></div>
            <div className="firstview__wave wave3"></div>
          </div>
          <div className="firstview-logo-outer">
            <Logo2 className="firstview-logo" />
          </div>
        </div>
      </section>

      <section>
        <div id="About" className="about">
          <div className="container">
            <h2 ref={aboutTitleRef} className="main-title">About</h2>
            <ScrollAnimatedText
              targetElement={aboutTitleRef}
              splitType="chars"
              animationProps={{ y: 30, opacity: 0, duration: 0.5, ease: "power3.out", stagger: 0.02 }}
              scrollTriggerProps={{ start: "top 70%", end: "bottom 30%" }}
              once={true}
            />
            <div className="row justify-content-center">
              <div className="col-12 col-sm-8 col-md-6 col-lg-4">
                <div className="image-outer">
                  <AnimatedSvg />
                </div>
              </div>
              <div className="col-8 col-md-6 col-lg-8 align-self-center">
                <span className="name">M.T</span>
                <p className="text">
                  1995年生まれ 現在は障害者雇用にて社内のWEBサポート業務に従事。
                </p>
              </div>
              </div>
            <Link to="/about_detaill" className="button button--primary">
              自己紹介詳細へ
              <span className="arrow"></span>
            </Link>
          </div>
        </div>
      </section>

      <span className="works-title">Works</span>
      {categories.map((category, index) => (
        <section key={category.slug} className={`${category.slug} category-section`} id={`${category.slug}`}>
          <div className="container">
            <h2
              className="sub-title"
              ref={el => categoryTitleRefs.current[category.slug] = el}
              style={{ opacity: 0 }}  // 初期状態で非表示
            >
              {category.name}
            </h2>
            <div className="row">
              {category.posts.nodes.map((post) => (
                <div className="card col-12 col-sm-8 col-md-6 col-xl-4 offset-sm-2 offset-md-0" key={post.slug}>
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
              <Link className="categoryButton" to={`/category/${category.slug}`}>
                {category.slug}
                <div className="button-left"></div>
                <div className="arrow"></div>
              </Link>
            </div>
          </div>
        </section>
      ))}

          <section id="Skills" className="skills">
              <div className="container">
                <h2 ref={skillsTitleRef} className="main-title">Skills</h2>
                <ScrollAnimatedText
                  targetElement={skillsTitleRef}
                  splitType="chars"
                  animationProps={{ y: 30, opacity: 0, duration: 0.5, ease: "power3.out", stagger: 0.02 }}
                  scrollTriggerProps={{ start: "top 70%", end: "bottom 30%" }}
                  once={true}
                />
                <div className="outer">
                  <div className="row">
                    <div className="col-12 col-sm-8 col-md-6 col-xl-4 offset-sm-2 offset-md-0">
                      <div className="box box-1">
                        <svg className="border-svg" viewBox="0 0 100 100" preserveAspectRatio="none">
                          <rect x="0" y="0" width="100" height="100" fill="none" stroke="#6BB7D1" stroke-width="1" stroke-dasharray="400" stroke-dashoffset="400" className="border-path"/>
                        </svg>
                        <h3 className="box-name">HTML</h3>
                        <div className="image-outer image-outer-1">
                          <img className="image" src={circle} alt="スキルメーター" />
                          <img className="needle" src={needle} alt="スキルメーター針" />
                          <svg className="persent persent-1" viewBox="0 0 100 40">
                            <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle">80%</text>
                          </svg>
                        </div>
                        <p className="text">どの端末から見ても綺麗に見る事が出来るようなレスポンシブデザインが可能です。BEM記法についての知識があり、即戦力として仕事に取り組む事が出来ます。</p>
                      </div>
                    </div>
                    <div className="col-12 col-sm-8 col-md-6 col-xl-4 offset-sm-2 offset-md-0">
                      <div className="box box-2">
                        <svg className="border-svg" viewBox="0 0 100 100" preserveAspectRatio="none">
                          <rect x="0" y="0" width="100" height="100" fill="none" stroke="#FBBFA4" stroke-width="1" stroke-dasharray="400" stroke-dashoffset="400" className="border-path"/>
                        </svg>
                        <h3 className="box-name">CSS</h3>
                        <div className="image-outer image-outer-2">
                          <img className="image" src={circle} alt="スキルメーター" />
                          <img className="needle" src={needle} alt="スキルメーター針" />
                          <svg className="persent persent-2" viewBox="0 0 100 40">
                            <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle">90%</text>
                          </svg>
                        </div>
                        <p className="text">ウェブサイト、バナー等様々な物をXDで効率的に作成する事が出来ます。グリッドを使って規則性を意識したデザインを可能にします。それによりコーディングをより早く、修正を簡単に出来ます。</p>
                      </div>
                    </div>
                    <div className="col-12 col-sm-8 col-md-6 col-xl-4 offset-sm-2 offset-md-0">
                      <div className="box box-3">
                        <svg className="border-svg" viewBox="0 0 100 100" preserveAspectRatio="none">
                          <rect x="0" y="0" width="100" height="100" fill="none" stroke="#005E91" stroke-width="1" stroke-dasharray="400" stroke-dashoffset="400" className="border-path"/>
                        </svg>
                        <h3 className="box-name">Javascript</h3>
                        <div className="image-outer image-outer-3">
                          <img className="image" src={circle} alt="スキルメーター" />
                          <img className="needle" src={needle} alt="スキルメーター針" />
                          <svg className="persent persent-3" viewBox="0 0 100 40">
                            <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle">70%</text>
                          </svg>
                        </div>
                        <p className="text">写真のレタッチ、バナー作成、gif動画の作成等様々な編集が出来ます。基本的な操作は問題なく出来ます。光の操り方や合成等も行う事が可能です。</p>
                      </div>
                    </div>

                    <div className="col-12 col-sm-8 col-md-6 col-xl-4 offset-sm-2 offset-md-0">
                      <div className="box box-4">
                        <svg className="border-svg" viewBox="0 0 100 100" preserveAspectRatio="none">
                          <rect x="0" y="0" width="100" height="100" fill="none" stroke="#EDC201" stroke-width="1" stroke-dasharray="400" stroke-dashoffset="400" className="border-path"/>
                        </svg>
                        <h3 className="box-name">WordPress</h3>
                        <div className="image-outer image-outer-4">
                          <img className="image" src={circle} alt="スキルメーター" />
                          <img className="needle" src={needle} alt="スキルメーター針" />
                          <svg className="persent persent-4" viewBox="0 0 100 40">
                            <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle">70%</text>
                          </svg>
                        </div>
                        <p className="text">スライダーの実装やクリックで画像が切り替わる機能等の経験をしました。今後はよりUI、UXを意識したサイトを作成していきたいので、技術を高めていきたいです。</p>
                      </div>
                    </div>
                    <div className="col-12 col-sm-8 col-md-6 col-xl-4 offset-sm-2 offset-md-0">
                      <div className="box box-5">
                        <svg className="border-svg" viewBox="0 0 100 100" preserveAspectRatio="none">
                          <rect x="0" y="0" width="100" height="100" fill="none" stroke="#4A508E" stroke-width="1" stroke-dasharray="400" stroke-dashoffset="400" className="border-path"/>
                        </svg>
                        <h3 className="box-name">Photoshop</h3>
                        <div className="image-outer image-outer-5">
                          <img className="image" src={circle} alt="スキルメーター" />
                          <img className="needle" src={needle} alt="スキルメーター針" />
                          <svg className="persent persent-5" viewBox="0 0 100 40">
                            <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle">70%</text>
                          </svg>
                        </div>
                        <p className="text">不動産、インタビュー動画、自分で構成を考えた動画制作を経験しました。カット、テロップ、音楽の入れ方等基本的な操作は問題なく出来ます。</p>
                      </div>
                    </div>
                    <div className="col-12 col-sm-8 col-md-6 col-xl-4 offset-sm-2 offset-md-0">
                      <div className="box box-6">
                        <svg className="border-svg" viewBox="0 0 100 100" preserveAspectRatio="none">
                          <rect x="0" y="0" width="100" height="100" fill="none" stroke="#4A508E" stroke-width="1" stroke-dasharray="400" stroke-dashoffset="400" className="border-path"/>
                        </svg>
                        <h3 className="box-name">Illustrator</h3>
                        <div className="image-outer image-outer-6">
                          <img className="image" src={circle} alt="スキルメーター" />
                          <img className="needle" src={needle} alt="スキルメーター針" />
                          <svg className="persent persent-6" viewBox="0 0 100 40">
                            <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle">70%</text>
                          </svg>
                        </div>
                        <p className="text">自分で構成を考えたwebCMを作成出来ます。基本的な操作は問題なく出来ます。場面の切り替わりを意識して動画制作を行う事が出来、視聴者が楽しめる工夫が出来ます。</p>
                      </div>
                    </div>

                    <div className="col-12 col-sm-8 col-md-6 col-xl-4 offset-sm-2 offset-md-3 offset-xl-0">
                      <div className="box box-7">
                        <svg className="border-svg" viewBox="0 0 100 100" preserveAspectRatio="none">
                          <rect x="0" y="0" width="100" height="100" fill="none" stroke="#207195" stroke-width="1" stroke-dasharray="400" stroke-dashoffset="400" className="border-path"/>
                        </svg>
                        <h3 className="box-name">Premiere Pro</h3>
                        <div className="image-outer image-outer-7">
                          <img className="image" src={circle} alt="スキルメーター" />
                          <img className="needle" src={needle} alt="スキルメーター針" />
                          <svg className="persent persent-7" viewBox="0 0 100 40">
                            <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle">70%</text>
                          </svg>
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