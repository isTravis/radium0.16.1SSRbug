require('../server.babel'); // babel registration (runtime transpilation for node)


import express from 'express';
import session from 'express-session';
import bodyParser from 'body-parser';
import config from '../src/config';
import PrettyError from 'pretty-error';
import http from 'http';
import request from 'request';

const pretty = new PrettyError();
const app = express();
const server = new http.Server(app);

module.exports = app;

/*--------*/
// Connect routes
/*--------*/
app.get('/test', function(req,res){
  setTimeout(function(){
    return res.status(201).json('got it!');
  }, 2000);
});

/*--------*/
// Take the setup and start listening!
/*--------*/
if (config.apiPort) {
	const runnable = app.listen(config.apiPort, (err) => {
		if (err) {
			console.error(err);
		}
		console.info('----\n==> 🌎  API is running on port %s', config.apiPort);
		console.info('==> 💻  Send requests to http://localhost:%s', config.apiPort);
	});


} else {
	console.error('==>     ERROR: No PORT environment variable has been specified');
}
