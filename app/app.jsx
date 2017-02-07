var React       = require('react');
var ReactDOM    = require('react-dom');
//including react router ~= var Route = require('react-router').route
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main        = require('Main');
var Countdown   = require('Countdown');
var Timer       = require('Timer');

//load foundation css
//require('style!css!foundation-sites/dist/css/foundation.min.css');
$(document).foundation();

//App css(scss) loader
require('style!css!sass!applicationStyles');

ReactDOM.render(
    <Router history={hashHistory}>
       <Route path="/" component={Main}>
           <Route path="countdown" component={Countdown} />
           <IndexRoute component={Timer}/>
       </Route>
    </Router>,
    document.getElementById('app')
);