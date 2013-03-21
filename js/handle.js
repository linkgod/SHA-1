define(function(require, exports, module){
    var $ = require('jquery'),
        SHA1Hash = require('js/sha1hash');

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
        output.push(files[0].name);
        reader.readAsBinaryString(files[0]);
        reader.onload = function(){
            output.push(SHA1Hash(this.result));
            $('#where').val(output[1]);
        };
        $('#key').val(output[0]);
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