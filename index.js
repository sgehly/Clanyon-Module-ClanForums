var routes = {
	"category": {
		number: "" 
	}
}

module.exports =  {
	load: function(data){
		return new Promise(function(res,rej){
			return res("<h1>Here is some information about the request to this module</h1><br>"+
				"Hostname (data.hostname): <pre>"+data.hostname+"</pre><br>"+
				"IP Address (data.ipAddress): <pre>"+data.ipAddress+"</pre><br>"+
				"Method (data.method): <pre>"+data.method+"</pre><br>"+
				"Path (data.path): <pre>"+data.path+"</pre><br>"+
				"SESSION (data.session): <pre>"+JSON.stringify(data.session)+"</pre><br>"+
				"Query (data.query): <pre>"+JSON.stringify(data.query)+"</pre><br>"+
				"Body (data.body): <pre>"+JSON.stringify(data.body)+"</pre></br>"
			);
		})
	}
}