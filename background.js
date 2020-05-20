//background.js
var contexts = ["selection"];

chrome.contextMenus.create({
  "contexts": contexts,
  id: 'menuTitle',
  title: 'Fact check this'
});

function onClickHandler(info, tab){
  alert(info.selectionText);
}

chrome.contextMenus.onClicked.addListener(onClickHandler);
