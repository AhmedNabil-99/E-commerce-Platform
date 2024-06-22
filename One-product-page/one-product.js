fetch('http://dummyjson.com/products/15')
.then(res => res.json())
.then(data => {
    console.log(data);
    const productDetails1 = document.getElementById('product-details1');
    const productDetails2 = document.getElementById('product-details2');
    const productDetails3 = document.getElementById('product-details3');
    const productDetails4 = document.getElementById('product-details4');
    const productImage = document.createElement('img');
    const productName = document.createElement('p');
    const productDescription = document.createElement('p');
    const productRating = document.createElement('div');

    productImage.src = data.thumbnail;
    productImage.alt = data.title;
    productName.textContent = data.brand;
    productDescription.textContent = `Description: ${data.description}`;
    productRating.textContent = `Rating: ${data.rating}`;

    productDetails1.appendChild(productImage);
    productDetails2.appendChild(productName);
    productDetails3.appendChild(productDescription);
    productDetails4.appendChild(productRating);
    

    document.getElementById('loading').style.display = 'none';
    document.querySelector('.product-container').style.display = 'block';
})
.catch(error => console.error('Error:', error));

