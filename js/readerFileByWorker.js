onmessage = function (evt){
    var reader = new FileReader();
    reader.readAsBinaryString(evt.data);
    reader.onload = function(){
        postMessage(this.result);
    };
}