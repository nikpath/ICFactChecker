document.addEventListener('DOMContentLoaded', function(){
	var checkPageButton = document.getElementById('checkPage');
	checkPageButton.addEventListener('click', function(){

		chrome.tabs.getSelected(null, function(tab) {
			d = document;

			var f = d.createElement('form');
			f.action = 'https://www.factcheck.org/search/';
			f.method = 'post';
			var i = d.createElement('inputs');
			i.type = 'hidden';
			i.name = 'url';
			i.value = tab.url;
			f.appendChild(i);
			d.body.appendChild(f);
			f.submit();

			infoPopup.style.cssText = 'width : 500px; height : 500px';

		});
	}, false);
}), false;
