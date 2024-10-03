const adUrls = [
    "*://*.doubleclick.net/*",
    "*://*/*.ads/*",
    "*://*.googleadservices.com/*",
    "*://*.googlesyndication.com/*",
    "*://*.google-analytics.com/*",
    "*://*.quantserve.com/*",
    "*://*.scorecardresearch.com/*",
    "*://*.zedo.com/*",
    "*://*.doubleclick.net/*",
    "*://partner.googleadservices.com/*",
    "*://creative.ak.fbcdn.net/*",
    "*://*.adbrite.com/*",
    "*://*.exponential.com/*",
];

const commonResourceTypes = ["script", "image", "xmlhttprequest"];

const addRules = adUrls.map((urlFilter, index) => ({
    id: index + 1,
    action: {type: "block"},
    condition: {
        urlFilter: urlFilter,
        resourceTypes: commonResourceTypes
    }
}));

chrome.declarativeNetRequest.updateDynamicRules({
    addRules: addRules,
    removeRuleIds: addRules.map(rule => rule.id)
});

const adSelectors = [
    'div[class*="_ad_"], span[class*="_ad_"], [id*="_ad_"]', // Matches classes/IDs with _ad_
    'div[class*="-ad"], span[class*="-ad"], [id*="-ad"]', // Matches classes/IDs with -ad
    'div[class*="-ad-"], span[class*="-ad-"], [id*="-ad-"]', // Matches classes/IDs with -ad-
    'div[class*="ad_"], span[class*="ad_"], [id*="ad_"]' // Matches classes/IDs with ad_
];

function hideAds() {
    console.log("hideads");
    adSelectors.forEach(selector => {
        document.querySelectorAll(selector).forEach(adElement => {
            adElement.style.display = 'none';
        });
    });
}

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.status === "complete" && tab && tab.url && !tab.url.startsWith("chrome://")) {
        chrome.scripting.executeScript({
            target: {tabId: tabId},
            function: hideAds
        });
    }
});
