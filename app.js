// var hello = "Hello World";
// alert(hello);

// var str1 = "Hello";
// var str2 = "World!!";
// alert(str1 + str2);

//みかんとりんごの値段を比べる条件分岐
// var orange = 100;
// var apple = 120;

// if(orange < apple){
//   alert('みかんの値段がりんごより安い');
// }else if(orange == apple){
//   alert('みかんとりんごが同じ値段');
// }else{
//   alert('みかんの値段がりんごより高い');
// }

//一から始まり、2づつ掛けていき、100に到達するまでに何回かかったか調べる。
// var max = 100;
// var num = 1;
// var count = 0;

// while(num < max){
//   num = num * 2;
//   count = count + 1;
// }

// alert('2を掛け続けて' + max + 'を超えるのに必要だった回数は' + count + '回です');

//変数numに1から10までの値を順番にプラスしていく。変数iの値が、11未満の数字まで
// var i;
// var num = 0;

// for(i = 1;i < 11; i++){
//   num = num + i;
// }

// alert('1から10まで足し算した結果は' + num + 'です');

//確認問題

// alert(3 + 3); //6
// alert(3 - 2); //1
// alert(3 * 3); //9
// alert(3 / 1); //3

// //メイン部分
// var alertString;
// alertString = addString("WebCamp");

// //作成した関数を呼び出す
// alert(alertString);

// // 作成した関数
// function addString(strA){
//   var addStr = "Hello " + strA;
// return addStr;
// }

//入力ダイアログで値を入力してみる
// var promptStr = prompt('何か好きな文字を入力してください');

// alert(promptStr);

//ジャンケンの手を入力してもらうプロンプトらんを生成
var user_hand = prompt('ジャンケンの手をグー・チョキ・パーから選んでください。');
// ユーザの手が（nullを含む）どれにも当てはまらなかった場合の処理
while((user_hand != 'グー') && (user_hand != 'チョキ') && (user_hand != 'パー') && (user_hand != null)){
  alert('グー・チョキ・パーのしずれかを入力してください');
  user_hand = prompt('ジャンケンの手をグー、チョキ、パーから選んでください。')
}
//ジャンケンの手をランダムに作成する関数を呼び出す
var js_hand = getJShand();

//ユーザの手とJavaScryptのジャンケンの手を比べる関数を呼び出し、結果をjudgeに入れる。
var judge = winLose(user_hand,js_hand);

//ユーザの手がnullじゃなかった場合は結果を、nullだった場合は、メッセージを出す。
if (user_hand != null){
  alert('あなたの選んだ手は' + user_hand + 'です。\nJavaScryptの選んだ手は' + js_hand + 'です。\n結果は' + judge + 'です。');
}else{
  alert("またチャレンジしてね")
}
//ランダムジャンケンの手を作成する関数
function getJShand(){
  var js_hand_num = Math.floor(Math.random()*3);
 var hand_name;

  if(js_hand_num == 0){
    hand_name = "グー";
  }else if(js_hand_num == 1){
    hand_name = "チョキ";
  }else if(js_hand_num == 2){
    hand_name = "パー";
  }
  return hand_name;
}

//ユーザーの手とJavaScryptのジャンケンの手を比べる関数
function winLose(user,js){
  var winLoseStr;

if(user == "グー"){
  if(js == "グー"){
    winLoseStr = "あいこ";
  }else if(js == "チョキ"){
    winLoseStr = "勝ち";
  }else if(js == "パー"){
    winLoseStr = "負け";
  }
}else if(user == "チョキ"){
  if(js == "グー"){
    winLoseStr = "負け"
  }else if(js == "チョキ"){
    winLoseStr = "あいこ";
  }else if(js == "パー"){
    winLoseStr = "勝ち";
  }
}else if(user == "パー"){
  if(js == "グー"){
    winLoseStr = "勝ち";
  }else if(js == "チョキ"){
    winLoseStr = "負け";
  }else if(js == "パー"){
    winLoseStr = "あいこ";
  }
}

  return winLoseStr;
}