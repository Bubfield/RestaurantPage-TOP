import homeContent from "../dist/another";
import menuContent from "../dist/andAnother";

const home = document.getElementById("home");
const menu = document.getElementById("menu");
const contact = document.getElementById("contact");
const restaurantDiv = document.getElementById("restaurant-content");

homeContent();

home.addEventListener("click", function () {
  restaurantDiv.innerHTML = "";
  homeContent();
});

menu.addEventListener("click", function () {
  restaurantDiv.innerHTML = "";
  menuContent();
});
