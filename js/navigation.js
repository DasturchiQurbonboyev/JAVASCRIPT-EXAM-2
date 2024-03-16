const tuggle = document.querySelector(".tuggle__btn");
const navbarResClose = document.querySelector(".navbar-res-close")
const navbarRes = document.querySelector(".navbar__res")


navbarResClose.addEventListener("click", () => {
    navbarRes.style.marginLeft = "-100%"
})

tuggle.addEventListener("click", () => {
    navbarRes.style.marginLeft = "0"
})
