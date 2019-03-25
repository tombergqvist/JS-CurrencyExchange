import * as Web from './WebModule.js'

document.getElementById("convertBtn").addEventListener("click", function () {
    let base = document.getElementById("base").value
    let target = document.getElementById("target").value
    let amount = document.getElementById("amount").value

    Web.exchange(base, target, amount).then(setResult)
})

function setResult(result) {
    document.getElementById("result").innerHTML = result
}