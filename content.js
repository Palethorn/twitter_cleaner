function removeBoxes(mutations) {
    console.log("Cleanup");
    var wtf = document.querySelector('.dashboard-left');
    if(wtf != null && wtf != undefined) {
        wtf.style.display = 'none';
    }

    var wtf = document.querySelector('.dashboard-right');
    if(wtf != null && wtf != undefined) {
        wtf.style.display = 'none';
    }

    var wtf = document.querySelector('.content-main');
    if(wtf != null && wtf != undefined) {
        wtf.style.float = 'none';
        wtf.style.margin = 'auto';
    }

    var wtf = document.querySelector('.WhoToFollow');
    if(wtf != null && wtf != undefined) {
        wtf.style.display = 'none';
    }

    var wtf = document.querySelector('.Trends');
    if(wtf != null && wtf != undefined) {
        wtf.style.display = 'none';
    }

    var wtf = document.querySelector('.Footer');
    if(wtf != null && wtf != undefined) {
        wtf.style.display = 'none';
    }
}

var observer = new MutationObserver(removeBoxes);
var config = { attributes: false, childList: true, characterData: false, subtree: true};
target = document.querySelector('body');
if(target != null) {
    observer.observe(target, config);
}
