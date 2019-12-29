//document.getElementById("fill").addEventListener("click", sendMessages);
document.addEventListener('DOMContentLoaded', function() {
	
	//document.getElementById('upload').addEventListener('change', handleFileSelect, false);
});

chrome.browserAction.onClicked.addListener(function(activeTab)
{
    var newURL = chrome.extension.getURL('popup.html');
    chrome.tabs.create({ url: newURL });
});

chrome.runtime.onMessage.addListener(gotMessage);
function gotMessage(message, sender, sendResponse) {
	console.log('Background script receive message '+message);
	console.log('Background script sender message '+sender);
	
	if (message.setFileData){
		saveFileData(message.setFileData);
		//chrome.runtime.sendMessage({response: 'reading file'});
		//port.postMessage({question: "Who's there?"});

	  } else if (message.command == "GET_FILE_DATA"){
		  var fileData;
		  port.postMessage({data: fileData});
	  }else if(message.command == "FILL_FORM_DATA"){
		sendCommandeToFillForm();
	  }
  //fillInsuranceForms(message);
}
/*
chrome.runtime.onConnect.addListener(function(port) {
	console.assert(port.name == "background");
	port.onMessage.addListener(function(msg) {
	  if (msg.readFile){
		handleFileSelect(msg.readFile);
		//port.postMessage({question: "Who's there?"});

	  } else if (msg.command == "GET_FILE_DATA"){
		  var fileData;
		  port.postMessage({data: fileData});
	  }
	});
  });
*/
function sendCommandeToFillForm(){
	let params = {
		active: true,
		TabStatus : "complete",
		url :"*://*/homeinsurance.html"
	  };
	  chrome.tabs.query(params, gotTabs);
	  function gotTabs(tabs){
		console.log('got tabs');
		console.log(tabs);
		
		for(let counter=0 ; counter< tabs.length ; counter++){
			console.log(tabs[counter]);
		}

		//  chrome.tabs.sendMessage(tabs[0].id, file);

	}
}

function sendFileDetails(file){
    let params = {
      active: true,
      currentWindow: true
    };
    chrome.tabs.query(params, gotTab);

	function gotTab(tabs){
		console.log('got tabs');
		console.log(tabs);
		  chrome.tabs.sendMessage(tabs[0].id, file);

	}
}

function sendMessages(){

    console.log('text changed');

    let params = {
	  active: true,
	  TabStatus : "complete",
	  url :"*://*/homeinsurance.html"
    };
    chrome.tabs.query(params, gotTabs);

	function gotTab(){
		console.log('got tabs');
		console.log(tabs);

		var data = {
		"property_type": "Apartment",
		"is_live": "1",
		"bathrooms": "3",
		"year_built": "1998",
		"bathrooms": "3",
  		"age_of_roof": "3",
		"garage": "Detached carpool",
		"sq_footage": "1000",
		"stories": "5+",
		"is_owned": "Owned",
		"bedrooms": "4",
		  "additional_coverage": "Contents Coverage",
		  "coverage_term": "5 Years",
		  "desired_coverage_amount": "150000",
		  "desired_deductible": "750",
		  "desired_liability_coverage": "100,000",
		  "is_insured": "American Tri-Star Insurance Services",
		  "credit_rating": "Good",
		  "is_claim_3_years": "0",
		  "title": "Mrs",
		  "blood_group": "A Negative",
		  "first_name": "Vinayak",
		  "address": "Andheri",
		  "last_name": "Kanse",
		  "zip_code": "400057",
		  "gender": "1",
		  "phone": "8551996211",
		  "emailid": "vinayak@test.com"	};
	chrome.tabs.sendMessage(tabs[0].id, data);
	}

}
