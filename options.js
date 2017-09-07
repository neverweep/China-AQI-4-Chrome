var bg = chrome.extension.getBackgroundPage();
bg.consoleLog('options.js', '初始化');

document.getElementById('limit').onchange = function(){
    bg.settings.limit = document.getElementById('limit').value;
    chrome.storage.local.set({'limit': bg.settings.limit});
    bg.consoleLog('options.js', '改变显示设置');
}

document.getElementById('limit').value = bg.settings.limit;
