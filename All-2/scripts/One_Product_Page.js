document.addEventListener('DOMContentLoaded', () => {
    const prod_id = localStorage.getItem('targetProduct');
    fetch(`http://dummyjson.com/products/${prod_id}`)
    .then(res => res.json())
    .then(data => {
        const productDetails1 = document.getElementById('product-details1');
        const productDetails2 = document.getElementById('product-details2');

        const productName = document.createElement('h1');
        const productDescription = document.createElement('p');
        const productRating = document.createElement('p');
        const productPrice = document.createElement('p');
        const productPri = document.createElement('p');
        

        productDetails1.src = data.thumbnail;
        
        productName.textContent = data.brand;
        productDescription.textContent = `Description: ${data.description}`;
        productRating.textContent = `Rating: ${data.rating}`;
        productPrice.textContent = `${data.price}`;
        productPri.textContent = `Price: $ ${productPrice.textContent}`;

        productDetails2.appendChild(productName);
        productDetails2.appendChild(productDescription);
        productDetails2.appendChild(productRating);
        productDetails2.appendChild(productPri);

        
        comments
        const reviews = data.reviews;

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
        addToCartButton.addEventListener('click', () => {
            localStorage.setItem('productImage', productDetails1.src);
            localStorage.setItem('productName', productName.textContent);
            localStorage.setItem('productPrice', productPrice.textContent);

            window.location.href = 'cart.html'; 
        });
    })
     .catch(error => console.error('Error:', error));
})


const hiUser = async function() {
  const logedUserId = localStorage.getItem("user_id");
  const userElement = document.getElementById("user-name")
  const loginBtn = document.getElementById("signin-button")
  if (logedUserId) {
  let resp = await fetch(`https://dummyjson.com/users/${logedUserId}`)
  let data = await resp.json()
  let fName = data.firstName
  loginBtn.textContent = `Sign Out`
  userElement.textContent = `hi, ${fName}`
  }
}


const search = function() {
  const search = document.querySelector('input[type=text]');
  const searchBotton = document.getElementById('search-button');
  searchBotton.addEventListener('click', (e) => {
    if (search) {
      localStorage.setItem('searchText', search.value)
      window.location.href = 'home.html'
    }

  })
}


hiUser()
search()