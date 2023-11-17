const id_name_array = [
   'input_handler_name',
   'input_commentary'
];

function remove_content() {
   document.getElementById(id_name_array[0]).value = '';
   document.getElementById(id_name_array[1]).value = '';
}

// 登録ボタンリクエスト時、各変数を配列にして返却
// 不足分がある場合は不足配列を返却
function input_and_errorCheck(){
   var value;
   var alert_value = [];
   var return_value = [];

   var now = new Date();
   
   // 記録日時を配列に格納
   return_value.push(now.getFullYear() + "-" + (Number(now.getMonth()) + 1)  + "-" + now.getDate());
   return_value.push(now.getHours() + ':' + now.getMinutes() + ':' + now.getSeconds());

   // 名前がちゃんと記録できてるか
   if ((value = document.getElementById(id_name_array[0]).value) === '') {
      alert_value.push('名前');
   } else {
      return_value.push(value);
   }

   // 伝言の中身があるか
   if ((value = document.getElementById(id_name_array[1]).value) === '') {
      alert_value.push('伝言の中身');
   } else {
      return_value.push(value);
   }

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