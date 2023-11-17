function myFunction() {
  
}

function doGet() {
  const htmlOutput = HtmlService.createTemplateFromFile('index');
  // htmlOutput.addMetaTag('viewport', 'width=device-width, initial-scale=1');

  var spreadSheet = SpreadsheetApp.openById('1G0sJRxNn67iJQOWuoRf7CKXnBJKJf3SASZeDKZIAAZo');
  var targetSheet = spreadSheet.getSheetByName('informations');

  range1 = targetSheet.getRange("B1:B4");
  Logger.log(range1.getValues());

  htmlOutput.array = targetSheet.getRange("B1:B4");
  Logger.log(htmlOutput.array.getValues()[1][0]);

  htmlOutput_evaluated = htmlOutput.evaluate();
  htmlOutput_evaluated.addMetaTag('viewport', 'width=device-width, initial-scale=1');

  return htmlOutput_evaluated;
}

function setSsValue(value) {
  const sh = SpreadsheetApp.openById('1G0sJRxNn67iJQOWuoRf7CKXnBJKJf3SASZeDKZIAAZo');
  sh.appendRow(value);
}