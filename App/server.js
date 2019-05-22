// create all necessary variables
var request = require('request'),
	bodyParser = require('body-parser'),
	express = require('express'),
	app = express(),
	affId = "rxapi",
	apiKey = "0WbibL1pE57WTOuiADgRKrlrGoGUapmg",
	devinf = "NodeJS,10.12",
	appver = "1.0";

// application set up
app.set('port', (process.env.PORT || 3000));
app.use(express.static('static_files'));
app.set('views', __dirname + '/staticfiles');
app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// object storing msg body for post
var opts = {title:"Refill Rx", url:"",token:"",affId:affId,devinf:devinf,appver:appver};


  // call function to get landing url from walgreens
	getLandingURL(function(json)
	{
		if(json.url != "" && json.token != "")
		{
			opts.url = json.url;
			opts.token = json.token;
			res.render("static_files/prescription.html", opts);
		}
		else
		{
			res.render("pages/error",{title:"Error"});
		}
	});
});

/*
app.get('/callback',function(req,res)
{
  // access query string
	var rx = (req.query.rx) ? req.query.rx : "";

	res.render("pages/callback",{title:rx,rx:rx});
});
*/


function getLandingURL(callback)
{
	var options = {
		method: 'POST',
		url: 'https://services-qa.walgreens.com/api/util/mweb5url',
		json:true,
		body:{
		    apiKey: apiKey,
		    affId: affId,
		    transaction: "refillByScan",
		    act: "mweb5Url",
		    view: "mweb5UrlJSON",
		    devinf: devinf,
		    appver: appver
		}
	};
	request(options, function(err,response,body)
	{
		if (!err && response.statusCode == 200)
		{
			console.log({status:"success",result:body});
			callback({url:body.landingUrl,token:body.token});
		}
		else
		{
			console.log({status:"error",result:err});
			callback({url:"",token:""});
		}
	});
}
function openLandingUrl(){
    var options = {
  		method: 'POST',
  		url: 'https://services-qa.walgreens.com/api/util/mweb5url',
  		json:true,
  		body:{
        affId: affId,
        token: opts.token,
        lat: "CUSTOMER LATITUDE",
        lng: "CUSTOMER LONGITUDE",
        rxNo: "CUSTOMER RX NUMBER",
        appCallBackScheme: "YOUR APP CALLBACK URI SCHEME",
        appCallBackAction: "YOUR APP CALLBACK ACTION",
        trackingId: "YOUR OWN TRACKING ID",
        appId: "refillByScan",
        act: "chkExpRx",
        devinf: "THE DEVICE INFO",
        appver: "THE APP VERSION"
      }
    }
    request(options, function(err,response,body)
  	{
      $('.formBox').style.display = hidden;
      switch(response) {
        case "refillTryAgain":
          $('#msg').innerHtml = "Invalid RX number";
          break;
        case "cancel":
          $('#msg').innerHtml = "You have cancelled the refill";
          break;
        case "back":
          $('#msg').innerHtml = "You have backed out of the refill";
          break;
        case "fillAnother":
          window.location.href = "./static_files/prescription.html";
          $('.formBox').style.display = block;
          break;
        default:
          window.location.href = "./static_files/prescription.html";
          break;
        }
  	});
};

//Route in your app.js file, for the callback action we passed of "rx", the query string value will be the value you passed when creating the checkout for "appCallbackAction"
app.get('/callback',function(req,res)
{
	var rx = (req.query.rx) ? req.query.rx : "";

	res.render("pages/callback",{title:rx,rx:rx});
});



function handleResponse(){

}
app.listen(3000, () => {
    console.log('Server started at http://localhost:3000/');
});
