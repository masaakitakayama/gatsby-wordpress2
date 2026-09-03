import React, { useEffect } from 'react';
import Layout from '../components/layout';
import { Link } from 'gatsby';
import '../css/about-detaill.css';
import ccna from '../static/ccna.png';
import saa from '../static/aws-saa.png';
import clf from '../static/aws-clf.png';
import vba from '../static/vba-standard-image.png';

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
                    <dd>1995年生まれ</dd>
                  </dl>
                </div>
              </div>
              <div className="career-section">
                <h2>経歴</h2>
                <p>
                  高校卒業後、公務員試験対策の専門学校に通い、その後約7年間学校用務員として勤務。体調を崩し退職し、就労移行支援にてWEB制作や動画制作を学ぶ。その後株式会社SHIFTの障害者雇用にて社内のWEBサポート業務を行う。現在はネットワーク・インフラの学習をしている。
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

              <div className="Certification-section">
                <h2>資格</h2>
                <div className="Certification-inner">
                  <div className="Certification-item">
                    <h3 className="Certification-name">CCNA</h3>
                    <img className="Certification-image" src={ccna} alt="" />
                    <p className="Certification-time">2026/8/21</p>
                    <Link className="Certification-link" to="https://www.credly.com/earner/earned/badge/00252e07-2a87-45d2-bf03-16b556297f0e">資格証明サイトURL</Link>
                  </div>
                  <div className="Certification-item">
                    <h3 className="Certification-name">AWS SAA</h3>
                    <img className="Certification-image" src={saa} alt="" />
                    <p className="Certification-time">2026/4/20</p>
                    <Link className="Certification-link" to="https://www.credly.com/earner/earned/badge/b46c8eb5-c981-45e3-9a96-a3f9e298012c">資格証明サイトURL</Link>
                  </div>
                  <div className="Certification-item">
                    <h3 className="Certification-name">AWS CLF</h3>
                    <img className="Certification-image" src={clf} alt="" />
                    <p className="Certification-time">2026/3/1</p>
                    <Link className="Certification-link" to="https://www.credly.com/earner/earned/badge/d137fee8-09cc-47d1-bd87-41d1d8eb04ae">資格証明サイトURL</Link>
                  </div>
                  <div className="Certification-item">
                    <h3 className="Certification-name">Excel VBA Standard</h3>
                    <img className="Certification-image" src={vba} alt="" />
                    <p className="Certification-time">2024/09/15</p>
                    <Link className="Certification-link" to="https://www.openbadge-global.com/api/v1.0/openBadge/v2/Wallet/Public/GetAssertionShare/S25nNTQ0eE1HWmphNlVEQTExQi9hQT09">資格証明サイトURL</Link>
                  </div>
                </div>
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
  
              <div className="row g-4 career-goals">
                <div className="col-12 col-md-4">
                  <div className="career-goal-card">
                    <h3>1〜2年目：基礎の実務定着と運用サポート</h3>
                    <p>
                      CCNAやAWS SAAの学習で得た知識をベースに、まずはマニュアルに沿った日常的な運用作業やログ監視などを確実にこなせるようになります。実際のシステム挙動やエラー対応の流れを学び、基礎的な実務能力を身につけます。
                    </p>
                  </div>
                </div>

                <div className="col-12 col-md-4">
                  <div className="career-goal-card">
                    <h3>3〜4年目：障害一次対応と設定変更の習熟</h3>
                    <p>
                      ネットワーク機器やAWS環境の基本的な設定変更、アラート発生時の一次切り分け対応を担当できるようにします。トラブルの原因調査や手順書の作成・更新なども行い、自立して運用業務を進められる範囲を広げていきます。
                    </p>
                  </div>
                </div>

                <div className="col-12 col-md-4">
                  <div className="career-goal-card">
                    <h3>5年目：確かな技術で支える運用保守エンジニア</h3>
                    <p>
                      オンプレミス・クラウド両面で発生するトラブルに迅速に対応し、システムの安定稼働をしっかりと支えられるエンジニアを目指します。手順の改善やチーム内での円滑な情報共有など、現場の運用レベル向上にも貢献していきます。
                    </p>
                  </div>
                </div>
              </div>

              <p className="career-plan-summary mt-4">
                私は将来、システムやネットワークの安定稼働を現場でしっかりと支える「信頼される運用保守エンジニア」を目指しています。
                CCNAやAWS SAAの資格学習を通じて学んだネットワーク・クラウドの基礎を大切にしながら、実務を通じて一つひとつ着実に知識と経験を重ねていきたいと考えています。
                まずは手順通りの運用作業からスタートし、将来的には障害の切り分けや迅速なトラブル対応を安心して任せてもらえる存在になれるよう努めてまいります。
              </p>
            </div>

              <div className="strengths-section">
                <h2>私の強み</h2>
                <div className=" strength">
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
                ホームに戻る
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