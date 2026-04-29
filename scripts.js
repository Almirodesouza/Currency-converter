const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".select-currency-two")

function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const moneyReal = document.querySelector(".money-Real")
    const moneyConverted = document.querySelector(".money-Dolar")

    const dolarToday = 5.0
    const euroToday = 5.87
    const libraToday = 6.77

    if (currencySelect.value == "dolar") {
        moneyConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)
    }

    if (currencySelect.value == "euro") {
        moneyConverted.innerHTML = new Intl.NumberFormat("de-De", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)
    }

    if (currencySelect.value == "libra") {
        moneyConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / libraToday)
    }

    moneyReal.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)


}

function changeCurrency() {
    const currencyName = document.querySelector(".coin-two")
    const currencyImg = document.querySelector(".currency-Img")

    if (currencySelect.value == "dolar") {
        currencyName.innerHTML = "Dólar Americano"
        currencyImg.src = "./assets/estados-unidos.png"
    }

    if (currencySelect.value == "euro") {
        currencyName.innerHTML = "Euro"
        currencyImg.src = "./assets/Euro.png"
    }

    if (currencySelect.value == "libra") {
        currencyName.innerHTML = "Libra"
        currencyImg.src = "./assets/libra.png"
    }
    
    convertValues()

}

convertButton.addEventListener("click", convertValues)
currencySelect.addEventListener("change", changeCurrency)
