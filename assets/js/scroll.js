//ページを横にスクロールさせる

//1.要素の数に合わせて横幅を指定
//2.トリガーが画面の一番上まできたら開始
//3.その位置に固定 スクロール量に応じて横に動かす
//4.開始位置から1000pxスクロールしたら終了

window.addEventListener("load", function () {
  //プラグインを定義
  gsap.registerPlugin(ScrollTrigger);

  const scrollArea = document.querySelector(".js-scroll__area"); //.querySelector = 最初の１つを取得
  const scrollWrap = document.querySelector(".js-scroll__wrap");
  const scrollItems = document.querySelectorAll(".js-scroll__item"); //.querySelectorAll = 全ての要素を取得
  const num = scrollItems.length; //配列の要素数を取得する

  //横幅を指定
  gsap.set(scrollWrap, { width: num * 100 + "%" }); //gsap.set : アニメーション前の状態を指定できる;
  gsap.set(scrollItems, { width: 100 / num + "%" });

  gsap.to(scrollItems, {
    //gsap.to : 現状の状態からアニメーションさせる
    xPercent: -100 * (num - 1), //x方向に移動させる
    ease: "none",
    scrollTrigger: {
      trigger: scrollArea, //トリガー
      start: "top top", //開始位置
      end: "+=2000", // 終了位置 スクーロ－ル量の幅調整 200o0px動いたら
      pin: true, //ピン留め
      scrub: true, //スクロール量に応じて動かす
    },
  });
});

//gsap以外にも「Locomotive Scroll」で横スクロール（ページ内リンクも可能）で動かせる
//「Locomotive Scroll」：スクロールに伴い要素をアニメーション表示させたり、パララックスエフェクトを簡単に実装できるライブラリ
