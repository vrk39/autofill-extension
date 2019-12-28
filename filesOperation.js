var xlsjson_object;
function Upload() {
   //Reference the FileUpload element.
   var fileUpload = document.getElementById("fileUpload");
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function getXlsFileData(){
   return xlsjson_object;
}

function ProcessExcel(data) {
   //Read the Excel File data.
   var workbook = XLSX.read(data, {
      type: 'binary'
   });

   //Fetch the name of First Sheet.
   var firstSheet = workbook.SheetNames[0];

   //Read all rows from First Sheet into an JSON array.
   var excelRows = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[firstSheet]);

   //Create a HTML Table element.
   var table = document.createElement("table");
   table.border = "1";

   //Add the header row.
   var row = table.insertRow(-1);

   //Add the header cells.
   var headerCell = document.createElement("TH");
   headerCell.innerHTML = "Id";
   row.appendChild(headerCell);

   headerCell = document.createElement("TH");
   headerCell.innerHTML = "Name";
   row.appendChild(headerCell);

   headerCell = document.createElement("TH");
   headerCell.innerHTML = "Country";
   row.appendChild(headerCell);

   //Add the data rows from Excel file.
   for (var i = 0; i < excelRows.length; i++) {
      //Add the data row.
      var row = table.insertRow(-1);

      //Add the data cells.
      var cell = row.insertCell(-1);
      cell.innerHTML = excelRows[i].Id;

      cell = row.insertCell(-1);
      cell.innerHTML = excelRows[i].Name;

      cell = row.insertCell(-1);
      cell.innerHTML = excelRows[i].Country;
   }
}

/*
onst readUploadedFileAsText = (inputFile) => {
  const temporaryFileReader = new FileReader();

  return new Promise((resolve, reject) => {
    temporaryFileReader.onerror = () => {
      temporaryFileReader.abort();
      reject(new DOMException("Problem parsing input file."));
    };

    temporaryFileReader.onload = () => {
      resolve(temporaryFileReader.result);
    };
    temporaryFileReader.readAsText(inputFile);
  });
};
*/

var ExcelToJSON = function() {

   this.parseExcel = function(file) {
     var reader = new FileReader();

     return new Promise((resolve, reject) => {
       reader.onload = function(e) {
         var data = e.target.result;
         var workbook = XLSX.read(data, {
           type: 'binary'
         });
         workbook.SheetNames.forEach(function(sheetName) {
           // Here is your object
           var XL_row_object = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[sheetName]);
           var json_object = JSON.stringify(XL_row_object);
           //console.log(JSON.parse(json_object));
           xlsjson_object = json_object;
           saveFileData(json_object);
           //return json_object;
           //jQuery( '#xlx_json' ).val( json_object );
         })
       };
  
       reader.onerror = function(ex) {
        reader.abort();
         console.log(ex);
       };
  
       reader.readAsBinaryString(file);
    });
   };
};

function handleFileSelect(evt) {
 
 var files = evt.target.files; // FileList object
 
 var xl2json = new ExcelToJSON();
 xl2json.parseExcel(files[0]);
 sleep(3000);
 var fileData = getXlsFileData();
 setFileName(files[0]);
 console.log('file data recevied printing the data');
 console.log(fileData);
 sleep(3000).then(() => { sendMessages });
}

var feedFileData = function(obj) {
  saveFileData(obj);
};

var feedFileName = function(obj) {
  saveFileData(obj);
};

function saveFileData(obj) {
  setDataInMemory('fileDataInfo', obj);
}


function getFileData(obj) {
  getDataInMemory('fileDataInfo');
}

function getFileName() {
  getDataInMemory('fileName');
}


function setFileName(objFileName) {
  setDataInMemory('fileName', objFileName);
}

function setDataInMemory(key, obj){
  if (!obj) {
    console.log('Error: No data provided for saving');
    return;
  }
  return new Promise((resolve, reject) => {
    chrome.storage.local.set({key : obj},function(){
        console.log('Data saved in memory KEY : ' +key);
    });
  });
}

function getDataInMemory(key) {
  var obj;
  if (!key) {
    console.log('Error: No key name provided for get data');
    return;
  }
  return new Promise((resolve, reject) => {
    chrome.storage.local.get(['key'], function(result) {
      console.log('Value currently is KEY :' + result.key);
      obj = result.key;
    });
  });
  //sleep(2000);
  return obj;
}

 chrome.storage.onChanged.addListener(function(changes, namespace) {
        for (var key in changes) {
          var storageChange = changes[key];
          console.log('Storage key "%s" in namespace "%s" changed. ' +
                      'Old value was "%s", new value is "%s".',
                      key,
                      namespace,
                      storageChange.oldValue,
                      storageChange.newValue);
        }
      });