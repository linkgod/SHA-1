define(function(require, exports, module){
    var $ = require('jquery'),
        SHA1Hash = require('js/sha1hash');

    //利用Web Worker来进行文件读取,然后显示加密结果
    function readFileByWorker(file){
        var worker = new Worker('js/readerFileByWorker.js');
        worker.postMessage(file);
        worker.onmessage = function (evt){
            $('#where').val(SHA1Hash(evt.data));
        };
    }

    exports.startSha1 = function (){
        var sha1Number = SHA1Hash($('#key').val());
        $('#where').val(sha1Number);
    };

    //扔下文件到目标区域的函数，利用 html5 File API
    exports.handleFileSelect = function (evt) {
        var files = evt.originalEvent.dataTransfer.files,
            output = [],
            reader = new FileReader();
        evt.stopPropagation();
        evt.preventDefault();
        $('#key').val(files[0].name);
        readFileByWorker(files[0]);
        return false;
    };

    //拖拽文件到目标区域的函数
    exports.handleDragOver = function (evt) {
        evt.stopPropagation();
        evt.preventDefault();
        evt.originalEvent.dataTransfer.dropEffect = 'copy';
        return false;
    };
});