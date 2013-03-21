define(function(require, exports, module){
    var $ = require('jquery'),
        handle = require('js/handle');

    $('#SHAForm').on('dragover',handle.handleDragOver).on('drop',handle.handleFileSelect);
	$('#sha-1').click(handle.startSha1);

    $('.rain, .border').addClass('end').removeClass('unfocus start');
});