function resizeTextarea() {
    const textarea = document.getElementById("entry");
    textarea.style.height = "100px";
    textarea.style.height = textarea.scrollHeight + "px";
}

function formatDateTime(datetimeStr) {
  var date = new Date(datetimeStr);
  return date.toLocaleDateString() + " " + date.toLocaleTimeString();
}

window.onload = function() {
  var datetimeElements = document.getElementsByClassName('entry__date');

  for (var i = 0; i < datetimeElements.length; i++) {
      var datetimeStr = datetimeElements[i].getAttribute('datetime');
      datetimeElements[i].textContent = '∙ ' + formatDateTime(datetimeStr);
  }
}