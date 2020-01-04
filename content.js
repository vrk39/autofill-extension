chrome.runtime.onMessage.addListener(gotMessage);
function gotMessage(message, sender, sendResponse) {
   console.log('content script receive message '+message);
   if(message.FILL_INSURANCE_FORM){
      
      formFiller(message.FILL_INSURANCE_FORM);
      
      console.log(message);
   }
}

const formFiller = async function(insuranceData){
   let formfillup = await fillInsuranceForm(insuranceData);
   await delay(getSleepTime());
   var clickEvent = new MouseEvent("click", {
      "view": window,
      "bubbles": true,
      "cancelable": true
   });
   //var event = document.createEvent('Event');
   //event.initEvent('click', true, true);
   let submitButtonElement = getElementsByName('btn_submit');
   submitButtonElement[0].click();
   return Promise.resolve('form filllup is complete');
}