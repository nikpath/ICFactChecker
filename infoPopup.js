var searchWords;
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    window.searchWords = request.searchWords;
    if (request.searchWords){
      sendResponse({farewell: searchWords});

    }
  });

  // Avoid recursive frame insertion...
  var extensionOrigin = 'chrome-extension://' + chrome.runtime.id;
  if (!location.ancestorOrigins.contains(extensionOrigin)) {
      var iframe = document.createElement('iframe');
      // Must be declared at web_accessible_resources in manifest.json
      iframe.src = chrome.runtime.getURL('infoPopup.html');

      // Some styles for a fancy sidebar
      iframe.style.cssText = 'position:fixed;top:0;left:0;display:block;' +
                             'width:300px;height:30%;z-index:1000;';
      document.body.appendChild(iframe);
  }
