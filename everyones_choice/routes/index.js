
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};

exports.addUser = function(req, res){
	console.log(req.body);
	res.end('EC_OK');
}