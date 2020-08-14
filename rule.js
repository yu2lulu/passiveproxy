const Main=require('./main')
module.exports = {
  // 模块介绍
  summary: 'my customized rule for AnyProxy',
  // 发送请求前拦截处理
  *beforeSendRequest(requestDetail) {
    
    // 
    

  },
  // 发送响应前处理
  *beforeSendResponse(requestDetail, responseDetail) { 
    if(responseDetail.response.statusCode!=404){
      Main.requestMain(requestDetail)
    }
    for(var header_item in responseDetail.response.header){
      Main.responseMain(responseDetail.response.header[header_item])
        
    }
    Main.responseMain(responseDetail.response.body)
  
   },
  // 是否处理https请求
  *beforeDealHttpsRequest(requestDetail) { 
	  return true;
  },
  // 请求出错的事件
  *onError(requestDetail, error) { 
    if(error){
      console.log('error:'+requestDetail)
    }
   },
  // https连接服务器出错
  *onConnectError(requestDetail, error) { /* ... */ }
};
