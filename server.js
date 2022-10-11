// Student name: Navdeep Kaur
// Student ID: 200488890


// adding connect
var connect = require('connect');
var app = connect();
var url = require('url');

// creating a calculate function
function calculate(method, x, y) {
    // pasing the inputs
    x = parseFloat(x);
    y = parseFloat(y);
    var signs = {
        add: ' + ',
        subtract: ' - ',
        multiply: ' * ',
        divide: ' / '
    };

    // output string for the error in any inputs
    var output = 'Give valid inputs next time';

    // conditions that runs if all the inputs are right
    if (signs[method] && !isNaN(x) && !isNaN(y)) {
        var expression = x + signs[method] + y;
        var result = 0;
        if(signs[method] == ' + '){
            result = x + y;
        }else if(signs[method] == ' - '){
            result = x - y;
        }else if(signs[method] == ' * '){
            result = x * y;
        }else if(signs[method] == ' / '){
            result = x / y;
        }
        // making a string a that is going to be returned
        output = expression + ' = ' + result;
    }
    return output;
}

app.use('/lab2', function(req, res) {
  var query = url.parse(req.url, true).query;
  res.end(calculate(query.method, query.x, query.y));
});

// listning to 3000 port
app.listen(3000);