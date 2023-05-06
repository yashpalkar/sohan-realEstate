const cardContainer = document.getElementById("card-container");

const cardDataList = [
  { propertyFor: "BUY",image: "assets/comercial-plot1.jpg", title: "Near By Station", description: "This is the first card.", location: "Mumbai", site_type: "plot", area: "1200 sq ft" ,price:"500000"},
   {  propertyFor: "SELL",image: "assets/comercial-plot.jpg", title: "Shop In Dombivli", description: "This is the third card.", location: "Dombivli", site_type: "Commercial", area: "700 sq ft",price:"900000" },
   {  propertyFor: "ON-RENT",image: "assets/home-img-2.jpg", title: "Flat in Metro City", description: "This is the first card.", location: "Mulund", site_type: "2 BHK", area: "800 sq ft",price:"800000" },
  {  propertyFor: "BUY",image: "assets/home3.jpeg", title: "Plot in Metro City", description: "This is the second card.", location: "Kurla", site_type: "plot", area: "1000 sq ft",price:"500000" },
  {  propertyFor: "SELL",image: "assets/home-img.jpg", title: "Studio at Center", description: "This is the third card.", location: "Ghatkhopar", site_type: "Studio", area: "300 sq ft",price:"500000" },
  {  propertyFor: "SELL",image: "assets/comercial-plot1.jpg", title: "700sqft area in Metro city", description: "This is the first card.", location: "Mumbai", site_type: "Apartment", area: "700 sq ft",price:"1200000" },
  {  propertyFor: "BUY",image: "assets/comercial-plot2.jpg", title: "Card 8", description: "This is the second card.", location: "Malad", site_type: "TownHome", area: "1300 sq ft",price:"7800000" },
  {  propertyFor: "ON-RENT",image: "assets/comercial-plot.jpg", title: "Card 9", description: "This is the third card.", location: "Dombivli", site_type: "3 BHK", area: "1200 sq ft",price:"800000" },
  {  propertyFor: "SELL",image: "assets/home-img-2.jpg", title: "Card 10", description: "This is the first card.", location: "Mulund", site_type: "plot", area: "1300 sq ft",price:"350000" },
  {  propertyFor: "SELL",image: "assets/home-img.jpg", title: "Shop In Dombivli", description: "This is the third card.", location: "Dombivli", site_type: "Commercial", area: "700 sq ft",price:"500000" },
  {  propertyFor: "BUY",image: "assets/home3.jpeg", title: "Card 11", description: "This is the second card.", location: "Kurla", site_type: "Commercial", area: "400 sq ft" ,price:"2500000"},
  {  propertyFor: "ON-RENT",image: "assets/home-img.jpg", title: "Card 12", description: "This is the third card.", location: "Ghatkhopar", site_type: "Office", area: "3000 sq ft",price:"540000" },
  {  propertyFor: "BUY",image: "assets/comercial-plot2.jpg", title: "Card 2", description: "This is the second card.", location: "Malad", site_type: "1 BHK", area: "500 sq ft",price:"660000" },
  
];
var enquiryfor = ["BUY", "SELL", "ON-RENT"];
var propertyType = ["Plot", "Commercial", "Studio", "Apartment", "TownHome", "Office", "1 BHK", "2 BHK", "3 BHK", "4 BHK and More"];
var locations = ["Mumbai", "Dombivli", "Kurla", "Ghatkhopar", "Malad"];
var area = ["200 sqft - 400 sqft", "400 sqft - 600 sqft", "600 sqft - 800 sqft", "800 sqft - 1200 sqft"];
var  budget = ["20-30 lakh", "30-50 lakh", "50-70 lakh", "70-90 lakh", "90lakh and Above"];

cardDataList.forEach(cardData => {
  const cardViewHtml = createCardView(cardData);
  cardContainer.insertAdjacentHTML("beforeend", cardViewHtml);
});

function createCardView(cardData) {
  return `
      <div class="card">
      <div class="card-image">
      <div class="propertyforbtn">${cardData.propertyFor}</div>
      <img class="cropped" src=${cardData.image} alt="Computer Man">
      </div>
      <div class="propertydetails">
      <div>
        <h4 class="propertTitle">${cardData.title}</h4>
        <p class="propertyLocation">${cardData.location}</p>
        <span class="propertyType">${cardData.site_type}</span>
        <span class="propertyArea">${cardData.area}</span>
      </div>
      <div class="propertyPrice">${cardData.price}</div>
      </div>
      </div>
    `;
}


// const changeSelected = (e) => {
//   const $select = document.querySelector('#enquiry_for');
//   console.log($select.value)
//   $select.value = 'steve'
// };

// document.querySelector('.changeSelected').addEventListener('click', changeSelected);



var enquiry_for_selection = document.getElementById("enquiry_for_selection");

for (var i = 0; i < enquiryfor.length; i++) {
  var option = document.createElement("option");
  option.text = enquiryfor[i];
  option.value = enquiryfor[i];
  enquiry_for_selection.add(option);
}
var properties_type_selection = document.getElementById("properties_type_selection");
for (var i = 0; i < propertyType.length; i++) {
  var option = document.createElement("option");
  option.text = propertyType[i];
  option.value = propertyType[i];
  properties_type_selection.add(option);
}
var area_size_selection = document.getElementById("area_size_selection");
for (var i = 0; i < area.length; i++) {
  var option = document.createElement("option");
  option.text = area[i];
  option.value = area[i];
  area_size_selection.add(option);
}
var location_selection = document.getElementById("location_selection");
for (var i = 0; i < locations.length; i++) {
  var option = document.createElement("option");
  option.text = locations[i];
  option.value = locations[i];
  location_selection.add(option);
}
var budget_selection = document.getElementById("budget_selection");
for (var i = 0; i < budget.length; i++) {
  var option = document.createElement("option");
  option.text = budget[i];
  option.value = budget[i];
  budget_selection.add(option);
}

function handleButtonClick() {
  // var inputText = document.getElementById("text-input").value;
  var enquiry_forValue = document.getElementById("enquiry_for_selection").options[document.getElementById("enquiry_for_selection").selectedIndex].text;
  var properties_typeValue = document.getElementById("properties_type_selection").options[document.getElementById("properties_type_selection").selectedIndex].text;
  var area_sizeValue = document.getElementById("area_size_selection").options[document.getElementById("area_size_selection").selectedIndex].text;
  var locationValue = document.getElementById("location_selection").options[document.getElementById("location_selection").selectedIndex].text;
  var budgetrValue = document.getElementById("budget_selection").options[document.getElementById("budget_selection").selectedIndex].text;

 while(cardContainer.firstChild) {
  cardContainer.removeChild(cardContainer.firstChild);
}
 console.log(locationValue)
 console.log(properties_typeValue)
  cardDataList.forEach(cardData => {
   if (cardData.propertyFor==enquiry_forValue && cardData.location==locationValue && cardData.site_type==properties_typeValue){
    const cardViewHtml = createCardView(cardData);
    cardContainer.insertAdjacentHTML("beforeend", cardViewHtml);
    }
  });
// console.log("safc");
  // Do something with the inputText and dropdownValue values
}

enquiry_for_selection.addEventListener("change", e => {
  document.getElementById("budget_selection")="";
  if ((e.target.value == "ON-RENT")) {
    budget.splice(0, budget.length);
    budget = ["10000-20000", "20000-30000", "30000-40000", "50000-60000", "70000-80000", "80000 and Above"]
  }
  else {
    budget.splice(0, budget.length);
    budget = ["20-30 lakh", "30-50 lakh", "50-70 lakh", "70-90 lakh", "90lakh and Above"];
  }
  var budget_selection = document.getElementById("budget_selection");
  for (var i = 0; i < budget.length; i++) {
    var option = document.createElement("option");
    option.text = budget[i];
    option.value = budget[i];
    budget_selection.add(option);
  }

})