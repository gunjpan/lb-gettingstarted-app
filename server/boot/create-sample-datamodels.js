module.exports = function(app) {
 //dataSource.automigrate() method drops existing table(named same as model) and creates a new one with the data
 //Also, if <model>.create is provided with only [], it creates an empty table with the columns fetched from <model>.json.properties 
  app.dataSources.mysqlDs.automigrate('CoffeeShop', function(err) {
    if (err) throw err;
 
    app.models.CoffeeShop.create([
      {name: 'Ghant Cafe', city: 'Vancouver'},
      {name: 'Bees Coffee House', city: 'Toronto'},
      {name: 'Caffe Armanio', city: 'Montreal'},
    ], function(err, coffeeShops) {
      if (err) throw err;
 
      console.log('Models created: \n', coffeeShops);
    });
  });
};