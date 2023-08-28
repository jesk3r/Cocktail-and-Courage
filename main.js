
console.log('zxvzxcvzcxv')


var imgs = []
var cardInterval

var imagesOnDisplay = 0

// serachCocktailByName().then(respnose => console.log(respnose))

var cocktailSerachResults;

var saveData

//saving the user preferances

//check boxes 
var dirnkCheckBox = $('#drink-categoriesCheckBox')
var glassCheckBox = $('#glassTypeCheckBox')
var alcoholCheckBox = $('#alcoholicCheckBox')
console.log(alcoholCheckBox)
//get user select options
var drinkSelect = $('#drink-categories')
var alcoholSelect = $('#alcoholic-options')
var glassSelect = $('#glass-types')


dirnkCheckBox.on('click', () =>{ drinkSelect.prop('disabled', !drinkSelect.prop('disabled') ) ;savePreferances()})
glassCheckBox.on('click', () =>{ glassSelect.prop('disabled', !glassSelect.prop('disabled') ) ;savePreferances()})
alcoholCheckBox.on('click',  () =>{ alcoholSelect.prop('disabled', !alcoholSelect.prop('disabled') ) ;savePreferances()})

drinkSelect.on('change',savePreferances )
alcoholSelect.on('change',savePreferances )
glassSelect.on('change',savePreferances )

function savePreferances()
{
    console.log('saved preferances')

    
    localStorage.setItem('perferances', JSON.stringify({drinkOption: drinkSelect.val(), alcoholOption: alcoholSelect.val(), glassOption: glassSelect.val() }))

}

function loadPreferances(){
    saveData = JSON.parse(localStorage.getItem('perferances'))


   

    if(saveData){
        drinkSelect.val(saveData.drinkOption)
        alcoholSelect.val(saveData.alcoholOption)
        glassSelect.val(saveData.glassOption)
    }else{
        localStorage.setItem('perferances', JSON.stringify({drinkOption: 'none', alcoholOption: 'none', glassOption: 'none' }))
    }

   

}


loadPreferances()

function displayInfo(data){
    
    // let CocktailCard = $('<div class="p-2 m-1 alcoholCard" style="height: 25vh; width: 25vw; padding: 0%;background-color: #800020;"> <img src="https:\/\/www.thecocktaildb.com\/images\/media\/drink\/p5r0tr1503564636.jpg"> </div>')
    let CockTailDisplay = $('#CocktailDisplayArea')
    console.log(data)

    CockTailDisplay.empty()

    if(data.drinks){
        console.log(typeof(data.drinks.length))
        console.log(data.drinks.length)
        

        for (let index = 0; index < 5; index++) {
            const element = data.drinks[index];
            console.log('name: ' + element.strDrink + "  drinkImage Url: " + element.strDrinkThumb)
            let CocktailCard = $('<div class="p-2 m-1 alcoholCard" style="height: 25vh; width: 25vw; padding: 0%;background-color: #800020;"> <img src="https:\/\/www.thecocktaildb.com\/images\/media\/drink\/p5r0tr1503564636.jpg"> </div>')
            // CocktailCard.children().eq(0).attr('src', element.strDrinkThumb)
            // CocktailCard.children().eq(0).attr('src', 'zxcvzcvzxcv')
            imgs.push({imageTag:CocktailCard.children().eq(0)[0], isLoaded:false})
            CocktailCard.children().eq(0).on('load', (event) => {checkIfImgLoaded(event.target)})
            CocktailCard.children().eq(0).on('error', (event) => {console.log('img did not load')})
            CocktailCard.children().eq(0).attr('src', element.strDrinkThumb)
            CocktailCard.children().eq(0).attr('data-index', index)
            
            
            
            
            //console.log(coc)
            //CockTailDisplay.append(CocktailCard)
        }

    }else{
        //write that notihng was found
    }
  
}

function changeQuote(){
    var quoteTag=  $('#Quote')
    var personNameTag = $('#personSayingTheQuote')

    getRandomQuote().then( (data) => {quoteTag.text(data[0].content); personNameTag.text(data[0].author)})

}

function displayModalCocktailInfo(index){

    let infoAboutDrink = cocktailSerachResults.drinks[index]

    let cockTailModalImage = $('#cocktailImage')
    let cockTailModalName = $('#cocktailName')
    let cockTailModalInstructions = $('#cocktailInstructions')
    let cockTailModalIngredients = $('#cocktailIngredientList')

    cockTailModalName.text(infoAboutDrink.strDrink)
    cockTailModalInstructions.text(infoAboutDrink.strInstructions)
    cockTailModalImage.attr('src', infoAboutDrink.strDrinkThumb)

    //clear the in Ingredient List
    cockTailModalIngredients.empty()
    // Individual null checks for each ingredient
    if (infoAboutDrink.strIngredient1 !== null) {
        let ingredient = infoAboutDrink.strIngredient1;

        let listElement = $('<li></li>')
        listElement.text(ingredient)
        cockTailModalIngredients.append(listElement)
    }
    if (infoAboutDrink.strIngredient2 !== null) {
      

        let ingredient = infoAboutDrink.strIngredient2;

        let listElement = $('<li></li>')
        listElement.text(ingredient)
        cockTailModalIngredients.append(listElement)
    }
    if (infoAboutDrink.strIngredient3 !== null) {
        let ingredient = infoAboutDrink.strIngredient3;

        let listElement = $('<li></li>')
        listElement.text(ingredient)
        cockTailModalIngredients.append(listElement)
    }
    if (infoAboutDrink.strIngredient4 !== null) {
        
        let ingredient = infoAboutDrink.strIngredient4;

        let listElement = $('<li></li>')
        listElement.text(ingredient)
        cockTailModalIngredients.append(listElement)

    }
    if (infoAboutDrink.strIngredient5 !== null) {
        let ingredient = infoAboutDrink.strIngredient5;

        let listElement = $('<li></li>')
        listElement.text(ingredient)
        cockTailModalIngredients.append(listElement)

    }
    if (infoAboutDrink.strIngredient6 !== null) {
        let ingredient = infoAboutDrink.strIngredient6;

        let listElement = $('<li></li>')
        listElement.text(ingredient)
        cockTailModalIngredients.append(listElement)
    }
    if (infoAboutDrink.strIngredient7 !== null) {
        let ingredient = infoAboutDrink.strIngredient7;

        let listElement = $('<li></li>')
        listElement.text(ingredient)
        cockTailModalIngredients.append(listElement)
    }
    if (infoAboutDrink.strIngredient8 !== null) {
        let ingredient = infoAboutDrink.strIngredient8;

        let listElement = $('<li></li>')
        listElement.text(ingredient)
        cockTailModalIngredients.append(listElement)
    }
    if (infoAboutDrink.strIngredient9 !== null) {
        let ingredient = infoAboutDrink.strIngredient9;

        let listElement = $('<li></li>')
        listElement.text(ingredient)
        cockTailModalIngredients.append(listElement)
    }
    if (infoAboutDrink.strIngredient10 !== null) {
        let ingredient = infoAboutDrink.strIngredient10;

        let listElement = $('<li></li>')
        listElement.text(ingredient)
        cockTailModalIngredients.append(listElement)
    }
    if (infoAboutDrink.strIngredient11 !== null) {
        let ingredient = infoAboutDrink.strIngredient11;

        let listElement = $('<li></li>')
        listElement.text(ingredient)
        cockTailModalIngredients.append(listElement)
    }
    if (infoAboutDrink.strIngredient12 !== null) {
        let ingredient = infoAboutDrink.strIngredient12;

        let listElement = $('<li></li>')
        listElement.text(ingredient)
        cockTailModalIngredients.append(listElement)
    }
    if (infoAboutDrink.strIngredient13 !== null) {
        let ingredient = infoAboutDrink.strIngredient13;

        let listElement = $('<li></li>')
        listElement.text(ingredient)
        cockTailModalIngredients.append(listElement)
    }
    if (infoAboutDrink.strIngredient14 !== null) {
        let ingredient = infoAboutDrink.strIngredient14;

        let listElement = $('<li></li>')
        listElement.text(ingredient)
        cockTailModalIngredients.append(listElement)
    }
    if (infoAboutDrink.strIngredient15 !== null) {
        let ingredient = infoAboutDrink.strIngredient15;

        let listElement = $('<li></li>')
        listElement.text(ingredient)
        cockTailModalIngredients.append(listElement)
    }
    
    
}

function cocktailCardAnimationInterval(){

    //pop one from the array and then start the animation on it
    console.log('started the animatoin')
    console.log(imgs)
    
    if(imgs.length !== 0){
        console.log('array element has been poped')
        
        let cocktailCardImage =imgs.pop().imageTag

        let CocktailCard = $('<div class="p-2 m-1 alcoholCard" style="height: 25vh; width: 25vw; padding: 0%;background-color: #DE1A1A; "></div>')

        cocktailCardImage.onclick = (event) => {changeQuote(); displayModalCocktailInfo(event.target.getAttribute('data-index')) ;modal.style.display = "block";}

        CocktailCard.append(cocktailCardImage)
    
        
        let CockTailDisplay = $('#CocktailDisplayArea')
        CockTailDisplay.append(CocktailCard)
        //change the opasity 
    }else{
        clearInterval(cardInterval)
    }

}

function checkIfImgLoaded(img){
    console.log(img)
   let imgsObject = imgs.find((element) => {return element.imageTag === img})
  

   if(!imgsObject.isLoaded){
    imgsObject.isLoaded = true;
   }

   let allImagesDoneLoading = true;

    imgs.forEach((element)=> {
        if(!element.isLoaded){
            allImagesDoneLoading = false
            return
        }
   })

   if(allImagesDoneLoading){
    console.log('all images have finshed loading start animation interval')
    cardInterval = setInterval(cocktailCardAnimationInterval, 500)
   }

}

function searchButtonEventHandler(){
    let varSearchQuarry = $('#serachText').val()
    



    if(varSearchQuarry){
        console.log(varSearchQuarry)
        serachCocktailByName(varSearchQuarry).then((data) => {
          cocktailSerachResults = data
          displayInfo(cocktailSerachResults);
        });
    }

    $('#serachText').val('')
}

$('#navbar').on('mouseover', ()=>{$('#blurBackDrop').attr('class', 'position-relative blur') })
$('#searchTools').on('mouseover', ()=>{$('#blurBackDrop').attr('class', 'position-relative blur') })
$('#navbar').on('mouseout', ()=>{$('#blurBackDrop').attr('class', 'displayNone')})

$('#serachButton').on('click', searchButtonEventHandler)

// getRandomQuote().then((data) => console.log(data))
$('#cocktailModalChangeViewButton').on('click', ()=> {$('#cocktailInfoModal').attr('class', 'displayNone'); $('#QuoteModal').attr('class', 'modal-content animate__animated animate__fadeInUp') })

$('#quoteModalChangeViewButton').on('click', ()=> {$('#QuoteModal').attr('class', 'displayNone'); $('#cocktailInfoModal').attr('class', 'modal-content') })

//quoteModalChangeViewButton

// internet code 
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span1 = document.getElementsByClassName("close")[0];
var span2 = document.getElementsByClassName("close")[1];

// When the user clicks on the button, open the modal 


// When the user clicks on <span> (x), close the modal
span1.onclick = function() {
  modal.style.display = "none";
}

span2.onclick = function() {
    modal.style.display = "none";
  }

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}




// end of internet code


//saving the user preferances


