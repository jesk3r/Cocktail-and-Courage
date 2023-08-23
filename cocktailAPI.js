
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




