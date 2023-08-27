
console.log('zxvzxcvzcxv')

var imgs = []
var cardInterval

// serachCocktailByName().then(respnose => console.log(respnose))



function displayInfo(data){
    
    // let CocktailCard = $('<div class="p-2 m-1 alcoholCard" style="height: 25vh; width: 25vw; padding: 0%;background-color: #800020;"> <img src="https:\/\/www.thecocktaildb.com\/images\/media\/drink\/p5r0tr1503564636.jpg"> </div>')
    let CockTailDisplay = $('#CocktailDisplayArea')
    console.log(data)


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
            
            
            
            //console.log(coc)
            //CockTailDisplay.append(CocktailCard)
        }

    }else{
        //write that notihng was found
    }
  
}

function cocktailCardAnimationInterval(){

    //pop one from the array and then start the animation on it
    console.log('started the animatoin')
    console.log(imgs)
    
    if(imgs.length !== 0){
        console.log('array element has been poped')
        
        let cocktailCardImage =imgs.pop().imageTag

        let CocktailCard = $('<div class="p-2 m-1 alcoholCard" style="height: 25vh; width: 25vw; padding: 0%;background-color: #800020;"></div>')

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
        serachCocktailByName(varSearchQuarry).then((data) => {displayInfo(data)})
    }
}

$('#serachButton').on('click', searchButtonEventHandler)

// getRandomQuote().then((data) => console.log(data))

