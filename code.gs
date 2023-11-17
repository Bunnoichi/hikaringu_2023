function myFunction() {
  
}

function doGet() {
  return HtmlService.createTemplateFromFile('index').evaluate();
}

function getSsValue() {
  // const sh = SpreadsheetApp.getActiveSpreadsheet();
  var sh_id = '11tlz1lTOwBSYBValj1bhtgeE7ddkrq0ZT1JwLJST_wg';
  const sh = SpreadsheetApp.openById(sh_id);
  const value = sh.getRange('A1').getValue();
  return value;
}

function setSsValue(value) {
  const sh = SpreadsheetApp.openById('11tlz1lTOwBSYBValj1bhtgeE7ddkrq0ZT1JwLJST_wg');
  sh.appendRow(value);
}

function getAppUrl() {
  return ScriptApp.getService().getUrl();
}