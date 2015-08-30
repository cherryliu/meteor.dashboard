Router.route('/', function () {
  this.render('Home');
});

Router.route('/documentation', function () {
  this.render('Documentation');
});

Router.route('/things', function () {
  this.render('Things');
});

Router.route('/new_thing', function () {
  this.render('NewThing');
});

Router.route('/instances', function () {
  this.render('Instances');
});

Router.route('/new_instance', function () {
  this.render('NewInstance');
});

