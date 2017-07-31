var app = function () {
  var ul = document.createElement("ul");
  ul.classList.add("cat");

  var li1 = document.createElement("li");
  li1.innerText = "Name: Garfield";

  var li2 = document.createElement("li");
  li2.innerText = "Favourite Food: Lasagne";

  var li3 = document.createElement("li");
  var image = document.createElement("img");
  image.src = "https://static.comicvine.com/uploads/original/11/111746/4684849-latest.jpg"
  image.style.width = "500px";
  image.style.height = "300px";

  li3.appendChild(image);

  ul.appendChild(li1);
  ul.appendChild(li2);
  ul.appendChild(li3);

  var section = document.querySelector("#cats");
  section.appendChild(ul);
}

// var app = function() {
//   addQuote("Ciaran", "Hey");
// }

window.addEventListener('load', app);