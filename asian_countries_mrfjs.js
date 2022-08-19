//Q.1>>>>Get all the countries from the Asia continent /region using the Filter function


let api=new XMLHttpRequest()
api.open("GET","https://restcountries.com/v3.1/all")
api.send()

api.onload=()=>{
    console.log("connected...")
    let respone=JSON.parse(api.responseText)
    let countries=respone.filter((data)=>{
        return data.region==="Asia"    //condition to filter data on basis of region
    })
    console.log(countries.length) //getting number of countries in asia
}