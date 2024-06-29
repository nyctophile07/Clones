const selectt = document.querySelectorAll(".faq")
const hidden = document.querySelectorAll(".hidden")


selectt.forEach(element => {
    const hid = element.nextElementSibling
    element.addEventListener('click', () => {

        if (hid.classList.contains("hidden")) {
            hidden.forEach(element2 => {
                element2.style.display = "none"
            });
            hid.classList.replace("hidden", "faq")
            hid.style.display = "block"
        }
        else {
            hid.classList.replace("faq", "hidden")
            hid.style.display = "none"
        }
    })
});

