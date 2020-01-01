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

function enterDataLikeTyping(ele, value){
   //new TypeWriter(ele, value, 3000);  
   new Promise(function(resolve, reject) {
      let excutionComplete = true;

      enterDataLikeTypingPromise(ele,value);
      if (excutionComplete) {
         resolve('enter data like typing complete');
      } else {
         reject('enter data like typing not complete');
      }
   });
   /*var typewriter = new Typewriter(ele, {loop: false  });
   typewriter.typeString(value).start();*/
   
}
/*
function printSentence(domElement, sentence, speed) {
   var index = 0,
       timer = setInterval(function() {
     var char= sentence.charAt(index);
     if(char === '<') index= sentence.indexOf('>',index);
     domElement.value = sentence.substr(0,index);
     if(++index === sentence.length){
       clearInterval(timer);
     }
   }, speed);
 } 
*/
var typingSpeedTime = 20;

function getTypingSpeedTime(){
   typingSpeedTime = typingSpeedTime + 3000;
   return typingSpeedTime;
}

 function enterDataLikeTypingPromise(ele, value){
   let counter = 0;
   let element = ele;
   let text = value;
   //let speed = getTypingSpeedTime() ;
   //typeWriter(counter, element, text, speed);
   new Promise(function(resolve, reject) {
      let excutionComplete = true;

      promiseTypeWriter(element, text);

      if (excutionComplete) {
        resolve('enter data like typing complete');
      } else {
        reject('enter data like typing not complete');
      }
    });
}

function fiveSeconds  (n) {

  if (n < 5) setTimeout(function () {  
    fiveSeconds ( n ); // Redo if n < 5 (and pass n)
  }, 1000);
  
  console.log( n++ );

}

const promiseTypeWriterFn = firstName => {
   return new Promise((resolve, reject) => {
     setTimeout(() => {
       if (!firstName) reject(new Error('no first name passed in!'))
 
       const fullName = `${firstName} Doe`  
 
       resolve(fullName)
     }, 2000)
   })
 }

 var keepsHisWord;
keepsHisWord = true;
promise1 = new Promise(function(resolve, reject) {
  if (keepsHisWord) {
    resolve("The man likes to keep his word");
  } else {
    reject("The man doesnt want to keep his word");
  }
});

function promiseTypeWriter(element, text) {

   for (let counter = 0, p = Promise.resolve(); counter < text.length; counter++) {
      p = p.then(_ => new Promise(resolve =>
          setTimeout(function () {
              console.log(counter);
              element.value += text.charAt(counter);
              resolve();
          }, 1000)
      ));
   }
 }

function typeWriter(counter, element, text, speed) {
   var timeout;
   let waitTime = 200;
   console.log('counter == '+counter +' waitTime == '+waitTime+' text == '+text);
   if (counter < text.length) {
     element.value += text.charAt(counter);
     counter++;
     timeout = setTimeout(function () {  
      typeWriter(counter,element,text);
    }, waitTime);
      //console.log(timeout);
   }
   
 }

 /*
function typeWriter() {
  var timeout;
  if (counter < text.length) {
    element.value += text.charAt(counter);
    counter++;
    timeout = setTimeout(typeWriter, speed);
     //console.log(timeout);
  }
  
}*/

