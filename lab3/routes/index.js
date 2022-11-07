var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// adding family memnbers routers

router.get('/:relativeName', (req, res, next) => {
  var membersArray = ['navdeep', 'happy', 'karen', 'matt'];
  var memberName = req.params.relativeName.toLowerCase();
  var memberTrue = membersArray.find(key => key.toLowerCase() == memberName)
  // returning error if the username in the url does not match the names in the famil;y
  if(!memberTrue){
    res.status(400);
    res.send('Member name is not in the array');
  }
  else{
    res.render(`${memberName}`);
  }
})


module.exports = router;
