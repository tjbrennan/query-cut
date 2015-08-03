chrome.browserAction.onClicked.addListener(function(tab) {
  var strippedUrl = tab.url.split('?')[0];
  var textArea = document.createElement('textarea');
  document.body.appendChild(textArea);
  textArea.value = strippedUrl;
  textArea.focus();
  textArea.select();
  document.execCommand('copy');
  textArea.remove();
});
