document.getElementById("fill").addEventListener("click", sendMessages);

function sendMessages(){

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

}
