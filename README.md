# ICFactChecker

Welcome to the Infodemic Challenge: Fact Checker!

This is a rough version of an idea for a fact checking chrome extension that allows users to highlight any piece of text that they would like to fact check, right click it and immediately get results from well-known, trusted fact check sites so that they can get the correct information.

Currently this extension only shows search results for FactCheck.org. The hope is to expand this extension to become something more. Perhaps pulling information from multiple sources. Or instead of just showing search results, the extension could automatically synthesize and display only the relevant pieces of information. If you would like to collaborate on this project, or learn more: please contact nikpath on Github.


### FILES:
background.js: Background script that creates the context menu (option in right click menu) when extension is installed.
Also listens for the context menu to be clicked. On click, a message is sent to infoPopup.js containing the words the user highlighted and it runs the infoPopup.js script.


infoPopup.js: recieves message from background.js containing selected words and inserts the iframe into the body of the document.

infoPopup.html: contains html for the iframe

infoDisplay: random file that may or may not be needed (does not contain anything important for now)


popup.js and popup.html: are used for the popup that appears in the corner when the FactChecker icon (in toolbar) is clicked.
This popup can contain general info about our extension.
