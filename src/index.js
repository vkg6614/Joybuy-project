let leftBtn = document.querySelector(".sliderDiv .left");
let rightBtn = document.querySelector(".sliderDiv .right");
let sliderContainer = document.querySelector(".slide-container");
let index = 0;

let loginBtn = document.querySelector(".loginBtn");
let signupBtn = document.querySelector(".signupBtn");
let cart = document.querySelector(".cart");

cart.addEventListener("click", () => {
  window.location.href = "product1.html";
});
loginBtn.addEventListener("click", () => {
  window.location.href = "login.html";
});
signupBtn.addEventListener("click", () => {
  window.location.href = "signup.html";
});
leftBtn.addEventListener("click", () => {
  if (index < 4) {
    index++;
    sliderContainer.style.transform = `translate(` + -20 * index + `%)`;
  }
});

rightBtn.addEventListener("click", () => {
  if (index > 0) {
    index--;
    sliderContainer.style.transform = `translate(` + -20 * index + `%)`;
  }
});

var main_div = document.querySelector(".contents");
async function getData() {
  let res = await fetch(`https://fakestoreapi.com/products?limit=8`);
  let data = await res.json();
  showData(data);
  weeklyData(data);
}
getData();
function showData(data) {
  data.forEach((ele) => {
    var div = document.createElement("div");
    var img = document.createElement("img");
    img.src = ele.image;
    var prices = document.createElement("p");
    prices.textContent = `US$ ${ele.price}`;
    prices.style.color = "red";
    var ratings = document.createElement("p");
    ratings.textContent = `Rate: ${ele.rating.rate}`;

    ratings.style.fontSize = "2rem";
    div.append(img, prices, ratings);
    main_div.append(div);
    div.addEventListener("click", () => {
      var obj = {
        desc: ele.description,
        pri: ele.price,
        img: ele.image,
      };
      var res = JSON.stringify(obj);
      localStorage.setItem("eleData", res);
      window.location.href = "product1.html";
    });
  });
}

var weekly_div = document.querySelector(".weekly");
function weeklyData(data) {
  for (var i = 2; i < data.length; i += 2) {
    var img = document.createElement("img");
    img.src = data[i].image;
    var title = document.createElement("p");
    title.textContent = data[i].title;
    var prices = document.createElement("p");
    prices.textContent = data[i].price;
    let div = document.createElement("div");
    div.append(img, title, prices);
    weekly_div.append(div);
  }
}

// debounce div on input start
async function getDataDebounce(names) {
  let res = await fetch(`https://fakestoreapi.com/products`);
  let data = await res.json();
  return data;
}

var popupDiv = document.querySelector(".oninput_div");
var searchBtn = document.querySelector(".searchBtn");
function appendData(data) {
  var input = document.querySelector(".input_box");
  popupDiv.innerHTML = "";
  if (input.value == "") {
    popupDiv.style.display = "none";
  } else {
    popupDiv.style.display = "flex";
  }
  data.forEach(({ title, description, price, image }) => {
    var cate = document.createElement("p");
    cate.textContent = title;
    popupDiv.append(cate);

    cate.addEventListener("click", () => {
      input.value = title;
      popupDiv.style.display = "none";
      console.log(data);
    });

    searchBtn.addEventListener("click", () => {
      if (input.value == title) {
        var obj = {
          desc: description,
          pri: price,
          img: image,
        };
        var res = JSON.stringify(obj);
        localStorage.setItem("eleData", res);
        window.location.href = "product1.html";
      }
    });
  });
}

async function main() {
  let res = await getDataDebounce();
  appendData(res);
}
let id;
function debounce(func, delay) {
  if (id) {
    clearTimeout(id);
  }
  id = setTimeout(() => {
    func();
  }, delay);
}
