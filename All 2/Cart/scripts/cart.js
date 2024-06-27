// document.addEventListener("DOMContentLoaded", () => {
//     const productImage = localStorage.getItem('productImage');
//     const productName = localStorage.getItem('productName');
//     const productPrice = localStorage.getItem('productPrice');
//     const idnumber = localStorage.getItem('id')

//     fetch(`https://dummyjson.com/carts/${idnumber}`)
//     .then(res => res.json())
//     .then(data => {
//         num_of_products = data.products.length;
//         for (var i = 0; i < num_of_products; i++){
//             const userprod_index = data.products[i];
//             const userprod_title = userprod_index.title; 
//             const userprod_thumbnail = userprod_index.thumbnail;
//             const userprod_price = userprod_index.price;
//             const userprod_quantity = userprod_index.quantity;


//             document.querySelector('.productImage').src = userprod_thumbnail;
//             document.querySelector('.productName').textContent = userprod_title;
//             document.querySelector('.productPrice').textContent = userprod_price;
//             document.querySelector('.totalPrice').textContent = userprod_index;

//             const cartItems = document.querySelectorAll(".cart-item");
//     const totalPriceElement = document.querySelector(".totalPrice");

//     cartItems.forEach(item => {
//         const decreaseButton = item.querySelector(".quantity-btn:first-child");
//         const increaseButton = item.querySelector(".quantity-btn:last-child");
//         const quantityNumber = item.querySelector(".quantity span");
//         const priceElement = item.querySelector(".productPrice");
//         const itemPrice = parseFloat(productPrice.replace('$', ''));

//         decreaseButton.addEventListener("click", () => {
//             let quantity = parseInt(quantityNumber.textContent);
//             if (quantity > 1) {
//                 quantity--;
//                 quantityNumber.textContent = quantity;
//                 updatePrice();
//             }
//         });

//         increaseButton.addEventListener("click", () => {
//             let quantity = parseInt(quantityNumber.textContent);
//             quantity++;
//             quantityNumber.textContent = quantity;
//             updatePrice();
//         });

//         function updatePrice() {
//             const quantity = parseInt(quantityNumber.textContent);
//             const totalItemPrice = (quantity * itemPrice).toFixed(2);
//             priceElement.textContent = `$${totalItemPrice}`;
//             updateTotalPrice();
//         }

//         function updateTotalPrice() {
//             let total = 0;
//             cartItems.forEach(item => {
//                 const quantity = parseInt(item.querySelector(".quantity span").textContent);
//                 const price = parseFloat(productPrice.replace('$', ''));
//                 total += quantity * price;
//             });
//             totalPriceElement.textContent = `$${total.toFixed(2)}`;
//         }
//     });

//     // Initial calculation
//     cartItems.forEach(item => {
//         item.querySelector(".quantity-btn:last-child").click();
//         item.querySelector(".quantity-btn:first-child").click();
//     });

//         }
//     });


//     // Retrieve data from localStorage
    
//     console.log(idnumber);
//     console.log(productPrice);

//     // Display data in the cart
//     document.querySelector('.productImage').src = productImage;
//     document.querySelector('.productName').textContent = productName;
//     document.querySelector('.productPrice').textContent = productPrice;
//     document.querySelector('.totalPrice').textContent = productPrice;

//     const cartItems = document.querySelectorAll(".cart-item");
//     const totalPriceElement = document.querySelector(".totalPrice");

//     cartItems.forEach(item => {
//         const decreaseButton = item.querySelector(".quantity-btn:first-child");
//         const increaseButton = item.querySelector(".quantity-btn:last-child");
//         const quantityNumber = item.querySelector(".quantity span");
//         const priceElement = item.querySelector(".productPrice");
//         const itemPrice = parseFloat(productPrice.replace('$', ''));

//         decreaseButton.addEventListener("click", () => {
//             let quantity = parseInt(quantityNumber.textContent);
//             if (quantity > 1) {
//                 quantity--;
//                 quantityNumber.textContent = quantity;
//                 updatePrice();
//             }
//         });

//         increaseButton.addEventListener("click", () => {
//             let quantity = parseInt(quantityNumber.textContent);
//             quantity++;
//             quantityNumber.textContent = quantity;
//             updatePrice();
//         });

//         function updatePrice() {
//             const quantity = parseInt(quantityNumber.textContent);
//             const totalItemPrice = (quantity * itemPrice).toFixed(2);
//             priceElement.textContent = `$${totalItemPrice}`;
//             updateTotalPrice();
//         }

//         function updateTotalPrice() {
//             let total = 0;
//             cartItems.forEach(item => {
//                 const quantity = parseInt(item.querySelector(".quantity span").textContent);
//                 const price = parseFloat(productPrice.replace('$', ''));
//                 total += quantity * price;
//             });
//             totalPriceElement.textContent = `$${total.toFixed(2)}`;
//         }
//     });

//     // Initial calculation
//     cartItems.forEach(item => {
//         item.querySelector(".quantity-btn:last-child").click();
//         item.querySelector(".quantity-btn:first-child").click();
//     });
// });


// document.addEventListener("DOMContentLoaded", () => {
//     const productImage = localStorage.getItem('productImage');
//     const productName = localStorage.getItem('productName');
//     const productPrice = localStorage.getItem('productPrice');
//     const idnumber = localStorage.getItem('id');

//     // Fetch cart data from the API
//     fetch(`https://dummyjson.com/carts/${idnumber}`)
//         .then(res => res.json())
//         .then(data => {
//             const cartItemsContainer = document.querySelector('.cart-container');
//             data.products.forEach(product => {
//                 const cartItem = document.createElement('div');
//                 cartItem.className = 'cart-item';
//                 cartItem.innerHTML = `
//                     <div class="product-details">
//                         <img class="productImage" src="${product.thumbnail}" alt="Product Image">
//                         <span class="productName">${product.title}</span>
//                     </div>
//                     <div class="quantity">
//                         <button class="quantity-btn">-</button>
//                         <span>${product.quantity}</span>
//                         <button class="quantity-btn">+</button>
//                     </div>
//                     <span class="productPrice">$${product.price}</span>
//                     <span class="totalPrice">$${(product.price * product.quantity).toFixed(2)}</span>
//                     <span class="del-button">&#128465;</span>
//                 `;
//                 cartItemsContainer.appendChild(cartItem);
//             });

//             const cartItems = document.querySelectorAll(".cart-item");
//             const totalPriceElement = document.querySelector(".cart-total .cart-totalPrice");

//             cartItems.forEach(item => {
//                 const decreaseButton = item.querySelector(".quantity-btn:first-child");
//                 const increaseButton = item.querySelector(".quantity-btn:last-child");
//                 const quantityNumber = item.querySelector(".quantity span");
//                 const priceElement = item.querySelector(".productPrice");
//                 const itemPrice = parseFloat(priceElement.textContent.replace('$', ''));
//                 const removeButton = item.querySelector(".del-button");

//                 decreaseButton.addEventListener("click", () => {
//                     let quantity = parseInt(quantityNumber.textContent);
//                     if (quantity > 1) {
//                         quantity--;
//                         quantityNumber.textContent = quantity;
//                         updatePrice();
//                     }
//                 });

//                 increaseButton.addEventListener("click", () => {
//                     let quantity = parseInt(quantityNumber.textContent);
//                     quantity++;
//                     quantityNumber.textContent = quantity;
//                     updatePrice();
//                 });

//                 removeButton.addEventListener("click", () => {
//                     item.remove();
//                     updateTotalPrice(x);
//                 });

//                 function updatePrice() {
//                     const quantity = parseInt(quantityNumber.textContent);
//                     const totalItemPrice = (quantity * itemPrice).toFixed(2);
//                     priceElement.nextElementSibling.textContent = `$${totalItemPrice}`;
//                     updateTotalPrice();
//                 }

//                 function updateTotalPrice() {
//                     let total = 0;
//                     cartItems.forEach(item => {
//                         const quantity = parseInt(item.querySelector(".quantity span").textContent);
//                         const price = parseFloat(item.querySelector(".productPrice").textContent.replace('$', ''));
//                         total += quantity * price;
//                     });
//                     totalPriceElement.textContent = `$${total.toFixed(2)}`;
//                 }
//             });

//             // Initial calculation
//             cartItems.forEach(item => {
//                 item.querySelector(".quantity-btn:last-child").click();
//                 item.querySelector(".quantity-btn:first-child").click();
//             });
//         })
//         .catch(error => console.error('Error:', error));

//     // Display data from localStorage if available
//     if (productImage && productName && productPrice) {
//         const cartItemsContainer = document.querySelector('.cart-container');
//         const cartItem = document.createElement('div');
//         cartItem.className = 'cart-item';
//         cartItem.innerHTML = `
//             <div class="product-details">
//                 <img class="productImage" src="${productImage}" alt="Product Image">
//                 <span class="productName">${productName}</span>
//             </div>
//             <div class="quantity">
//                 <button class="quantity-btn">-</button>
//                 <span>1</span>
//                 <button class="quantity-btn">+</button>
//             </div>
//             <span class="productPrice">$${productPrice}</span>
//             <span class="totalPrice">$${productPrice}</span>
//             <span class="del-button">&#128465;</span>
//         `;
//         cartItemsContainer.appendChild(cartItem);

//         const cartItems = document.querySelectorAll(".cart-item");
//         const totalPriceElement = document.querySelector(".cart-total .totalPrice");

//         cartItems.forEach(item => {
//             const decreaseButton = item.querySelector(".quantity-btn:first-child");
//             const increaseButton = item.querySelector(".quantity-btn:last-child");
//             const quantityNumber = item.querySelector(".quantity span");
//             const priceElement = item.querySelector(".productPrice");
//             const itemPrice = parseFloat(priceElement.textContent.replace('$', ''));
//             const removeButton = item.querySelector(".del-button");

//             decreaseButton.addEventListener("click", () => {
//                 let quantity = parseInt(quantityNumber.textContent);
//                 if (quantity > 1) {
//                     quantity--;
//                     quantityNumber.textContent = quantity;
//                     updatePrice();
//                 }
//             });

//             increaseButton.addEventListener("click", () => {
//                 let quantity = parseInt(quantityNumber.textContent);
//                 quantity++;
//                 quantityNumber.textContent = quantity;
//                 updatePrice();
//             });

//             removeButton.addEventListener("click", () => {
//                 item.remove();
//                 updateTotalPrice();
//             });

//             function updatePrice() {
//                 const quantity = parseInt(quantityNumber.textContent);
//                 const totalItemPrice = (quantity * itemPrice).toFixed(2);
//                 priceElement.nextElementSibling.textContent = `$${totalItemPrice}`;
//                 updateTotalPrice();
//             }

//             function updateTotalPrice() {
//                 let total = 0;
//                 cartItems.forEach(item => {
//                     const quantity = parseInt(item.querySelector(".quantity span").textContent);
//                     const price = parseFloat(item.querySelector(".productPrice").textContent.replace('$', ''));
//                     total += quantity * price;
//                 });
//                 totalPriceElement.textContent = `$${total.toFixed(2)}`;
//             }
//         });

//         // Initial calculation
//         cartItems.forEach(item => {
//             item.querySelector(".quantity-btn:last-child").click();
//             item.querySelector(".quantity-btn:first-child").click();
//         });
//     }
// });


document.addEventListener("DOMContentLoaded", () => {
    const productImage = localStorage.getItem('productImage');
    const productName = localStorage.getItem('productName');
    const productPrice = localStorage.getItem('productPrice');
    const idnumber = localStorage.getItem('id');

    // Fetch cart data from the API
    fetch(`https://dummyjson.com/carts/${idnumber}`)
        .then(res => res.json())
        .then(data => {
            const cartItemsContainer = document.querySelector('.cart-container');
            data.products.forEach(product => {
                const cartItem = document.createElement('div');
                cartItem.className = 'cart-item';
                cartItem.innerHTML = `
                    <div class="product-details">
                        <img class="productImage" src="${product.thumbnail}" alt="Product Image">
                        <span class="productName">${product.title}</span>
                    </div>
                    <div class="quantity">
                        <button class="quantity-btn">-</button>
                        <span>${product.quantity}</span>
                        <button class="quantity-btn">+</button>
                    </div>
                    <span class="productPrice">$${product.price}</span>
                    <span class="totalPrice">$${(product.price * product.quantity).toFixed(2)}</span>
                    <span class="del-button">&#128465;</span>
                `;
                cartItemsContainer.appendChild(cartItem);
            });

            const totalPriceElement = document.querySelector(".cart-total .cart-totalPrice");

            function updateTotalPrice() {
                let total = 0;
                const cartItems = document.querySelectorAll(".cart-item");
                cartItems.forEach(item => {
                    const quantity = parseInt(item.querySelector(".quantity span").textContent);
                    const price = parseFloat(item.querySelector(".productPrice").textContent.replace('$', ''));
                    total += quantity * price;
                });
                totalPriceElement.textContent = `$${total.toFixed(2)}`;
            }

            function addEventListeners(item) {
                const decreaseButton = item.querySelector(".quantity-btn:first-child");
                const increaseButton = item.querySelector(".quantity-btn:last-child");
                const quantityNumber = item.querySelector(".quantity span");
                const priceElement = item.querySelector(".productPrice");
                const itemPrice = parseFloat(priceElement.textContent.replace('$', ''));
                const removeButton = item.querySelector(".del-button");

                decreaseButton.addEventListener("click", () => {
                    let quantity = parseInt(quantityNumber.textContent);
                    if (quantity > 1) {
                        quantity--;
                        quantityNumber.textContent = quantity;
                        updatePrice();
                    }
                });

                increaseButton.addEventListener("click", () => {
                    let quantity = parseInt(quantityNumber.textContent);
                    quantity++;
                    quantityNumber.textContent = quantity;
                    updatePrice();
                });

                removeButton.addEventListener("click", () => {
                    item.remove();
                    updateTotalPrice();
                });

                function updatePrice() {
                    const quantity = parseInt(quantityNumber.textContent);
                    const totalItemPrice = (quantity * itemPrice).toFixed(2);
                    priceElement.nextElementSibling.textContent = `$${totalItemPrice}`;
                    updateTotalPrice();
                }
            }

            // Add event listeners to each cart item
            document.querySelectorAll(".cart-item").forEach(item => addEventListeners(item));

            // Initial calculation
            updateTotalPrice();
        })
        .catch(error => console.error('Error:', error));

    // Display data from localStorage if available
    if (productImage && productName && productPrice) {
        const cartItemsContainer = document.querySelector('.cart-container');
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <div class="product-details">
                <img class="productImage" src="${productImage}" alt="Product Image">
                <span class="productName">${productName}</span>
            </div>
            <div class="quantity">
                <button class="quantity-btn">-</button>
                <span>1</span>
                <button class="quantity-btn">+</button>
            </div>
            <span class="productPrice">$${productPrice}</span>
            <span class="totalPrice">$${productPrice}</span>
            <span class="del-button">&#128465;</span>
        `;
        cartItemsContainer.appendChild(cartItem);

        const totalPriceElement = document.querySelector(".cart-total .cart-totalPrice");

        function updateTotalPrice() {
            let total = 0;
            const cartItems = document.querySelectorAll(".cart-item");
            cartItems.forEach(item => {
                const quantity = parseInt(item.querySelector(".quantity span").textContent);
                const price = parseFloat(item.querySelector(".productPrice").textContent.replace('$', ''));
                total += quantity * price;
            });
            totalPriceElement.textContent = `$${total.toFixed(2)}`;
        }

        function addEventListeners(item) {
            const decreaseButton = item.querySelector(".quantity-btn:first-child");
            const increaseButton = item.querySelector(".quantity-btn:last-child");
            const quantityNumber = item.querySelector(".quantity span");
            const priceElement = item.querySelector(".productPrice");
            const itemPrice = parseFloat(priceElement.textContent.replace('$', ''));
            const removeButton = item.querySelector(".del-button");

            decreaseButton.addEventListener("click", () => {
                let quantity = parseInt(quantityNumber.textContent);
                if (quantity > 1) {
                    quantity--;
                    quantityNumber.textContent = quantity;
                    updatePrice();
                }
            });

            increaseButton.addEventListener("click", () => {
                let quantity = parseInt(quantityNumber.textContent);
                quantity++;
                quantityNumber.textContent = quantity;
                updatePrice();
            });

            removeButton.addEventListener("click", () => {
                item.remove();
                updateTotalPrice();
            });

            function updatePrice() {
                const quantity = parseInt(quantityNumber.textContent);
                const totalItemPrice = (quantity * itemPrice).toFixed(2);
                priceElement.nextElementSibling.textContent = `$${totalItemPrice}`;
                updateTotalPrice();
            }
        }

        // Add event listeners to the cart item from localStorage
        addEventListeners(cartItem);

        // Initial calculation
        updateTotalPrice();
    }
});

