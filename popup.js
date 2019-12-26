$(function(){
document.getElementById("fill").addEventListener("click", sendMessages);
var oFileIn = document.getElementById('my_file_input').addEventListener('change', filePicked, false);
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

function filePicked(oEvent) {
    // Get The File From The Input
    var oFile = oEvent.target.files[0];
    var sFilename = oFile.name;
    // Create A File Reader HTML5
    var reader = new FileReader();
    
    // Ready The Event For When A File Gets Selected
    reader.onload = function(e) {
        var data = e.target.result;
        var cfb = XLS.CFB.read(data, {type: 'binary'});
        var wb = XLS.parse_xlscfb(cfb);
        // Loop Over Each Sheet
        wb.SheetNames.forEach(function(sheetName) {
            // Obtain The Current Row As CSV
            var sCSV = XLS.utils.make_csv(wb.Sheets[sheetName]);   
            var data = XLS.utils.sheet_to_json(wb.Sheets[sheetName], {header:1});   
			    
		for(let rowIndex=0 ; rowIndex < data.length ; rowIndex++){
                        var sRow = "<tr>";
			var columns = data[rowIndex];
			for(let columnIndex = 0 ; columnIndex < columns.length ;columnIndex++){
				var columnData = columns[columnIndex];
				sRow = sRow + "<td>" + columnData + "</td>";
			}
			sRow = sRow + "</tr>";
			document.getElementById('my_file_output').append(sRow);
		}

            /*$.each(data, function( indexR, valueR ) {
                var sRow = "<tr>";
                $.each(data[indexR], function( indexC, valueC ) {
                    sRow = sRow + "<td>" + valueC + "</td>";
                });
                sRow = sRow + "</tr>";
                $("#my_file_output").append(sRow);
            });*/
        });
    };
    
    // Tell JS To Start Reading The File.. You could delay this if desired
    reader.readAsBinaryString(oFile);
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
