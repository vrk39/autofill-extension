function something(){
     console.log( 'something method called');
}

function setElementValue(fieldName, value)  {
     var selector = '[name="' + fieldName + '[]"]';
     var element = $(selector);
     element.val(value);
}

function getElement(elementName){
   var element = document.getElementById("f");
   var selector = '[name="' + elementName + '[]"]';
   var elt = (true) ? element.find(selector) : $(selector);
   return elt;
}

function setElementValueOnType(eltName, value){
var element = document.getElementById("f");
   var elt = getElement(eltName);
  var x = document.URL;
   
   if (elt.length == 1) {
      elt.val((elt.attr("type") == "checkbox") ? [value] : value);
   
   } else if (elt.length > 1) {
      // radio
      elt.val([value]);
   } else {
      var selector = '[name="' + eltName + '[]"]';
      var restrict = true; 
      elt = (true) ? element.find(selector) : $(selector);
//      elt = $(selector);
      elt.val(value);
      /*elt.each(function() {
         $(this).val(value);
      });*/
   }
}

function setPropertyType(obj) {
   var value = obj.property_type;
   setElementValueOnType("property_type", value);
}

function setBathrooms(obj){
   var value = obj.bathrooms;
   setElementValueOnType("bathrooms", value);
}

function setYearBuild(obj) {
  var value = obj.year_built;
  setElementValueOnType("year_built", value);
}

function setAgeOfRoof(obj) {
  var value = obj.age_of_roof;
  setElementValueOnType("age_of_roof", value);
}

function setGarage(obj) {
  var value = obj.garage;
  setElementValueOnType("garage", value);
}

function setSquareFoot(obj) {
  var value = obj.sq_footage;
  setElementValueOnType("sq_footage", value);
}

function setStories(obj) {
  var value = obj.stories;
  setElementValueOnType("stories", value);
}

function setIsOwned(obj) {
  var value = obj.is_owned;
  setElementValueOnType("is_owned", value);
}

function setBedrooms(obj) {
  var value = obj.bedrooms;
  setElementValueOnType("bedrooms", value);
}

function setAdditionalCoverage(obj) {
  var value = obj.additional_coverage;
  setElementValueOnType("additional_coverage", value);
}

function setCoverageTerm(obj) {
  var value = obj.coverage_term;
  setElementValueOnType("coverage_term", value);
}

function setDesiredCoverageAmt(obj) {
  var value = obj.desired_coverage_amount;
  setElementValueOnType("desired_coverage_amount", value);
}


function setDesiredDeductible(obj) {
  var value = obj.desired_deductible;
  setElementValueOnType("desired_deductible", value);
}

function setDesiredLiabilityCoverage(obj) {
  var value = obj.desired_liability_coverage;
  setElementValueOnType("desired_liability_coverage", value);
}

function setInsuranceType(obj) {
  var value = obj.is_insured;
  setElementValueOnType("is_insured", value);
}

function setCreditRating(obj) {
  var value = obj.credit_rating;
  setElementValueOnType("credit_rating", value);
}

function setClaimsThreeYrs(obj) {
  var value = obj.is_claim_3_years;
  setElementValueOnType("is_claim_3_years", value);
}

function setTitle(obj) {
  var value = obj.title;
  setElementValueOnType("title", value);
}

function setBloodGroup(obj) {
  var value = obj.blood_group;
  setElementValueOnType("blood_group", value);
}

function setFirstName(obj) {
  var value = obj.first_name;
  setElementValueOnType("first_name", value);
}

function setAddress(obj) {
  var value = obj.address;
  setElementValueOnType("address", value);
}

function setLastName(obj) {
  var value = obj.last_name;
  setElementValueOnType("last_name", value);
}

function setZipCode(obj) {
  var value = obj.zip_code;
  setElementValueOnType("zip_code", value);
}

function setGender(obj) {
   var value = obj.gender;
   setElementValueOnType("gender", value);
}

function setPhone(obj) {
   var value = obj.phone;
   setElementValueOnType("phone", value);
}
function setEmailId(obj) {
   var value = obj.emailid;
   setElementValueOnType("emailid", value);
}

function fillInsuranceForm(insuranceInfo){
	var element = getInsuranceDocument();
  setPropertyType(insuranceInfo);
  setBathrooms(insuranceInfo);
  setYearBuild(insuranceInfo);

  setAgeOfRoof(insuranceInfo);
  setGarage(insuranceInfo);
  setSquareFoot(insuranceInfo);
  setStories(insuranceInfo);
  setIsOwned(insuranceInfo);
  setBedrooms(insuranceInfo);
  setAdditionalCoverage(insuranceInfo);
  setCoverageTerm(insuranceInfo);
  setDesiredCoverageAmt(insuranceInfo);
  setDesiredDeductible(insuranceInfo);
  setDesiredLiabilityCoverage(insuranceInfo);
  setInsuranceType(insuranceInfo);
  setCreditRating(insuranceInfo);
  setClaimsThreeYrs(insuranceInfo);
  setTitle(insuranceInfo);
  setBloodGroup(insuranceInfo);
  setFirstName(insuranceInfo);
  setAddress(insuranceInfo);
  setLastName(insuranceInfo);
  setZipCode(insuranceInfo);
  setGender(insuranceInfo);
  setPhone(insuranceInfo);
  setEmailId(insuranceInfo);
}
/*(function($) {
    
    var namespace;
    
    namespace = {
        something : function() {
            alert('hello there!');
        },
        bodyInfo : function() {
            alert($('body').attr('id'));
        }
    };
    
    window.ns = namespace;
    
})(this.jQuery);*/
/*$(function(){

	var print = function () {
	        console.log( 'popup js loaded and its wroking');
    		};

	jQuery.fn.extend({
    		workingInsurancejs: function () {
     		console.log( 'popup js loaded and its wroking');
    		}
	});

	jQuery.fn.extend({
		setElementValue: function (fieldName, value) {
	        var selector = '[name="' + fieldName + '[]"]';
        	var element = $(selector);
        	element.val(value);
    		}
	});

});
*/

