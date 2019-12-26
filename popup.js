$(function(){
document.getElementById("fill").addEventListener("click", sendMessages);
document.getElementById('fileUpload').addEventListener('change', Upload, false);
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

function readFile(){
	var file = this.files;
	var reader = new FileReader();
	reader.onload = readSuccess;
	function readSuccess(evt){
		var field = document.getElementById('main');
		field.innerHTML = evt.target.result;
	}
	reader.readAsText(file);
}

function Upload(evt) {
	//Reference the FileUpload element.
	//var fileUpload = document.getElementById("fileUpload");
	const fileUpload = this.files;
	var files = evt.target.files;

	for (var i = 0, len = files.length; i < len; i++) {
        var file = files[i];

        var reader = new FileReader();

        reader.onload = (function(f) {
            return function(e) {
                // Here you can use `e.target.result` or `this.result`
				// and `f.name`.
				var field = document.getElementById('main');
				field.innerHTML = evt.target.result;
            };
        })(file);

        reader.readAsText(file);
    }

	//Validate whether File is valid Excel file.
	/*var regex = /^([a-zA-Z0-9\s_\\.\-:])+(.xls|.xlsx)$/;
	//if (regex.test(fileUpload.value.toLowerCase())) {
		if (typeof (FileReader) != "undefined") {
			var reader = new FileReader();
			
			//For Browsers other than IE.
			if (reader.readAsBinaryString) {
				reader.onload = (function(f) {
					return function(e) {
						// Here you can use `e.target.result` or `this.result`
						// and `f.name`.
						ProcessExcel(e.target.result);
					};
					
				})(file);
				reader.readAsBinaryString(fileUpload.files[0]);
			} else {
				//For IE Browser.
				reader.onload = function (e) {
					var data = "";
					var bytes = new Uint8Array(e.target.result);
					for (var i = 0; i < bytes.byteLength; i++) {
						data += String.fromCharCode(bytes[i]);
					}
					ProcessExcel(data);
				};
				reader.readAsArrayBuffer(fileUpload.files[0]);
			}
		} else {
			alert("This browser does not support HTML5.");
		}*/
	//} else {
	//	alert("Please upload a valid Excel file.");
	//}
}
function ProcessExcel(data) {
	//Read the Excel File data.
	var workbook = XLSX.read(data, {
		type: 'binary'
	});

	//Fetch the name of First Sheet.
	var firstSheet = workbook.SheetNames[0];

	//Read all rows from First Sheet into an JSON array.
	var excelRows = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[firstSheet]);

	//Create a HTML Table element.
	var table = document.createElement("table");
	table.border = "1";

	//Add the header row.
	var row = table.insertRow(-1);

	//Add the header cells.
	var headerCell = document.createElement("TH");
	headerCell.innerHTML = "Id";
	row.appendChild(headerCell);

	headerCell = document.createElement("TH");
	headerCell.innerHTML = "Name";
	row.appendChild(headerCell);

	headerCell = document.createElement("TH");
	headerCell.innerHTML = "Country";
	row.appendChild(headerCell);

	//Add the data rows from Excel file.
	for (var i = 0; i < excelRows.length; i++) {
		//Add the data row.
		var row = table.insertRow(-1);

		//Add the data cells.
		var cell = row.insertCell(-1);
		cell.innerHTML = excelRows[i].Id;

		cell = row.insertCell(-1);
		cell.innerHTML = excelRows[i].Name;

		cell = row.insertCell(-1);
		cell.innerHTML = excelRows[i].Country;
	}

	var dvExcel = document.getElementById("dvExcel");
	dvExcel.innerHTML = "";
	dvExcel.appendChild(table);
}

/*
$(function(){

console.log('text changed');

    let params = {
      active: true,
      currentWindow: true
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

	$('#auto_fill').click(function(){
	console.log( 'popup js loaded and its wroking');
	something();
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
  "emailid": "vinayak@test.com",

};
fillInsuranceForm(data);
//	ns.something();
	});

});*/
