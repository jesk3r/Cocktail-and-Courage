
//add spacing filter
function serachCocktailByName(nameOfCocktail) {
  apiUrl = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${nameOfCocktail}`;

  // apiUrl = `./testingData.json`;

  return fetch(apiUrl).then((response) => {
    return response.json()
  }).then(data => {
    
    return data
  })
}

//add spacing filter
function lookUpCocktailByID(id){
    apiUrl = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11007'

    fetch(apiUrl).then(response => {
        return response.json()
    }).then(data => {
        console.log(data)
    })
}

function searchCockTailByIngredient(){
    apiUrl = 'www.thecocktaildb.com/api/json/v1/1/filter.php?i=Gin'

    fetch(apiUrl).then(response => {
        return response.json()
    }).then(data => {
        console.log(data)
    })

}

function filters(data, bAlcoholicEnabled, bCategoriesEnabled, bglassesEnabled,fAlcoholic, fCategories, fglasses){
    // let newData = data
    

    var newData = data['drinks']
    
    if(bAlcoholicEnabled){

     newData = newData.filter((elemetn) => {return elemetn['strAlcoholic'] === fAlcoholic})
     console.log('A-filter resulsts: '+ newData)
     console.log(newData)

    }

    if(bCategoriesEnabled){
      newData = newData.filter((elemetn) => {return elemetn['strCategory'] === fCategories})
      console.log('C-filter resulsts: '+ newData)
      console.log(newData)
    }

    if(bglassesEnabled){
      newData = newData.filter((elemetn) => {return elemetn['strGlass'] === fglasses})
      console.log('G-filter resulsts: '+ fglasses)
      console.log(newData)
    }

    return newData
}


// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];


function handleDrink() {
  modal.style.display = 'block';
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// NOT THE RIGHT WAY TO DO IT BUT TAKE A LOOK
// var alcohol = document.querySelector(".alcohol");
// var glass = document.querySelector(".glass");
// var category = document.querySelector(".category");
// var searchBar = document.querySelector(".searchBar");
// var searchBtn = document.querySelector(".searchBtn");
// let searchFilter;

// alcohol.addEventListener("click", function () {
//     searchFilter = "a";
// });

// glass.addEventListener("click", function () {
//     searchFilter = "g";
// });

// category.addEventListener("click", function () {
//     searchFilter = "c";
// });

// searchBtn.addEventListener("click", function () {
//     var queryValue = encodeURIComponent(searchBar.value.trim());
// var filterValue = searchFilter;
//     fetchData(filterValue, queryValue)
// });

// function fetchData(filter, query) {
//     let apiURrl = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?' + filter + '=' + query;
//     console.log(apiURrl);
//     fetch(apiURrl)
//         .then(function (res) {
//             return res.json();
//         })
//         .then(function (data) {
//             console.log(data);
//         })
//         .catch(function (error) {
//             console.error('Error fetching data:', error);
//         });
// };



// NOT THE RIGHT WAY TO DO IT BUT TAKE A LOOK
// var alcohol = document.querySelector(".alcohol");
// var glass = document.querySelector(".glass");
// var category = document.querySelector(".category");
// var searchBar = document.querySelector(".searchBar");
// var searchBtn = document.querySelector(".searchBtn");
// let searchFilter;

// alcohol.addEventListener("click", function () {
//     searchFilter = "a";
// });

// glass.addEventListener("click", function () {
//     searchFilter = "g";
// });

// category.addEventListener("click", function () {
//     searchFilter = "c";
// });

// searchBtn.addEventListener("click", function () {
//     var queryValue = encodeURIComponent(searchBar.value.trim());
// var filterValue = searchFilter;
//     fetchData(filterValue, queryValue)
// });

// function fetchData(filter, query) {
//     let apiURrl = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?' + filter + '=' + query;
//     console.log(apiURrl);
//     fetch(apiURrl)
//         .then(function (res) {
//             return res.json();
//         })
//         .then(function (data) {
//             console.log(data);
//         })
//         .catch(function (error) {
//             console.error('Error fetching data:', error);
//         });
// };


var jsonData;
serachCocktailByName("").then((data) => {
  console.log(data);
  filters(data,true,true,true,'Alcoholic', 'Ordinary Drink', 'Cocktail glass',)
});



