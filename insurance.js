var commentsArr ;
//var insuranceDocument = window.document.getElementById("f");

/*
var port = chrome.runtime.connect({name: "background"});
port.onMessage.addListener(function(msg) {
  if (msg.command == "FILL_FILE_DATA"){
     port.postMessage({command: "GET_FILE_DATA"});
  } else if (msg.data){
   fillInsuranceForms(msg.data);
  }
});*/

function sleep(ms) {
  if(!ms){
    ms = 3000;
  }
  return new Promise(resolve => setTimeout(resolve, ms));
}

function stateChange(newState = -1) {
  if (newState == -1) {
    
  }
}

function setElementValue(fieldName, value)  {
     var element =  document.getElementsByClassName(fieldName);
     element.val(value);
}

function getElement(elementClassName){
   var elt = document.getElementsByClassName(elementClassName);
   return elt;
}

function getElementsByName(elementName){
   var elt = document.getElementsByName(elementName);
   return elt;
}

function setElementValueOnType(eltName, value){

   var elt = getElement('form-control');
  var x = document.URL;
	var i;
	for (i = 0; i < elt.length; ++i) {
	    // do something with `substr[i]`
		var item  = elt[i];
		console.log( item.name);
		if(item.name === 'property_type'){
			item.value = value;		
		}
	}
//elt.value = value;

   /*
   if (elt.length == 1) {
      elt.val((elt.attr("type") == "checkbox") ? [value] : value);
   
   } else if (elt.length > 1) {
      // radio
      elt.val([value]);
   } else {
      var selector = '[name="' + eltName + '[]"]';
      var restrict = true; 
      //elt = (true) ? element.find(selector) : $(selector);
      elt = $(selector);
      elt.val(value);
      //elt.each(function() {
        // $(this).val(value);
//      });
   }*/

}

function setMatchedElementValue(formElements, eleName , value){
	for (let i = 0; i < formElements.length; ++i) {
	    // do something with `substr[i]`
		var ele  = formElements[i];
		if(ele.name === eleName){
      //focus to look like selected
      ele.focus();
			var valueSet = false;	
			if(ele.nodeName === 'INPUT'){
				console.log( ele.type);
				if(ele.type === 'radio' && ele.value === value){
					ele.checked = 'true';
					valueSet = true;
				}else if(ele.type === 'select-one'){
					ele.value = value;
					valueSet = true;
				}else if(ele.type === 'text' || ele.type === 'email'){
					//ele.value = value;
					enterDataLikeTyping(ele, value);
					valueSet = true;
				}

			}else if(ele.nodeName === 'SELECT'){
				console.log( ele.type);
				ele.value = value;
				valueSet = true;
			}else if (ele.nodeName === 'TEXTAREA'){
				console.log( ele.type);
				//ele.value = value;
				enterDataLikeTyping(ele, value);
				valueSet = true;
			}

			if(valueSet){
				return false;		
			}
		}
	}
}

function validPropertyType(type){

}

function setPropertyType(commentsArrObj) {
   sleep(2000).then(() => {
      //do stuff
      let properyTypeIndex = 1;
      let elementName = 'property_type';
      if(!(Array.isArray(commentsArr) && commentsArr.length <= properyTypeIndex && commentsArr[properyTypeIndex])){
        console.log('Insurance info not contain property Type(XLS name - Project)');
        return;
      }
      var value = commentsArr[properyTypeIndex];
      //validate value
      //validPropertyType(value);
      var elements = getElement('form-control');
      setMatchedElementValue(elements, elementName ,value);
    })
  
}

function setBathrooms(obj){
  sleep(2000).then(() => {
    var elementName = 'bathrooms';
    if(!obj.hasOwnProperty('Bathroom')){
      console.log('Insurance info not contain property Type(XLS name - Bathroom)');
      return;
    }
    var value = obj['Bathroom'];
    var elements = getElement('form-control');
    setMatchedElementValue(elements, elementName ,value);
  });

}
//TODO: set Year build
function setYearBuild(obj) {
  sleep(2000).then(() => {
    var elementName = 'year_built';
    if(!obj.hasOwnProperty('Bathroom')){
      console.log('Insurance info not contain property Type(XLS name - Bathroom)');
      return;
    }
    var value = obj['year_built'];
    var elements = getElement('form-control');
    setMatchedElementValue(elements, elementName ,value);

  });
}

function validateAgeOfRoof(value){

}

function setAgeOfRoof(obj) {
  sleep(2000).then(() => {
    var elementName = 'age_of_roof';
    if(!obj.hasOwnProperty('Age Of Roof')){
      console.log('Insurance info not contain property Type(XLS name - Age Of Roof)');
      return;
    }
    var value = obj["Age Of Roof"];
    //validate age of roof
    //validateAgeOfRoof(value);
    var elements = getElement('form-control');
    setMatchedElementValue(elements, elementName ,value);
  });
}

function validateGarage(){

}

function setGarage(commentsArrObj) {
  sleep(2000).then(() => {
    let garageInfoIndex = 2;
    var elementName = 'garage'
    if(!commentsArrObj[garageInfoIndex]){
      console.log('Insurance info not contain property Type(garage)');
      return;
    }
    var value = commentsArrObj[garageInfoIndex];
    //validate value
    //validateGarage(value);
    var elements = getElement('form-control');
    setMatchedElementValue(elements, elementName ,value);

  });
}

function validateSqFoot(arrayValue , objUserEnteredValue){

}

//TODO: set square foot value
function setSquareFoot(obj, commentsArrObj) {
  let sqFootIndex = 4;
  sleep(2000).then(() => {
    var elementName = 'sq_footage';
    if(!(commentsArrObj[sqFootIndex] && commentsArrObj.length <= sqFootIndex || obj.hasOwnProperty('Level'))){
      console.log('Insurance info not contain property Type(Level)');
      return;
    }
    var value = obj['Level'];
    let arrayValue = commentsArrObj[sqFootIndex];
    //validate sqFoot
    //function validateSqFoot
    var elements = getElement('form-control');
    setMatchedElementValue(elements, elementName ,value);

  });
}

function setStories(obj) {
  sleep(2000).then(() => {
    var elementName = 'stories'

    //Set stories value
    var value = 4;
    var elements = getElement('form-control');
    setMatchedElementValue(elements, elementName ,value);
  });
}

function setIsOwned(obj) {
  sleep(2000).then(() => {
    var elementName = 'is_owned'
    var value = 1; // this value will be always true : 1 , false : 0
    var elements = getElement('form-control');
    setMatchedElementValue(elements, elementName ,value);

  });
}

function setBedrooms(obj) {
  sleep(2000).then(() => {
    var elementName = 'bedrooms'
    if(!obj.hasOwnProperty('Bedroom')){
      console.log('Insurance info not contain property Type(XLS name - Bedroom)');
      return;
    }
    var value = obj['Bedroom'];
    var elements = getElement('form-control');
    setMatchedElementValue(elements, elementName ,value);

  });
}

function setAdditionalCoverage(obj) {
  sleep(2000).then(() => {
    var elementName = 'additional_coverage';
    var value = 'Contents Coverage';
    var elements = getElement('form-control');
    setMatchedElementValue(elements, elementName ,value);

  });
}

function setCoverageTerm(obj) {
  sleep(2000).then(() => {
    var elementName = 'coverage_term';
    if(!obj.hasOwnProperty('Coverage Term')){
      console.log('Insurance info not contain property Type(XLS name - Coverage Term)');
      return;
    }
    var value = obj['Coverage Term'];
    var elements = getElement('form-control');
    setMatchedElementValue(elements, elementName ,value);

  });
}

function getDesiredCoverageAmtOnCoverageTerms(obj){
  if(!obj.hasOwnProperty('Coverage Term')){
    console.log('Insurance info not contain property Type(XLS name - Coverage Term)');
    return;
  }
  let coverageTermYear = obj['Coverage Term'];
  if(coverageTermYear === 10){
    return 300000;
  }else{
    return 150000;
  }
}

function setDesiredCoverageAmt(obj) {
  sleep(2000).then(() => {
    var elementName = 'desired_coverage_amount';
    var value = getDesiredCoverageAmtOnCoverageTerms(obj);
    var elements = getElement('form-control');
    setMatchedElementValue(elements, elementName ,value);

  });
}

function getDesiredDeductibleOnCoverageTerms(obj){
  if(!obj.hasOwnProperty('Coverage Term')){
    console.log('Insurance info not contain property Type(XLS name - Coverage Term)');
    return;
  }
  let coverageTermYear = obj['Coverage Term'];
  if(coverageTermYear === 10){
    return 500;
  }else{
    return 250;
  }
}

function setDesiredDeductible(obj) {
  sleep(2000).then(() => {
    var elementName = 'desired_deductible';
    var value = getDesiredDeductibleOnCoverageTerms(obj);
    var elements = getElement('form-control');
    setMatchedElementValue(elements, elementName ,value);

  });
}

function getDesiredLiabilityOnCoverageTerms(obj){
  if(!obj.hasOwnProperty('Coverage Term')){
    console.log('Insurance info not contain property Type(XLS name - Coverage Term)');
    return;
  }
  let coverageTermYear = obj['Coverage Term'];
  if(coverageTermYear === 10){
    return 100,000;
  }else{
    return 50,000;
  }
}

function setDesiredLiabilityCoverage(obj) {
  sleep(2000).then(() => {
    var elementName = 'desired_liability_coverage';
    var value = getDesiredLiabilityOnCoverageTerms(obj);
    var elements = getElement('form-control');
    setMatchedElementValue(elements, elementName ,value);

  });
}

function setInsuranceType(obj) {
  sleep(2000).then(() => {
    var elementName = 'is_insured';
    if(!obj.hasOwnProperty('Insurance Company')){
      console.log('Insurance info not contain property Type(XLS name - Insurance Company)');
      return;
    }
    
    var value = obj['Insurance Company'];
    var elements = getElement('form-control');
    setMatchedElementValue(elements, elementName ,value);

  });
}

function setCreditRating(commentsArrObj) {
  let creditRatingIndex = 5;
  sleep(2000).then(() => {
    var elementName = 'credit_rating';
    if(!(commentsArrObj[creditRatingIndex] && commentsArrObj.length <= creditRatingIndex )){
      console.log('Insurance info not contain property Type(garage)');
      return;
    }
    var value = commentsArrObj[creditRatingIndex];
    var elements = getElement('form-control');
    setMatchedElementValue(elements, elementName ,value);

  });
}

//radio buttons type="radio"
function setClaimsThreeYrs(obj) {
  sleep(2000).then(() => {
    var elementName = 'is_claim_3_years';
    var value = 0;
    var elements = getElementsByName('is_claim_3_years');
    setMatchedElementValue(elements, elementName ,value);

  });
}

function setTitle(obj) {
  sleep(2000).then(() => {
    var elementName = 'title';
    if(!obj.hasOwnProperty('Title')){
      console.log('Insurance info not contain property Type(garage)');
      return;
    }
    var value = removeSpecialCharacter(obj['Title'], '');
    var elements = getElement('form-control');
    setMatchedElementValue(elements, elementName ,returnStringWithFirstCharUpper(value));

  });
}

function setBloodGroup(commentsArrObj) {
  sleep(2000).then(() => {
    let bloodGroupIndex = 6;
    var elementName = 'blood_group';
    if(!(commentsArrObj[bloodGroupIndex] && commentsArrObj.length <= bloodGroupIndex )){
      console.log('Insurance info not contain property Type(bloodGroup)');
      return;
    }
    var value = removeSpecialCharacter(commentsArrObj[bloodGroupIndex], '');
    var elements = getElement('form-control');
    setMatchedElementValue(elements, elementName ,returnStringWithFirstCharUpper(value));

  });
}

function setFirstName(obj) {
  sleep(2000).then(() => {
    var elementName = 'first_name';
    if(!obj.hasOwnProperty('First Name')){
      console.log('Insurance info not contain property Type(garage)');
      return;
    }
    var value = removeSpecialCharacter(obj['First Name'], '');
    var elements = getElement('form-control');
    setMatchedElementValue(elements, elementName ,returnStringWithFirstCharUpper(value));

  });
}

function setAddress(obj) {
  sleep(2000).then(() => {
    var elementName = 'address';
    if(!(obj.hasOwnProperty('Address') && obj.hasOwnProperty('City') && obj.hasOwnProperty('State'))){
      console.log('Insurance info not contain property Type(Address , city , state)');
      return;
    }
    let address = removeSpecialCharacter(obj['Address'], '');
    let city = removeSpecialCharacter(obj['City'], '');
    let state = removeSpecialCharacter(obj['State'], '');
    var value = address.concat(', ',city, ', ',state);
    var elements = getElement('form-control');
    setMatchedElementValue(elements, elementName ,value);

  });
}

function setLastName(obj) {
  sleep(2000).then(() => {
    var elementName = 'last_name';
    if(!(obj.hasOwnProperty('Last Name'))){
      console.log('Insurance info not contain property Type(Last Name)');
      return;
    }
    var value = removeSpecialCharacter(obj['Last Name'], ' ');
    var elements = getElement('form-control');
    setMatchedElementValue(elements, elementName ,returnStringWithFirstCharUpper(value));

  });
}

function setZipCode(obj) {
  sleep(2000).then(() => {
    var elementName = 'zip_code';
    if(!(obj.hasOwnProperty('Zipcode'))){
      console.log('Insurance info not contain property Type(Zipcode)');
      return;
    }
    var value = obj['Zipcode'];
    var elements = getElement('form-control');
    setMatchedElementValue(elements, elementName ,value);

  });
}

function setGender(obj) {
  sleep(2000).then(() => {
    var elementName = 'gender';
    if(!(obj.hasOwnProperty('Gender'))){
      console.log('Insurance info not contain property Type(Gender)');
      return;
    }
    var value = obj['Gender'];
    var elements = getElementsByName('gender');
    setMatchedElementValue(elements, elementName ,value);

  });
}

function setPhone(obj) {
  sleep(2000).then(() => {
    var elementName = 'phone';
    if(!(obj.hasOwnProperty('Phone No'))){
      console.log('Insurance info not contain property Type(Phone No)');
      return;
    }
    var value = returnString(obj['Phone No']);
    var elements = getElement('form-control');
    setMatchedElementValue(elements, elementName ,value);

  });
}

function setEmailId(obj) {
  sleep(2000).then(() => {
    var elementName = 'emailid';
    if(!(obj.hasOwnProperty('Email'))){
      console.log('Insurance info not contain property Type(Email)');
      return;
    }
    var value = returnString(obj['Email']);
    var elements = getElement('form-control');
    setMatchedElementValue(elements, elementName ,value);

  });
}

function setDOBDay(elements , obj) {
  sleep(2000).then(() => {
    var elementName = 'day';
    if(!(obj.hasOwnProperty('Date_1'))){
      console.log('Insurance info not contain property Type(Dob Date)');
      return;
    }
    var dayValue = obj['Date_1'];
    setMatchedElementValue(elements, elementName ,dayValue);
  });
}

function setDOBMonth(elements , obj) {
  sleep(2000).then(() => {
    var elementName = 'month';
    if(!(obj.hasOwnProperty('Month'))){
      console.log('Insurance info not contain property Type(Month)');
      return;
    }
    var monthValue = obj['Month'];
    setMatchedElementValue(elements, elementName ,monthValue);

  });
}

function setDOBYear(elements , obj) {
  sleep(2000).then(() => {
    var elementName = 'year';
    if(!(obj.hasOwnProperty('Year'))){
      console.log('Insurance info not contain property Type(Year)');
      return;
    }
    var yearValue = obj['Year'];
    setMatchedElementValue(elements, elementName ,yearValue);

  });
}

function setAgeOnDOB(elements , obj) {
   var elementName = 'age';
   var birthDate = new Date(obj['Year'], obj['Month'], obj['Date_1']);
   var ageDifMs = Date.now() - birthDate.getTime();
    var ageDate = new Date(ageDifMs); // miliseconds from epoch
    var age = Math.abs(ageDate.getUTCFullYear() - 1970);
   setMatchedElementValue(elements, elementName ,age);
}


function setDateOfBirth(obj) {
   var elements = getElement('form-control');
   setDOBDay(elements, obj);
   setDOBMonth(elements, obj);
   setDOBYear(elements, obj);
   setAgeOnDOB(elements, obj);
}

function fillInsuranceForms(insuranceInfos){
   for (insuranceInfo in insuranceInfos) {
      fillInsuranceForm(insuranceInfo);
    }
}

function fillInsuranceForm(insuranceInfo){
  var waitTime = 15000;
  if(insuranceInfo.hasOwnProperty('Comments')){
    commentsArr = insuranceInfo['Comments'].split('|');
  }

	
  setPropertyType(commentsArr);
  setYearBuild(insuranceInfo);
  setSquareFoot(insuranceInfo ,commentsArr);
  setIsOwned(insuranceInfo);
  setAgeOfRoof(insuranceInfo);
  setStories(insuranceInfo);
  setBedrooms(insuranceInfo);
  setBathrooms(insuranceInfo);
  setGarage(commentsArr);


  setAdditionalCoverage(insuranceInfo);
  setCoverageTerm(insuranceInfo);
  setDesiredCoverageAmt(insuranceInfo);
  setDesiredDeductible(insuranceInfo);
  setDesiredLiabilityCoverage(insuranceInfo);
  setInsuranceType(insuranceInfo);
  setCreditRating(commentsArr);
  setClaimsThreeYrs(insuranceInfo);


  setTitle(insuranceInfo);
	fiveSeconds(0);
  setBloodGroup(commentsArr);
  setFirstName(insuranceInfo);
  setAddress(insuranceInfo);
  setLastName(insuranceInfo);
  setZipCode(insuranceInfo);
  setGender(insuranceInfo);
  setPhone(insuranceInfo);
  setEmailId(insuranceInfo);
  setDateOfBirth(insuranceInfo);
}

