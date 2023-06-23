function resizeTextarea() {
    const textarea = document.getElementById("entry");
    textarea.style.height = "100px";
    textarea.style.height = textarea.scrollHeight + "px";
  }