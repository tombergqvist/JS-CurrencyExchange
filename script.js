import * as Web from './WebModule.js'

document.getElementById("convertBtn").addEventListener("click", function () {
    let base = document.getElementById("select-base").value
    let target = document.getElementById("select-target").value
    let amount = document.getElementById("amount").value

    Web.exchange(base, target, amount).then(setResult)
})

function setResult(result) {
    document.getElementById("result").innerHTML = result
}

function initializeSelect() {
    let baseSelect = document.getElementById("select-base")
    let targetSelect = document.getElementById("select-target")

    Web.getAllCurrencies().then((c) => {
        let options = ""
        options = c.map((element) => {
            return "<option value='" + element + "'"+ (element === "SEK" ? "selected" :"") +">" + element + "</option>"
        })
        
        baseSelect.innerHTML = options
        targetSelect.innerHTML = options
    })

}

initializeSelect()