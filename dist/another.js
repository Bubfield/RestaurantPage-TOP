function homeContent() {
  const restaurantDiv = document.getElementById("restaurant-content");
  const homeDiv = document.createElement("div");
  const headlineOuter = document.createElement("div");
  const headlineDiv = document.createElement("div");
  const reviewDiv = document.createElement("div");
  const headline = document.createElement("h1");
  const review = document.createElement("p");
  const hoursDiv = document.createElement("div");
  const hoursHeading = document.createElement("h3");
  const hours = document.createElement("p");
  const locationDiv = document.createElement("div");
  const locationHeading = document.createElement("h3");
  const location = document.createElement("p");
  const beerHandle = document.createElement("div");
  const beerHandleInner = document.createElement("div");
  const reviewOuter = document.createElement("div");
  const locationOuter = document.createElement("div");
  const hoursOuter = document.createElement("div");
  headline.append(document.createTextNode("Bubfield's Bubbly Beer!"));
  hoursHeading.append(document.createTextNode("Hours"));
  hours.append(document.createTextNode("placeholder"));
  locationHeading.append(document.createTextNode("Location"));
  location.append(
    document.createTextNode("405 Bubfield St, BubTown, BubTopia")
  );
  homeDiv.className = "home-div";
  beerHandle.className = "beer-handle";
  beerHandleInner.className = "beer-handle-inner";
  review.className = "review";
  reviewOuter.className = "review-outer";
  headlineOuter.className = "headline-outer";
  headlineDiv.className = "headline-div";
  reviewDiv.className = "review-div";
  hoursDiv.className = "hours-div";
  hoursOuter.className = "hours-outer";
  locationOuter.className = "location-outer";
  locationDiv.className = "location-div";
  review.append(
    document.createTextNode(
      `Was today a rough day? Did work not go as well as you wanted? Are life's problems and demands starting to bubble to the surface? Well, come on down and get you a cold one! Bubfield's bubbly beer will leave you bubblin' with joy instead of bubblin' with fury!(unless you're one of those angry alcoholics!)`
    )
  );

  homeDiv.append(
    headlineOuter,
    reviewDiv,
    hoursDiv,
    locationDiv,
    beerHandle,
    beerHandleInner,
    reviewOuter,
    hoursOuter,
    locationOuter
  );
  headlineOuter.append(headlineDiv);
  headlineDiv.append(headline);
  reviewOuter.append(reviewDiv);
  reviewDiv.append(review);
  hoursOuter.append(hoursDiv);
  hoursDiv.append(hoursHeading, hours);
  locationOuter.append(locationDiv);
  locationDiv.append(locationHeading, location);

  restaurantDiv.append(homeDiv);
}

export default homeContent;
