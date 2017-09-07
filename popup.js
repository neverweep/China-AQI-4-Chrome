var bg = chrome.extension.getBackgroundPage();

//初始化UI
function init(){
    bg.consoleLog('popup.js', '初始化');
    if(bg.settings.city){
        nodeCity = document.getElementById('city');
        for(i = 0;i < nodeCity.children.length;i++){
            if(bg.settings.city == nodeCity.children[i].value){
                nodeCity.children[0].selected = false;
                nodeCity.children[i].selected = true;
                break;
            }
        }
        if(document.getElementById('save').style.display == 'none' || document.getElementById('save').style.display == ''){
            document.getElementById('update').style.display = 'block';
        }
        delete nodeCity;
        //请求已保存的数据
        bg.requestJSON();
    }
}

//处理数据小项，判断传入数据是否准确并选择四舍五入
function parse(str,round){
    if(!isNaN(str)){
        return round ? Math.round(str * 100) / 100 : str;
    }else{
        return '--';
    }
}

//处理数据小项 title
function parseUS(node,str){
    if(!isNaN(str)){
        if(node.id == 'cn_aqi_pm10' || node.id == 'cn_aqi_pm25'){
            node.title = '单项 AQI（美国标准 24h 计算 AQI 为 ' + str + '）';
        }else{
            node.title = '单项 AQI（美国标准计算 AQI 为 ' + str + '）';
        }
    }else{
        node.title = '单项 AQI';
    }
}

//更新界面显示
function updateUI(){
    if(document.getElementById('save').style.display == 'none' || document.getElementById('save').style.display == ''){
        document.getElementById('update').style.display = 'block';
    }
    //如果返回数据
    if(bg.settings.data){
        var data = bg.settings.data;
        document.getElementById('pm25').innerHTML = parse(data.pm2_5,0);
        document.getElementById('pm10').innerHTML = parse(data.pm10,0);
        document.getElementById('co').innerHTML = parse(data.co,1);
        document.getElementById('so2').innerHTML = parse(data.so2,0);
        document.getElementById('no2').innerHTML = parse(data.no2,0);
        document.getElementById('o3').innerHTML = parse(data.o3,0);
        document.getElementById('o38h').innerHTML = parse(data.o3_8h,0);
        document.getElementById('cn_aqi').innerHTML = parse(data.cn_aqi,0);
        document.getElementById('aqi').innerHTML = parse(data.aqi,0);
        document.getElementById('us_aqi').innerHTML = parse(data.us_aqi,0);

        document.getElementById('cn_aqi_pm25').innerHTML = parse(data.cn_aqi_pm2_5,0);
        document.getElementById('cn_aqi_pm10').innerHTML = parse(data.cn_aqi_pm10,0);
        document.getElementById('cn_aqi_so2').innerHTML = parse(data.cn_aqi_so2,0);
        document.getElementById('cn_aqi_no2').innerHTML = parse(data.cn_aqi_no2,0);
        document.getElementById('cn_aqi_co').innerHTML = parse(data.cn_aqi_co,0);
        document.getElementById('cn_aqi_o3').innerHTML = parse(data.cn_aqi_o3,0);
        document.getElementById('cn_aqi_o38h').innerHTML = parse(data.cn_aqi_o3_8hr,0);

        parseUS(document.getElementById('cn_aqi_pm25'),data.us_aqi_pm2_5);
        parseUS(document.getElementById('cn_aqi_pm10'),data.us_aqi_pm10);
        parseUS(document.getElementById('cn_aqi_so2'),data.us_aqi_so2);
        parseUS(document.getElementById('cn_aqi_no2'),data.us_aqi_no2);
        parseUS(document.getElementById('cn_aqi_co'),data.us_aqi_co);
        parseUS(document.getElementById('cn_aqi_o3'),data.us_aqi_o3);
        parseUS(document.getElementById('cn_aqi_o38h'),data.us_aqi_o3_8hr);

        if(typeof(data.quality) != 'undefined'){
            document.getElementById('quality').innerHTML = data.quality;
        }else{
            document.getElementById('quality').innerHTML = '';
        }

        if(data.time_point.match(/\d\d\d\d-\d\d-\d\dT\d\d:\d\d:\d\dZ/)){
            specTime = data.time_point.split('T');
            time = specTime[1].split(':');
            document.getElementById('time').innerHTML = '数据发布时间：' + specTime[0] + ' ' + time[0] + ' 时。';
        }else{
            document.getElementById('time').innerHTML = '没有更新数据，';
        }

        //根据AQI设置AQI指数颜色和指示器位置
        if(!isNaN(data.cn_aqi)){
            var offset;//指示器偏移量
            var nodeAqi = document.getElementById('cn_aqi');
            var nodeIndicator = document.getElementById('indicator');
            nodeAqi.className = '';
            if(data.cn_aqi > 500){
                nodeAqi.className += 'num-l6';
                nodeIndicator.style.backgroundPosition = '-50px';
                offset = 391;
            }else if(data.cn_aqi > 300){
                nodeAqi.className += 'num-l6';
                offset = (data.cn_aqi - 300) / 200 * 64 + 327;
                nodeIndicator.style.backgroundPosition = '-50px';
            }else if(data.cn_aqi > 200){
                nodeAqi.className += 'num-l5';
                offset = (data.cn_aqi - 200) / 100 * 65 + 260;
                nodeIndicator.style.backgroundPosition = '-40px';
            }else if(data.cn_aqi > 150){
                nodeAqi.className += 'num-l4';
                offset = (data.cn_aqi - 150) / 50 * 65 + 194;
                nodeIndicator.style.backgroundPosition = '-30px';
            }else if(data.cn_aqi > 100){
                nodeAqi.className += 'num-l3';
                offset = (data.cn_aqi - 100) / 50 * 65 + 128;
                nodeIndicator.style.backgroundPosition = '-20px';
            }else if(data.cn_aqi > 50){
                nodeAqi.className += 'num-l2';
                offset = (data.cn_aqi - 50) / 50 * 65 + 62;
                nodeIndicator.style.backgroundPosition = '-10px';
            }else{
                nodeAqi.className += 'num-l1';
                offset = data.cn_aqi / 50 * 64 - 3;
                nodeIndicator.style.backgroundPosition = '-0px';
            }
            nodeIndicator.style.display = 'block';
            nodeIndicator.style.marginLeft = offset + 'px';
        }else{
            nodeIndicator.style.display = 'none';
        }
        delete nodeIndicator;
        delete nodeAqi;

        //主要污染物
        nodeTr1 = document.getElementById('detail').children[0].children[0];
        nodeTr2 = document.getElementById('detail').children[0].children[1];
        nodeTr3 = document.getElementById('detail').children[0].children[2];
        for(i=0;i<=6;i++){
            nodeTr1.children[i].className = '';
            nodeTr2.children[i].className = '';
            nodeTr3.children[i].className = '';
        }
        if(JSON.stringify(data.primary_pollutant) != 'null'){
            primaryPollutant = JSON.stringify(data.primary_pollutant);
            if(primaryPollutant.indexOf('PM2.5') >= 0){
                nodeTr1.children[0].className = 'pollutant';
                nodeTr2.children[0].className = 'pollutant';
                nodeTr3.children[0].className = 'pollutant';
            }
            if(primaryPollutant.indexOf('PM10') >= 0){
                nodeTr1.children[1].className = 'pollutant';
                nodeTr2.children[1].className = 'pollutant';
                nodeTr3.children[1].className = 'pollutant';
            }
            if(primaryPollutant.indexOf('臭氧1小时') >= 0){
                nodeTr1.children[5].className = 'pollutant';
                nodeTr2.children[5].className = 'pollutant';
                nodeTr3.children[5].className = 'pollutant';
            }
            if(primaryPollutant.indexOf('臭氧8小时') >= 0){
                nodeTr1.children[6].className = 'pollutant';
                nodeTr2.children[6].className = 'pollutant';
                nodeTr3.children[6].className = 'pollutant';
            }
            if(primaryPollutant.indexOf('一氧化碳') >= 0){
                nodeTr1.children[4].className = 'pollutant';
                nodeTr2.children[4].className = 'pollutant';
                nodeTr3.children[4].className = 'pollutant';
            }
            if(primaryPollutant.indexOf('二氧化氮') >= 0){
                nodeTr1.children[3].className = 'pollutant';
                nodeTr2.children[3].className = 'pollutant';
                nodeTr3.children[3].className = 'pollutant';
            }
            if(primaryPollutant.indexOf('二氧化硫') >= 0){
                nodeTr1.children[5].className = 'pollutant';
                nodeTr2.children[5].className = 'pollutant';
                nodeTr3.children[5].className = 'pollutant';
            }
        }
        delete nodeTr1;
        delete nodeTr2;
        delete nodeTr3;
        bg.consoleLog('popup.js', '更新显示');
    }else{
        bg.consoleLog('popup.js', '无数据，没有更新显示');
    }
}
//监听并处理返回数据
chrome.storage.onChanged.addListener(function(changes, namespace){
    for (key in changes) {
        if (key == 'data'){
            bg.consoleLog('popup.js', '检测到数据更新');
            updateUI();
        }
    }
});

init();
updateUI();


//绑定popup.html动作
document.getElementById('save').onclick = function(){
    chrome.storage.local.set({'city': document.getElementById('city').value});
    bg.settings.city = document.getElementById('city').value;
    bg.forceUpdate();
    this.style.display='none';
    document.getElementById('update').style.display='block';
    bg.consoleLog('popup.js', '保存城市数据');
}
document.getElementById('update').onclick = function(){
    bg.forceUpdate();
    this.style.display='none';
    bg.consoleLog('popup.js', '强制更新数据');
}
document.getElementById('city').onchange = function(){
    document.getElementById('save').style.display = 'block';
    document.getElementById('update').style.display='none';
    bg.consoleLog('popup.js', '检测到城市变化');
}
document.getElementById('site').onclick = function(){
    var newURL = 'http://www.pm25.in/';
    chrome.tabs.create({ url: newURL });
}
document.getElementById('donate').onclick = function(){
    var newURL = 'http://xia.im/upload/donation.html';
    chrome.tabs.create({ url: newURL });
}
