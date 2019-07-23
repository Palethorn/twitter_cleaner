var enabled = true;
var selectors = [];

function removeBoxes(mutations) {
    for(var i = 0; i < selectors.length; i++) {
        var node = document.querySelector(selectors[i]);
        node.parentNode.removeChild(node);
    }

    document.querySelector('header').style.alignItems = 'flex-start';
}

function observe() {
    var observer = new MutationObserver(removeBoxes);
    var config = { attributes: false, childList: true, characterData: false, subtree: true};
    target = document.querySelector('body');

    if(target != null) {
        observer.observe(target, config);
    }

    console.log('Observer attached');
}


function restoreOptions() {
    chrome.storage.local.get({
        selectors: []
    }, function(items) {
        console.log(items);
        selectors = items.selectors;

        if(enabled) {
            observe();
        }
    });
}

restoreOptions();