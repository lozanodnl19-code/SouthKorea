// ==============================
// BOTONES
// ==============================

const foodBtn = document.getElementById("foodBtn");
const locationBtn = document.getElementById("locationBtn");


// ==============================
// SECCIONES
// ==============================

const foodSection = document.getElementById("food");
const locationSection = document.getElementById("location");


// ==============================
// MOSTRAR FOOD
// ==============================

foodBtn.addEventListener("click", function(){

    foodSection.classList.remove("hidden");

    locationSection.classList.add("hidden");

});


// ==============================
// MOSTRAR LOCATION
// ==============================

locationBtn.addEventListener("click", function(){

    locationSection.classList.remove("hidden");

    foodSection.classList.add("hidden");

});


// ==============================
// GOOGLE MAPS
// ==============================

const mapButton = document.getElementById("mapButton");


mapButton.addEventListener("click", function(){

    window.open(
        "https://www.google.com/maps/place/Seoul,+South+Korea",
        "_blank"
    );

});
function openMap(place){

    window.open(

    "https://www.google.com/maps/search/" 
    + place,

    "_blank"

    );

}