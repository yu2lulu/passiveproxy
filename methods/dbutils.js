const query=require('../libs/dbdriver');

async function intodb(hostname,port,path,method,headers,protocol,url,requestData){
    sql="insert into proxy(hostname,port,path,method,headers,protocol,url,requestData)values(?,?,?,?,?,?,?,?)";
    var params=[hostname,port,path,method,headers,protocol,url,requestData]
    let rows = await query(sql,params);

    return rows;
    /**
     * OkPacket {
        fieldCount: 0,
        affectedRows: 1,
        insertId: 2,
        serverStatus: 2,
        warningCount: 0,
        message: '',
        protocol41: true,
        changedRows: 0
        }
     */
}

async function getdata(sql,values){
    let row = await query(sql,values);
    return row;
}

module.exports={
    intodb,
    getdata
}