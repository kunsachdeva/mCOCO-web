import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter, Route, Switch} from 'react-router-dom';
import {createBrowserHistory} from 'history';

// Styles
// Import Font Awesome Icons Set
import 'font-awesome/css/font-awesome.min.css';
  // Import Simple Line Icons Set
import 'simple-line-icons/css/simple-line-icons.css';
// Import Main styles for this application
import '../scss/style.scss'

// Containers
import Full from './containers/Full/'

// Views
import Login from './views/Pages/Login/'
import Register from './views/Pages/Register/'
import Page404 from './views/Pages/Page404/'
import Page500 from './views/Pages/Page500/'

const history = createBrowserHistory();
var BaiduYuyin = require("baidu-yuyin-api");

var speech = new BaiduYuyin('swD7CfFYgFLKTCMQaAOAfHDo', 'ab6993ddea88e05106a056153224216f', 'afplay', null, false); 

// Options
var optt = {tex: 'English testing, Hello world', lan: 'zh'}; // Text to speech, language not support English.
var optcn = {lan: 'zh'};
var opten = {format: 'wav', lan: 'en'};

speech.on('ready', () => {
    // Text to speech
    speech.speak("你好世界")
    .then(() => {
        return speech.speak(null, optt);
    })
    .then(() => {
        return speech.speak("测试结束");
    })
    .then(() => {
        return speech.recognize(fs.readFileSync('./test.pcm'), optcn);
    })
    .then(() => {
        return speech.recognize(fs.readFileSync('./test_en.wav'), opten);
    });
});

ReactDOM.render((
  <HashRouter history={history}>
    <Switch>
      <Route exact path="/login" name="Login Page" component={Login}/>
      <Route exact path="/register" name="Register Page" component={Register}/>
      <Route exact path="/404" name="Page 404" component={Page404}/>
      <Route exact path="/500" name="Page 500" component={Page500}/>
      <Route path="/" name="Home" component={Full}/>
    </Switch>
  </HashRouter>
), document.getElementById('root'));

/*
Mcoco
All drivers, pickups, farmers
today’s pickup
pickup remaining this week
export at excel
assign driver
approve payment
coconuts by location
Graph with pickup (done/not done)
*/