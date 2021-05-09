box1にカーソルが重なった時に色が青に変わる
$(function(){
  $('.box1').mouseover(function(){
    $('.box1').css({'background-color':'#0000ff'});
  });
  $('.box1').mouseout(function(){
    $('.box1').css({'background-color': '#ff0000'});
  });
});

//.box1のマウスアウトした時に赤色に戻る処理
//上記のコードに連結してリファクタリング
// $(function(){
//   $('.box1').mouseout(function(){
//     $('.box1').css({
//       'background-color':'#ff0000',
//     });
//   });
// });

//マウスオーバー時に.box1-extが"追加"され、マウスアウトで外れる
// $(function(){
//   $('.box1').mouseover(function(){
//     $('.box1').addClass('box1-ext');
//   });
//   $('.box1').mouseout(function(){
//     $('.box1').removeClass('box1-ext');
//   });
// });

//クリックされた時に、box1-extが追加され、mouseoutで削除される記述
$(function(){
  $('.box1').on('click',function(){
    $('.box1').addClass('box1-ext');
  });
  $('.box1').mouseout(function(){
    $('.box1').removeClass('box1-ext');
  });
});