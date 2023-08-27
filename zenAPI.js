function getRandomQuote(){
    // apiURL = 'https://cors-anywhere.herokuapp.com/https://zenquotes.io/api/random'
    apiURL = 'https://zenquotes.io/api/random'
    return fetch(apiURL).then( (response)=> {
        console.log(response)
        return response.json()
    }).then((data) => {
        console.log(data)
    })
}


getRandomQuote()
