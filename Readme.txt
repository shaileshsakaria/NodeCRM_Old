
- Publish NodeCRM (this is UI / AngularJS project)
- Publish the NodeCRM.API project on Visiual Studio. Remove bin folder from the publish

Server
------
- Download nodejs from https://nodejs.org/en/download/
- Create publish folder
	1. wwwroot/UI  (you can choose any other path)
	2. wwwroot/API (you can choose any other path)
- Copy and paste all NodeCRM publish file to wwwroot/ui
- move to wwwroot/ui/congig folder and apply following change in config.js
	var _configRootUrl = "http://localhost:1783"; //This path would be the same as your API project domain path you bind as host in IIS or URL you set in host.

- Copy and paste all NodeCRM.API publish file to wwwroot/api
- Navigat to wwwroot\api\server.js and change the db string you will find something as below,
	var config = {
		user: 'sa',
		password: 'TBD@456!123',
		server: '216.55.143.205',
		database: 'NodeCRM'

	}
-start nodejs command prompt and enter into the directory where API is going to be published. 
- Enter Following command one by one
	npm install body-parser
	npm install cors
	npm install fs
	npm install express
	npm install jsonwebtoken
	npm install mssql
	npm install sh1
	npm install underscore
- Above nodemodule package will be installed under the folder node_moduels
- execute npm server //(node server started)
- If it throws any error, means any package is missing.
- You can type UI URL on browser and check go for testing.