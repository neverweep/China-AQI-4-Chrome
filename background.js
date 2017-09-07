//城市拼音和中文转换数组
var cities = {'abazhou':'\u963f\u575d\u5dde','akesudiqu':'\u963f\u514b\u82cf\u5730\u533a','alashanmeng':'\u963f\u62c9\u5584\u76df','aletaidiqu':'\u963f\u52d2\u6cf0\u5730\u533a','alidiqu':'\u963f\u91cc\u5730\u533a','ankang':'\u5b89\u5eb7','anqing':'\u5b89\u5e86','anshun':'\u5b89\u987a','anyang':'\u5b89\u9633','anshan':'\u978d\u5c71','bayannaoer':'\u5df4\u5f66\u6dd6\u5c14','bazhong':'\u5df4\u4e2d','baicheng':'\u767d\u57ce','baishan':'\u767d\u5c71','baiyin':'\u767d\u94f6','baise':'\u767e\u8272','bangbu':'\u868c\u57e0','baotou':'\u5305\u5934','baoji':'\u5b9d\u9e21','baoding':'\u4fdd\u5b9a','baoshan':'\u4fdd\u5c71','beihai':'\u5317\u6d77','beijing':'\u5317\u4eac','benxi':'\u672c\u6eaa','bijie':'\u6bd5\u8282','binzhou':'\u6ee8\u5dde','bozhou':'\u4eb3\u5dde','boertala':'\u535a\u5dde','cangzhou':'\u6ca7\u5dde','changdoudiqu':'\u660c\u90fd\u5730\u533a','changjizhou':'\u660c\u5409\u5dde','changde':'\u5e38\u5fb7','changshu':'\u5e38\u719f','changzhou':'\u5e38\u5dde','chaoyang':'\u671d\u9633','chaozhou':'\u6f6e\u5dde','chenzhou':'\u90f4\u5dde','chengdou':'\u6210\u90fd','chengde':'\u627f\u5fb7','chizhou':'\u6c60\u5dde','chifeng':'\u8d64\u5cf0','chongzuo':'\u5d07\u5de6','chuzhou':'\u6ec1\u5dde','chuxiongzhou':'\u695a\u96c4\u5dde','dazhou':'\u8fbe\u5dde','dalizhou':'\u5927\u7406\u5dde','dalian':'\u5927\u8fde','daqing':'\u5927\u5e86','datong':'\u5927\u540c','daxinganlingdiqu':'\u5927\u5174\u5b89\u5cad\u5730\u533a','dandong':'\u4e39\u4e1c','dehongzhou':'\u5fb7\u5b8f\u5dde','deyang':'\u5fb7\u9633','dezhou':'\u5fb7\u5dde','diqingzhou':'\u8fea\u5e86\u5dde','dingxi':'\u5b9a\u897f','dongguan':'\u4e1c\u839e','dongying':'\u4e1c\u8425','eerduosi':'\u9102\u5c14\u591a\u65af','ezhou':'\u9102\u5dde','enshizhou':'\u6069\u65bd\u5dde','fangchenggang':'\u9632\u57ce\u6e2f','foshan':'\u4f5b\u5c71','fuzhou':'\u798f\u5dde','fushun':'\u629a\u987a','fuzhoushi':'\u629a\u5dde','fuxin':'\u961c\u65b0','fuyang':'\u961c\u9633','fuyangshi':'\u5bcc\u9633','gannanzhou':'\u7518\u5357\u5dde','ganzizhou':'\u7518\u5b5c\u5dde','ganzhou':'\u8d63\u5dde','guyuan':'\u56fa\u539f','guangan':'\u5e7f\u5b89','guangyuan':'\u5e7f\u5143','guangzhou':'\u5e7f\u5dde','guigang':'\u8d35\u6e2f','guiyang':'\u8d35\u9633','guilin':'\u6842\u6797','guoluozhou':'\u679c\u6d1b\u5dde','haerbin':'\u54c8\u5c14\u6ee8','hamidiqu':'\u54c8\u5bc6\u5730\u533a','haibeizhou':'\u6d77\u5317\u5dde','haidongdiqu':'\u6d77\u4e1c\u5730\u533a','haikou':'\u6d77\u53e3','haimen':'\u6d77\u95e8','hainanzhou':'\u6d77\u5357\u5dde','haixizhou':'\u6d77\u897f\u5dde','handan':'\u90af\u90f8','hanzhong':'\u6c49\u4e2d','hangzhou':'\u676d\u5dde','hefei':'\u5408\u80a5','hetiandiqu':'\u548c\u7530\u5730\u533a','hechi':'\u6cb3\u6c60','heyuan':'\u6cb3\u6e90','heze':'\u83cf\u6cfd','hezhou':'\u8d3a\u5dde','hebi':'\u9e64\u58c1','hegang':'\u9e64\u5c97','heihe':'\u9ed1\u6cb3','hengshui':'\u8861\u6c34','hengyang':'\u8861\u9633','honghezhou':'\u7ea2\u6cb3\u5dde','huhehaote':'\u547c\u548c\u6d69\u7279','hulunbeier':'\u547c\u4f26\u8d1d\u5c14','huludao':'\u846b\u82a6\u5c9b','huzhou':'\u6e56\u5dde','huaihua':'\u6000\u5316','huaian':'\u6dee\u5b89','huaibei':'\u6dee\u5317','huainan':'\u6dee\u5357','huanggang':'\u9ec4\u5188','huangnanzhou':'\u9ec4\u5357\u5dde','huangshan':'\u9ec4\u5c71','huangshi':'\u9ec4\u77f3','huizhou':'\u60e0\u5dde','jixi':'\u9e21\u897f','jian':'\u5409\u5b89','jilin':'\u5409\u6797','jimo':'\u5373\u58a8','jinan':'\u6d4e\u5357','jining':'\u6d4e\u5b81','jiamusi':'\u4f73\u6728\u65af','jiaxing':'\u5609\u5174','jiayuguan':'\u5609\u5cea\u5173','jiangmen':'\u6c5f\u95e8','jiangyin':'\u6c5f\u9634','jiaonan':'\u80f6\u5357','jiaozhou':'\u80f6\u5dde','jiaozuo':'\u7126\u4f5c','jieyang':'\u63ed\u9633','jinchang':'\u91d1\u660c','jinhua':'\u91d1\u534e','jintan':'\u91d1\u575b','jinzhou':'\u9526\u5dde','jincheng':'\u664b\u57ce','jinzhong':'\u664b\u4e2d','jingmen':'\u8346\u95e8','jingzhou':'\u8346\u5dde','jingdezhen':'\u666f\u5fb7\u9547','jiujiang':'\u4e5d\u6c5f','jiuquan':'\u9152\u6cc9','jurong':'\u53e5\u5bb9','kashidiqu':'\u5580\u4ec0\u5730\u533a','kaifeng':'\u5f00\u5c01','kelamayi':'\u514b\u62c9\u739b\u4f9d','kezhou':'\u514b\u5dde','kuerle':'\u5e93\u5c14\u52d2','kunming':'\u6606\u660e','kunshan':'\u6606\u5c71','lasa':'\u62c9\u8428','laibin':'\u6765\u5bbe','laiwu':'\u83b1\u829c','laixi':'\u83b1\u897f','laizhou':'\u83b1\u5dde','lanzhou':'\u5170\u5dde','langfang':'\u5eca\u574a','leshan':'\u4e50\u5c71','lijiang':'\u4e3d\u6c5f','lishui':'\u4e3d\u6c34','liyang':'\u6ea7\u9633','lianyungang':'\u8fde\u4e91\u6e2f','liangshanzhou':'\u51c9\u5c71\u5dde','liaoyang':'\u8fbd\u9633','liaoyuan':'\u8fbd\u6e90','liaocheng':'\u804a\u57ce','linzhidiqu':'\u6797\u829d\u5730\u533a','linan':'\u4e34\u5b89','lincang':'\u4e34\u6ca7','linfen':'\u4e34\u6c7e','linxiazhou':'\u4e34\u590f\u5dde','linyi':'\u4e34\u6c82','liuzhou':'\u67f3\u5dde','liuan':'\u516d\u5b89','liupanshui':'\u516d\u76d8\u6c34','longyan':'\u9f99\u5ca9','longnan':'\u9647\u5357','loudi':'\u5a04\u5e95','luzhou':'\u6cf8\u5dde','luoyang':'\u6d1b\u9633','luohe':'\u6f2f\u6cb3','lvliang':'\u5415\u6881','maanshan':'\u9a6c\u978d\u5c71','maoming':'\u8302\u540d','meishan':'\u7709\u5c71','meizhou':'\u6885\u5dde','mianyang':'\u7ef5\u9633','mudanjiang':'\u7261\u4e39\u6c5f','naqudiqu':'\u90a3\u66f2\u5730\u533a','nanchang':'\u5357\u660c','nanchong':'\u5357\u5145','nanjing':'\u5357\u4eac','nanning':'\u5357\u5b81','nanping':'\u5357\u5e73','nantong':'\u5357\u901a','nanyang':'\u5357\u9633','najiang':'\u5185\u6c5f','ningbo':'\u5b81\u6ce2','ningde':'\u5b81\u5fb7','nujiangzhou':'\u6012\u6c5f\u5dde','panzhihua':'\u6500\u679d\u82b1','panjin':'\u76d8\u9526','penglai':'\u84ec\u83b1','pingdingshan':'\u5e73\u9876\u5c71','pingdu':'\u5e73\u5ea6','pingliang':'\u5e73\u51c9','pingxiang':'\u840d\u4e61','putian':'\u8386\u7530','puyang':'\u6fee\u9633','puer':'\u666e\u6d31','qitaihe':'\u4e03\u53f0\u6cb3','qiqihaer':'\u9f50\u9f50\u54c8\u5c14','qiandongnanzhou':'\u9ed4\u4e1c\u5357\u5dde','qiannanzhou':'\u9ed4\u5357\u5dde','qianxinanzhou':'\u9ed4\u897f\u5357\u5dde','qinzhou':'\u94a6\u5dde','qinhuangdao':'\u79e6\u7687\u5c9b','qingdao':'\u9752\u5c9b','qingyuan':'\u6e05\u8fdc','qingyang':'\u5e86\u9633','quzhou':'\u8862\u5dde','qujing':'\u66f2\u9756','quanzhou':'\u6cc9\u5dde','rikazediqu':'\u65e5\u5580\u5219\u5730\u533a','rizhao':'\u65e5\u7167','rongcheng':'\u8363\u6210','rushan':'\u4e73\u5c71','sanmenxia':'\u4e09\u95e8\u5ce1','sanming':'\u4e09\u660e','sansha':'\u4e09\u6c99','sanya':'\u4e09\u4e9a','xiamen':'\u53a6\u95e8','shannandiqu':'\u5c71\u5357\u5730\u533a','shantou':'\u6c55\u5934','shanwei':'\u6c55\u5c3e','shangluo':'\u5546\u6d1b','shangqiu':'\u5546\u4e18','shanghai':'\u4e0a\u6d77','shangrao':'\u4e0a\u9976','shaoguan':'\u97f6\u5173','shaoyang':'\u90b5\u9633','shaoxing':'\u7ecd\u5174','shenzhen':'\u6df1\u5733','shenyang':'\u6c88\u9633','shiyan':'\u5341\u5830','shihezi':'\u77f3\u6cb3\u5b50','shijiazhuang':'\u77f3\u5bb6\u5e84','shizuishan':'\u77f3\u5634\u5c71','shouguang':'\u5bff\u5149','shuangyashan':'\u53cc\u9e2d\u5c71','shuozhou':'\u6714\u5dde','siping':'\u56db\u5e73','songyuan':'\u677e\u539f','suzhou':'\u82cf\u5dde','suihua':'\u7ee5\u5316','suizhou':'\u968f\u5dde','suining':'\u9042\u5b81','tachengdiqu':'\u5854\u57ce\u5730\u533a','taizhou':'\u53f0\u5dde','taicang':'\u592a\u4ed3','taiyuan':'\u592a\u539f','taian':'\u6cf0\u5b89','taizhoushi':'\u6cf0\u5dde','tangshan':'\u5510\u5c71','tianjin':'\u5929\u6d25','tianshui':'\u5929\u6c34','tieling':'\u94c1\u5cad','tonghua':'\u901a\u5316','tongliao':'\u901a\u8fbd','tongchuan':'\u94dc\u5ddd','tongling':'\u94dc\u9675','tongrendiqu':'\u94dc\u4ec1\u5730\u533a','tulufandiqu':'\u5410\u9c81\u756a\u5730\u533a','wafangdian':'\u74e6\u623f\u5e97','weihai':'\u5a01\u6d77','weifang':'\u6f4d\u574a','weinan':'\u6e2d\u5357','wenzhou':'\u6e29\u5dde','wendeng':'\u6587\u767b','wenshanzhou':'\u6587\u5c71\u5dde','wuhai':'\u4e4c\u6d77','wulanchabu':'\u4e4c\u5170\u5bdf\u5e03','wulumuqi':'\u4e4c\u9c81\u6728\u9f50','wuxi':'\u65e0\u9521','wuhu':'\u829c\u6e56','wujiang':'\u5434\u6c5f','wuzhong':'\u5434\u5fe0','wuzhou':'\u68a7\u5dde','wujiaqu':'\u4e94\u5bb6\u6e20','wuhan':'\u6b66\u6c49','wuwei':'\u6b66\u5a01','xian':'\u897f\u5b89','xining':'\u897f\u5b81','xishuangbannazhou':'\u897f\u53cc\u7248\u7eb3\u5dde','xilinguolemeng':'\u9521\u6797\u90ed\u52d2\u76df','xianning':'\u54b8\u5b81','xianyang':'\u54b8\u9633','xiangtan':'\u6e58\u6f6d','xiangxizhou':'\u6e58\u897f\u5dde','xiangyang':'\u8944\u9633','xiaogan':'\u5b5d\u611f','xinzhou':'\u5ffb\u5dde','xinxiang':'\u65b0\u4e61','xinyu':'\u65b0\u4f59','xinyang':'\u4fe1\u9633','xingtai':'\u90a2\u53f0','xinganmeng':'\u5174\u5b89\u76df','suqian':'\u5bbf\u8fc1','suzhoushi':'\u5bbf\u5dde','xuzhou':'\u5f90\u5dde','xuchang':'\u8bb8\u660c','xuancheng':'\u5ba3\u57ce','yaan':'\u96c5\u5b89','yantai':'\u70df\u53f0','yanan':'\u5ef6\u5b89','yanbianzhou':'\u5ef6\u8fb9\u5dde','yancheng':'\u76d0\u57ce','yangzhou':'\u626c\u5dde','yangjiang':'\u9633\u6c5f','yangquan':'\u9633\u6cc9','yichunshi':'\u4f0a\u6625','yilihasakezhou':'\u4f0a\u7281\u54c8\u8428\u514b\u5dde','yibin':'\u5b9c\u5bbe','yichang':'\u5b9c\u660c','yichun':'\u5b9c\u6625','yixing':'\u5b9c\u5174','yiwu':'\u4e49\u4e4c','yiyang':'\u76ca\u9633','yinchuan':'\u94f6\u5ddd','yingtan':'\u9e70\u6f6d','yingkou':'\u8425\u53e3','yongzhou':'\u6c38\u5dde','yulin':'\u6986\u6797','yulin':'\u7389\u6797','yushuzhou':'\u7389\u6811\u5dde','yuxi':'\u7389\u6eaa','yueyang':'\u5cb3\u9633','yunfu':'\u4e91\u6d6e','yuncheng':'\u8fd0\u57ce','zaozhuang':'\u67a3\u5e84','zhanjiang':'\u6e5b\u6c5f','zhangjiagang':'\u5f20\u5bb6\u6e2f','zhangjiajie':'\u5f20\u5bb6\u754c','zhangjiakou':'\u5f20\u5bb6\u53e3','zhangye':'\u5f20\u6396','zhangqiu':'\u7ae0\u4e18','zhangzhou':'\u6f33\u5dde','changchun':'\u957f\u6625','changsha':'\u957f\u6c99','changzhi':'\u957f\u6cbb','zhaoyuan':'\u62db\u8fdc','zhaotong':'\u662d\u901a','zhaoqing':'\u8087\u5e86','zhenjiang':'\u9547\u6c5f','zhengzhou':'\u90d1\u5dde','zhongshan':'\u4e2d\u5c71','zhongwei':'\u4e2d\u536b','zhongqing':'\u91cd\u5e86','zhoushan':'\u821f\u5c71','zhoukou':'\u5468\u53e3','zhuhai':'\u73e0\u6d77','zhuzhou':'\u682a\u6d32','zhuji':'\u8bf8\u66a8','zhumadian':'\u9a7b\u9a6c\u5e97','ziyang':'\u8d44\u9633','zibo':'\u6dc4\u535a','zigong':'\u81ea\u8d21','zunyi':'\u9075\u4e49'};

//设定基础badge背景颜色
chrome.browserAction.setBadgeBackgroundColor({color: [0, 200, 200, 255]});

//读取设置
var settings;
var rData = '';
chrome.storage.local.get({
    time: new Date().getTime().toString(),
    city: 'beijing',
    data: '',
    limit: 100
    }, 
    function(items) {
        settings = items;
        if(settings.data){
            settings.data = eval('(' + settings.data + ')');
            rData = settings.data;
        }
        requestJSON();
    }
);

//间隔运行
var interval;
var t;
//已封装的 Ajax 请求函数
var ajax = {};
//检查服务器HTTP响应的成功状态
ajax.httpSuccess = function(xhr){
    return xhr.status >= 200 && xhr.status < 300 || xhr.status == 304;
};
//发起一个ajax请求
ajax.request = function(){
    clearInterval(interval);
    clearTimeout(t);
    if(!settings.city)return;
    opt = {
        //请求方法
        method: 'GET',
        //请求的URL
        //请勿盗用API Token
        url: 'http://www.pm25.in/api/querys/aqi_details.json?city=' + settings.city + '&token=csWdBzZzpaxBoUNouyXb&timestamp=' + new Date().getTime(),
        //请求超时的时间
        timeout: 10000,
        //请求失败、成功或完成时执行的函数
        complete: function(){
            clearTimeout(t);
            clearInterval(interval);
            interval = setInterval('requestJSON()',900000);
            consoleLog('background.js', '请求完成');;
        },
        error: function(){
            clearTimeout(t);
            chrome.browserAction.setIcon({path: 'icons/err_19.png'});
            chrome.browserAction.setBadgeText({text: ''});
            consoleError('background.js', '请求错误');;
        },
        success: function(){
            clearTimeout(t);
            tmp = eval('(' + xhr.responseText + ')');
            if(typeof(tmp.error) != 'undefined'){
                chrome.browserAction.setIcon({path: 'icons/err_19.png'});
                chrome.browserAction.setBadgeText({text: ''});
                consoleError('background.js', '请求成功，但是返回错误');;
            }else{
                consoleInfo('background.js', '请求成功，返回数据');;
                parseAndSaveData(tmp);
            }
        },
        timeoutDo: function(){
            clearTimeout(t);
            clearInterval(interval);
            interval = setInterval('requestJSON()',900000);
            chrome.browserAction.setIcon({path: 'icons/err_19.png'});
            chrome.browserAction.setBadgeText({text: ''});
            consoleError('background.js', '请求超时');;
        },
    };
    var xhr = new XMLHttpRequest(),
        timeout = opt.timeout,
        requestDone = false;
    //初始化xhr
    xhr.open(opt.method, opt.url, true);
    //初始化一个10秒的回调函数，用于取消请求（如果尚未完成的话）
    t = setTimeout(function(){
        requestDone = true;
        xhr.abort();
        opt.timeoutDo();
    }, timeout);
    //监听文档状态的更新
    xhr.onreadystatechange = function(){
        //保持等待，直到数据完全加载，并保证请求未超时
        if(xhr.readyState == 4 && !requestDone){
            if(ajax.httpSuccess(xhr)){
                opt.success(xhr, xhr.responseText)
            } else {
                opt.error();
            }
            opt.complete();
        }
    };
    xhr.send(null);
};

//处理并保存数据
function parseAndSaveData(response){
    rData = response[(response.length - 1)];
    time = new Date().getTime();
    chrome.storage.local.set({'time': time.toString()});

    //判断数据是否有效
    function isAvailable(tmpData){
        if(tmpData == null || tmpData == undefined || isNaN(tmpData)){
            return '0';
        }else{
            return tmpData;
        }
    }

    //根据数值计算 AQI
    rData.cn_aqi_pm2_5 = AQIPM25(isAvailable(rData.pm2_5),true);
    rData.cn_aqi_pm10 = AQIPM10(isAvailable(rData.pm10),true);
    rData.cn_aqi_so2 = AQISO21hr(isAvailable(rData.so2),isAvailable(rData.so2_24h),true);
    rData.cn_aqi_no2 = AQINO2(isAvailable(rData.no2),true);
    rData.cn_aqi_o3 = AQIO31hr(isAvailable(rData.o3),true);
    rData.cn_aqi_o3_8hr = AQIO38hr(isAvailable(rData.o3_8h),isAvailable(rData.o3),true);
    rData.cn_aqi_co = AQICO(isAvailable(rData.co),true);
    rData.cn_aqi = Math.max(rData.cn_aqi_o3_8hr,rData.cn_aqi_pm2_5,rData.cn_aqi_pm10,rData.cn_aqi_so2,rData.cn_aqi_no2,rData.cn_aqi_o3,rData.cn_aqi_co);

    //根据数值计算主要污染物
    rData.primary_pollutant = '';
    if(rData.cn_aqi > 50){
        if(rData.cn_aqi_pm2_5 == rData.cn_aqi){
            rData.primary_pollutant += 'PM2.5 ';
        }
        if(rData.cn_aqi_pm10 == rData.cn_aqi){
            rData.primary_pollutant += 'PM10 ';
        }
        if(rData.cn_aqi_so2 == rData.cn_aqi){
            rData.primary_pollutant += '二氧化硫 ';
        }
        if(rData.cn_aqi_no2 == rData.cn_aqi){
            rData.primary_pollutant += '二氧化氮 ';
        }
        if(rData.cn_aqi_o3 == rData.cn_aqi){
            rData.primary_pollutant += '臭氧1小时 ';
        }
        if(rData.cn_aqi_o3_8hr == rData.cn_aqi){
            rData.primary_pollutant += '臭氧8小时 ';
        }
        if(rData.cn_aqi_co == rData.cn_aqi){
            rData.primary_pollutant += '一氧化碳 ';
        }
    }

    //根据数值计算污染程度
    if(rData.cn_aqi > 300){
        rData.quality = '严重污染';
    }else if(rData.cn_aqi > 200){
        rData.quality = '重度污染';
    }else if(rData.cn_aqi > 150){
        rData.quality = '中度污染';
    }else if(rData.cn_aqi > 100){
        rData.quality = '轻度污染';
    }else if(rData.cn_aqi > 50){
        rData.quality = '良';
    }else{
        rData.quality = '优';
    }
    
    //根据数值计算 美国标准 AQI
    rData.us_aqi_pm2_5 = AQIPM25(isAvailable(rData.pm2_5),false);
    rData.us_aqi_pm10 = AQIPM10(isAvailable(rData.pm10),false);
    rData.us_aqi_so2 = AQISO21hr(isAvailable(rData.so2),isAvailable(rData.so2_24h),false);
    rData.us_aqi_no2 = AQINO2(isAvailable(rData.no2),false);
    rData.us_aqi_o3 = AQIO31hr(isAvailable(rData.o3),false);
    rData.us_aqi_o3_8hr = AQIO38hr(isAvailable(rData.o3_8h),isAvailable(rData.o3),false);
    rData.us_aqi_co = AQICO(isAvailable(rData.co),false);
    rData.us_aqi = Math.max(rData.us_aqi_o3_8hr,rData.us_aqi_pm2_5,rData.us_aqi_pm10,rData.us_aqi_so2,rData.us_aqi_no2,rData.us_aqi_o3,rData.us_aqi_co);

    settings.data = rData;
    chrome.storage.local.set({'data': JSON.stringify(rData)}, function(){});
}

//调整显示
function updateIcon(){
    if(!isNaN(rData.cn_aqi)){
        //更换title
        chrome.browserAction.setTitle({ title: cities[settings.city] + " AQI: " + rData.cn_aqi.toString() });
        //显示badge
        if(rData.cn_aqi >= settings.limit){
            chrome.browserAction.setBadgeText({text: rData.cn_aqi.toString()});
        }else{
            chrome.browserAction.setBadgeText({text: ''});
        }
        //显示图标
        if(rData.cn_aqi > 300){
            chrome.browserAction.setIcon({path: 'icons/l6_19.png'});;
            chrome.browserAction.setBadgeBackgroundColor({color: [128, 0, 35, 255]});
        }else if(rData.cn_aqi > 200){
            chrome.browserAction.setIcon({path: 'icons/l5_19.png'});;
            chrome.browserAction.setBadgeBackgroundColor({color: [150, 0, 80, 255]});
        }else if(rData.cn_aqi > 150){
            chrome.browserAction.setIcon({path: 'icons/l4_19.png'});;
            chrome.browserAction.setBadgeBackgroundColor({color: [255, 0, 0, 255]});
        }else if(rData.cn_aqi > 100){
            chrome.browserAction.setIcon({path: 'icons/l3_19.png'});;
            chrome.browserAction.setBadgeBackgroundColor({color: [255, 128, 0, 255]});
        }else if(rData.cn_aqi > 50){
            chrome.browserAction.setIcon({path: 'icons/l2_19.png'});;
            chrome.browserAction.setBadgeBackgroundColor({color: [128, 128, 0, 255]});
        }else{
            chrome.browserAction.setIcon({path: 'icons/l1_19.png'});;
            chrome.browserAction.setBadgeBackgroundColor({color: [0, 128, 0, 255]});
        }
        consoleLog('background.js', '更新图标和角标');;
    }else{
        chrome.browserAction.setIcon({path: 'icons/err_19.png'});
        chrome.browserAction.setBadgeText({text: ''});
        consoleWarn('background.js', '无数据，更新为失败图标');;
    }
}


//主要请求程序
function requestJSON(){
    if(rData && rData.area.toString() == cities[settings.city]){
        clearInterval(interval);
        time = parseInt(settings.time);

        var date = new Date();
        var now = date.getTime();
        date.setMinutes(0);
        date.setSeconds(0);
        timeDiff = (now - date.getTime()) / 60 / 1000;
        
        if(timeDiff >= 43 && now - time > 1020000){
            chrome.browserAction.setIcon({path: 'icons/icon_19.png'});;
            chrome.browserAction.setBadgeText({text: ''});
            ajax.request();
            consoleLog('background.js', '请求新数据');;
        }else{
            updateIcon();
            clearInterval(interval);
            interval = setInterval('requestJSON()',900000);
            consoleLog('background.js', '返回保存数据');;
        }
    }else if(settings.city != ''){
        chrome.browserAction.setIcon({path: 'icons/icon_19.png'});;
        chrome.browserAction.setBadgeText({text: ''});
        ajax.request();
        consoleWarn('background.js', '未找到数据，但有城市记录');;
    }else{
        chrome.browserAction.setIcon({path: 'icons/icon_19.png'});;
        chrome.browserAction.setBadgeText({text: ''});
        consoleWarn('background.js', '未找到数据和城市记录');;
    }
}

//监听数据变化
chrome.storage.onChanged.addListener(function(changes, namespace){
    for (key in changes) {
        if (key == 'data'){
            consoleLog('background.js', '检测到数据更新');;
        }else if(key == 'limit'){
            consoleLog('background.js', '检测到设置更新');;
        };
    };
    updateIcon();
});

//强制更新
function forceUpdate(){
    clearInterval(interval);
    chrome.browserAction.setIcon({path: 'icons/icon_19.png'});
    chrome.browserAction.setBadgeText({text: ''});
    ajax.request();
    consoleInfo('background.js', '强制更新数据');;
}

//线性化，计算 AQI 分值的程序
function Linear(AQIhigh, AQIlow, Conchigh, Conclow, Concentration){
    var linear;
    var Conc = parseFloat(Concentration);
    var a;
    a = ((Conc - Conclow) / (Conchigh - Conclow)) * (AQIhigh-AQIlow) + AQIlow;
    linear = Math.round(a);
    return linear;
}

//计算 PM25
function AQIPM25(Concentration, isCN){
    var Conc = parseFloat(Concentration);
    var c;
    var AQI;
    c = (Math.floor(10 * Conc))/10;
    if(isCN){
        if (c >= 0 && c < 36){
            AQI = Linear(50,0,35,0,c);
        }else if (c >= 36 && c < 76){
            AQI = Linear(100,51,75,35,c);
        }else if (c >= 76 && c < 116){
            AQI = Linear(150,101,115,75,c);
        }else if (c >= 116 && c < 151){
            AQI = Linear(200,151,150,115,c);
        }else if (c >= 151 && c < 251){
            AQI = Linear(300,201,250,150,c);
        }else if (c >= 251 && c < 351){
            AQI = Linear(400,301,350,250,c);
        }else if (c >= 351 && c < 501){
            AQI = Linear(500,401,500,350,c);
        }else{
            AQI = 500;
        }
    }else{
        if (c >= 0 && c < 12.1){
            AQI = Linear(50,0,12,0,c);
        }else if (c >= 12.1 && c < 35.5){
            AQI = Linear(100,51,35.4,12.1,c);
        }else if (c >= 35.5 && c < 55.5){
            AQI = Linear(150,101,55.4,35.5,c);
        }else if (c >= 55.5 && c < 150.5){
            AQI = Linear(200,151,150.4,55.5,c);
        }else if (c >= 150.5 && c < 250.5){
            AQI = Linear(300,201,250.4,150.5,c);
        }else if (c >= 250.5 && c < 350.5){
            AQI = Linear(400,301,350.4,250.5,c);
        }else if (c >= 350.5 && c < 500.5){
            AQI = Linear(500,401,500.4,350.5,c);
        }else{
            AQI = 500;
        }
    }
    return AQI;
}

//计算 PM10
function AQIPM10(Concentration, isCN){
    var Conc = parseFloat(Concentration);
    var c;
    var AQI;
    c = Math.floor(Conc);
    if(isCN){
        if (c >= 0 && c < 50){
            AQI = Linear(50,0,49,0,c);
        }else if (c >= 50 && c < 150){
            AQI = Linear(100,51,149,50,c);
        }else if (c >= 150 && c < 250){
            AQI = Linear(150,101,249,149,c);
        }else if (c >= 250 && c < 350){
            AQI = Linear(200,151,349,250,c);
        }else if (c >= 350 && c < 420){
            AQI = Linear(300,201,419,350,c);
        }else if (c >= 420 && c < 500){
            AQI = Linear(400,301,499,420,c);
        }else if (c >= 500 && c < 600){
            AQI = Linear(500,401,599,500,c);
        }else{
            AQI = 500;
        }
    }else{
        if (c >= 0 && c < 55){
            AQI = Linear(50,0,54,0,c);
        }else if (c >= 55 && c < 155){
            AQI = Linear(100,51,154,55,c);
        }else if (c >= 155 && c < 255){
            AQI = Linear(150,101,254,155,c);
        }else if (c >= 255 && c < 355){
            AQI = Linear(200,151,354,255,c);
        }else if (c >= 355 && c < 425){
            AQI = Linear(300,201,424,355,c);
        }else if (c >= 425 && c < 505){
            AQI = Linear(400,301,504,425,c);
        }else if (c >= 505 && c < 605){
            AQI = Linear(500,401,604,505,c);
        }else{
            AQI = 500;
        }
    }
    return AQI;
}

//计算 CO
function AQICO(Concentration, isCN){
    var Conc = parseFloat(Concentration);
    var c;
    var AQI;
    c = (Math.floor(10*Conc))/10;
    if(isCN){
        if (c >= 0 && c < 5){
            AQI = Linear(50,0,4.9,0,c);
        }else if (c >= 5 && c < 10){
            AQI = Linear(100,51,9.9,5,c);
        }else if (c >= 10 && c < 35){
            AQI = Linear(150,101,34.9,10,c);
        }else if (c >= 35 && c < 60){
            AQI = Linear(200,151,59.9,35,c);
        }else if (c >= 60 && c < 90){
            AQI = Linear(300,201,89.9,60,c);
        }else if (c >= 90 && c < 120){
            AQI = Linear(400,301,119.9,90,c);
        }else if (c >= 120 && c < 150){
            AQI = Linear(500,401,149.9,120,c);
        }else{
            AQI = 500;
        }
    }else{
        if (c >= 0 && c < 4.5){
            AQI = Linear(50,0,4.4,0,c);
        }else if (c >= 4.5 && c < 9.5){
            AQI = Linear(100,51,9.4,4.5,c);
        }else if (c >= 9.5 && c < 12.5){
            AQI = Linear(150,101,12.4,9.5,c);
        }else if (c >= 12.5 && c < 15.5){
            AQI = Linear(200,151,15.4,12.5,c);
        }else if (c >= 15.5 && c < 30.5){
            AQI = Linear(300,201,30.4,15.5,c);
        }else if (c >= 30.5 && c < 40.5){
            AQI = Linear(400,301,40.4,30.5,c);
        }else if (c >= 40.5 && c < 50.5){
            AQI = Linear(500,401,50.4,40.5,c);
        }else{
            AQI = 500;
        }
    }
    return AQI;
}

//计算 NO2
function AQINO2(Concentration, isCN){
    var Conc = parseFloat(Concentration);
    var c;
    var AQI;
    if(isCN){
        c = Math.floor(Conc);
        if (c >= 0 && c < 100){
            AQI = Linear(50,0,99,0,c);
        }else if (c >= 100 && c < 200){
            AQI = Linear(100,51,199,100,c);
        }else if (c >= 200 && c < 700){
            AQI = Linear(150,101,699,200,c);
        }else if (c >= 700 && c < 1200){
            AQI = Linear(200,151,1199,700,c);
        }else if (c >= 1200 && c < 2340){
            AQI = Linear(300,201,2339,1200,c);
        }else if (c >= 2340 && c < 3090){
            AQI = Linear(400,301,3089,2340,c);
        }else if (c >= 3090 && c <= 3840){
            AQI = Linear(500,401,3839,3090,c);
        }else{
            AQI = 500;
        }
    }else{
        c = (Math.floor(Conc))/1000;
        if (c >= 0 && c < .054){
            AQI = Linear(50,0,.053,0,c);
        }else if (c >= .054 && c < .101){
            AQI = Linear(100,51,.100,.054,c);
        }else if (c >= .101 && c < .361){
            AQI = Linear(150,101,.360,.101,c);
        }else if (c >= .361 && c < .650){
            AQI = Linear(200,151,.649,.361,c);
        }else if (c >= .650 && c < 1.250){
            AQI = Linear(300,201,1.249,.650,c);
        }else if (c >= 1.250 && c < 1.650){
            AQI = Linear(400,301,1.649,1.250,c);
        }else if (c >= 1.650 && c <= 2.049){
            AQI = Linear(500,401,2.049,1.650,c);
        }else{
            AQI = 500;
        }
    }
    return AQI;
}

//计算 SO2 1hr
function AQISO21hr(Concentration, Concentration24hr, isCN){
    var Conc = parseFloat(Concentration);
    var Conc24hr = parseFloat(Concentration24hr);
    var c;
    var AQI;
    c = Math.floor(Conc);
    c24hr = Math.floor(Conc24hr);
    if(isCN){
        if (c >= 0 && c < 150){
            AQI = Linear(50,0,149,0,c);
        }else if (c >= 150 && c < 500){
            AQI = Linear(100,51,499,150,c);
        }else if (c >= 500 && c < 650){
            AQI = Linear(150,101,649,500,c);
        }else if (c >= 650 && c <= 800){
            AQI = Linear(200,151,799,650,c);
        }else if (c >= 800 && c <= 2620){
            AQI = AQISO224hr(c24hr,true);
        }else{
            AQI = 500;
        }
    }else{
        if (c >= 0 && c < 36){
            AQI = Linear(50,0,35,0,c);
        }else if (c >= 36 && c < 76){
            AQI = Linear(100,51,75,36,c);
        }else if (c >= 76 && c < 186){
            AQI = Linear(150,101,185,76,c);
        }else if (c >= 186 && c <= 304){
            AQI = Linear(200,151,304,186,c);
        }else if (c >= 304 && c <= 604){
            AQI = Linear(300,201,604,305,c);
        }else if (c >= 605 && c < 805){
            AQI = Linear(400,301,804,605,c);
        }else if (c >= 805 && c <= 1004){
            AQI = Linear(500,401,1004,805,c);
        }else{
            AQI = 500;
        }
    }
    return AQI;
}
//计算 SO2 24Hr
function AQISO224hr(Concentration){
    var Conc = parseFloat(Concentration);
    var c;
    var AQI;
    c = Math.floor(Conc);
    if (c >= 0 && c < 50){
        AQI = Linear(50,0,49,0,c);
    }else if (c >= 50 && c < 150){
        AQI = Linear(100,51,499,150,c);
    }else if (c >= 150 && c < 475){
        AQI = Linear(150,101,649,500,c);
    }else if (c >= 475 && c <= 800){
        AQI = Linear(200,151,799,650,c);
    }else if (c >= 800 && c <= 1600){
         AQI = Linear(300,201,1599,800,c);
    }else if (c >= 1600 && c < 2100){
        AQI = Linear(400,301,2099,1600,c);
    }else if (c >= 2100 && c <= 2620){
        AQI = Linear(500,401,2619,2100,c);
    }else{
        AQI = 500;
    }
    return AQI;
}

//计算 O3 1hr
function AQIO31hr(Concentration, isCN){
    var Conc = parseFloat(Concentration);
    var c;
    var AQI;
    if(isCN){
        c = Math.floor(Conc);
        if (c >= 0 && c < 160){
            AQI = Linear(50,0,159,0,c);
        }else if (c >= 160 && c < 200){
            AQI = Linear(100,51,199,160,c);
        }else if (c >= 200 && c < 300){
            AQI = Linear(150,101,299,200,c);
        }else if (c >= 300 && c < 400){
            AQI = Linear(200,151,399,300,c);
        }else if (c >= 400 && c < 800){
            AQI = Linear(300,201,799,400,c);
        }else if (c >= 800 && c < 1000){
            AQI = Linear(400,301,999,800,c);
        }else if (c >= 1000 && c < 1200){
            AQI = Linear(500,401,1199,1200,c);
        }else{
            AQI = 500;
        }
    }else{
        c = (Math.floor(Conc))/1000;
        if (c >= 0 && c < .125){
            AQI = 0;
        }else if(c >= .125 && c < .165){
            AQI = Linear(150,101,.164,.125,c);
        }else if (c >= .165 && c < .205){
            AQI = Linear(200,151,.204,.165,c);
        }else if (c >= .205 && c < .405){
            AQI = Linear(300,201,.404,.205,c);
        }else if (c >= .405 && c < .505){
            AQI = Linear(400,301,.504,.405,c);
        }else if (c >= .505 && c < .605){
            AQI = Linear(500,401,.604,.505,c);
        }else{
            AQI = 500;
        }
    }
    return AQI;
}
//计算 O3 8hr
function AQIO38hr(Concentration, Concentration1hr, isCN){
    var Conc = parseFloat(Concentration);
    var Conc1hr = parseFloat(Concentration1hr);
    var c;
    var AQI;
    if(isCN){
        c = Math.floor(Conc);
        c1hr = Math.floor(Conc1hr);
        if (c >= 0 && c < 100){
            AQI = Linear(50,0,99,0,c);
        }else if (c >= 100 && c < 160){
            AQI = Linear(100,51,159,100,c);
        }else if (c >= 160 && c < 215){
            AQI = Linear(150,101,214,160,c);
        }else if (c >= 215 && c < 265){
            AQI = Linear(200,151,299,200,c);
        }else if (c >= 265 && c < 800){
            AQI = Linear(300,201,799,265,c);
        }else{
            AQI = AQIO31hr(c1hr, true);
        }
    }else{
        c = (Math.floor(Conc))/1000;
        c1hr = (Math.floor(Conc1hr))/1000;
        if (c >= 0 && c < .060){
            AQI = Linear(50,0,.059,0,c);
        }else if(c >= .060 && c < .076){
            AQI = Linear(100,51,.075,.060,c);
        }else if(c >= .076 && c < .096){
            AQI = Linear(150,101,.095,.076,c);
        }else if (c >= .095 && c < .116){
            AQI = Linear(200,151,.115,.095,c);
        }else if (c >= .116 && c < .375){
            AQI = Linear(300,201,.374,.116,c);
        }else{
            AQI = AQIO31hr(c1hr, false);
        }
    }
    return AQI;
}

function consoleLog(from, msg){
    console.debug(from + ": " + msg + " @ " + new Date().toLocaleTimeString());
}
function consoleInfo(from, msg){
    console.info(from + ": " + msg + " @ " + new Date().toLocaleTimeString());
}
function consoleWarn(from, msg){
    console.warn(from + ": " + msg + " @ " + new Date().toLocaleTimeString());
}
function consoleError(from, msg){
    console.error(from + ": " + msg + " @ " + new Date().toLocaleTimeString());
}