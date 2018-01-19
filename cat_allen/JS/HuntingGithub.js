$.get("https://api.github.com/users/simplycat", displayName)
var button = document.getElementById("button")
button.addEventListener("click", displayName);
function displayName(data) {
  console.log(data);
}