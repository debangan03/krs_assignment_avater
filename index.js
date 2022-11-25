var btn = document.getElementById("btn");
btn.onclick = function () {
  change();
};

var image = document.getElementById("imageav");
image.src = "https://joeschmoe-io.pages.dev/Img/girl.gif";
function change() {
  var g1 = document.getElementById("gender");
  var g2 = g1.value;
  var n1 = document.getElementById("myforms");
  var n2 = n1.username.value;
  console.log(n2);
  if (n2 &&g2 != "0") {
    if (g2 == 1) {
      image.setAttribute("src", `https://joeschmoe.io/api/v1/male/${n2}`);
    } else if (g2 == 2) {
      image.setAttribute("src", `https://joeschmoe.io/api/v1/female/${n2}`);
    } else if (g2 == 3) {
      image.setAttribute("src", `https://joeschmoe.io/api/v1/random/${name}`);
    }
    document.getElementById("alertSelect").innerHTML =
      "<b>Here is your avator</b>";
    setTimeout(function () {
      document.getElementById("alertSelect").innerHTML = "";
    }, 2000);
  } else {
    document.getElementById("alertSelect").innerHTML =
      "<b>Please enter your name and select gender</b>";
    setTimeout(function () {
      document.getElementById("alertSelect").innerHTML = "";
    }, 2000);
  }
}
