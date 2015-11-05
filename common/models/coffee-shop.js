module.exports = function(CoffeeShop) {
  CoffeeShop.status = function(cb){
	  var currentDate = new Date();
	  var currentHour = currentDate.getHours();
	  var OPEN_HOUR=6;
	  var CLOSE_HOUR =20 ;
	  console.log('Current Hour is:'+currentHour);
	  
	  var response;
	  if(currentHour>OPEN_HOUR && currentHour<CLOSE_HOUR){
		  response = 'We are OPEN..Come In';
	  }else{
		  response = 'Sorry, we are closed. Open daily from: '+OPEN_HOUR+'to '+(CLOSE_HOUR);
	  }
	  cb(null, response);
	};
	
	CoffeeShop.remoteMethod(
		'status',
		{
			http: {path:'/status', verb: 'get'},
			returns: {arg:'status', type:'string'}
		}
	);
	//If wrong ID is queried, it crashes the server by throwing an error : Default behavior should not crash the server, but report an error
	CoffeeShop.getName = function(shopId, cb){
	   CoffeeShop.findById(shopId, function(err, instance){
		   var res;
		   res = "Shop name is: "+instance.name;
		   cb(null, res);
		   console.log(res);
	   });
	};
	//binding remote method getName:
	CoffeeShop.remoteMethod('getName',
		{
			http: {path:'/getname', verb:'get'},
			accepts:{arg:'id', type: 'number', http: {source: 'query'}},
			returns:{arg: 'name', type: 'string'}
		});
};
