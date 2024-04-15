function addTask() {
  var inputValue = document.getElementById("taskInput").value;
  if (inputValue === '') {
    alert("Please enter a task!");
    return;
  }
  var li = document.createElement("li");
  var textNode = document.createTextNode(inputValue);
  li.appendChild(textNode);
  document.getElementById("taskList").appendChild(li);
  document.getElementById("taskInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "deleteBtn";
  span.appendChild(txt);
  li.appendChild(span);

  var close = document.getElementsByClassName("deleteBtn");
  var i;
  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}
