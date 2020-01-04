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
var sleepTime = 1000;
function getSleepTime(){
  //sleepTime = sleepTime+10000;
  return sleepTime;
}
//const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

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

async function setMatchedElementValuePromise(formElements, eleName , value){
    for (let counter = 0; counter < formElements.length; ++counter) {
	    // do something with `substr[i]`
      var ele  = formElements[counter];
    
		  if(ele.name === eleName){
        //focus to look like selected
        //ele.focus();
        /*
        if (typeof ele.onclick == "function") {
          ele.onclick.apply(ele);
        }*/
        ele.click();
        /*
        var event = document.createEvent('Event');
        event.initEvent('build', true, true);
        ele.dispatchEvent(event);
        */
        /*
        var clickEvent = new MouseEvent("click", {
          "view": window,
          "bubbles": true,
          "cancelable": false
        });
        ele.dispatchEvent(clickEvent);
*/

        await delay(3000);
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
            let typingPromise = await enterDataLikeTyping(ele, value);
            valueSet = true;
            
					  //valueSet = true;
				  }

			  }else if(ele.nodeName === 'SELECT'){
				  //console.log( ele.type);
				  ele.value = value;
				  valueSet = true;
			  }else if (ele.nodeName === 'TEXTAREA'){
				  console.log( ele.type);
				  //ele.value = value;
          let typingPromise = await enterDataLikeTyping(ele, value);
          valueSet = true;
          
				  //valueSet = true;
			  }

			  if(valueSet){
          return Promise.resolve('value is set in element');
			  }
		  }
    }
    return Promise.reject('value is not set in element')
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

const propertyType = async function(commentsArr) {
//async function propertyType(commentsArr) {
  let time = getSleepTime();
  await delay(time);
      //do stuff
      console.log("setPropertyType started");
      let properyTypeIndex = 1;
      let elementName = 'property_type';
      if(!Array.isArray(commentsArr) && commentsArr.length >= properyTypeIndex && (!commentsArr[properyTypeIndex])){
        return Promise.reject('Insurance info not contain property Type(XLS name - Project)');
      }
      var value = commentsArr[properyTypeIndex];
      //validate value
      //validPropertyType(value);
      var elements = getElement('form-control');
      let elementValueSet = await setMatchedElementValuePromise(elements, elementName ,value);
      return Promise.resolve(elementValueSet);
    
  
}

const Bathroom = async function(obj){
  let time = getSleepTime();
  await delay(time);
    console.log("setBathrooms started");
    var elementName = 'bathrooms';
    if(!obj.hasOwnProperty('Bathroom')){
      return Promise.reject('Insurance info not contain property Type(XLS name - Bathroom)');
    }
    var value = obj['Bathroom'];
    var elements = getElement('form-control');
    let elementValueSet = await setMatchedElementValuePromise(elements, elementName ,value);
    console.log("setBathrooms end");
    return Promise.resolve(elementValueSet);
  

}
//TODO: set Year build
const yearBuild = async function(obj) {
  let time = getSleepTime();
  await delay(time);
    console.log("setYearBuild started");
    var elementName = 'year_built';
    if(!obj.hasOwnProperty('Bathroom')){
      return Promise.reject('Insurance info not contain property Type(XLS name - YearBuild)');
    }
    var value = obj['year_built'];
    var elements = getElement('form-control');
    let elementValueSet = await setMatchedElementValuePromise(elements, elementName ,value);
    console.log("setYearBuild ended");
    return Promise.resolve(elementValueSet);
  
}

function validateAgeOfRoof(value){

}

const ageOfRoof = async function(obj) {
  let time = getSleepTime();
  await delay(time);
    console.log("setAgeOfRoof started");
    var elementName = 'age_of_roof';
    if(!obj.hasOwnProperty('Age Of Roof')){
      return Promise.reject('Insurance info not contain property Type(XLS name -  Age Of Roof)');
    }
    var value = obj["Age Of Roof"];
    var elements = getElement('form-control');
    let elementValueSet = await setMatchedElementValuePromise(elements, elementName ,value);
    console.log("setAgeOfRoof ended");
    return Promise.resolve(elementValueSet);
  
}

function validateGarage(){

}

const garage = async function(commentsArrObj) {
  let time = getSleepTime();
  await delay(time);
    console.log("setGarage started");
    let garageInfoIndex = 2;
    var elementName = 'garage'
    if(!commentsArrObj[garageInfoIndex]){
      return Promise.reject('Insurance info not contain property Type(XLS name - garage)');
    }
    var value = commentsArrObj[garageInfoIndex];
    //validate value
    //validateGarage(value);
    var elements = getElement('form-control');
    let elementValueSet = await setMatchedElementValuePromise(elements, elementName ,value);
    console.log("setGarage ended");
    return Promise.resolve(elementValueSet);

}

function validateSqFoot(arrayValue , objUserEnteredValue){

}

function getSqFootValue(level){
  let levelVal = level.toString();
  let sqFoot ;
  switch (levelVal) {
    case '1':
      sqFoot = '1000';
      break;
    case '2':
      sqFoot = '1500';
      break;
    case '3':
      sqFoot = '2500';
      break;
    case '4':
      sqFoot = '3500';
      break;
    case '5':
      sqFoot = '4500';
      break;
    case '6':
      sqFoot = '5000';
  }
  return sqFoot;
}

//TODO: set square foot value
const squareFoot = async function(obj, commentsArrObj) {
  let sqFootIndex = 4;
  let time = getSleepTime();
  await delay(time);
    console.log("setSquareFoot started");
    var elementName = 'sq_footage';
    if(!(commentsArrObj[sqFootIndex] && commentsArrObj.length <= sqFootIndex || obj.hasOwnProperty('Level'))){
      return Promise.reject('Insurance info not contain property Type(XLS name - Level/sqFoot)');
    }
    var value = getSqFootValue(obj['Level'].toString());
    let arrayValue = commentsArrObj[sqFootIndex];
    //validate sqFoot
    //function validateSqFoot
    var elements = getElement('form-control');
    let elementValueSet = await setMatchedElementValuePromise(elements, elementName ,value);
    console.log("setSquareFoot ended");
    return Promise.resolve(elementValueSet);
  
}

const stories = async function(obj) {
  let time = getSleepTime();
  await delay(time);
    console.log("setStories started");
    var elementName = 'stories'

    //Set stories value
    var value = 4;
    var elements = getElement('form-control');
    let elementValueSet = await setMatchedElementValuePromise(elements, elementName ,value);
    console.log("setStories ended");
    return Promise.resolve(elementValueSet);
  
}

function getOwnedOrRentedValue(data){
  let updateData = returnString(data.toUpperCase());
  if('OWNED' === updateData || 'OWNER' === updateData || 'OWNED'.includes(updateData) || 'OWNER'.includes(updateData)){
    return 'Owned';
  }else if('TENANT' === updateData || 'OWNED'.includes(updateData)){
    return 'Rented';
  }
}

const isOwned = async function(commentsArrObj) {
  let time = getSleepTime();
  let ownedIndex = 0;
  await delay(time);
    console.log("setIsOwned started");
    var elementName = 'is_owned';
    if(!(commentsArrObj[ownedIndex] && commentsArrObj.length >= ownedIndex)){
      return Promise.reject('Insurance info not contain property Type(XLS name - ownede/tented)');
    }
    var value = getOwnedOrRentedValue(commentsArrObj[ownedIndex]); // this value will be always true : 1 , false : 0
    var elements = getElement('form-control');
    let elementValueSet = await setMatchedElementValuePromise(elements, elementName ,value);
    console.log("setIsOwned ended");
    return Promise.resolve(elementValueSet);
  
}

const bedrooms = async function(obj) {
  let time = getSleepTime();
  await delay(time);
    console.log("setBedrooms started");
    var elementName = 'bedrooms';
    if(!obj.hasOwnProperty('Bedroom')){
      return Promise.reject('Insurance info not contain property Type(XLS name - Bedroom)');
    }
    var value = obj['Bedroom'];
    var elements = getElement('form-control');
    let elementValueSet = await setMatchedElementValuePromise(elements, elementName ,value);
    console.log("setBedrooms ended");
    return Promise.resolve(elementValueSet);
  
}

const additionalCoverage = async function(obj) {
  let time = getSleepTime();
  await delay(time);
    console.log("setAdditionalCoverage started");
    var elementName = 'additional_coverage';
    var value = 'Contents Coverage';
    var elements = getElement('form-control');
    let elementValueSet = await setMatchedElementValuePromise(elements, elementName ,value);
    console.log("setAdditionalCoverage ended");
    return Promise.resolve(elementValueSet);
  
}

function getcoverageTermValue(termYear){
  let index = termYear/5;
  let term;
  switch (index) {
    case 1:
      term = '5 Years';
      break;
    case 2:
      term = '10 Years';
      break;
    case 3:
      term = '15 Years';
      break;
    case 4:
      term = '20 Years';
      break;
    case 5:
      term = '25 Years';
      break;
    case 6:
      term = '30 Years';
  }
  return term;
}

const coverageTerm = async function(obj) {
  let time = getSleepTime();
  await delay(time);
    console.log("setCoverageTerm started");
    var elementName = 'coverage_term';
    if(!obj.hasOwnProperty('Coverage Term')){
      return Promise.reject('Insurance info not contain property Type(XLS name - Coverage Term)');
    }
    var value = getcoverageTermValue(obj['Coverage Term']);
    var elements = getElement('form-control');
    let elementValueSet = await setMatchedElementValuePromise(elements, elementName ,value);
    console.log("setCoverageTerm ended");
    return Promise.resolve(elementValueSet);
  
}

function getcoverageAmtOnTermValue(termYear){
  let index = termYear/5;
  let amount;
  switch (index) {
    case 1:
      amount = '150000';
      break;
    case 2:
      amount = '300000';
      break;
    case 3:
      amount = '500000';
      break;
    case 4:
      amount = '750000';
      break;
    case 5:
      amount = '1000000';
      break;
    case 6:
      amount = '1500000';
  }
  return amount;
}

const desiredCoverageAmt = async function(obj) {
  let time = getSleepTime();
  await delay(time);
    console.log("setDesiredCoverageAmt started");
    var elementName = 'desired_coverage_amount';
    if(!obj.hasOwnProperty('Coverage Term')){
      return Promise.reject('Insurance info not contain property Type(XLS name - Coverage Term)');
    }
    
    var value = getcoverageAmtOnTermValue(obj['Coverage Term']);
    var elements = getElement('form-control');
    let elementValueSet = await setMatchedElementValuePromise(elements, elementName ,value);
    console.log("setDesiredCoverageAmt ended");
    return Promise.resolve(elementValueSet);
  
}

function getDeductibleOnTermValue(termYear){
  let index = termYear/5;
  let amount;
  switch (index) {
    case 1:
      amount = '250';
      break;
    case 2:
      amount = '500';
      break;
    case 3:
      amount = '750';
      break;
    case 4:
      amount = '1,000';
      break;
    case 5:
      amount = '12,50';
      break;
    case 6:
      amount = '15,00';
  }
  return amount;
}

const desiredDeductible = async function(obj) {
  let time = getSleepTime();
  await delay(time);
    console.log("setDesiredDeductible started");
    var elementName = 'desired_deductible';
    if(!obj.hasOwnProperty('Coverage Term')){
      return Promise.reject('Insurance info not contain property Type(XLS name - Coverage Term)');
    }
    var value = getDeductibleOnTermValue(obj['Coverage Term']);
    var elements = getElement('form-control');
    let elementValueSet = await setMatchedElementValuePromise(elements, elementName ,value);
    console.log("setDesiredDeductible ended");
    return Promise.resolve(elementValueSet);
  
}

function getLiabilityOnTermValue(termYear){
  let index = termYear/5;
  let amount;
  switch (index) {
    case 1:
      amount = '50,000';
      break;
    case 2:
      amount = '100,000';
      break;
    case 3:
      amount = '200,000';
      break;
    case 4:
      amount = '300,000';
      break;
    case 5:
      amount = '500,000';
      break;
    case 6:
      amount = '750,000';
  }
  return amount;
}

const desiredLiabilityCoverage = async function(obj) {
  let time = getSleepTime();
  await delay(time);
    console.log("setDesiredLiabilityCoverage started");
    var elementName = 'desired_liability_coverage';
    if(!obj.hasOwnProperty('Coverage Term')){
      return Promise.reject('Insurance info not contain property Type(XLS name - Coverage Term)');
    }    
    var value = getLiabilityOnTermValue(obj['Coverage Term']);
    var elements = getElement('form-control');
    let elementValueSet = await setMatchedElementValuePromise(elements, elementName ,value);
    console.log("setDesiredLiabilityCoverage ended");
    return Promise.resolve(elementValueSet);

}

var insurancType = async function(obj) {
  let time = getSleepTime();
  await delay(time);
    console.log("setInsuranceType started");
    var elementName = 'is_insured';
    if(!obj.hasOwnProperty('Insurance Company')){
      return Promise.reject('Insurance info not contain property Type(XLS name - Insurance Company)');
    }
    
    var value = obj['Insurance Company'];
    var elements = getElement('form-control');
    let elementValueSet = await setMatchedElementValuePromise(elements, elementName ,value);
    console.log("setInsuranceType ended");
    return Promise.resolve(elementValueSet);

}

var creditRating = async function(commentsArrObj) {
  let creditRatingIndex = 5;
  let time = getSleepTime();
  await delay(time);
    console.log("setCreditRating started");
    var elementName = 'credit_rating';
    if(!(commentsArrObj[creditRatingIndex] && commentsArrObj.length >= creditRatingIndex )){
      return Promise.reject('Insurance info not contain property Type(XLS name - credit Rating)');
    }
    var value = commentsArrObj[creditRatingIndex];
    var elements = getElement('form-control');
    let elementValueSet = await setMatchedElementValuePromise(elements, elementName ,value);
    console.log("setCreditRating ended");
    return Promise.resolve(elementValueSet);

}

//radio buttons type="radio"
const claimThreeYear = async function(obj) {
  let time = getSleepTime();
  await delay(time);
    console.log("setClaimsThreeYrs started");
    var elementName = 'is_claim_3_years';
    var value = '0';
    var elements = getElementsByName('is_claim_3_years');
    let elementValueSet = await setMatchedElementValuePromise(elements, elementName ,value);
    console.log("setClaimsThreeYrs ended");
    return Promise.resolve(elementValueSet);
  
}

const Title = async function(obj) {
  let time = getSleepTime();
  await delay(time);
    console.log("setTitle started");
    var elementName = 'title';
    if(!obj.hasOwnProperty('Title')){
      return Promise.reject('Insurance info not contain property Type(XLS name - Title)');
    }
    var value = removeSpecialCharacter(obj['Title'], '');
    var elements = getElement('form-control');
    let elementValueSet = await setMatchedElementValuePromise(elements, elementName ,returnStringWithFirstCharUpper(value));
    console.log("setTitle ended");
    return Promise.resolve(elementValueSet);

}

const bloodGroup = async function(commentsArrObj) {
  let time = getSleepTime();
  await delay(time);
    console.log("setBloodGroup started");
    let bloodGroupIndex = 6;
    var elementName = 'blood_group';
    if(commentsArrObj.length >= bloodGroupIndex &&(!commentsArrObj[bloodGroupIndex])){
      return Promise.reject('Insurance info not contain property Type(XLS name - bloodGroup)');
    }
    var value = removeSpecialCharacter(commentsArrObj[bloodGroupIndex], '');
    var elements = getElement('form-control');
    let elementValueSet = await setMatchedElementValuePromise(elements, elementName ,returnStringWithFirstCharUpper(value));
    console.log("setBloodGroup ended");
    return Promise.resolve(elementValueSet);

}

const firstName = async function(obj) {
  let time = getSleepTime();
  await delay(time);
    console.log("setFirstName started");
    var elementName = 'first_name';
    if(!obj.hasOwnProperty('First Name')){
      return Promise.reject('Insurance info not contain property Type(XLS name - First Name)');
    }
    var value = removeSpecialCharacter(obj['First Name'], '');
    var elements = getElement('form-control');
    let elementValueSet = await setMatchedElementValuePromise(elements, elementName ,returnStringWithFirstCharUpper(value));
    console.log("setFirstName ended");
    return Promise.resolve(elementValueSet);

}

const address = async function(obj) {
  let time = getSleepTime();
  await delay(time);
    console.log("setAddress started");
    var elementName = 'address';
    if(!(obj.hasOwnProperty('Address') && obj.hasOwnProperty('City') && obj.hasOwnProperty('State'))){
      return Promise.reject('Insurance info not contain property Type(XLS name - address)');
    }
    let address = removeSpecialCharacter(obj['Address'], '');
    let city = removeSpecialCharacter(obj['City'], '');
    let state = removeSpecialCharacter(obj['State'], '');
    var value = address.concat(', ',city, ', ',state);
    var elements = getElement('form-control');
    let elementValueSet = await setMatchedElementValuePromise(elements, elementName ,value);
    console.log("setAddress ended");
    return Promise.resolve(elementValueSet);

}

const lastName = async function(obj) {
  let time = getSleepTime();
  await delay(time);
    console.log("setLastName started");
    var elementName = 'last_name';
    if(!(obj.hasOwnProperty('Last Name'))){
      return Promise.reject('Insurance info not contain property Type(XLS name - Last Name)');
    }
    var value = removeSpecialCharacter(obj['Last Name'], ' ');
    var elements = getElement('form-control');
    let elementValueSet = await setMatchedElementValuePromise(elements, elementName ,returnStringWithFirstCharUpper(value));
    console.log("setLastName ended");
    return Promise.resolve(elementValueSet);

}

const zipCode = async function(obj) {
  let time = getSleepTime();
  await delay(time);
    console.log("setZipCode started");
    var elementName = 'zip_code';
    if(!(obj.hasOwnProperty('Zipcode'))){
      return Promise.reject('Insurance info not contain property Type(XLS name - zipcode)');
    }
    var value = obj['Zipcode'].toString();
    var elements = getElement('form-control');
    let elementValueSet = await setMatchedElementValuePromise(elements, elementName ,value);
    console.log("setZipCode ended");
    return Promise.resolve(elementValueSet);
  
}

const gender = async function(obj) {
  let time = getSleepTime();
  await delay(time);
    console.log("setGender started");
    var elementName = 'gender';
    if(!(obj.hasOwnProperty('Gender'))){
      return Promise.reject('Insurance info not contain property Type(XLS name - Gender)');
    }
    var value = obj['Gender'];
    let elementVal = 'MALE' === value.toUpperCase() ? '1' : '0'; 
    
    var elements = getElementsByName('gender');
    let elementValueSet = await setMatchedElementValuePromise(elements, elementName ,elementVal);
    console.log("setGender ended");
    return Promise.resolve(elementValueSet);

}

const phone = async function(obj) {
  let time = getSleepTime();
  await delay(time);
    console.log("setPhone started");
    var elementName = 'phone';
    if(!(obj.hasOwnProperty('Phone No'))){
      return Promise.reject('Insurance info not contain property Type(XLS name - Phone No)');
    }
    var value = obj['Phone No'].toString();
    var elements = getElement('form-control');
    let elementValueSet = await setMatchedElementValuePromise(elements, elementName ,value);
    console.log("setPhone ended");
    return Promise.resolve(elementValueSet);

}

const emailId = async function(obj) {
  let time = getSleepTime();
  await delay(time);
    console.log("setEmailId started");
    var elementName = 'emailid';
    if(!(obj.hasOwnProperty('Email'))){
      return Promise.reject('Insurance info not contain property Type(XLS name - Email)');
    }
    var value = returnString(obj['Email']);
    var elements = getElement('form-control');
    let elementValueSet = await setMatchedElementValuePromise(elements, elementName ,value);
    console.log("setEmailId ended");
    return Promise.resolve(elementValueSet);

}

const DOBDay = async function(elements , obj) {
  let time = getSleepTime();
  await delay(time);
    console.log("setDOBDay started");
    var elementName = 'day';
    if(!(obj.hasOwnProperty('Date_1'))){
      return Promise.reject('Insurance info not contain property Type(XLS name - DOB day/ day)');
    }
    var dayValue = obj['Date_1'];
    let elementValueSet = await setMatchedElementValuePromise(elements, elementName ,dayValue);
    console.log("setDOBDay ended");
    return Promise.resolve(elementValueSet);

}

const DOBMonth = async function(elements , obj) {
  let time = getSleepTime();
  await delay(time);
    console.log("setDOBMonth started");
    var elementName = 'month';
    if(!(obj.hasOwnProperty('Month'))){
      return Promise.reject('Insurance info not contain property Type(XLS name - Month)');
    }
    var monthValue = obj['Month'];
    let elementValueSet = await setMatchedElementValuePromise(elements, elementName ,monthValue);
    console.log("setBathrooms ended");
    return Promise.resolve(elementValueSet);


}

const DOBYear = async function(elements , obj) {
  let time = getSleepTime();
  await delay(time);
    console.log("setDOBYear started");
    var elementName = 'year';
    if(!(obj.hasOwnProperty('Year'))){
      return Promise.reject('Insurance info not contain property Type(XLS name - Year)');
    }
    var yearValue = obj['Year'];
    let elementValueSet = await setMatchedElementValuePromise(elements, elementName ,yearValue);
    console.log("setDOBYear ended");
    return Promise.resolve(elementValueSet);

}

const AgeOnDOB = async function(elements , obj) {
  let time = getSleepTime();
  await delay(time);
    console.log("setAgeOnDOB started");
    var elementName = 'age';
    var birthDate = new Date(obj['Year'], obj['Month'], obj['Date_1']);
    var ageDifMs = Date.now() - birthDate.getTime();
     var ageDate = new Date(ageDifMs); // miliseconds from epoch
     var age = Math.abs(ageDate.getUTCFullYear() - 1970);
     let elementValueSet = await setMatchedElementValuePromise(elements, elementName ,age);
    console.log("setAgeOnDOB ended");
    return Promise.resolve(elementValueSet);
 
}


const DateOfBirth = async function(obj) {
   var elements = getElement('form-control');
   DOBDay(elements, obj)
   .then(DOBMonth(elements, obj))
   .then(DOBYear(elements, obj))
   .then(AgeOnDOB(elements, obj))
   .catch(function(error) {
    console.log(error.message)
  })
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


async function fillInsuranceForm(insuranceInfo){
  var waitTime = 15000;
  if(insuranceInfo.hasOwnProperty('Comments')){
    commentsArr = insuranceInfo['Comments'].split('|');
  }
  
  let type = await propertyType(commentsArr);
  let yrBuild = await yearBuild(insuranceInfo);
  let sqfoot = await squareFoot(insuranceInfo, commentsArr);
  let owned = await isOwned(commentsArr);
  let ageRoof = await ageOfRoof(insuranceInfo);
  let storie = await stories(insuranceInfo);
  let BedRms = await bedrooms(insuranceInfo);
  let bathRm = await Bathroom(insuranceInfo);
  let garag = await garage(commentsArr);
  let addCoverage = await additionalCoverage(insuranceInfo);
  let cvgTerm = await coverageTerm(insuranceInfo);
  let desiredCvgAmt = await desiredCoverageAmt(insuranceInfo);
  let desiredDeduct = await desiredDeductible(insuranceInfo);
  let desiredLiabilityCvg = await desiredLiabilityCoverage(insuranceInfo);
  let insurance  = await insurancType(insuranceInfo);
  let credit = await creditRating(commentsArr);
  let claimThrYr = await claimThreeYear(insuranceInfo);
   let title = await Title(insuranceInfo);
   let bloodGrp = await bloodGroup(commentsArr);
   let fName = await firstName(insuranceInfo);
   let addr = await address(insuranceInfo);
   let lName = await lastName(insuranceInfo);
   let zipcd = await zipCode(insuranceInfo);
   let gend = await gender(insuranceInfo);
   let phn = await phone(insuranceInfo);
   let id = await emailId(insuranceInfo);
   let dob = await DateOfBirth(insuranceInfo);

  /*
    propertyType(insuranceInfo)
    .then(yearBuild(insuranceInfo))
    .then(squareFoot(insuranceInfo))
    .then(isOwned(insuranceInfo))
    .then(ageOfRoof(insuranceInfo))
    .then(stories(insuranceInfo))
    .then(bedrooms(insuranceInfo))
    .then(Bathroom(insuranceInfo))
    .then(garage(insuranceInfo))
    .then(additionalCoverage(insuranceInfo))
    .then(coverageTerm(insuranceInfo))
    .then(desiredCoverageAmt(insuranceInfo))
    .then(desiredDeductible(insuranceInfo))
    .then(desiredLiabilityCoverage(insuranceInfo))
    .then(insurancType(insuranceInfo))
    .then(creditRating(insuranceInfo))
    .then(claimThreeYear(insuranceInfo))
    .then(title(insuranceInfo))
    .then(bloodGroup(insuranceInfo))
    .then(firstName(insuranceInfo))
    .then(address(insuranceInfo))
    .then(lastName(insuranceInfo))
    .then(zipCode(insuranceInfo))
    .then(gender(insuranceInfo))
    .then(phone(insuranceInfo))
    .then(emailId(insuranceInfo))
    .then(DateOfBirth(insuranceInfo))
    .catch(function(error) {
      console.log(error.message)
    });
    */
  
  

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

