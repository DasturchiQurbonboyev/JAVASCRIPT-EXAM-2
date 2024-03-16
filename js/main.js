const API_URL = "https://dummyjson.com/products"
const product = document.querySelector(".products")
const loading = document.querySelector(".loading")



async function fetchData(api) {

    let data = await fetch(api)

    data
        .json()
        .then(res => cerateCard(res.products))
        .catch(err => console.log(err))
        .finally(() => {
            loading.style.display = "none"
        })

}

fetchData(API_URL)



function cerateCard(data) {
    // console.log(data);
    data.forEach(({ id, title, description, price, discountPercentage, rating, stock, brand, category, images }) => {

        let card = document.createElement("div")
        card.classList.add("card")

        card.innerHTML = `
            <div class="card__title">
                    <div class="card__title__left">
                        <img src="./images/header/close_card.png" alt="">
                        <a href="#">Нет в наличии</a>
                    </div>
                    <div class="card__title__reight">
                        <button>Save</button>
                    </div>
                </div>

                <div class="card__img">
                    <div class="card__img__box">
                    <img class="card__product__img" src="${images[0]}" alt="">
                    
                    </div>
                    <div class="card__img__about">
                        <div class="card__img__about__reyting">
                            <img src="./images/header/рейтинг.png" alt="">
                            <span>(12) отзывов</span>
                        </div>
                        <p class="brand">${brand}</p>
                        <div class="card__img__about__price">
                            <h2>${price} ₽</h2>
                            <h3><del>${price + 100} ₽</del></h3>
                        </div>
                    </div>
                </div>
        `
        product.appendChild(card)
        card.children[1].children[0].addEventListener("click", () => singleRoute(id))
    });
}


function singleRoute(id) {
    window.open(`../pages/single.html?id=${id}`, "_self")
}