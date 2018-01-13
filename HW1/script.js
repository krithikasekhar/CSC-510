var request = require('request');
var fs = require("fs");
var Promise = require('bluebird');
var parse = require('parse-link-header');

////// FILL IN THE BLANKS

var token = "token " + "< Enter your token> ";
var userId = "krithikasekhar";

var urlRoot = "https://api.github.com";
// NCSU Enterprise endpoint:
// https://github.ncsu.edu/api/v3

getYourRepos(userId);
listBranches(userId,'REST-Selenium');
createRepo();
createIssues(userId,'Sample-repo');
editRepo(userId,'Sample-repo');
createReactions(userId,'Sample-Repo',1);
issueReactions(userId,'Sample-Repo',1);

function getYourRepos(userName)
{

	var options = {
		url: urlRoot + '/users/' + userName + "/repos",
		method: 'GET',
		headers: {
			"User-Agent": "EnableIssues",
			"content-type": "application/json",
			"Authorization": token
		}
	};

	// Send a http request to url and specify a callback that will be called upon its return.
	request(options, function (error, response, body) 
	{
		var obj = JSON.parse(body);
		console.log( obj );
		for( var i = 0; i < obj.length; i++ )
		{
			var name = obj[i].name;
			console.log( name );
		}
	});

}

function listBranches(userName,repo)
{
	var options = {
		url: urlRoot + '/repos/' + userName + '/' +repo+ "/branches",
		method: 'GET',
		headers: {
			"User-Agent": "EnableIssues",
			"content-type": "application/json",
			"Authorization": token
		}
	};

	// Send a http request to url and specify a callback that will be called upon its return.
	request(options, function (error, response, body) 
	{
		var obj = JSON.parse(body);
		console.log( obj );
		for( var i = 0; i < obj.length; i++ )
		{
			var name = obj[i].name;
			console.log( name );
		}
	});
}

function createRepo()
{
	var options = {
		url: urlRoot + '/user/repos',
		method: 'POST',
		headers: {
			"User-Agent": "EnableIssues",
			"content-type": "application/json",
			"Authorization": token
		},
		json: {
			"name": "Sample repo",
			"description": "Creating a new repo using REST API"
		}
	};

	// Send a http request to url and specify a callback that will be called upon its return.
	request(options, function (error, response, body) 
	{
		console.log( body );
		for( var i = 0; i < body.length; i++ )
		{
			var name = body[i].name;
			console.log( name );
		}
	});
}


function createIssues(userName,repo)
{
	var options = {
		url: urlRoot + '/repos/' +userName+ '/' +repo+ "/issues",
		method: 'POST',
		headers: {
			"User-Agent": "EnableIssues",
			"content-type": "application/json",
			"Authorization": token,
		},
		json: {
			"title": "New Issue",
			"body": "New issue detected"		
		}
	};

	// Send a http request to url and specify a callback that will be called upon its return.
	request(options, function (error, response, body) 
	{
		console.log( body );
		for( var i = 0; i < body.length; i++ )
		{
			var name = body[i].name;
			console.log( name );
		}
	});
}

function editRepo(userName,repo)
{
	var options = {
		url: urlRoot + '/repos/' +userName+ '/' +repo,
		method: 'PATCH',
		headers: {
			"User-Agent": "EnableIssues",
			"content-type": "application/json",
			"Authorization": token,
		},
		json: {
			"name": "Sample-repo",
			"has_wiki": true,
			"description": "Added wiki support"
		}
	};

	// Send a http request to url and specify a callback that will be called upon its return.
	request(options, function (error, response, body) 
	{
		console.log( body );
		for( var i = 0; i < body.length; i++ )
		{
			var name = body[i].name;
			console.log( name );
		}
	});
}

function createReactions(userName,repo,number)
{
	var options = {
		url: urlRoot + '/repos/' +userName+ '/' +repo+ "/issues/" +number+ "/reactions",
		method: 'POST',
		headers: {
			"User-Agent": "EnableIssues",
			"content-type": "application/json",
			"Accept": "application/vnd.github.squirrel-girl-preview",
			"Authorization": token
		},
		json: {
			"content": "+1"
		}
	};

	// Send a http request to url and specify a callback that will be called upon its return.
	request(options, function (error, response, body) 
	{
		var obj = body;
		console.log( obj );
		for( var i = 0; i < obj.length; i++ )
		{
			var name = obj[i].name;
			console.log( name );
		}
	});
}

function issueReactions(userName,repo,number)
{
	var options = {
		url: urlRoot + '/repos/' +userName+ '/' +repo+ "/issues/" +number+ "/reactions",
		method: 'GET',
		headers: {
			"User-Agent": "EnableIssues",
			"content-type": "application/json",
			"Accept": "application/vnd.github.squirrel-girl-preview",
			"Authorization": token
		}
	};

	// Send a http request to url and specify a callback that will be called upon its return.
	request(options, function (error, response, body) 
	{
		var obj = JSON.parse(body);
		console.log( obj );
		/*for( var i = 0; i < obj.length; i++ )
		{
			var name = obj[i].name;
			console.log( name );
		}*/
	});
}