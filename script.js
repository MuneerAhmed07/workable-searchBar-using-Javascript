import {product} from "./data.js";

const categories = [...new Set(product.map((item) => item))];

// For searching
document.getElementById("searchBar").addEventListener("keyup", (e) => {
    const searchData = e.target.value.toLowerCase();
    const filterData = categories.filter((item) => {
        return(
            item.title.toLowerCase().includes(searchData)
        )
    })
    displayItem(filterData);
})

// For displaying Product on web page
const displayItem = (items) => {
    document.getElementById("root").innerHTML = items.map((item) => {
        var {image, title, price} = item;
        return(
            `<div class="box">
                <div class="image">
                    <img src=${image} />
                </div>
                <div class="bottom">
                    <p>${title}</p>
                    <h2>$ ${price}.00 </h2>
                    <button class="btn"> Add to Cart </button>
                </div>
            </div>`
        )
    }).join("");
}

displayItem(categories);