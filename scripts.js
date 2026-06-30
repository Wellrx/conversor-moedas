const convertButton = document.getElementById("convert-button")
const selectButton  = document.querySelector(".convert-to")
const currencySelectConvert = document.querySelector(".convert-from")

function convertValues(){
    const inputValue = document.querySelector(".input-value").value // valor inserido
    const aSerConvertido = document.getElementById("a-ser-convertido") //valor em Real
    const convertido = document.getElementById("convertido") // valor em dolar ou outras moedas
    const dolarToday = 5.2 // valor ficticio
    const euroToday = 6.2 
    const libraToday = 6.85

     if(currencySelectConvert.value === "currency-real"){
        aSerConvertido.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency", 
        currency: "BRL"
    }).format(inputValue)}

    if(selectButton.value == "dolar"){
        convertido.innerHTML = new Intl.NumberFormat("en-US",{
        style: "currency",
        currency: "USD"
    }).format(inputValue / dolarToday)}

    if(selectButton.value == "euro"){
        convertido.innerHTML = new Intl.NumberFormat("EUR",{
        style: "currency",
        currency: "EUR"
    }).format(inputValue / euroToday)}

    if(selectButton.value == "libra"){
    convertido.innerHTML = new Intl.NumberFormat("GBP",{
        style: "currency",
        currency: "GBP"
    }).format(inputValue / libraToday)
    }

}


function changeCurrency(){
    const currencyName = document.getElementById("currency-name")
    const currencyImg = document.querySelector(".img-currency")
    const convertido = document.getElementById("convertido")

if(selectButton.value == "dolar"){
    currencyName.innerHTML = "Dólar americano"
    currencyImg.src = "./assets/dolar-logo.png"
    convertido.innerHTML = "US$ Valor"

}

if(selectButton.value == "euro"){
    currencyName.innerHTML = "Euro"
    currencyImg.src = "./assets/euro-logo.png"
    convertido.innerHTML = "€ Valor"
}

if(selectButton.value == "libra"){
    currencyName.innerHTML = "Libra"
    currencyImg.src = "./assets/libra-logo.png"
    convertido.innerHTML = "£ Valor"
}




convertValues()
}

selectButton.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues ) // add event listener vai colocar uma função para rodar apenas quando clicar no botao
