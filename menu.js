document.querySelector('#settings').addEventListener('click', function() {
    console.log('Options clicked');
    chrome.runtime.openOptionsPage();
});