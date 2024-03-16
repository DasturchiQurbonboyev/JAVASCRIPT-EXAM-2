const API_URL = "https://dummyjson.com/products";

const singleProduct = document.querySelector(".single")
const notFount = document.querySelector(".not-fount")
const loading = document.querySelector(".loading")


async function fetchSingleUser(api) {
    let params = new URLSearchParams(window.location.search)
    let id = params.get("id")


    let data = await fetch(`${api}/${id}`)

    data
        .json()
        .then(res => {
            if (res.message) {
                return notFount.style.display = "flex"
            }
            singleUser(res)
        })
        .catch(err => console.log("error>>>>>", err))
        .finally(() => {
            loading.style.display = "none"
        })
}


fetchSingleUser(API_URL)



function singleUser({ images, description, title, price }) {
    singleProduct.innerHTML = `
        <div class="single__left">
                <img src="${images[0]}" alt="">
            </div>
            <div class="single__reight">
                <h1>${title}</h1>
                <p>${description}</p>
                <div>
                    <p class="narxi">Цена</p><br>
                    <span class="narx-1">${price} ₽</span>
                    <span class="narx-2"><del>${price + 100} ₽</del></span>
                    <br>
                    <button>КОРЗИНКА</button>
                </div>
            </div>

    `
    singleProduct.appendChild()
}
