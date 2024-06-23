const tableBody = document.getElementsByTagName("tbody")[0]
const sideBar = document.getElementById("sidebar")

const fetchProducts = async function() {
    const response = await fetch('https://dummyjson.com/products')
    let productsData = await response.json()
    productsData = productsData.products
    let rowsHtml = ``
    for (let index = 0; index < productsData.length; index+= 2) {
        let current = productsData[index]
        let next = productsData[index + 1]
        let rowHtml = `
                <tr>
                    <td>
                        <h3>${ current.title}</h3>                       
                        <img src="${ current.images[0]}" alt="" width="300px" height="300px">
                        <div class="product-content">
                            <p>$${ current.price} (${ current.discountPercentage}% discount)</p>
                            <p>Rating: ${ current.rating}</p>
                        </div>   
                    </td>
                    <td>
                        <h3>${ next.title}</h3>                       
                        <img src="${ next.images[0]}" alt="" width="300px" height="300px">
                        <div class="product-content">
                            <p>$${ next.price} (${ next.discountPercentage}% discount)</p>
                            <p>Rating: ${ next.rating}</p>
                        </div>         
                    </td>
                </tr>
        `
        rowsHtml += rowHtml
    }
    tableBody.innerHTML = rowsHtml
}

const fetchCat = async function() {
    const reponse = await fetch('https://dummyjson.com/products/category-list')
    let catData = await reponse.json()
    for (let index = 0; index < catData.length; index++) {
        if (index < catData.length - 1) {
            sideBar.innerHTML += `
            <div class="cat">
                <label for="${catData[index]}">${catData[index]}</label>
                <input type="checkbox" name="${catData[index]}" id="${catData[index]}">
            </div>
        `
        }
        else {
            sideBar.innerHTML += `
            <span class="cat">
                <label for="${catData[index]}">${catData[index]}</label>
                <input type="checkbox" name="${catData[index]}" id="${catData[index]}">
            </span>
        `
        }
    }
}

fetchProducts()
fetchCat()