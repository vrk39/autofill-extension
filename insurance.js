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
var sleepTime = 2000;
function getSleepTime(){
  sleepTime = sleepTime+10000;
}

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

function setMatchedElementValuePromise(formElements, eleName , value){
  new Promise(function(resolve, reject) {

    for (let counter = 0; counter < formElements.length; ++counter) {
	    // do something with `substr[i]`
      var ele  = formElements[counter];
    
		  if(ele.name === eleName){
      //focus to look like selected
        ele.focus();
			  var valueSet = false;	
			  if(ele.nodeName === 'INPUT'){
				  
				  if(ele.type === 'radio' && ele.value === value){
					  ele.checked = 'true';
					  valueSet = true;
				  }else if(ele.type === 'select-one'){
					  ele.value = value;
					  valueSet = true;
				  }else if(ele.type === 'text' || ele.type === 'email'){
					  //ele.value = value;
            let typingPromise = enterDataLikeTyping(ele, value);
            typingPromise.then(function(value) {
              valueSet = true;
            });
            typingPromise.catch(function(reason) {
              console.log("Reason when promise is rejected : ", reason);
              valueSet = false;
            });
					  //valueSet = true;
				  }

			  }else if(ele.nodeName === 'SELECT'){
				  //console.log( ele.type);
				  ele.value = value;
				  valueSet = true;
			  }else if (ele.nodeName === 'TEXTAREA'){
				  console.log( ele.type);
				  //ele.value = value;
          let typingPromise =enterDataLikeTyping(ele, value);
          typingPromise.then(function(value) {
            valueSet = true;
          });
          typingPromise.catch(function(reason) {
            console.log("Reason when promise is rejected : ", reason);
            valueSet = false;
          });
				  //valueSet = true;
			  }

			  if(valueSet){
        //return false;		
        resolve('enter data complete');
			  }
		  }
    }
    /*
    if (excutionComplete) {
      resolve('enter data like typing complete');
   
    } else {
      reject('enter data like typing not complete');
    }
    */
  });

	
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
  let time = getSleepTime();
  sleep(time).then(() => {
      //do stuff
      console.log("setPropertyType started");
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
      setMatchedElementValuePromise(elements, elementName ,value);
      console.log("setPropertyType ended");
    })
  
}

function setBathrooms(obj){
  let time = getSleepTime();
  sleep(time).then(() => {
    console.log("setBathrooms started");
    var elementName = 'bathrooms';
    if(!obj.hasOwnProperty('Bathroom')){
      console.log('Insurance info not contain property Type(XLS name - Bathroom)');
      return;
    }
    var value = obj['Bathroom'];
    var elements = getElement('form-control');
    setMatchedElementValuePromise(elements, elementName ,value);
    console.log("setBathrooms ended");
  });

}
//TODO: set Year build
function setYearBuild(obj) {
  let time = getSleepTime();
  sleep(time).then(() => {
    console.log("setYearBuild started");
    var elementName = 'year_built';
    if(!obj.hasOwnProperty('Bathroom')){
      console.log('Insurance info not contain property Type(XLS name - Bathroom)');
      return;
    }
    var value = obj['year_built'];
    var elements = getElement('form-control');
    setMatchedElementValuePromise(elements, elementName ,value);
    console.log("setYearBuild ended");
  });
}

function validateAgeOfRoof(value){

}

function setAgeOfRoof(obj) {
  let time = getSleepTime();
  sleep(time).then(() => {
    console.log("setAgeOfRoof started");
    var elementName = 'age_of_roof';
    if(!obj.hasOwnProperty('Age Of Roof')){
      console.log('Insurance info not contain property Type(XLS name - Age Of Roof)');
      return;
    }
    var value = obj["Age Of Roof"];
    //validate age of roof
    //validateAgeOfRoof(value);
    var elements = getElement('form-control');
    setMatchedElementValuePromise(elements, elementName ,value);
    console.log("setAgeOfRoof ended");
  });
}

function validateGarage(){

}

function setGarage(commentsArrObj) {
  let time = getSleepTime();
  sleep(time).then(() => {
    console.log("setGarage started");
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
    setMatchedElementValuePromise(elements, elementName ,value);
    console.log("setGarage ended");
  });
}

function validateSqFoot(arrayValue , objUserEnteredValue){

}

//TODO: set square foot value
function setSquareFoot(obj, commentsArrObj) {
  let sqFootIndex = 4;
  let time = getSleepTime();
  sleep(time).then(() => {
    console.log("setSquareFoot started");
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
    setMatchedElementValuePromise(elements, elementName ,value);
    console.log("setSquareFoot ended");
  });
}

function setStories(obj) {
  let time = getSleepTime();
  sleep(time).then(() => {
    console.log("setStories started");
    var elementName = 'stories'

    //Set stories value
    var value = 4;
    var elements = getElement('form-control');
    setMatchedElementValuePromise(elements, elementName ,value);
    console.log("setStories ended");
  });
}

function setIsOwned(obj) {
  let time = getSleepTime();
  sleep(time).then(() => {
    console.log("setIsOwned started");
    var elementName = 'is_owned'
    var value = 1; // this value will be always true : 1 , false : 0
    var elements = getElement('form-control');
    setMatchedElementValuePromise(elements, elementName ,value);
    console.log("setIsOwned ended");
  });
}

function setBedrooms(obj) {
  let time = getSleepTime();
  sleep(time).then(() => {
    console.log("setBedrooms started");
    var elementName = 'bedrooms';
    if(!obj.hasOwnProperty('Bedroom')){
      console.log('Insurance info not contain property Type(XLS name - Bedroom)');
      return;
    }
    var value = obj['Bedroom'];
    var elements = getElement('form-control');
    setMatchedElementValuePromise(elements, elementName ,value);
    console.log("setBedrooms ended");
  });
}

function setAdditionalCoverage(obj) {
  let time = getSleepTime();
  sleep(time).then(() => {
    console.log("setAdditionalCoverage started");
    var elementName = 'additional_coverage';
    var value = 'Contents Coverage';
    var elements = getElement('form-control');
    setMatchedElementValuePromise(elements, elementName ,value);
    console.log("setAdditionalCoverage ended");
  });
}

function setCoverageTerm(obj) {
  let time = getSleepTime();
  sleep(time).then(() => {
    console.log("setCoverageTerm started");
    var elementName = 'coverage_term';
    if(!obj.hasOwnProperty('Coverage Term')){
      console.log('Insurance info not contain property Type(XLS name - Coverage Term)');
      return;
    }
    var value = obj['Coverage Term'];
    var elements = getElement('form-control');
    setMatchedElementValuePromise(elements, elementName ,value);
    console.log("setCoverageTerm ended");
  });
}

function getDesiredCoverageAmtOnCoverageTerms(obj){
  let time = getSleepTime();
  sleep(time).then(() => {
    console.log("getDesiredCoverageAmtOnCoverageTerms started");
    if(!obj.hasOwnProperty('Coverage Term')){
      console.log('Insurance info not contain property Type(XLS name - Coverage Term)');
      return;
    }
    let coverageTermYear = obj['Coverage Term'];
    console.log("getDesiredCoverageAmtOnCoverageTerms ended");
    if(coverageTermYear === 10){
      return 300000;
    }else{
      return 150000;
    }
  });
}

function setDesiredCoverageAmt(obj) {
  let time = getSleepTime();
  sleep(time).then(() => {
    console.log("setDesiredCoverageAmt started");
    var elementName = 'desired_coverage_amount';
    var value = getDesiredCoverageAmtOnCoverageTerms(obj);
    var elements = getElement('form-control');
    setMatchedElementValuePromise(elements, elementName ,value);
    console.log("setDesiredCoverageAmt ended");
  });
}

function getDesiredDeductibleOnCoverageTerms(obj){
  let time = getSleepTime();
  sleep(time).then(() => {
    console.log("getDesiredDeductibleOnCoverageTerms started");
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
  });
}

function setDesiredDeductible(obj) {
  let time = getSleepTime();
  sleep(time).then(() => {
    console.log("setDesiredDeductible started");
    var elementName = 'desired_deductible';
    var value = getDesiredDeductibleOnCoverageTerms(obj);
    var elements = getElement('form-control');
    setMatchedElementValuePromise(elements, elementName ,value);
    console.log("setDesiredDeductible ended");
  });
}

function getDesiredLiabilityOnCoverageTerms(obj){
  let time = getSleepTime();
  sleep(time).then(() => {
    console.log("getDesiredLiabilityOnCoverageTerms started");
    if(!obj.hasOwnProperty('Coverage Term')){
      console.log('Insurance info not contain property Type(XLS name - Coverage Term)');
      return;
    }
    let coverageTermYear = obj['Coverage Term'];
    console.log("getDesiredLiabilityOnCoverageTerms ended");
    if(coverageTermYear === 10){
      return 100,000;
    }else{
      return 50,000;
    }
    
  });
}

function setDesiredLiabilityCoverage(obj) {
  let time = getSleepTime();
  sleep(time).then(() => {
    console.log("setDesiredLiabilityCoverage started");
    var elementName = 'desired_liability_coverage';
    var value = getDesiredLiabilityOnCoverageTerms(obj);
    var elements = getElement('form-control');
    setMatchedElementValuePromise(elements, elementName ,value);
    console.log("setDesiredLiabilityCoverage ended");
  });
}

function setInsuranceType(obj) {
  let time = getSleepTime();
  sleep(time).then(() => {
    console.log("setInsuranceType started");
    var elementName = 'is_insured';
    if(!obj.hasOwnProperty('Insurance Company')){
      console.log('Insurance info not contain property Type(XLS name - Insurance Company)');
      return;
    }
    
    var value = obj['Insurance Company'];
    var elements = getElement('form-control');
    setMatchedElementValuePromise(elements, elementName ,value);
    console.log("setInsuranceType ended");
  });
}

function setCreditRating(commentsArrObj) {
  let creditRatingIndex = 5;
  let time = getSleepTime();
  sleep(time).then(() => {
    console.log("setCreditRating started");
    var elementName = 'credit_rating';
    if(!(commentsArrObj[creditRatingIndex] && commentsArrObj.length <= creditRatingIndex )){
      console.log('Insurance info not contain property Type(garage)');
      return;
    }
    var value = commentsArrObj[creditRatingIndex];
    var elements = getElement('form-control');
    setMatchedElementValuePromise(elements, elementName ,value);
    console.log("setCreditRating ended");
  });
}

//radio buttons type="radio"
function setClaimsThreeYrs(obj) {
  let time = getSleepTime();
  sleep(time).then(() => {
    console.log("setClaimsThreeYrs started");
    var elementName = 'is_claim_3_years';
    var value = 0;
    var elements = getElementsByName('is_claim_3_years');
    setMatchedElementValuePromise(elements, elementName ,value);
    console.log("setClaimsThreeYrs ended");
  });
}

function setTitle(obj) {
  let time = getSleepTime();
  sleep(time).then(() => {
    console.log("setTitle started");
    var elementName = 'title';
    if(!obj.hasOwnProperty('Title')){
      console.log('Insurance info not contain property Type(garage)');
      return;
    }
    var value = removeSpecialCharacter(obj['Title'], '');
    var elements = getElement('form-control');
    setMatchedElementValuePromise(elements, elementName ,returnStringWithFirstCharUpper(value));
    console.log("setTitle ended");
  });
}

function setBloodGroup(commentsArrObj) {
  let time = getSleepTime();
  sleep(time).then(() => {
    console.log("setBloodGroup started");
    let bloodGroupIndex = 6;
    var elementName = 'blood_group';
    if(!(commentsArrObj[bloodGroupIndex] && commentsArrObj.length <= bloodGroupIndex )){
      console.log('Insurance info not contain property Type(bloodGroup)');
      return;
    }
    var value = removeSpecialCharacter(commentsArrObj[bloodGroupIndex], '');
    var elements = getElement('form-control');
    setMatchedElementValuePromise(elements, elementName ,returnStringWithFirstCharUpper(value));
    console.log("setBloodGroup ended");
  });
}

function setFirstName(obj) {
  let time = getSleepTime();
  sleep(time).then(() => {
    console.log("setFirstName started");
    var elementName = 'first_name';
    if(!obj.hasOwnProperty('First Name')){
      console.log('Insurance info not contain property Type(First Name)');
      return;
    }
    var value = removeSpecialCharacter(obj['First Name'], '');
    var elements = getElement('form-control');
    setMatchedElementValuePromise(elements, elementName ,returnStringWithFirstCharUpper(value));
    console.log("setFirstName ended");
  });
}

function setAddress(obj) {
  let time = getSleepTime();
  sleep(time).then(() => {
    console.log("setAddress started");
    var elementName = 'address';
    if(!(obj.hasOwnProperty('Address') && obj.hasOwnProperty('City') && obj.hasOwnProperty('State'))){
      console.log('Insurance info not contain property Type(setAddress)');
      return;
    }
    let address = removeSpecialCharacter(obj['Address'], '');
    let city = removeSpecialCharacter(obj['City'], '');
    let state = removeSpecialCharacter(obj['State'], '');
    var value = address.concat(', ',city, ', ',state);
    var elements = getElement('form-control');
    setMatchedElementValuePromise(elements, elementName ,value);
    console.log("setAddress ended");
  });
}

function setLastName(obj) {
  let time = getSleepTime();
  sleep(time).then(() => {
    console.log("setLastName started");
    var elementName = 'last_name';
    if(!(obj.hasOwnProperty('Last Name'))){
      console.log('Insurance info not contain property Type(Last Name)');
      return;
    }
    var value = removeSpecialCharacter(obj['Last Name'], ' ');
    var elements = getElement('form-control');
    setMatchedElementValuePromise(elements, elementName ,returnStringWithFirstCharUpper(value));
    console.log("setLastName ended");
  });
}

function setZipCode(obj) {
  let time = getSleepTime();
  sleep(time).then(() => {
    console.log("setZipCode started");
    var elementName = 'zip_code';
    if(!(obj.hasOwnProperty('Zipcode'))){
      console.log('Insurance info not contain property Type(Zipcode)');
      return;
    }
    var value = obj['Zipcode'];
    var elements = getElement('form-control');
    setMatchedElementValuePromise(elements, elementName ,value);
    console.log("setZipCode ended");
  });
}

function setGender(obj) {
  let time = getSleepTime();
  sleep(time).then(() => {
    console.log("setGender started");
    var elementName = 'gender';
    if(!(obj.hasOwnProperty('Gender'))){
      console.log('Insurance info not contain property Type(Gender)');
      return;
    }
    var value = obj['Gender'];
    var elements = getElementsByName('gender');
    setMatchedElementValuePromise(elements, elementName ,value);
    console.log("setGender ended");
  });
}

function setPhone(obj) {
  let time = getSleepTime();
  sleep(time).then(() => {
    console.log("setPhone started");
    var elementName = 'phone';
    if(!(obj.hasOwnProperty('Phone No'))){
      console.log('Insurance info not contain property Type(Phone No)');
      return;
    }
    var value = returnString(obj['Phone No']);
    var elements = getElement('form-control');
    setMatchedElementValuePromise(elements, elementName ,value);
    console.log("setPhone ended");
  });
}

function setEmailId(obj) {
  let time = getSleepTime();
  sleep(time).then(() => {
    console.log("setEmailId started");
    var elementName = 'emailid';
    if(!(obj.hasOwnProperty('Email'))){
      console.log('Insurance info not contain property Type(Email)');
      return;
    }
    var value = returnString(obj['Email']);
    var elements = getElement('form-control');
    setMatchedElementValuePromise(elements, elementName ,value);
    console.log("setEmailId ended");
  });
}

function setDOBDay(elements , obj) {
  let time = getSleepTime();
  sleep(time).then(() => {
    console.log("setDOBDay started");
    var elementName = 'day';
    if(!(obj.hasOwnProperty('Date_1'))){
      console.log('Insurance info not contain property Type(Dob Date)');
      return;
    }
    var dayValue = obj['Date_1'];
    setMatchedElementValuePromise(elements, elementName ,dayValue);
    console.log("setDOBDay ended");
  });
}

function setDOBMonth(elements , obj) {
  let time = getSleepTime();
  sleep(time).then(() => {
    console.log("setDOBMonth started");
    var elementName = 'month';
    if(!(obj.hasOwnProperty('Month'))){
      console.log('Insurance info not contain property Type(Month)');
      return;
    }
    var monthValue = obj['Month'];
    setMatchedElementValuePromise(elements, elementName ,monthValue);
    console.log("setBathrooms ended");
  });
}

function setDOBYear(elements , obj) {
  let time = getSleepTime();
  sleep(time).then(() => {
    console.log("setDOBYear started");
    var elementName = 'year';
    if(!(obj.hasOwnProperty('Year'))){
      console.log('Insurance info not contain property Type(Year)');
      return;
    }
    var yearValue = obj['Year'];
    setMatchedElementValuePromise(elements, elementName ,yearValue);
    console.log("setDOBYear ended");
  });
}

function setAgeOnDOB(elements , obj) {
  let time = getSleepTime();
  sleep(time).then(() => {
    console.log("setAgeOnDOB started");
    var elementName = 'age';
    var birthDate = new Date(obj['Year'], obj['Month'], obj['Date_1']);
    var ageDifMs = Date.now() - birthDate.getTime();
     var ageDate = new Date(ageDifMs); // miliseconds from epoch
     var age = Math.abs(ageDate.getUTCFullYear() - 1970);
     setMatchedElementValuePromise(elements, elementName ,age);
    console.log("setAgeOnDOB ended");
  });
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

function main(insuranceInfo) {
  if(insuranceInfo.hasOwnProperty('Comments')){
    commentsArr = insuranceInfo['Comments'].split('|');
  }
  return Promise.resolve()
      .then (function(){
        setPropertyType(commentsArr);
      })
      .then (function(){
        setYearBuild(insuranceInfo);
      })
      .then (function(){
          function3()
      })
}


function fillInsuranceForm(insuranceInfo){
  var waitTime = 15000;
  if(insuranceInfo.hasOwnProperty('Comments')){
    commentsArr = insuranceInfo['Comments'].split('|');
  }

  
  var promiseObj = Promise.resolve()
      .then (function(){
        setPropertyType(commentsArr);
      })
      .then (function(){
        setYearBuild(insuranceInfo);
      })
      .then (function(){
        setSquareFoot(insuranceInfo ,commentsArr);
      })
      .then (function(){
        setIsOwned(insuranceInfo);
      })
      .then (function(){
        setAgeOfRoof(insuranceInfo);
      })
      .then (function(){
        setStories(insuranceInfo);    
      })
      .then (function(){
        setBedrooms(insuranceInfo); 
      })
      .then (function(){
        setBathrooms(insuranceInfo);
      })
      .then (function(){
        setGarage(commentsArr);
      })
      .then (function(){
        setAdditionalCoverage(insuranceInfo);
      })
      .then (function(){
        setCoverageTerm(insuranceInfo);
      })
      .then (function(){
        setDesiredCoverageAmt(insuranceInfo);
      })
      .then (function(){
        setDesiredDeductible(insuranceInfo);
      })
      .then (function(){
        setDesiredLiabilityCoverage(insuranceInfo);
      })
      .then (function(){
        setInsuranceType(insuranceInfo);
      })
      .then (function(){
        setCreditRating(commentsArr);
      })
      .then (function(){
        setClaimsThreeYrs(insuranceInfo);        
      })
      .then (function(){
        setTitle(insuranceInfo);
      })
      .then (function(){
        setBloodGroup(commentsArr);
      })
      .then (function(){
        setFirstName(insuranceInfo);
      })
      .then (function(){
        setAddress(insuranceInfo);
      })
      .then (function(){
        setLastName(insuranceInfo);
      })
      .then (function(){
        setZipCode(insuranceInfo);
      })
      .then (function(){
        setGender(insuranceInfo);
      })
      .then (function(){
        setPhone(insuranceInfo);
      })
      .then (function(){
        setEmailId(insuranceInfo);
      })
      .then (function(){
        setDateOfBirth(insuranceInfo);
      })

  /*
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
  setBloodGroup(commentsArr);
  setFirstName(insuranceInfo);
  setAddress(insuranceInfo);
  setLastName(insuranceInfo);
  setZipCode(insuranceInfo);
  setGender(insuranceInfo);
  setPhone(insuranceInfo);
  setEmailId(insuranceInfo);
  setDateOfBirth(insuranceInfo);
  */
}

