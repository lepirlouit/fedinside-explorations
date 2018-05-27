const fetch = require("node-fetch")
const FormData = require("form-data")
const htmlparser = require("htmlparser2");

let csrfToken;
var parser = new htmlparser.Parser({
    onopentag: function(name, attribs){
        if(name === "input" && attribs.name === "__RequestVerificationToken"){
            csrfToken= attribs.value;
        }
    },
}, {decodeEntities: true});

const {UserName, Password} = require("./auth.json");

(async function () {
    /*const res = await fetch('https://fedinside.lbfa.be/Account/Login');
    let cookie = res.headers.get('set-cookie');
    let cookies = cookie.split(',').map(e => e.trim().split(';')[0].split('='));
    let headerCookie = cookies.map(e => e.join('=')).join('; ');

    const getLoginBody = await res.text();
    parser.write(getLoginBody);
    parser.end();


    console.log('cookie', cookie)
    console.log('token', csrfToken)
    console.log('headerCookie', headerCookie)
    const form = new FormData();
    form.append('UserName', UserName);
    form.append('Password', Password);
    form.append('RememberMe', "false");
    form.append('__RequestVerificationToken', csrfToken);
    const res2 = await fetch('https://fedinside.lbfa.be/Account/Login', {
      method: 'POST',
      body: "__RequestVerificationToken="+csrfToken+"&UserName=benoit%40debiolley.be&Password=DRQVS096zWW6JSJ21gkp46FS&RememberMe=false",
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Cookie': headerCookie,
      }
    })
    console.log(res2.ok);
    console.log(res2.status);
    console.log(res2.statusText);
    console.log(res2.headers.raw());
    console.log(await res2.text());
    cookie = res2.headers.get('set-cookie');
    cookies = cookie.split(',').map(e => e.trim().split(';')[0].split('='));
    headerCookie = cookies.map(e => e.join('=')).join('; ');*/
    const res3 = await fetch('https://fedinside.lbfa.be/Championship/PagingCategoryEvents', {
      method: 'POST',
      body: "sort=Category-asc~Event-asc&page=1&pageSize=400&group=&filter=&championshipId=93",
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Cookie': '__RequestVerificationToken=I4NwgiploZgtF7y...wTI1; ASP.NET_SessionId=4v5wsyrubbp5sws21blvraxd; .AspNet.ApplicationCookie=BrTP7...IIaU; SelectedSeasonId=533',
      }
    })
    console.log(res3.ok);
    console.log(res3.status);
    console.log(res3.statusText);
    var fs = require('fs');
    const json = await res3.json()
    console.log(json);
    fs.writeFile("/tmp/test", JSON.stringify(json, null, 2), function(err) {
    if(err) {
        return console.log(err);
    }

    console.log("The file was saved!");
});

})();









        /*return
        .then(res => {
            console.log(res.ok);
            console.log(res.status);
            console.log(res.statusText);
            console.log(res.headers.raw());
            console.log(res.headers.get('content-type'));
        });*/


//get sur https://fedinside.lbfa.be/Account/Login
// -> store cookie and SelectedSeasonId (from cookie) ans request verification id
//post sur https://fedinside.lbfa.be/Account/Login
// -> avec les champs Password et UserName

// POST sur url : https://fedinside.lbfa.be/Championship/PagingElements/0?callingPage=OriginalPage avec params :
// currentOnly=	false
// filter=	Organizer~eq~'RCB'
// group=
// page=	1
// pageSize=	20
// searchTerm=
// sort=	StartDate-desc
