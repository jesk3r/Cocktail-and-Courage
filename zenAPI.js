function getRandomQuote(){

    apiURL = 'https://api.quotable.io/quotes/random?tags=inspirational'
    return fetch(apiURL).then( (response)=> {
        console.log(response)
        return response.json()
    }).then((data) => {
       
        return data
    })
}


getRandomQuote().then((data) => {console.log(data)})
