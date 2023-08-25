
//add spacing filter
function serachCocktailByName(nameOfCocktail) {
  apiUrl = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=mar';

  return fetch(apiUrl).then((response) => {
    return response.json()
  }).then(data => {
    console.log(data)
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

    if(fAlcoholic !== 'null'){
        newData = newData.filter((drink) => {
            return drink.strAlcoholic === fAlcoholic
        })
    }

    if(fCategories !== 'null'){
        newData = newData.filter((drink) => {
            return drink.strCategory === fCategories
        })
    }

    if(fglasses !== 'null'){
        newData = newData.filter((drink) => {
            return drink.strGlass === fglasses
        })
    }

    return newData
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



