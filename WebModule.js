export async function fetchData(url) {
    let promise = await fetch(url);
    let data = await promise.json();
    return data
}

export async function exchange(baseCurrency, targetCurrency, amount) {
    let json = await fetchData("https://api.exchangeratesapi.io/latest?base="+ baseCurrency)
    let exchangeRates = json.rates
    return exchangeRates[targetCurrency] * amount +" "+ targetCurrency
}