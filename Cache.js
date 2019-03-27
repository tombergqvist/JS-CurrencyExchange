export function save(base, exchangeRates){
    exchangeRates.date = Date.now()
    localStorage.setItem(base, JSON.stringify(exchangeRates))
}

export function load(baseCurrency){
    return JSON.parse(localStorage.getItem(baseCurrency))
}