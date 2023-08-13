let bulb = document.querySelector("#bulb")
let btn = document.querySelector("button")

let light = 0

btn.addEventListener("click", function () {
    if (light == 0) {
        bulb.style.backgroundColor = "yellow"
        light = 1
    }
    else {
        bulb.style.backgroundColor = "transparent"
        light = 0
    }

})
