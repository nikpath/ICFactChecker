# ICFactChecker

### FILES:


background.js: Background script that creates the context menu (option in right click menu) when extension is installed.
Also listens for the context menu to be clicked. On click, a message is sent to infoPopup.js containing the words the user highlighted and it runs the infoPopup.js script.



infoPopup.js: recieves message from background.js containing selected words and inserts the iframe into the body of the document.

infoPopup.html: contains html for the iframe

infoDisplay: random file that may or may not be needed (does not contain anything important for now)


popup.js and popup.html: are used for the popup that appears in the corner when the FactChecker icon (in toolbar) is clicked.
This popup can contain general info about our extension.
