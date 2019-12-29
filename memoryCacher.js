var feedFileData = function(obj) {
    saveFileData(obj);
  };
  
  var feedFileName = function(obj) {
    saveFileData(obj);
  };
  
  function saveFileData(obj) {
    if(!obj){
      return
    }
    //setDataInMemory('fileDataInfo', obj);
    chrome.storage.local.set({fileDataInfo : obj},function(){
      console.log('Data saved in memory KEY : fileDataInfo');
    });
    //sleep(2000).then(sleepWaiter);
    
  }
  
  
  function getFileData(obj) {
    getDataInMemory('fileDataInfo');
  }
  
  function getFileName() {
    getDataInMemory('fileName');
  }
  
  
  function setFileName(objFileName) {
    if(!objFileName){
      return
    }
    var selectedFileName = objFileName.name;
    chrome.storage.local.set({'fileName' : selectedFileName},function(){
      console.log('Data saved in memory KEY : fileName');
    });
    
  }
  
  function setDataInMemory(key, obj){
    if (!obj) {
      console.log('Error: No data provided for saving');
      return;
    }
    
    let dataArr= {key : obj};
  
    //dataArr[key] = obj;
    //chrome.storage.local.set(dataArr);
    
    chrome.storage.local.set({key : obj},function(){
      console.log('Data saved in memory KEY : ' +key);
    });
    sleep(2000).then(sleepWaiter);
  }
  
  function getDataInMemory(key) {
    var obj;
    if (!key) {
      console.log('Error: No key name provided for get data');
      return;
    }
    var retriveKey = 'key';
    //[key] for get key value
    chrome.storage.local.get([retriveKey], function(result) {
      console.log('Value currently is KEY : '+ key + ' is ' + result.key);
      obj = result.key;
    });
    sleep(2000).then(sleepWaiter);
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