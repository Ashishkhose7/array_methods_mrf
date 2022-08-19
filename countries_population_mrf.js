//Q.2>>>>Get all the countries with a population of less than 2 lakhs using Filter function

let api=new XMLHttpRequest()
api.open("GET","https://restcountries.com/v3.1/all")
api.send()

api.onload=()=>{
    console.log("connected...")
    let respone=JSON.parse(api.responseText)
    let countries=respone.filter((data)=>{
        return data.population<200000  //condition to filter data
    })
    console.log(countries.length) //printing data
}