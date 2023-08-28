
//add spacing filter
function serachCocktailByName(nameOfCocktail) {
  apiUrl = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${nameOfCocktail}`;

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

function filters(data, fAlcoholic, fCategories, fglasses){
    let newData = data
    console.log(newData)
    if(fAlcoholic !== 'none'){
        newData = newData.filter((drink) => {
            return drink.strAlcoholic === fAlcoholic
        })
    }

    if(fCategories !== 'none'){
        newData = newData.filter((drink) => {
            return drink.strCategory === fCategories
        })
    }

    if(fglasses !== 'none'){
        newData = newData.filter((drink) => {
            return drink.strGlass === fglasses
        })
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



