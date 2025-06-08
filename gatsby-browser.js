// gatsby-browser.js
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';

// ページ遷移時に必ず一番上にスクロール
export const onRouteUpdate = ({ location }) => {
  if (typeof window !== 'undefined') {
    // ハッシュリンク（#）がある場合は自動スクロールを防ぐ
    if (!location.hash) {
      // スムーズスクロールを無効化して即座にトップへ
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'instant'
      });
    }
  }
};

// 初回レンダリング時にも適用
export const onInitialClientRender = () => {
  if (typeof window !== 'undefined') {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant'
    });
  }
};
