var addCat = function(name, food, link) {
  var li1 = createName(name);
  var li2 = createFavouriteFood(food);
  var li3 = addImage(picture);
  var picture = createPicture(link);
  
  appendElements(li1, li2, li3, picture);
}

var createName = function(name) {
  var li1 = document.createElement("li");
  li1.innerText = name;
  return li1;
}

var createFavouriteFood = function(food) {
  var li2 = document.createElement("li");
  li2.innerText = food;
  return li2;
}

var addImage = function(picture) {
  var li3 = document.createElement("li");
  return li3;
}

var createPicture = function(link) {
  var image = document.createElement("img");
    image.src = link;
    image.style.width = "500px";
    image.style.height = "300px";

  return image;
}

var appendElements = function(li1, li2, li3, picture) {
  var ul = document.createElement("ul");
  ul.classList.add("cat");

  li3.appendChild(picture);
  ul.appendChild(li1);
  ul.appendChild(li2);
  ul.appendChild(li3);

  var section = document.querySelector("#cats");
  section.appendChild(ul);
}


// var app = function () {
//   var ul = document.createElement("ul");
//   ul.classList.add("cat");

//   var li1 = document.createElement("li");
//   li1.innerText = "Name: Garfield";

//   var li2 = document.createElement("li");
//   li2.innerText = "Favourite Food: Lasagne";

//   var li3 = document.createElement("li");
//   var image = document.createElement("img");
//   image.src = "https://static.comicvine.com/uploads/original/11/111746/4684849-latest.jpg"
//   image.style.width = "500px";
//   image.style.height = "300px";

//   li3.appendChild(image);

//   ul.appendChild(li1);
//   ul.appendChild(li2);
//   ul.appendChild(li3);

//   var section = document.querySelector("#cats");
//   section.appendChild(ul);
// }

var app = function() {
  addCat("Garfield", "Lasagne", "https://static.comicvine.com/uploads/original/11/111746/4684849-latest.jpg");
  addCat("Boba", "Sock Fluff", "http://66.media.tumblr.com/d1f01bbe0150fda0c40d2151c5eaeac8/tumblr_odlqqskjj61v9cejwo1_400.jpg")
  addCat("Barnaby", "Tuna", "https://68.media.tumblr.com/88d0fcf2b84a7b098dda839130597569/tumblr_okuo4teiql1uhevdso1_1280.jpg")
  addCat("Max", "Whiskas Temptations", "http://66.media.tumblr.com/7c5784ea89369c780e782bf10c60315a/tumblr_npb0hlYwhV1u63jaco1_1280.jpg")
}

window.addEventListener('load', app);