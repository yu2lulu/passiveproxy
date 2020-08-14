const httputil=require('../methods/httputil')
var fs = require("fs");
var path = require("path");
var readline = require("readline");

function scan(url,headers){
    const readliner = readline.createInterface({
            input: fs.createReadStream(__dirname+'/../config/sensiveFile.txt'),
        });
         
        readliner.on('line', function(chunk) {
            //处理每一行数据
            filename=chunk.toString()
            var ret=httputil.request_get(url+'/'+filename,headers)
            if(ret[0]==200){
                console.log(ret[1])
            }
        });
         
        readliner.on('close', function() {
            //文件读取结束
    });
}

function scan_jsmapfile(url,headers){
    var ret=httputil.request_get(url+".map",headers)
    if(ret[0]==200){
        console.log('jsmap文件泄漏:'+url+".map")
    }
}

module.exports={
    scan,
    scan_jsmapfile
}

