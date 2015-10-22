(function(){
	var Vimeo = require('vimeo').Vimeo;
	var fs = require('fs');
	const CLIENT_ID = '7cbbfa18c8c081dc459a255bdbcf130f79134ee5';
	const CLIENT_SECRET = 'Tnd42WNaog7ex8HXCTa5wa+N6eV2OqJmLTdib5THsEnkww4uwsJxmNT6iAsEjR2AuXSR8wedoi8yDQDGZMx0jlOn+dhn23xhtd8r5OzTB34zE5VsmxjPBUZspCZSda0B';
	const SCOPE = "public private"
	var ACCESS_TOKEN = 'b5e52b2aaddd41aaf15a79b0d8603152';
    var lib = new Vimeo(CLIENT_ID, CLIENT_SECRET, ACCESS_TOKEN);
			
	var vimeo = module.exports = lib;

})();