const dbutils=require('./dbutils')


function item_in_db(url,method,callback){
    var sql="select count(*) from proxy where url=? and method=?";
    var params=[url,method];
    dbutils.getdata(sql,params).then(data=>{
        if(data[0]['count(*)']==0){
            callback(false)
        }else{
            callback(true)
        }
    }).catch(e=>{
        callback(true)
    })
}

module.exports={
    item_in_db
}