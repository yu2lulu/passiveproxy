const sensive_rule=require('./rules/sensive_rule')
const dbutils=require('./methods/dbutils')
const tools=require('./methods/tools')
const filescan=require('./rules/filescan')
const path=require('path')

function responseMain(strs){
    if(sensive_rule.sensive_check(strs)==true){
        console.log(strs.toString());
    }
}

function requestMain(requestDetail){
    hostname=requestDetail.requestOptions.hostname;
    port=requestDetail.requestOptions.port;
    url_path=requestDetail.requestOptions.path;
    method=requestDetail.requestOptions.method;
    headers=JSON.stringify(requestDetail.requestOptions.headers);
    protocol=requestDetail.requestOptions.protocol;
    url=requestDetail.url;
    requestData=requestDetail.requestData;

    if(method=='GET' || method=="POST"){
       //判断当前的请求url是否在数据库中，如果在数据库中则不插入
       tools.item_in_db(url,method,(status)=>{
           if(status==false){
            dbutils.intodb(hostname,port,url_path,method,headers,protocol,url,requestData.toString());
            url_dir=new URL(url).origin+path.dirname(url_path)
            filescan.scan(url_dir,headers)
           }
       })
       //如果是js文件要判断是否是.map文件泄漏
       if(url_path.endsWith('.js')){
           filescan.scan_jsmapfile(url,headers)
       }
    }
}


module.exports = {
    responseMain,
    requestMain
};