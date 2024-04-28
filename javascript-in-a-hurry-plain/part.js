//navigation
const hum = document.querySelector("#open-nav-menu");
const up = document.querySelector(".wrapper");

hum.addEventListener("click", () => {
    hum.classList.toggle("nav-open");
    up.classList.toggle("nav-open");
});
//removing nav
const btn = document.querySelector("#close-nav-menu");
btn.addEventListener("click", () => {
    btn.classList.remove("nav-open");
    up.classList.remove("nav-open");
});
// color change of h element
function changes() {
    var hole = document.getElementById("greeting");
    hole.style.color = "red";
}

function change() {
    var hole = document.getElementById("greeting");
    hole.style.color = "white";
}

//time function
function local() {
    const date = new Date();
    let hour = date.getHours();
    let mins = date.getMinutes();
    let secs = date.getSeconds();
    document.getElementById("hour").innerHTML = hour;
    document.getElementById("mins").innerHTML = mins;
    document.getElementById("secs").innerHTML = secs;
}

setInterval(local, 1000);

// thumbnails
main = document.getElementById("galla");
//first thumb
gallery1 = document.getElementById("gallery1");
gallery1Src = document.getElementById("gallery1").src;
//sec thumb
gallery2 = document.getElementById("gallery2");
gallery2Src = document.getElementById("gallery2").src;
//third
gallery3 = document.getElementById("gallery3");
gallery3Src = document.getElementById("gallery3").src;
//fourth
gallery4 = document.getElementById("gallery4");
gallery4Src = document.getElementById("gallery4").src;
//click
gallery1.addEventListener("click", function() {
    main.src = gallery1Src;
});
gallery2.addEventListener("click", function() {
    main.src = gallery2Src;
});
gallery3.addEventListener("click", function() {
    main.src = gallery3Src;
});
gallery4.addEventListener("click", function() {
    main.src = gallery4Src;
});
//cards
const space = [{
        title: "AstroFiction",
        author: "John Doe",
        name: "price",
        price: "paid",
        image: "./assets/products/img6.png",
    },
    {
        title: "Space Odissey",
        author: "Marie Anne",
        name: "price",
        price: "paid",
        image: "./assets/products/img1.png",
    },
    {
        title: "Doomed City",
        author: "Jason Cobert",
        name: "price",
        price: "free",
        image: "./assets/products/img2.png",
    },
    {
        title: "Black Dog",
        author: "John Doe",
        name: "price",
        price: "paid",
        image: "./assets/products/img3.png",
    },
    {
        title: "My Little Robot",
        author: "Pedro Paulo",
        name: "price",
        price: "free",
        image: "./assets/products/img5.png",
    },
    {
        title: "Garden Girl",
        author: "Ankit Patel",
        name: "price",

        price: "paid",
        image: "./assets/products/img4.png",
    },
];
//const contain = document.querySelector('.products-area')
for (let i of space) {
    let card = document.createElement("div");
    //hide
    card.classList.add("product-item", i.price, "hide");
    let img = document.createElement("img");
    img.setAttribute("src", i.image);
    card.appendChild(img);
    //product details
    let detail = document.createElement("div");
    detail.classList.add("product-details");
    //title
    let title = document.createElement("div");
    title.classList.add("product-title");
    //title details
    let one = document.createElement("h1");
    one.innerText = i.title;
    title.appendChild(one);
    detail.appendChild(title);

    //author
    let auth = document.createElement("div");
    auth.classList.add("product-author");
    //author details
    let two = document.createElement("h1");
    two.innerText = i.author;
    auth.appendChild(two);
    detail.appendChild(auth);
    //price
    let prict = document.createElement("div");
    prict.classList.add("price-title");
    //price title
    let three = document.createElement("p");
    three.innerText = i.name;
    prict.appendChild(three);
    detail.appendChild(prict);
    //product price
    let pro = document.createElement("div");
    pro.classList.add("product-price");
    //price detail
    let four = document.createElement("p");
    four.innerText = i.price;
    pro.appendChild(four);
    detail.appendChild(pro);
    card.appendChild(detail);

    const contain = document.querySelector(".products-area");
    contain.appendChild(card);
}
//pass param from input
function filterProduct(value) {
    //select all card
    let elements = document.querySelectorAll(".product-item");
    //loop through
    elements.forEach((element) => {
        //display
        if (value == "all") {
            element.classList.remove("hide");
        } else {
            //check item
            if (element.classList.contains(value)) {
                //element price
                element.classList.remove("hide");
            } else {
                //hide other elements
                element.classList.add("hide");
            }
        }
    });
}

//show all products
window.onload = () => {
    filterProduct("all");
};