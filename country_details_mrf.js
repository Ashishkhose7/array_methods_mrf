//Q.3>>> Print the following details name, capital, flag using forEach function

let api=new XMLHttpRequest()
api.open("GET","https://restcountries.com/v3.1/all")
api.send()

api.onload=()=>{
    console.log("connected...")
    let respone=JSON.parse(api.responseText)
    respone.forEach((data) => {
        console.log(`
        Name:${data.name.common}
        Capital:${data.capital}
        Flags:${data.flags.png}
        `)
    });
}