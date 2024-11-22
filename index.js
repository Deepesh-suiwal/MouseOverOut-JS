let box = document.querySelector("#box")
let color = document.querySelectorAll("p")
let selectedColor = null
for (let i = 0; i < color.length; i++) {
    color[i].addEventListener("click", () => {
        for (let a = 0; a < color.length; a++) {
            if (color[a].classList.contains("bold")) {
                color[a].classList.remove("bold")
            }

        }
        selectedColor = color[i].innerHTML;
        color[i].classList.add("bold")
    })

}


box.addEventListener("mouseover", function () {
    box.classList.add("changeColor")
    box.style = "background:" + selectedColor;
})
box.addEventListener("mouseout", function () {
    box.classList.remove("changeColor")
    box.style = "background:orange";
})