function addElement() {
    var ul = document.getElementById("list");
    var li = document.createElement("li");
    li.appendChild(document.createTextNode("New Element"));
    ul.appendChild(li);
}
