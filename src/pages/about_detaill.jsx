import React, { useEffect } from 'react';
import Layout from '../components/layout';
import { Link } from 'gatsby';
import '../styles/about-detaill.css';

const AboutDetaill = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <div className="about-detaill">
        <div className="container">
          <h1 className="main-title">About</h1>
          <div className="content">
            <section className="profile-section">
              <div className="profile-grid">
                <div className="profile-info">
                  <h2>基本情報</h2>
                  <dl>
                    <dt>氏名</dt>
                    <dd>M.T</dd>

                    <dt>出身地</dt>
                    <dd>横浜</dd>

                    <dt>生年月日</dt>
                    <dd>1995年7月16日 28歳</dd>
                  </dl>
                </div>
              </div>

              <div className="career-section">
                <h2>経歴</h2>
                <p>
                  高校卒業後、公務員試験対策の専門学校に通い、その後約7年間学校用務員として勤務。体調を崩し退職。すぐに社会復帰をせず、まずはスキルを身につけたいという思いから、現在は就労移行支援に通い、WEB制作を軸に動画制作等幅広く学習している。
                </p>
              </div>

              <div className="hobbies-section">
                <h2>趣味・特技</h2>
                <p>
                  趣味は、ゲーム、駅伝観戦、ランニングです。ランニングはフルマラソンも完走した経験があります。大学駅伝も好きで、有名大学の選手の持ちタイムや成績を把握しています。また、ゲームは特にドラクエが好きで、新作を買うと徹夜してプレイすることもあります。
                </p>
                <p>
                  特技は三段跳です。高校時代に3年間取り組んでおり、日々の鍛錬と分析を重ねた結果、1cmでも記録が伸びた時はとても感動しました。
                </p>
              </div>

              <div className="career-plan-section">
                <h2>キャリアプラン</h2>
                <div className="career-goals">
                  <div className="career-goal">
                    <h3>実際の仕事を通してスキルを高め会社に貢献する</h3>
                  </div>
                  <div className="career-goal">
                    <h3>webも動画も出来るマルチクリエイターになる</h3>
                  </div>
                  <div className="career-goal">
                    <h3>技術面だけでなく、ディレクションも出来るようになる</h3>
                  </div>
                </div>
                <p>
                  私は将来、Web制作を軸に動画制作など、幅広い制作ができるマルチクリエイターを目指しています。
                  技術面だけでなく、企画やクライアントとのやり取りを通しディレクションの能力を高めていく事で、仕事を管理出来るようになっていきたいです。また、現在通所している作業所で広告関連の仕事を経験したので、より深く広告も学び仕事に生かしていきたいです。
                </p>
              </div>

              <div className="strengths-section">
                <h2>私の強み</h2>
                <div className="strength">
                  <h3>柔軟性がある</h3>
                  <p>
                    自分の考えに固執せず他者の意見で良いと思ったものは積極的に取り入れるようにしています。まずは試してみて、より効率良く作業が出来るようにする事を心掛けています。この強みはウェブ制作でも生かされており、より効率的に作業が出来るツール等を積極的に取り入れています。
                  </p>
                </div>
                <div className="strength">
                  <h3>物事を継続出来る</h3>
                  <p>
                    私は中高6年間陸上競技をしていました。6年間やっていると記録が伸びない時も多々あったのですが、その時に思い悩まずに良い意味で淡々と自分に必要なトレーニングを続ける事が出来ました。この経験はウェブ制作をしていく中でかなり生かされています。自分はデザインが苦手で学習初期は全く形になりませんでした。その時に出来ない事に頭を悩まさずに一つ一つ課題を改善していき、乗り越えてきました。今後もこの強みを生かしてより良い作品を作っていきたいです。
                  </p>
                </div>
                <div className="strength">
                  <h3>モチベーションを持続出来る</h3>
                  <p>
                    モチベーションを持続するために大切にしている事があります。それは小さな目標を作り、それを一つずつ達成していく事です。達成感を感じる機会を増やす事でモチベーションの維持を図っています。モチベーションを持続させる事は仕事をしていく中で重要だと考えているので、この強みを生かしていきたいです。
                  </p>
                </div>
              </div>
            </section>

            <div className="back-link">
              <Link to="/" className="button button--primary">
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AboutDetaill;

export const Head = () => <title>About | M.Portfolio</title>