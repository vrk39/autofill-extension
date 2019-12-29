chrome.runtime.onMessage.addListener(gotMessage);
function gotMessage(message, sender, sendResponse) {
   console.log('content script receive message '+message);
   if(message.FILL_INSURANCE_FORM){
      
      fillInsuranceForm(message.FILL_INSURANCE_FORM);
   }
  console.log(message);
}