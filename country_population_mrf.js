//Q.4>>> Print the total population of countries using reduce function

let api=new XMLHttpRequest()
api.open("GET","https://restcountries.com/v3.1/all")
api.send()

api.onload=()=>{
    console.log("connected...")
    let respone=JSON.parse(api.responseText)
    let details=respone.reduce((init,curr)=>{
          return init+curr.population       //adding all country population
    },0)
    console.log(`Total population of countries ${details}`)//display sum of population
}