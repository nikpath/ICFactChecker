var searchWords;
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    window.searchWords = request.searchWords;
    if (request.searchWords){
      sendResponse({farewell: searchWords});
    }
  });

  if(searchWords){
      // Avoid recursive frame insertion...
      var extensionOrigin = 'chrome-extension://' + chrome.runtime.id;
      if (!location.ancestorOrigins.contains(extensionOrigin)) {
          var iframe = document.createElement('iframe');
          // Must be declared at web_accessible_resources in manifest.json
          iframe.src = "https://factcheck.org/search/?q=" + searchWords;

<<<<<<< Updated upstream
          // Some styles for a fancy sidebar
          iframe.style.cssText = 'position:fixed;bottom:0;right:0;display:block;' +
                                 'width:300px;height:100%;z-index:1000;';
          document.body.appendChild(iframe);
      }
  }
=======
        // Some styles for a fancy sidebar
        iframe.style.cssText = 'position:fixed;bottom:0;right:0;display:block;' +
                               'width:300px;height:100%;z-index:1000;';
        document.body.appendChild(iframe);
    }
}
>>>>>>> Stashed changes
