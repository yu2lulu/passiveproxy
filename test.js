const AnyProxy = require('anyproxy');
const options = {
  port: 8001,
  rule: require('./rule.js'),
  webInterface: {
    enable: true,
    webPort: 8002
  },
  throttle: 10000,
  forceProxyHttps: false,
  wsIntercept: false, // 不开启websocket代理
  silent: false, 
  dangerouslyIgnoreUnauthorized: true

};
const proxyServer = new AnyProxy.ProxyServer(options);

proxyServer.on('ready', () => { 
  console.log('ready finish...');
  if(AnyProxy.utils.certMgr.ifRootCAFileExists()==false){
	console.log('rootCA is not trust!');
  }
});
proxyServer.on('error', (e) => { 
  console.log(e.toString());
});
proxyServer.start();


// 关闭连接
// proxyServer.close();

