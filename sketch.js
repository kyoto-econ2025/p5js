function setup() { // p5.jsオリジナル構文
  createCanvas(windowWidth, windowHeight); //絵を描くのでキャンバスを用意させている
  // これもp5.jsの特別な言葉
  // ブラウザのウィンドウサイズに合わせて適当なキャンバスを作って！という意味
  background(255); //背景色は白。ちなみに黒は0です。
}

function draw() { //これもp5.jsのオリジナル構文
  if (mouseIsPressed) { //マウスが押されたらどうするのかのif文
    stroke(0); //マウスが押されたら黒を描画
    strokeWeight(4); //その時のペンの太さは4
    line(pmouseX, pmouseY, mouseX, mouseY);
    // pmouseXとpmouseYは「ほんの少し前のマウスの場所」
    // mouseXとmouseYは「現在のマウスの場所」
    // つまり「少し前のマウスの場所」から「今のマウスの場所」まで線を引く
  }
}