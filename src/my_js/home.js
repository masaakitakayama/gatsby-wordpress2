// ヘッダーの背景色の透明度を変更

const header = document.querySelector('.header');
// const headerlogo=document.querySelector('.header__body-logo');

window.addEventListener('scroll', function() {
  const scrollTop = window.scrollY;
  const shrinkThreshold = 100; // 100pxスクロールしたら縮小する

  if (scrollTop >= shrinkThreshold) {
    header.classList.add('header-scroll');
    // headerlogo.classList.add('header__body-logo--small');
  } else {
    header.classList.remove('header-scroll');
    // headerlogo.classList.add('header__body-logo--small');
  }
});

//ブートストラップのモーダルの新しいインスタンスを作成
document.addEventListener('DOMContentLoaded', function() {
  const modal = new bootstrap.Modal(document.getElementById('exampleModal'));
});

// モーダルを非表示する関数
function modal_hide() {
	modal.hide();
}

// リンクをクリックしたらモーダルを非表示する
let Workslink = document.querySelector('.works-link');
Workslink.addEventListener('click', modal_hide);
