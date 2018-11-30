var enabled = true;
var dl = dr = wtf = t = f = dpc = true;
var citu = remove_suggestions = pt = dismissible = recap = false;
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


    if(remove_suggestions == true) {
        var suggestions = document.querySelectorAll('[data-component-context=suggest_activity_tweet]');
        
        for(var i = 0; i < suggestions.length; i++) {
            var li = suggestions[i].parentNode;
            var parent = li.parentNode;
            parent.removeChild(li);
        }
    }

    if(pt == true) {
        var promoted_tweets = document.querySelectorAll('.promoted-tweet');

        for(var i = 0; i < promoted_tweets.length; i++) {
            var li = promoted_tweets[i].parentNode;
            li.parentNode.removeChild(li);
        }
    }

    if(dismissible == true) {
        var items = document.querySelectorAll('.DismissibleModule');
        console.log('Removing dismissible', items.length);
        for(var i = 0; i < items.length; i++) {
            items[i].parentNode.removeChild[items[i]];
        }
    }

    if(recap == true) {
        var items = document.querySelectorAll('.has-recap');
        console.log('Removing recap', items.length);
        for(var i = 0; i < items.length; i++) {
            items[i].parentNode.removeChild[items[i]];
        }
    }
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
        dl: true,
        dr: true,
        ca: "center",
        t: true,
        wtf: true,
        f: true,
        dpc: true,
        tz: 0,
        citu: false,
        remove_suggestions: false,
        pt: false,
        dismissible: false,
        recap: false,
        enabled: true
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
        remove_suggestions = items.remove_suggestions;
        pt = items.pt;
        dismissible = items.dismissible;
        recap = items.recap;
        enabled = items.enabled;

        if(enabled) {
            observe();
        }
    });
}

restoreOptions();