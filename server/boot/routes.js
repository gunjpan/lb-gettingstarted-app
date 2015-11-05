module.exports = function(app){
	// install a "/ping" route that returns a message
	
	app.get('/ping', function(req, res){
		res.send('topa');
	});
}