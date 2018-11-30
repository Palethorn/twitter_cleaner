function saveOptions() {
    var dashboard_left = document.getElementById('dashboard-left').checked;
    var dashboard_right = document.getElementById('dashboard-right').checked;
    var content_align = document.getElementById('content-align').value;
    var trending = document.getElementById('trending').checked;
    var who_to_follow = document.getElementById('who-to-follow').checked;
    var footer = document.getElementById('footer').checked;
    var dashboard_profile_card = document.getElementById('dashboard-profile-card').checked;
    var timeline_zoom = document.querySelector('#timeline-zoom').value;
    var convert_images_to_urls = document.querySelector('#convert-images-to-urls').checked;
    var remove_suggestions = document.querySelector('#remove-suggestions').checked;
    var remove_promoted_tweets = document.querySelector('#remove-promoted-tweets').checked;
    var remove_dismissible_boxes = document.querySelector('#remove-dismissible-boxes').checked;
    var remove_recap_boxes = document.querySelector('#remove-recap-boxes').checked;

    chrome.storage.local.set({
        dl: dashboard_left,
        dr: dashboard_right,
        ca: content_align,
        t: trending,
        wtf: who_to_follow,
        f: footer,
        dpc: dashboard_profile_card,
        tz: timeline_zoom,
        citu: convert_images_to_urls,
        remove_suggestions: remove_suggestions,
        pt: remove_promoted_tweets,
        dismissible: remove_dismissible_boxes,
        recap: remove_recap_boxes
    }, function() {
        var status = document.getElementById('status');
        status.innerText = 'Saved.';
    });
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
        recap: false
    }, function(items) {
        document.getElementById('dashboard-left').checked = items.dl;
        document.getElementById('content-align').value = items.ca;
        document.getElementById('dashboard-right').checked = items.dr;
        document.getElementById('trending').checked = items.t;
        document.getElementById('who-to-follow').checked = items.wtf;
        document.getElementById('footer').checked = items.f;
        document.getElementById('dashboard-profile-card').checked = items.dpc;
        document.querySelector('#timeline-zoom').value = items.tz;
        document.querySelector('#timeline-zoom-value').innerText = (items.tz * 100) + '%';
        document.querySelector('#convert-images-to-urls').checked = items.citu;
        document.querySelector('#remove-suggestions').checked = items.remove_suggestions;
        document.querySelector('#remove-promoted-tweets').checked = items.pt;
        document.querySelector('#remove-dismissible-boxes').checked = items.dismissible;
        document.querySelector('#remove-recap-boxes').checked = items.recap;
    });
}

document.querySelector('#save-options-btn').addEventListener('click', function() {
    saveOptions();
});

document.querySelector('#timeline-zoom').addEventListener('change', function(e) {
    document.querySelector('#timeline-zoom-value').innerText = (e.target.value * 100) + '%';
});

restoreOptions();
