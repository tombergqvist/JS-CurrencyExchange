import * as myModule from './module.js'
import * as Web from './WebModule.js'

let element = document.createElement("p")
    element.innerHTML = myModule.MyMethod()
    document.body.appendChild(element)

Web.getData()