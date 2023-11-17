spreadsheed_id_name = '1-bV2iRK0RzWQ9yS_cYtSWV9A-bXZpplEqCP6Rub9K0A'

function doGet() {
  const htmlOutput = HtmlService.createTemplateFromFile('index');

  var spreadSheet = SpreadsheetApp.openById(spreadsheed_id_name);
  var targetSheet = spreadSheet.getSheetByName('informations');

  // 名前を取得
  htmlOutput.array_name = targetSheet.getRange("B1:B5");
  // Logger.log(htmlOutput.array_name.getValues()[3][0]);

  // 入荷数を取得
  htmlOutput.array_in = targetSheet.getRange("C7:C11");

  // 伝言を取得
  var targetSheet = spreadSheet.getSheetByName('messeage');
  var todayStr_date = Utilities.formatDate(targetSheet.getRange(targetSheet.getLastRow(), 1,1,4).getValues()[0][0], 'JST', 'yyyy年MM月dd日');
  var todayStr_time = Utilities.formatDate(targetSheet.getRange(targetSheet.getLastRow(), 1,1,4).getValues()[0][1], 'JST', 'HH時mm分ss秒');
  var array_messeage = [todayStr_date, todayStr_time, targetSheet.getRange(targetSheet.getLastRow(), 3,1,2).getValues()[0][0], targetSheet.getRange(targetSheet.getLastRow(), 3,1,2).getValues()[0][1]];
  htmlOutput.array_messeage = array_messeage;


  htmlOutput_evaluated = htmlOutput.evaluate();
  htmlOutput_evaluated.setTitle('ひかリング記録');
  htmlOutput_evaluated.addMetaTag('viewport', 'width=device-width, initial-scale=1');

  return htmlOutput_evaluated;
}

function setSsValue(value) {
  const sh = SpreadsheetApp.openById(spreadsheed_id_name);
  sh.appendRow(value);
}

function getMesseage_Switch() {
  return SpreadsheetApp.openById(spreadsheed_id_name).getSheetByName('informations').getRange("B13").getValue();
}

function getEarnings() {
  var spreadSheet = SpreadsheetApp.openById(spreadsheed_id_name);
  var targetSheet = spreadSheet.getSheetByName('informations');
  range1 = targetSheet.getRange("B7:B11");

  // Logger.log(range1.getValues());

  return range1.getValues();
}