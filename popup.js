$(function(){
	document.addEventListener('DOMContentLoaded', function() {
		getFileInfoAndRestoreInDom();
		// event listener for the button inside popup window
		document.getElementById("fill").addEventListener("click", sendMessages);
		document.getElementById('upload').addEventListener('change', handleFileSelect, false);
	});
//document.getElementById("fill").addEventListener("click", sendMessages);
//document.getElementById('upload').addEventListener('change', handleFileSelect, false);
});


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
	chrome.tabs.sendMessage(tabs[0].id, data);
	}

}

// fetch the URL of the current tab, add inside the window
function addFiles(evt) {
	var files = evt.target.files;
    var fileName = files[0];
}

function readFileAndSaveData(){

}

function getFileInfoAndRestoreInDom(){
	var filName = getFileName();
	addFileNameToDom(fileName);
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