spreadsheed_id_name = '1-bV2iRK0RzWQ9yS_cYtSWV9A-bXZpplEqCP6Rub9K0A'

function doGet() {
  const htmlOutput = HtmlService.createTemplateFromFile('index').evaluate();

  htmlOutput.addMetaTag('viewport', 'width=device-width, initial-scale=1');
  htmlOutput.setTitle("伝言板ページ");
  return htmlOutput;
}

function setSsValue(value) {
  var targetSheet = SpreadsheetApp.openById(spreadsheed_id_name).getSheetByName('messeage');
  targetSheet.appendRow(value);
}