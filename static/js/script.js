function resizeTextarea() {
    const textarea = document.getElementById("entry");
    textarea.style.height = "100px";
    textarea.style.height = textarea.scrollHeight + "px";
}

function formatDateTime(datetimeStr) {
  var now = new Date();
  var date = new Date(datetimeStr);
  var diffInSeconds = Math.round((now - date) / 1000); // difference in seconds
  var diffInMinutes = Math.round(diffInSeconds / 60); // difference in minutes
  var diffInHours = Math.round(diffInMinutes / 60); // difference in hours
  var diffInDays = Math.round(diffInHours / 24); // difference in days

  if (diffInSeconds < 60) {
    return diffInSeconds + " seconds ago";
  } else if (diffInMinutes < 60) {
    return diffInMinutes + " minutes ago";
  } else if (diffInHours < 24) {
    return diffInHours + " hours ago";
  } else if (diffInDays < 1) {
    return "Yesterday";
  } else {
    var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    return date.getDate() + ' ' + monthNames[date.getMonth()] + ' ' + date.getFullYear();
  }
}

window.onload = function() {
  var datetimeElements = document.getElementsByClassName('entry__date');

  for (var i = 0; i < datetimeElements.length; i++) {
    var datetimeStr = datetimeElements[i].getAttribute('datetime');
    datetimeElements[i].textContent = '∙ ' + formatDateTime(datetimeStr);
  }
}


