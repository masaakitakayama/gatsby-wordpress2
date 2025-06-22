import { useEffect } from 'react';

const SkillsAnimation = () => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // スキルレベルを配列で管理
      const skillLevels = [80, 90, 70, 70, 70, 70, 70];

      // 要素のセレクタを配列で管理
      const selectors = [
        '.image-outer-1',
        '.image-outer-2',
        '.image-outer-3',
        '.image-outer-4',
        '.image-outer-5',
        '.image-outer-6',
        '.image-outer-7',
      ];

      // ボックスのセレクタを配列で管理
      const boxSelectors = [
        '.box-1',
        '.box-2',
        '.box-3',
        '.box-4',
        '.box-5',
        '.box-6',
        '.box-7',
      ];

      // スクロールイベントハンドラー
      function handleScroll(index) {
        const imageOuter = document.querySelector(selectors[index]);
        const box = document.querySelector(boxSelectors[index]);

        if (imageOuter && box) {
          const needle = imageOuter.querySelector('.needle');
          const persent = imageOuter.querySelector('.persent');
          const imageOuterTop = imageOuter.getBoundingClientRect().top;
          const windowHeight = window.innerHeight;

          if (imageOuterTop + 70 < windowHeight) {
            // ボックスの枠線アニメーション
            if (!box.classList.contains('box-animation')) {
              box.classList.add('box-animation');
            }

            // 針とパーセンテージのアニメーション（既存のまま）
            if (needle) {
              needle.classList.add(`needle-${skillLevels[index]}`);
            }
            if (persent) {
              persent.classList.add('persent-animation');
            }
          }
        } else {
          console.error(`要素 "${selectors[index]}" または "${boxSelectors[index]}" が見つかりません。`);
        }
      }

      const handleScrollAll = () => {
        selectors.forEach((selector, index) => {
          handleScroll(index);
        });
      };

      // スクロールイベントリスナーを追加
      window.addEventListener('scroll', handleScrollAll);

      // 初回ロード時にもチェック（要素が最初からviewportに入っている場合）
      handleScrollAll();

      // クリーンアップ関数（コンポーネントがアンマウントされたときにイベントリスナーを削除）
      return () => {
        window.removeEventListener('scroll', handleScrollAll);
      };
    }
  }, []); // 空の依存配列で、マウント時とアンマウント時のみ実行

  return null; // このコンポーネントは特にレンダリングする要素がないため null を返す
};

export default SkillsAnimation;