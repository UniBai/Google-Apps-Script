function myFunction(表單提交) {
  let form = 表單提交.source;
  //let form = SpreadsheetApp.getActive();
  let sheet = form.getSheetByName("表單回應 1");
  let last = sheet.getLastRow();

  let name = sheet.getRange(last, 2).getValue();

  let email = sheet.getRange(last, 3).getValue();

  let classes = sheet.getRange(last, 4).getValue();

  let classsheet = form.getSheetByName("Class Name");

  if (classsheet){
    classsheet.appendRow([Name, Email]);
  } else{
    classsheet = form.insertSheet(classes);
    classsheet.appendRow(["Name", "E-mail"]);
    classsheet.appendRow([name, email]);
  }

  let notify = DocumentApp.openById("1VaMHvHW6kR1GVsz_XXfTMR4F_cATkmsFp_vB8NRcwH0")
  let content = notify.getBody().getText();
  let intro = "Hi " + name + "\n\n" + content;
  GmailApp.sendEmail(email, "感謝您的報名", intro)

  

}
