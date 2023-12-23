fetch("https://restcountries.com/v3.1/all")
  .then((data) => {
    return data.json();
  })
  .then((data) => {
    data.map((country) => {
      card(country);
    });
    const searchFeature = document.querySelector("#search-bar");
    searchFeature.addEventListener("keyup", searchFunction);
    let dropBtn = document.querySelector(".drop-select");
    dropBtn.addEventListener("change", () => searchRegion(data));
    let darkButton = document.querySelector("#dark-mode-btn");
    darkButton.addEventListener("click", darkMode);
  });
function card(country) {
  var text = document.querySelector(".dark-text");
  const cardSection = document.querySelector(".information-section");
  cardSection.style.display = "flex";
  cardSection.style.flexWrap = "wrap";
  const cardContainer = document.createElement("div");
  cardContainer.className = "cardContainer";
  cardSection.appendChild(cardContainer);

  const flag = document.createElement("img");
  flag.setAttribute("src", country["flags"].png);
  flag.className = "flag-img";
  cardContainer.appendChild(flag);

  const li1 = document.createElement("h3");
  li1.innerText = country["name"]["common"];
  li1.className = "country-name";
  cardContainer.appendChild(li1);

  const listCard = document.createElement("ul");
  listCard.style.listStyle = "none";
  cardContainer.appendChild(listCard);

  const li2 = document.createElement("li");
  li2.innerHTML = `<span>Population: </span>${country[
    "population"
  ].toLocaleString()}`;
  listCard.appendChild(li2);

  const li3 = document.createElement("li");
  li3.innerHTML = `<span>Region: </span>${country["region"]}`;
  li3.className = "region-select";
  listCard.appendChild(li3);

  const li4 = document.createElement("li");
  li4.innerHTML = `<span>Capital: </span>${country["capital"]}`;
  listCard.appendChild(li4);
  if (text.innerText != "Dark Mode") {
    cardContainer.classList.add("darkBlue");
  } else {
    cardContainer.classList.remove("darkBlue");
  }
}
function darkMode(e) {
  var text = document.querySelector(".dark-text");
  if (text.innerText == "Dark Mode") {
    let body = document.getElementsByTagName("body")[0];
    body.classList.add("veryDarkBlue");
    let nav = document.querySelector(".nav-bar");
    nav.classList.add("darkBlue");
    let featureBar = document.querySelector(".feature-bar");
    featureBar.classList.add("veryDarkBlue");
    let informationSection = document.querySelector(".information-section");
    informationSection.classList.add("veryDarkBlue");
    let searchBox = document.querySelector(".search-box");
    searchBox.classList.add("darkBlue");
    let dropSelect = document.querySelector(".drop-select");
    dropSelect.classList.add("darkBlue");
    let darkIcon = document.querySelector(".fa-regular");
    darkIcon.classList.remove("fa-moon");
    darkIcon.classList.add("fa-sun");
    let darkmagIcon = document.querySelector(".fa-solid");
    // darkIcon.classList.remove("fa-moon");
    darkmagIcon.classList.add("darkBlue");
    let searchFeature = document.querySelector(".search-feature");
    searchFeature.classList.add("darkBlue");
    let cards = document.querySelectorAll(".cardContainer");
    // console.log(cards);
    cards.forEach((item) => {
      // console.log(item);
      if (text.innerText == "Dark Mode") {
        item.classList.add("darkBlue");
      }
    });
    text.innerHTML = "Light Mode";
  } else {
    let nav = document.querySelector(".nav-bar");
    nav.classList.remove("darkBlue");
    let featureBar = document.querySelector(".feature-bar");
    featureBar.classList.remove("veryDarkBlue");
    let informationSection = document.querySelector(".information-section");
    informationSection.classList.remove("veryDarkBlue");
    let searchBox = document.querySelector(".search-box");
    searchBox.classList.remove("darkBlue");
    let dropSelect = document.querySelector(".drop-select");
    dropSelect.classList.remove("darkBlue");
    let darkIcon = document.querySelector(".fa-regular");
    darkIcon.classList.remove("fa-sun");
    darkIcon.classList.add("fa-moon");
    let darkmagIcon = document.querySelector(".fa-solid");
    darkmagIcon.classList.remove("darkBlue");
    let searchFeature = document.querySelector(".search-feature");
    searchFeature.classList.remove("darkBlue");
    let cards = document.querySelectorAll(".cardContainer");
    // console.log(cards);
    cards.forEach((item) => {
      // console.log(item);
      if (text.innerText == "Light Mode") {
        item.classList.remove("darkBlue");
      }
    });
    text.innerText = "Dark Mode";
  }
  // console.log(1);
}
function searchFunction(e) {
  var text = e.target.value.toLowerCase();
  // const arrayOfNames = [];
  let items = document.getElementsByTagName("h3");
  Array.from(items).forEach((item) => {
    var country = item.firstChild.textContent;
    if (country.toLowerCase().indexOf(text) != -1) {
      item.parentElement.style.display = "block";
    } else {
      item.parentElement.style.display = "none";
    }
  });
}
function searchRegion(data) {
  const regionFilter = document.querySelector(".drop-select").value;
  const country = document.querySelectorAll(".region-select");
  Array.from(country).forEach((item) => {
    item.parentElement.parentElement.remove();
  });
  console.log(regionFilter);
  console.log(data);
  data.forEach((item) => {
    if (regionFilter == "All") {
      card(item);
    } else if (item.region == regionFilter) {
      console.log(item.region);
      card(item);
    }
  });
}
