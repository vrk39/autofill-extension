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


function setPropertyType(obj) {
   sleep(2000).then(() => {
      //do stuff
      var proName = 'property_type'
      var value = obj.property_type;
      var elements = getElement('form-control');
      setMatchedElementValue(elements, proName ,value);
    })
  
}

function setBathrooms(obj){
var proName = 'bathrooms'
   var value = obj.bathrooms;
 var elements = getElement('form-control');
   setMatchedElementValue(elements, proName ,value);
}

function setYearBuild(obj) {
var proName = 'year_built'
  var value = obj.year_built;
 var elements = getElement('form-control');
   setMatchedElementValue(elements, proName ,value);
}

function setAgeOfRoof(obj) {
var proName = 'age_of_roof'
  var value = obj.age_of_roof;
 var elements = getElement('form-control');
   setMatchedElementValue(elements, proName ,value);
}

function setGarage(obj) {
var proName = 'garage'
  var value = obj.garage;
 var elements = getElement('form-control');
   setMatchedElementValue(elements, proName ,value);
}

function setSquareFoot(obj) {
var proName = 'sq_footage'
  var value = obj.sq_footage;
 var elements = getElement('form-control');
   setMatchedElementValue(elements, proName ,value);
}

function setStories(obj) {
var proName = 'stories'
  var value = obj.stories;
 var elements = getElement('form-control');
   setMatchedElementValue(elements, proName ,value);
}

function setIsOwned(obj) {
var proName = 'is_owned'
  var value = obj.is_owned;
 var elements = getElement('form-control');
   setMatchedElementValue(elements, proName ,value);
}

function setBedrooms(obj) {
var proName = 'bedrooms'
  var value = obj.bedrooms;
 var elements = getElement('form-control');
   setMatchedElementValue(elements, proName ,value);
}

function setAdditionalCoverage(obj) {
var proName = 'additional_coverage'
  var value = obj.additional_coverage;
 var elements = getElement('form-control');
   setMatchedElementValue(elements, proName ,value);
}

function setCoverageTerm(obj) {
var proName = 'coverage_term'
  var value = obj.coverage_term;
 var elements = getElement('form-control');
   setMatchedElementValue(elements, proName ,value);
}

function setDesiredCoverageAmt(obj) {
var proName = 'desired_coverage_amount'
  var value = obj.desired_coverage_amount;
 var elements = getElement('form-control');
   setMatchedElementValue(elements, proName ,value);
}


function setDesiredDeductible(obj) {
var proName = 'desired_deductible'
  var value = obj.desired_deductible;
 var elements = getElement('form-control');
   setMatchedElementValue(elements, proName ,value);
}

function setDesiredLiabilityCoverage(obj) {
var proName = 'desired_liability_coverage'
  var value = obj.desired_liability_coverage;
 var elements = getElement('form-control');
   setMatchedElementValue(elements, proName ,value);
}

function setInsuranceType(obj) {
var proName = 'is_insured'
  var value = obj.is_insured;
 var elements = getElement('form-control');
   setMatchedElementValue(elements, proName ,value);
}

function setCreditRating(obj) {
var proName = 'credit_rating'
  var value = obj.credit_rating;
 var elements = getElement('form-control');
   setMatchedElementValue(elements, proName ,value);
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

