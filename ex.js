(function(){
	var fs = require('fs');
	var lib = require('./vimeoExport.js');

	const JSON_FILE = __dirname + '/vimeo.json';
	const HTML_FILE = __dirname + '/vimeo.html';
	
	RequestVimeoData({
		json: JSON_FILE,
		html: HTML_FILE,
		callback: buildHtml
	});

	function RequestVimeoData(config){
		lib.request({
		path : '/me/videos'
		}, function (error, body, status_code, headers) {


		if (error) {
		    console.log('error');
		    console.log(error);
		} else {
		    // console.log('body');
		    console.log(body);
		    fs.writeFile(config.json, JSON.stringify(body.data));
			GenerateHtmlFromJson(config.json, config.html, config.callback);			    
		}
		});	  	
	}

	function GenerateHtmlFromJson(infile, outfile, callback){
		fs.readFile(infile , function (err, data) {
		  if (err) {
		    throw err; 
		  }
		  var vData = JSON.parse(data);
		  var body = "<ul>";
		  vData.forEach(function(video){
		  	console.log(video.embed.html);
		  	body += "<li>" + video.embed.html + "</li>";

		  });
		  fs.appendFile(outfile, callback(body))	  	
		});    	
	}

	function buildHtml(body){
	  var header = '';
	  // concatenate header string
	  // concatenate body string

	  return '<!DOCTYPE html>'
	       + '<html><header>' + header + '</header><body>' + body + '</body></html>';	
	}
})();