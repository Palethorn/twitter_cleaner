var selectors = [];

function saveOptions() {
    selectors = [];
    var elements = document.querySelectorAll('.selector');

    for(var i = 0; i < elements.length; i++) {
        selectors.push(elements[i].value);
    }

    console.log(selectors);

    chrome.storage.local.set({
        selectors: selectors
    }, function() {
        var status = document.getElementById('status');
        status.innerText = 'Saved.';
    });
}

function restoreOptions() {
    chrome.storage.local.get({
        selectors: []
    }, function(items) {
        selectors = items.selectors;
    });
}

document.querySelector('#save-options-btn').addEventListener('click', function() {
    saveOptions();
});

restoreOptions();
