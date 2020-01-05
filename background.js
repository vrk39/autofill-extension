var insuranceFormTabObj ;
var formFillingCounter = 0;
var insuranceFormJsonObj;
//document.getElementById("fill").addEventListener("click", sendMessages);
document.addEventListener('DOMContentLoaded', function() {
	
	//document.getElementById('upload').addEventListener('change', handleFileSelect, false);
});
var netWorkLogger = new debugout();
netWorkLogger.setFileName('network');
/*
const winston = require('winston');

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  defaultMeta: { service: 'user-service' },
  transports: [
    //
    // - Write all logs with level `error` and below to `error.log`
    // - Write all logs with level `info` and below to `combined.log`
    //
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log' })
  ]
});*/


function requestHandler(req){
	netWorkLogger.log(req);
}
  
chrome.webRequest.onBeforeSendHeaders.addListener(requestHandler, {urls: ["file:///*/homeinsurance.html"]}, ["requestHeaders"]);
chrome.webRequest.onBeforeRequest.addListener(requestHandler,{urls: ["file:///*/homeinsurance.html"]},['requestBody']);
chrome.webRequest.onCompleted.addListener(requestHandler,{urls: ["file:///*/homeinsurance.html"]});
/*
var log4js = require('log4js'); // include log4js

log4js.configure({ // configure to use all types in different files.
    appenders: [
        {   type: 'file',
            filename: "/logs/error.log", // specify the path where u want logs folder error.log
            category: 'error',
            maxLogSize: 20480,
            backups: 10
        },
        {   type: "file",
            filename: "/logs/info.log", // specify the path where u want logs folder info.log
            category: 'info',
            maxLogSize: 20480,
            backups: 10
        },
        {   type: 'file',
            filename: "/logs/debug.log", // specify the path where u want logs folder debug.log
            category: 'debug',
            maxLogSize: 20480,
            backups: 10
        }
    ]
});

var loggerinfo = log4js.getLogger('info'); // initialize the var to use.
var loggererror = log4js.getLogger('error'); // initialize the var to use.
var loggerdebug = log4js.getLogger('debug'); // initialize the var to use.
*/
function sleep(ms) {
	if(!ms){
	  ms = 3000;
	}
	return new Promise(resolve => setTimeout(resolve, ms));
}

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
	  }else if(message.command == "GET_NEXT_FORM_DATA"){
		sendFormDataToContentOnCounter();
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

const getInsuranceFormTab = function(){
	chrome.windows.getAll({populate:true},function(windows){
		windows.forEach(function(window){
			window.tabs.forEach(function(tab){
				if(!tab){
					alert("Alert! Insurance form not found. Please Open it and do the process again :)")
					return;
				}
				//collect all of the urls here, I will just log them instead
				if(tab.url.includes("homeinsurance.html") || tab.title.includes("homeinsurance")){
					return tab;	
				}
				console.log(tab.url);
			  });
		});
	});
}

function sendCommandeToFillForm(){
	try {
		
		chrome.windows.getAll({populate:true},function(windows){
			windows.forEach(function(window){
				window.tabs.forEach(function(tab){
					if(!tab){
						alert("Alert! Insurance form not found. Please Open it and do the process again :)")
						return;
					}
					//collect all of the urls here, I will just log them instead
					if(tab.url.includes("homeinsurance.html") || tab.title.includes("homeinsurance")){
						insuranceFormTabObj = tab;
						
					}
					console.log(tab.url);
		  		});
			});
		});
		
		getFileData();

		sleep(5000).then(() => {
			console.log('ready to send fill form message');
		
			if(!insuranceFormTabObj){
				alert("Alert! Insurance form not found. Please Open it and do the process again :)")
				return;
			}
	
			insuranceFormJsonObj = JSON.parse(getFileDataObj());
			
			if(insuranceFormJsonObj){		
				insruranceDataObj = insuranceFormJsonObj[formFillingCounter];
				formFillingCounter++;
				try {
					sleep(5000).then(() => {
						console.log('sending message to fill form');
						chrome.tabs.sendMessage(insuranceFormTabObj.id, {FILL_INSURANCE_FORM : insruranceDataObj});
					});	
				} catch (error) {
					console.log(error);
				}
				
			}else{
				console.log('insurance data not found from storage');
			}
		});
	} catch (error) {
		console.log(error);
	}
}

const sendFormDataToContentOnCounter = async function(){
	sleep(35000).then(() => {
		console.log('ready to send fill form message');
	
		if(!insuranceFormTabObj){
			insuranceFormTabObj = getInsuranceFormTab();
			if(!insuranceFormTabObj){
				alert("Alert! Insurance form not found. Please Open it and do the process again :)")
				return;
			}
		}

		if(!insuranceFormJsonObj){
			insuranceFormJsonObj = JSON.parse(getFileDataObj());
		}
		
		if(insuranceFormJsonObj){
			insruranceDataObj = insuranceFormJsonObj[formFillingCounter];
			formFillingCounter++;
			try {
				sleep(5000).then(() => {
					console.log('sending message to fill form');
					chrome.tabs.sendMessage(insuranceFormTabObj.id, {FILL_INSURANCE_FORM : insruranceDataObj});
				});	
			} catch (error) {
				console.log(error);
			}
			
		}else{
			console.log('insurance data not found from storage');
		}
	});	
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

function stateChange(newState = -1) {
	if (newState == -1) {
	  
	}
}