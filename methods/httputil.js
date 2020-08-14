var request = require('sync-request');

function request_get(url,headers={}){
    var res = request('GET', url, {
        headers: headers
      });
      // console.log(res.getBody().toString());
      // console.log(url);
      // console.log(res.statusCode)
      return res.statusCode,url
}


module.exports={
  request_get
}

