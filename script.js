console.log("loaded");
var img = document.getElementById("img");
var name = document.getElementById("name");

console.log(img);
fetch("https://randomuser.me/api/")
  .then((data) => data.json())
  .then((data) => (console.log(data)));
