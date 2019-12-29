$(function(){
	//document.addEventListener('DOMContentLoaded', function() {
		//getFileInfoAndRestoreInDom();
		// event listener for the button inside popup window
		//document.getElementById("fill").addEventListener("click", sendMessages);
		//document.getElementById('upload').addEventListener('change', handleFileSelect, false);
		//});
//getFileInfoAndRestoreInDom();
document.getElementById("fill").addEventListener("click", sendFormFillupEvent);
document.getElementById('upload').addEventListener('change', readFileDataEvent, false);
});

function sendFormFillupEvent(){
	chrome.runtime.sendMessage({command: "FILL_FORM_DATA"}, function(response) {
		console.log(response);
	});
}

function sendFileDataForSaving(){
	if(!xlsjson_object){
		console.log('Empty Json object from file');
	}
	
	chrome.runtime.sendMessage({setFileData: xlsjson_object}, function(response) {
		console.log(response);
	});
}

function readFileDataEvent(evt){
	console.log('text changed');
	
	handleFileSelect(evt);

	/*
	var port = chrome.runtime.connect({name: "background"});
	console.log(port);
	port.postMessage({readFile: files[0]});*/
	
	  /*
    let params = {
      active: true,
      currentWindow: true
    };
    chrome.tabs.query(params, gotTab);

	function gotTab(tabs){
		console.log('got tabs');
		console.log(tabs);
		chrome.tabs.sendMessage(tabs[0].id, evt);
	}
	*/
}

/*
function sendMessages(){

    console.log('text changed');

    let params = {
      active: true,
      currentWindow: true
    };
    chrome.tabs.query(params, gotTab);

	function gotTab(tabs){
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
		  "title": " mrs",
		  "blood_group": "a Negative",
		  "first_name": "!@#$%^&*()_+={}[]:;|/?~vinayak",
		  "address": "  andheri  ",
		  "last_name": "  kanse ",
		  "zip_code": "400057",
		  "gender": "0",
		  "phone": "8551996211",
		  "emailid": "vinayak@test.com",
		  "day":"14",
		  "month":"09",
		  "year":"1993"};
		  sleep(10000).then(sleepWaiter);
		  var data = getXlsFileData();
		  var jsonFileData;
		  if(data){
			jsonFileData = JSON.parse(data);
			  chrome.tabs.sendMessage(tabs[0].id, jsonFileData);
		  }else {
			//sleep(5000).then(sleepWaiter);
			data = getFileData();
			jsonFileData = JSON.parse(data);
			chrome.tabs.sendMessage(tabs[0].id, jsonFileData);
		  }
		  alert('file read complete sending data for form fill up');
	}

}*/

function sleepWaiter(){

}

// fetch the URL of the current tab, add inside the window
function addFiles(evt) {
	var files = evt.target.files;
    var fileName = files[0];
}

function readFileAndSaveData(){

}

function getFileInfoAndRestoreInDom(){
	//var name = getFileName();
	var name = getFileData();
	sleep(3000).then(console.log("AT page load getFileInfoAndRestoreInDom function retrive data " +name));
	
	if(name){
		addFileNameToDom(name);
	}
}

var getProperty = function (propertyName) {
    return obj[propertyName];
}

function addFileNameToDom(fileName) {
	if(fileName){
		if("" != fileName){
			document.getElementById("fileName").innerHTML = fileName;
			document.getElementById("myFile").disabled = true;
		}
	}
	
}