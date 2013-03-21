seajs.config({
	plugins: ['shim'],
	alias: {
		'jquery': {
			src: 'js/jquery-1.9.1.js',
			exports: 'jQuery'
		}
	}
})