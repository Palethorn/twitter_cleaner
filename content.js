var dl = dr = wtf = t = f = dpc = true;
var citu = false;
var ca = 'center';
var tz = 0;

function removeBoxes(mutations) {
    var element = document.querySelector('.dashboard-left');
    if(element != null && element != undefined && dl === true) {
        element.style.display = 'none';
    }

    var element = document.querySelector('.dashboard-right');
    if(element != null && element != undefined && dr === true) {
        element.style.display = 'none';
    }

    var element = document.querySelector('.content-main');

    if(element != null && element != undefined) {
        if(ca !== 'none') {
            if(ca === "center") {
                element.style.float = 'none';
                element.style.margin = 'auto';
            } else {
                element.style.float = ca;
            }
        }

        element.style.zoom = 1 + parseFloat(tz);
    }

    var element = document.querySelector('.wtf-module');
    if(element != null && element != undefined && wtf === true) {
        element.style.display = 'none';
    }

    var element = document.querySelector('.Trends');
    if(element != null && element != undefined && t === true) {
        element.style.display = 'none';
    }

    var element = document.querySelector('.Footer');
    if(element != null && element != undefined && f === true) {
        element.style.display = 'none';
    }

    var element = document.querySelector('.DashboardProfileCard');
    if(element != null && element != undefined && dpc === true) {
        element.style.display = 'none';
    }

    if(citu === true) {
        var media_containers = document.querySelectorAll('.AdaptiveMediaOuterContainer');

        for(var i = 0; i < media_containers.length; i++) {
            var images = media_containers[i].querySelectorAll('img');

            if(images.length == 0) {
                continue;
            }

            media_containers[i].innerHTML = '';
            for(var j = 0; j < images.length; j++) {
                var div = document.createElement('div');
                div.style.paddingTop = '5px';
                var a = document.createElement('a');
                a.href = images[j].src;
                a.target = "_blank";
                div.appendChild(a);
                media_containers[i].appendChild(div);
            }
        }
    }
}

function restoreOptions() {
    chrome.storage.local.get({
        dl: true,
        dr: true,
        ca: "center",
        t: true,
        wtf: true,
        f: true,
        dpc: true,
        tz: 0,
        citu: false
    }, function(items) {
        dl = items.dl;
        dr = items.dr;
        ca = items.ca;
        t = items.t;
        wtf = items.wtf;
        f = items.f;
        dpc = items.dpc;
        tz = items.tz;
        citu = items.citu;
    });
}

restoreOptions();
var observer = new MutationObserver(removeBoxes);
var config = { attributes: false, childList: true, characterData: false, subtree: true};
target = document.querySelector('body');

if(target != null) {
    observer.observe(target, config);
}
