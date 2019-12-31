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

function setPropertyType(obj) {
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

function setGarage(obj) {
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
function setSquareFoot(obj) {
  let sqFootIndex = 
  sleep(2000).then(() => {
    var elementName = 'sq_footage';
    if(!(commentsArrObj[sqFootIndex] && commentsArrObj.length <= sqFootIndex || obj.hasOwnProperty('Level'))){
      console.log('Insurance info not contain property Type(garage)');
      return;
    }
    var value = obj['level'];
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
    var elementName = 'desired_coverage_amount'
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
    var elementName = 'desired_deductible'
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
    var elementName = 'desired_liability_coverage'
    var value = getDesiredLiabilityOnCoverageTerms(obj);
    var elements = getElement('form-control');
    setMatchedElementValue(elements, elementName ,value);

  });
}

function setInsuranceType(obj) {
  sleep(2000).then(() => {
    var elementName = 'is_insured'
    if(!obj.hasOwnProperty('Insurance Company')){
      console.log('Insurance info not contain property Type(XLS name - Insurance Company)');
      return;
    }
    
    var value = obj['Insurance Company'];
    var elements = getElement('form-control');
    setMatchedElementValue(elements, elementName ,value);

  });
}

function setCreditRating(obj) {
  let creditRatingIndex = 5;
  sleep(2000).then(() => {
    var elementName = 'credit_rating'
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
var proName = 'is_claim_3_years'
  var value = obj.is_claim_3_years;
 var elements = getElementsByName('is_claim_3_years');
   setMatchedElementValue(elements, proName ,value);
}

function setTitle(obj) {
var proName = 'title'
  var value = removeSpecialCharacter(obj.title, '');
 var elements = getElement('form-control');
   setMatchedElementValue(elements, proName ,returnStringWithFirstCharUpper(value));
}

function setBloodGroup(obj) {
var proName = 'blood_group'
  var value = removeSpecialCharacter(obj.blood_group, '');
 var elements = getElement('form-control');
   setMatchedElementValue(elements, proName ,returnStringWithFirstCharUpper(value));
}

function setFirstName(obj) {
var proName = 'first_name'
  var value = removeSpecialCharacter(obj.first_name, '');
 var elements = getElement('form-control');
   setMatchedElementValue(elements, proName ,returnStringWithFirstCharUpper(value));
}

function setAddress(obj) {
   var proName = 'address'
   var value = returnString(obj.address);
   var elements = getElement('form-control');
   setMatchedElementValue(elements, proName ,value);
}

function setLastName(obj) {
  var proName = 'last_name'
  var value = removeSpecialCharacter(obj.last_name, '');
   var elements = getElement('form-control');
   setMatchedElementValue(elements, proName ,returnStringWithFirstCharUpper(value));
}

function setZipCode(obj) {
var proName = 'zip_code'
  var value = obj.zip_code;
 var elements = getElement('form-control');
   setMatchedElementValue(elements, proName ,value);
}

function setGender(obj) {
var proName = 'gender'
   var value = obj.gender;
 var elements = getElementsByName('gender');
   setMatchedElementValue(elements, proName ,value);
}

function setPhone(obj) {
   var proName = 'phone'
   var value = obj.phone;
   var elements = getElement('form-control');
   setMatchedElementValue(elements, proName ,value);
}

function setEmailId(obj) {
   var proName = 'emailid'
   var value = obj.emailid;
   var elements = getElement('form-control');
   setMatchedElementValue(elements, proName ,value);
}

function setDOBDay(elements , obj) {
   var proName = 'day';
   var dayValue = obj.day;
   setMatchedElementValue(elements, proName ,dayValue);
}

function setDOBMonth(elements , obj) {
   var proName = 'month';
   var monthValue = obj.month;
   setMatchedElementValue(elements, proName ,monthValue);
}

function setDOBYear(elements , obj) {
   var proName = 'year';
   var yearValue = obj.year;
   setMatchedElementValue(elements, proName ,yearValue);
}

function setAgeOnDOB(elements , obj) {
   var proName = 'age';
   var birthDate = new Date(obj.year, obj.month, obj.day);
   var ageDifMs = Date.now() - birthDate.getTime();
    var ageDate = new Date(ageDifMs); // miliseconds from epoch
    var age = Math.abs(ageDate.getUTCFullYear() - 1970);
   setMatchedElementValue(elements, proName ,age);
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

	
  setPropertyType(insuranceInfo);
  setYearBuild(insuranceInfo);
  setSquareFoot(insuranceInfo);
  setIsOwned(insuranceInfo);
  setAgeOfRoof(insuranceInfo);
  setStories(insuranceInfo);
  setBedrooms(insuranceInfo);
  setBathrooms(insuranceInfo);
  setGarage(insuranceInfo);


  setAdditionalCoverage(insuranceInfo);
  setCoverageTerm(insuranceInfo);
  setDesiredCoverageAmt(insuranceInfo);
  setDesiredDeductible(insuranceInfo);
  setDesiredLiabilityCoverage(insuranceInfo);
  setInsuranceType(insuranceInfo);
  setCreditRating(insuranceInfo);
  setClaimsThreeYrs(insuranceInfo);


  setTitle(insuranceInfo);
	fiveSeconds(0);
  setBloodGroup(insuranceInfo);
  setFirstName(insuranceInfo);
  setAddress(insuranceInfo);
  setLastName(insuranceInfo);
  setZipCode(insuranceInfo);
  setGender(insuranceInfo);
  setPhone(insuranceInfo);
  setEmailId(insuranceInfo);
  setDateOfBirth(insuranceInfo);
}

