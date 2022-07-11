function menuContent() {
  const restaurantDiv = document.getElementById("restaurant-content");
  const food = document.createElement("p");
  food.append("Something needs to go here");
  restaurantDiv.append(food);
}

export default menuContent;
