const tableBody = document.getElementsByTagName('tbody')[0];
const sideBar = document.getElementById('sidebar');
const logoImage = document.getElementById('logo-image');
const signin = document.getElementById('signin-button');

const renderProducts = (products) => {
  let rowsHtml = '';
  for (let index = 0; index < products.length; index += 2) {
    const current = products[index];
    const next = products[index + 1];
    if (next !== undefined) {
      const rowHtml = `
                    <tr>
                        <td>
                            <h3>${current.title}</h3>                       
                            <img src="${current.images[0]}" alt="" width="300px" height="300px" name="${current.id}" class="productImages">
                            <div class="product-content">
                                <p>$${current.price} (${current.discountPercentage}% discount)</p>
                                <p>Rating: ${current.rating}</p>
                            </div>   
                        </td>
                        <td>
                            <h3>${next.title}</h3>                       
                            <img src="${next.images[0]}" alt="" width="300px" height="300px" name="${next.id}" class="productImages">
                            <div class="product-content">
                                <p>$${next.price} (${next.discountPercentage}% discount)</p>
                                <p>Rating: ${next.rating}</p>
                            </div>         
                        </td>
                    </tr>
            `;
      rowsHtml += rowHtml;
    } else {
      const rowHtml = `
                    <tr>
                        <td>
                            <h3>${current.title}</h3>                       
                            <img src="${current.images[0]}" alt="" width="300px" height="300px">
                            <div class="product-content">
                                <p>$${current.price} (${current.discountPercentage}% discount)</p>
                                <p>Rating: ${current.rating}</p>
                            </div>   
                        </td>
                      </tr>`;
      rowsHtml += rowHtml;
    }
  }
  tableBody.innerHTML = rowsHtml;
};

const fetchProducts = async function () {
  const response = await fetch('https://dummyjson.com/products');
  let productsData = await response.json();
  productsData = productsData.products;
  renderProducts(productsData);
};

const fetchCat = async function () {
  const reponse = await fetch('https://dummyjson.com/products/category-list');
  const catData = await reponse.json();
  for (let index = 0; index < catData.length; index++) {
    if (index < catData.length - 1) {
      sideBar.innerHTML += `
            <div class="cat">
                <label for="${catData[index]}">${catData[index]}</label>
                <input type="checkbox" name="${catData[index]}" id="${catData[index]}">
            </div>
        `;
    } else {
      sideBar.innerHTML += `
            <span class="cat">
                <label for="${catData[index]}">${catData[index]}</label>
                <input type="checkbox" name="${catData[index]}" id="${catData[index]}">
            </span>
        `;
    }
  }
};

const catFilter = async function () {
  await fetchCat();
  const catInputs = document.querySelectorAll('input[type=checkbox]');
  let productsCats = [];

  catInputs.forEach(input => {
    input.addEventListener('change', async function (e) {
      const catName = input.name;
      const response = await fetch(`https://dummyjson.com/products/category/${catName}`);
      const catData = await response.json();
      const products = catData.products;

      if (e.target.checked === true) {
        for (const product of products) {
          productsCats.push(product);
        }
      } else {
        productsCats = productsCats.filter(product => product.category !== catName);
      }
      if (productsCats.length === 0) {
        fetchProducts();
      }
      renderProducts(productsCats);
    });
  });
};

const searchFun = function () {
  const search = document.querySelector('input[type=text]');
  const searchBotton = document.getElementById('search-button');
  searchBotton.addEventListener('click', async function (e) {
    const resp = await fetch(`https://dummyjson.com/products/search?q=${search.value}`);
    const data = await resp.json();
    const products = data.products;
    renderProducts(products);
  });
};

logoImage.addEventListener('click', function () {
  window.location.href = 'home.html';
});

signin.addEventListener('click', function () {
  window.location.href = '../../Login-page/signin.html';
});

const getProduct = function () {
  tableBody.addEventListener('click', function(e) {
    if (e.target.classList[0]) {
      localStorage.setItem("targetProduct", `${e.target.name}`)
      window.open('../One-product-page/one-product.html', '_blank');
    }
  })
}

fetchProducts();
fetchCat();
catFilter();
searchFun();

getProduct()

