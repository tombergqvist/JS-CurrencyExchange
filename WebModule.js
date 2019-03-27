import * as Cache from './Cache.js'

export async function fetchData(url) {
    let promise = await fetch(url);
    let data = await promise.json();

    return data
}

export async function exchange(baseCurrency, targetCurrency, amount) {
    if (baseCurrency != "" && targetCurrency != "") {
        let cache = Cache.load(baseCurrency)
        if (!cache || Date.now() - cache.date > 3600000) {
            var json = await fetchData("https://api.exchangeratesapi.io/latest?base=" + baseCurrency)
            if(json.error)
                return "That's not a valid currency!"
            Cache.save(baseCurrency, json)
        }
        return Cache.load(baseCurrency).rates[targetCurrency] * amount + " " + targetCurrency
    }
    return "Select a base and target currency!"
}