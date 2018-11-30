var toggleBtn = document.querySelector('#toggle');
var enabled = true;

chrome.storage.local.get({ enabled: true }, function(items) { 
    enabled = items.enabled; 

    if(enabled) {
        toggleBtn.innerText = 'Disable';
        chrome.browserAction.setIcon({ path:"icon128.png" });
    } else {
        toggleBtn.innerText = 'Enable';
        chrome.browserAction.setIcon({ path:"icon128disabled.png" });
    }

    document.querySelector('#toggle').addEventListener('click', function() {

        if (toggleBtn.innerText == 'Enable') {
            toggleBtn.innerText = 'Disable';
            chrome.storage.local.set({ enabled: true });
            chrome.browserAction.setIcon({ path: "icon128.png" }, function() { console.log("saved"); });
            chrome.tabs.reload(function() { });
        } else {
            toggleBtn.innerText = 'Enable';
            chrome.storage.local.set({ enabled: false }, function() { console.log("saved"); });
            chrome.browserAction.setIcon({ path:"icon128disabled.png" });
            chrome.tabs.reload(function() { });
        }
    });
});

document.querySelector('#settings').addEventListener('click', function() {
    chrome.runtime.openOptionsPage();
});
