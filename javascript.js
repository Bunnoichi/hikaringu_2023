
window.addEventListener('load', loggg(), false);

const id_name_array = [
  'input_handler_name',
  'input_checked_volunteer',
  'input_time_stamp_date',
  'input_time_stamp_time',
  'target_choice',
  'input_donation_amount',
  'color_choice',
  'input_commentary',
  'spot_choice'
];

// ラジオボタンの選択要素を返す
function radioButton(name) {
  var elements = document.getElementsByName(name);

  for ( var a="", i=elements.length; i--; ) {
      if ( elements[i].checked ) {
        var a = elements[i].value ;
        break ;
      }
  }

  if ( a === "" ) {
      return '';
  } else {
      return a;
  }
}

// ボックス表示に関する関数
// 「ボックス表示」にチェックを入れたとき、色本数のフレックスボックスを表示
function box_show(){
  if(document.getElementById("box_show").checked == false){
    document.getElementsByClassName('color_amount_flex_parent')[0].style.display ="none";
    document.getElementsByClassName('color_amount_flex_parent')[1].style.display ="none";
      console.log('none');
  }else{
    document.getElementsByClassName('color_amount_flex_parent')[0].style.display ="flex";
    document.getElementsByClassName('color_amount_flex_parent')[1].style.display ="flex";
      console.log('checked');
  }
}

// 来場者分類のフレックスボックス表示に関する関数
function show_target_classification_flexbox(){
  if(document.getElementById("show_target_classification_flexbox").checked == false){
    document.getElementById('target_classification_flexbox').style.display ="none";
      console.log('false');
  }else{
    document.getElementById('target_classification_flexbox').style.display ="block";
      console.log('checked');
  }
}

// 配布した色の本数をカウント
function color_counter(color) {

  var color_each_amount;
  var donation_amount = document.getElementById('input_donation_amount');

  switch (color) {
  case 'color_P':
      color_each_amount = document.getElementById('color_P_amount');
      document.getElementById("color_amount_flex_child_P_span").textContent = Number(color_each_amount.textContent) + 1;
      break;
      
  case 'color_Y':
      color_each_amount = document.getElementById('color_Y_amount');
      document.getElementById('color_amount_flex_child_Y_span').textContent = Number(color_each_amount.textContent) + 1;
      break;

  case 'color_B':
      color_each_amount = document.getElementById('color_B_amount');
      document.getElementById('color_amount_flex_child_B_span').textContent = Number(color_each_amount.textContent) + 1;
      break;

    case 'color_G':
      color_each_amount = document.getElementById('color_G_amount');
      document.getElementById('color_amount_flex_child_G_span').textContent = Number(color_each_amount.textContent) + 1;
      break;

  case 'color_W':
      color_each_amount = document.getElementById('color_W_amount');
      document.getElementById('color_amount_flex_child_W_span').textContent = Number(color_each_amount.textContent) + 1;
      break;
  
  case 'color_Ra':
      color_each_amount = document.getElementById('color_Ra_amount');
      document.getElementById('color_amount_flex_child_Ra_span').textContent = Number(color_each_amount.textContent) + 1;
      break;

  default:
      console.log('ERROR: color_counter(color).');
      console.log(color)
      break;
  }
  donation_amount.value = Number(donation_amount.value) + 300;
  color_each_amount.textContent = Number(color_each_amount.textContent) + 1;
}

// 配布本数をリセット
function color_counter_reset(){
  document.getElementById('color_P_amount').textContent = '';
  document.getElementById('color_B_amount').textContent = '';
  document.getElementById('color_G_amount').textContent = '';
  document.getElementById('color_Y_amount').textContent = '';
  document.getElementById('color_W_amount').textContent = '';
  document.getElementById('color_Ra_amount').textContent = '';
  document.getElementById('color_amount_flex_child_P_span').textContent = '';
  document.getElementById('color_amount_flex_child_Y_span').textContent = '';
  document.getElementById('color_amount_flex_child_B_span').textContent = '';
  document.getElementById('color_amount_flex_child_G_span').textContent = '';
  document.getElementById('color_amount_flex_child_W_span').textContent = '';
  document.getElementById('color_amount_flex_child_Ra_span').textContent = '';
  document.getElementById('input_donation_amount').value = 0;
  remove_radioButton(id_name_array[6]);
}

// ラジオボタンの選択をクリアにする
function remove_radioButton(name) {
  var elements = document.getElementsByName(name);

  // 選択状態の値を取得
  for ( var a="", i=elements.length; i--; ) {
  elements[i].checked = false;
  }
}

function remove_content() {
  remove_radioButton(id_name_array[4]);
  remove_radioButton(id_name_array[6]);
  document.getElementById(id_name_array[7]).value = '';
}

// 登録ボタンリクエスト時、各変数を配列にして返却
// 不足分がある場合は不足配列を返却
function input_and_errorCheck(){
  var value;
  var alert_value = [];
  var return_value = [];

  var now = new Date();

  // 名前がちゃんと記録できてるか
  if ((value = document.getElementById(id_name_array[0]).value) === '') {
      alert_value.push('名前');
  } else {
      return_value.push(value);
  }

  // // 当日ボランティアか
  // return_value.push(String(document.getElementById(id_name_array[1]).checked));

  // 記録日時を配列に格納
  return_value.push(now.getFullYear() + "-" + (Number(now.getMonth()) + 1)  + "-" + now.getDate());
  return_value.push(now.getHours() + ':' + now.getMinutes() + ':' + now.getSeconds());

  // 配布場所が記録されてるか
  if ((value = radioButton(id_name_array[8])) === '') {
      alert_value.push('配布場所');
  } else {
      return_value.push(value);
  }

  // 客層が記録されてるか
  if ((value = radioButton(id_name_array[4])) === '') {
      alert_value.push('客層');
  } else {
      return_value.push(value);
  }

  // 寄附額が記録されてるか
  if ((value = document.getElementById(id_name_array[5]).value) === '') {
      alert_value.push('寄付額');
  } else {
      return_value.push(value);
  }

  // 配布情報がしっかり記録されてるか（最低でも1本記録されてるか）
  color_P_amount = document.getElementById('color_P_amount').textContent;
  color_Y_amount = document.getElementById('color_Y_amount').textContent;
  color_B_amount = document.getElementById('color_B_amount').textContent;
  color_G_amount = document.getElementById('color_G_amount').textContent;
  color_W_amount = document.getElementById('color_W_amount').textContent;
  color_Ra_amount = document.getElementById('color_Ra_amount').textContent;
  if (color_P_amount == 0 && color_Y_amount == 0 && color_B_amount == 0 && color_G_amount == 0 && color_W_amount == 0 && color_Ra_amount == 0) {
      alert_value.push('配布色本数');
  } else {
  return_value.push(color_P_amount);
  return_value.push(color_Y_amount);
  return_value.push(color_B_amount);
  return_value.push(color_G_amount);
  return_value.push(color_Ra_amount);
  return_value.push(color_W_amount);
  }

  // 特記事項を記録
  return_value.push(document.getElementById(id_name_array[7]).value);

  // デバッグ用
  console.log('return_value' + return_value);
  console.log('alert_value' + alert_value);

  // すべて記録できていれば記録内容（return_value配列）を返す
  // 不足情報（alert_value配列 != 0）があればそれを返す
  if (alert_value.length === 0) {
      return_value.unshift(0);
      return return_value;
  } else {
      alert_value.unshift(1);
      return alert_value;
  }
}

// 配布状況の表示非表示に関する関数
function show_eaarning_display(){
  if(document.getElementById("checkbox_show_eaarning_display").checked == false){
    document.getElementById('earning_display_parent').style.display ="none";
      console.log('false');
  }else{
    document.getElementById('earning_display_parent').style.display ="block";
      console.log('checked');
  }
}

// 登録
google.script.run
  function submit() {

      // 記録を確認し、戻り値配列を格納
      var result_input_and_errorCheck = input_and_errorCheck();

      var container = document.getElementById('container');
      var container_1 = document.getElementById('container_1');
      var container_2 = document.getElementById('container_2');

      // input_and_errorCheckに応じて、登録完了と失敗を表示
      if (result_input_and_errorCheck[0] === 0) {
        result_input_and_errorCheck.shift();

        container.style.background = "#31fb422e";
        container.style.border = "1px solid #179800";
        container_1.textContent = '登録完了！';
        container_2.textContent = (result_input_and_errorCheck);
        color_counter_reset();
        console.log('clear');
      } else {
        console.log('out');
        result_input_and_errorCheck.shift();
        
        container.style.background = "#ffecec";
        container.style.border = "1px solid #f5aca6";

        container_1.textContent = '登録失敗！不足あります！';
        container_2.textContent = (result_input_and_errorCheck + 'を入れて！');
        return;
      }

      // デバッグ用
      console.log(result_input_and_errorCheck);

      // 再利用しない情報を削除
      remove_content();

      google.script.run.setSsValue(result_input_and_errorCheck);

  }

  function earning_display_update() {

      // https://hazime-style.com/?p=1473
      // https://qiita.com/fujino-fpu/items/4a63cbde8e75e3fba9f4
      
      google.script.run.withSuccessHandler(function(updated_array){
        var display_R = document.getElementById('earning_display_child_R_span');
        var display_Y = document.getElementById('earning_display_child_Y_span');
        var display_B = document.getElementById('earning_display_child_B_span');
        var display_B = document.getElementById('earning_display_child_G_span');
        var display_Ra = document.getElementById('earning_display_child_Ra_span');
        var display_W = document.getElementById('earning_display_child_W_span');
        
        display_R.textContent = updated_array[0][0];
        display_Y.textContent = updated_array[1][0];
        display_B.textContent = updated_array[2][0];
        display_Ra.textContent = updated_array[3][0];
        display_W.textContent = updated_array[4][0];
        
        var now = new Date();
        document.getElementById('updated_time').textContent = 
            '最終更新 ; ' + 
            now.getFullYear().toString() + '-' + 
            now.getMonth().toString() + '-' + 
            now.getDate().toString() + ' - ' + 
            now.getHours().toString().padStart(2, '0') + ':' + 
            now.getMinutes().toString().padStart(2, '0') + ':' + 
            now.getSeconds().toString().padStart(2, '0');

        console.log("updated_array");
      }).getEarnings();
  }

  function loggg(){
    google.script.run.withSuccessHandler(function(messeage_switch) {
      console.log(messeage_switch);
        if (messeage_switch === 'ON') {
           document.getElementsByClassName('Messeage_display')[0].style.display = 'block';
        } else {
           document.getElementsByClassName('Messeage_display')[0].style.display = 'none';
        }
     }).getMesseage_Switch();
};