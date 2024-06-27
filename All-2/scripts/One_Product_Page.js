document.addEventListener('DOMContentLoaded', () => {
    const prod_id = localStorage.getItem('targetProduct');
    fetch(`http://dummyjson.com/products/${prod_id}`)
    .then(res => res.json())
    .then(data => {
        console.log(data);
        console.log(data.images);
        const productDetails1 = document.getElementById('product-details1');
        const productDetails2 = document.getElementById('product-details2');

        const productName = document.createElement('h1');
        const productDescription = document.createElement('p');
        const productRating = document.createElement('p');
        const productPrice = document.createElement('p');
        const productPri = document.createElement('p');
        

        // the img
        productDetails1.src = data.thumbnail;
        
        // the name
        productName.textContent = data.brand;
        // the Description
        productDescription.textContent = `Description: ${data.description}`;
        // the rating
        productRating.textContent = `Rating: ${data.rating}`;
        productPrice.textContent = `${data.price}`;
        productPri.textContent = `Price: $ ${productPrice.textContent}`;

        productDetails2.appendChild(productName);
        productDetails2.appendChild(productDescription);
        productDetails2.appendChild(productRating);
        productDetails2.appendChild(productPri);

        // document.getElementById('loading').style.display = 'none';
        // document.querySelector('.product-container').style.display = 'block';
        
        comments
        const reviews = data.reviews;
        console.log(reviews[1].reviewerName);

        const commentsSection = document.getElementById('comments');

        for (let i = 0; i < reviews.length; i++) {
            const reviewContainer = document.createElement('div');
            reviewContainer.classList.add('review-container');

            
            const na = document.createElement('p');
            na.textContent = "Name: " + reviews[i].reviewerName;
            reviewContainer.appendChild(na);

            const da = document.createElement('p');
            da.textContent = "Date: " + reviews[i].date;
            reviewContainer.appendChild(da);

            const ra = document.createElement('p');
            ra.textContent = "Rating: " + reviews[i].rating;
            reviewContainer.appendChild(ra);

            const co = document.createElement('p');
            co.textContent = "Comment: " + reviews[i].comment;
            reviewContainer.appendChild(co);

            commentsSection.appendChild(reviewContainer);
        }

        

        const addToCartButton = document.querySelector('.add-to-cart');
        // Add a click event listener to the button
        addToCartButton.addEventListener('click', () => {
            // Collect data from the current HTML page
            // Store data in localStorage
            localStorage.setItem('productImage', productDetails1.src);
            localStorage.setItem('productName', productName.textContent);
            localStorage.setItem('productPrice', productPrice.textContent);

            // Redirect to another HTML page
            window.location.href = 'cart.html'; 
        });
    })
     .catch(error => console.error('Error:', error));
})
