spreadsheed_id_name = '1G0sJRxNn67iJQOWuoRf7CKXnBJKJf3SASZeDKZIAAZo'

function doGet() {
  const htmlOutput = HtmlService.createTemplateFromFile('index');

  var spreadSheet = SpreadsheetApp.openById(spreadsheed_id_name);
  var targetSheet = spreadSheet.getSheetByName('informations');

  // 名前を取得
  htmlOutput.array_name = targetSheet.getRange("B1:B5");
  // Logger.log(htmlOutput.array_name.getValues()[3][0]);

  // 入荷数を取得
  htmlOutput.array_in = targetSheet.getRange("C7:C11");
  Logger.log(htmlOutput.array_in.getValues());  

  htmlOutput_evaluated = htmlOutput.evaluate();
  htmlOutput_evaluated.addMetaTag('viewport', 'width=device-width, initial-scale=1');

  return htmlOutput_evaluated;
}

function setSsValue(value) {
  const sh = SpreadsheetApp.openById(spreadsheed_id_name);
  sh.appendRow(value);
}

function getEarnings() {
  var spreadSheet = SpreadsheetApp.openById(spreadsheed_id_name);
  var targetSheet = spreadSheet.getSheetByName('informations');
  range1 = targetSheet.getRange("B7:B11");

  // Logger.log(range1.getValues());

  return range1.getValues();
}