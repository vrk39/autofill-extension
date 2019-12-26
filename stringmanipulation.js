function returnString(obj) {
   if (typeof obj != 'string' || obj === undefined || obj === null) {
      return "";
   }
   return obj.trim();
}

function returnStringToLower(obj) {
     return returnString(obj).toLowerCase();
}

function removeSpecialCharacter(obj, replacer){
	var str = returnString(obj); 
	return str.replace(/[^a-zA-Z ]/g, replacer);
}

function returnStringWithFirstCharUpper(obj) {
   var str = returnString(obj);
   var strSize = str.length;
   if (strSize === 0) {
      return str;
   } else if (str.length === 1) {
      return str.charAt(0).toUpperCase();
   } else {
      return str.charAt(0).toUpperCase().concat(str.substring(1, str.length));
   }

   return str;
}

 var counter = 0;
 var speed = 20 ;
 var element ;
 var text ;

function enterDataLikeTyping(ele, value){
 counter = 0;
 element = ele;
 text = value;
 typeWriter();
}

function fiveSeconds  (n) {

  if (n < 5) setTimeout(function () {  
    fiveSeconds ( n ); // Redo if n < 5 (and pass n)
  }, 1000);
  
  console.log( n++ );

}

function typeWriter() {
  var timeout;
  if (counter < text.length) {
    element.value += text.charAt(counter);
    counter++;
    timeout = setTimeout(typeWriter, speed);
     console.log(timeout);
  }
  
}
