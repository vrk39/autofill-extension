var xlsjson_object;

function Upload() {
   //Reference the FileUpload element.
   var fileUpload = document.getElementById("fileUpload");
}

function sleep(ms) {
  if(!ms){
    ms = 3000;
  }
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
         if(workbook.SheetNames.length === 0){
          alert("Hello! File not contain sheet!!");
          return;
         }
         var sheetName =workbook.SheetNames[0];
         var XL_row_object = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[sheetName]);
           var json_object = JSON.stringify(XL_row_object);
           //console.log(JSON.parse(json_object));
           xlsjson_object = json_object;
           sleep(5000).then(sendFileDataForSaving);
          /*"FOR READ MULTIPLE SHEET"
         workbook.SheetNames.forEach(function(sheetName) {
           // Here is your object
           var XL_row_object = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[sheetName]);
           var json_object = JSON.stringify(XL_row_object);
           //console.log(JSON.parse(json_object));
           xlsjson_object = json_object;
           sleep(5000).then(sendFileDataForSaving);
           //sleep(2000).then(sendFileDataForSaving);
           //saveFileData(json_object);
           //return json_object;
           //jQuery( '#xlx_json' ).val( json_object );
         })*/
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
 //setFileName(files[0]);
 
 var xl2json = new ExcelToJSON();
 var promise =xl2json.parseExcel(files[0]);
 
 //sleep(10000).then(sendMessages);
 
}
