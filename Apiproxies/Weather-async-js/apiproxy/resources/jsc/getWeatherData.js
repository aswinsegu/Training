//
//  Make 5 HTTP callouts to Yahoo weather to get the weather for 5 cities 
//  The calls are all asynchronous and execute in parallel
//  httpClient returns an exchange object that will contain the HTTP response. . . when it arrives
//

var paloAlto = httpClient.get('https://weather.yahooapis.com/forecastrss?w=2467861'); 
context.session['paloAlto'] = paloAlto;

var anchorage = httpClient.get('https://weather.yahooapis.com/forecastrss?w=2354490'); 
context.session['anchorage'] = anchorage;

var honolulu = httpClient.get('https://weather.yahooapis.com/forecastrss?w=2423945');
context.session['honolulu'] = honolulu;

var newyork = httpClient.get('https://weather.yahooapis.com/forecastrss?w=2459115');
context.session['newyork'] = newyork;

var dublin = httpClient.get('https://weather.yahooapis.com/forecastrss?w=560743');
context.session['dublin'] = dublin;