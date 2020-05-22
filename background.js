//background.js
var contexts = ["selection"];

chrome.runtime.onInstalled.addListener(function() {
  chrome.contextMenus.create({
    "contexts": contexts,
    id: 'menuTitle',
    title: 'Fact check this'
  });
});

chrome.contextMenus.onClicked.addListener(function (item, tab) {
  var searchWords = item.selectionText;
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {searchWords: searchWords}, function(response) {
      console.log(response.farewell);
    });
  });
  chrome.tabs.executeScript({
          file: 'infoPopup.js'
  });
});
