chrome.contextMenus.create({
    "title": "Rechercher %s dans Swisscovery | HES-SO",
    "type": "normal",
    "contexts": ["selection"],
    "onclick": function(info) {
        chrome.tabs.create({
            url: 'https://hesso.swisscovery.slsp.ch/discovery/search?query=any,contains,'+encodeURIComponent(info.selectionText)+'&tab=&tab=41SLSP_HES_DN_and_CI&search_scope=DN_and_CI&vid=41SLSP_HES:VU1&offset=0'
        });
    }
});
