// This code is written in Google Apps Script(JavaScript)
// This code runs the Addon
// The code accepts the Max responses and then passes it in the Limit Responses function

function onOpen(){

  FormApp.getUi().createAddonMenu().addItem('Open','show_sidebar').addToUi();
}

function show_sidebar(){

  const html = HtmlService.createTemplateFromFile("google_forms").evaluate().setTitle("Form Limiter Add-on");
  FormApp.getUi().showSidebar(html);
}

function onFormsubmit(){

  const limit_value = PropertiesService.getDocumentProperties().getProperty("limit");
  var form = FormApp.getActiveForm();
  var responses = form.getResponses();
  //Logger.log("The maximum responses are : " + maximum_responses);
  var len = responses.length;
  Logger.log(len)

  if (len == maximum_responses){

    form.setAcceptingResponses(false);
    
  }
}

function limit_responses(){

  var form = FormApp.getActiveForm();
  var responses = form.getResponses();
  //Logger.log("The maximum responses are : " + maximum_responses);
  var len = responses.length;
  Logger.log(len)

  if (len == maximum_responses){

    form.setAcceptingResponses(false);
    
  }
}
