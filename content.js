var enabled = true;
var selectors = [];

function removeBoxes(mutations) {
    var nodes = document.getElementsByClassName('css-1dbjc4n r-1uaug3w r-1uhd6vh r-t23y2h r-1phboty r-rs99b7 r-ku1wi2 r-1udh08x');
    
    for(var i = 0; i < nodes.length; i++) {
        nodes[i].parentNode.removeChild(nodes[i]);
    }

    nodes = document.getElementsByClassName('css-1dbjc4n r-1niwhzg r-18bvks7 r-t23y2h r-1phboty r-1yadl64 r-ku1wi2 r-1udh08x');
    
    for(var i = 0; i < nodes.length; i++) {
        nodes[i].parentNode.removeChild(nodes[i]);
    }

    nodes = document.getElementsByTagName('header');
    console.log(nodes);
    
    for(var i = 0; i < nodes.length; i++) {
        nodes[i].style.alignItems = 'initial';
    }

    document.querySelector('header').style = '';
    document.querySelector('header').style.alignItems = '';
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