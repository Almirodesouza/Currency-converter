const convertButton = document.querySelector(".convert-button")

function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const moneyReal = document.querySelector(".money-Real")
    const moneyConverted = document.querySelector(".money-Dolar")

    const dolarToday = 5.0

    const convertedValue = inputCurrencyValue / dolarToday

    moneyReal.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)

    moneyConverted.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
    }).format(convertedValue)

}

convertButton.addEventListener("click", convertValues)
