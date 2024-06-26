let currentProduct = localStorage.getItem("targetProduct")

fetch(`http://dummyjson.com/products/${currentProduct}`)
.then(res => res.json())
.then(data => {
    console.log(data);
    const productDetails1 = document.getElementById('product-details1');
    const productDetails2 = document.getElementById('product-details2');
    // const productDetails1 = document.getElementById('product-details3');
    // const productDetails1 = document.getElementById('product-details4');
    // const productDetails1 = document.getElementById('product-details5');

    const productImage = document.createElement('img');
    const productName = document.createElement('p');
    const productDescription = document.createElement('p');
    const productRating = document.createElement('p');
    const productPrice = document.createElement('p');

    // the img
    productImage.src = data.thumbnail;
    // productImage.alt = data.title;
    // the name
    productName.textContent = data.brand;
    // the Description
    productDescription.textContent = `Description: ${data.description}`;
    // the rating
    productRating.textContent = `Rating: ${data.rating}`;
    productPrice.textContent = `Price: $${data.price}`;

    productDetails1.appendChild(productImage);
    productDetails2.appendChild(productName);
    productDetails2.appendChild(productDescription);
    productDetails2.appendChild(productRating);
    productDetails2.appendChild(productPrice);
    

    document.getElementById('loading').style.display = 'none';
    document.querySelector('.product-container').style.display = 'block';
})
.catch(error => console.error('Error:', error));
