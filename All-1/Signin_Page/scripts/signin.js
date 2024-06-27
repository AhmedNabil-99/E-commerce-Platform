//     // _________________________Inputs___________________________________
// var textInput = document.querySelector('input[type="text"]');
// var passInput = document.querySelector('input[type="password"]');

// // _________________________Errors___________________________________
// var textErr = document.querySelector("#username-err");
// var passwordErr = document.querySelector("#password-err");

// // _________________________Patterns___________________________________
// var txtPattern = /^[a-zA-Z]/;
// var passPattern = /^[a-zA-Z]/;

// var form = document.querySelector("form");

// // Validate input function
// function validateInput(input, pattern, errorElement) {
//     if (!input.value.match(pattern)) {
//         errorElement.style.display = "block";
//         input.focus();
//         input.select();
//         return false;
//     } else {
//         errorElement.style.display = "none";
//         return true;
//     }
// }

// textInput.addEventListener("blur", function () {
//     validateInput(textInput, txtPattern, textErr);
// });

// passInput.addEventListener("blur", function () {
//     validateInput(passInput, passPattern, passwordErr);
// });

// // Form submit event listener
// form.addEventListener("submit", function (e) {
//     e.preventDefault(); // Prevent form submission

//     var valid = true;

//     if (!validateInput(textInput, txtPattern, textErr)) {
//         valid = false;
//     }
//     if (!validateInput(passInput, passPattern, passwordErr)) {
//         valid = false;
//     }

//     if (valid) {
//         fetch('http://dummyjson.com/users')
//             .then(res => res.json())
//             .then(data => {
//                 const users = data.users;
//                 const username = textInput.value;
//                 const password = passInput.value;

//                 const user = users.find(user => user.username === username && user.password === password);

//                 if (user) {
//                     textErr.style.display = "none";
//                     passwordErr.style.display = "none";
//                     alert("Login Successful")
//                     // console.log('Login successful');
//                 } else {
//                     textErr.style.display = "none";
//                     passwordErr.style.display = "block";
//                     passwordErr.textContent = "Invalid username or password";
//                 }
//             })
//             .catch(error => console.error('Error:', error));
//     }
// });

// _________________________Inputs___________________________________
var textInput = document.querySelector('input[type="text"]');
var passInput = document.querySelector('input[type="password"]');

// _________________________Errors___________________________________
var textErr = document.querySelector("#username-err");
var passwordErr = document.querySelector("#password-err");

// _________________________Patterns___________________________________
var txtPattern = /^[a-zA-Z]/;
var passPattern = /^[a-zA-Z]/;

var form = document.querySelector("form");

// Validate input function
function validateInput(input, pattern, errorElement) {
    if (!input.value.match(pattern)) {
        errorElement.style.display = "block";
        input.focus();
        input.select();
        return false;
    } else {
        errorElement.style.display = "none";
        return true;
    }
}

textInput.addEventListener("blur", function () {
    validateInput(textInput, txtPattern, textErr);
});

passInput.addEventListener("blur", function () {
    validateInput(passInput, passPattern, passwordErr);
});

// Form submit event listener
form.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent form submission

    var valid = true;

    if (!validateInput(textInput, txtPattern, textErr)) {
        valid = false;
    }
    if (!validateInput(passInput, passPattern, passwordErr)) {
        valid = false;
    }

    if (valid) {
        const username = textInput.value;
        const password = passInput.value;

        fetch('https://dummyjson.com/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                username: username,
                password: password
            })
        })
        .then(res => res.json())
        .then(data => {
            console.log(data.id);
            if (data.token) {
                textErr.style.display = "none";
                passwordErr.style.display = "none";
                localStorage.setItem('user_id', data.id);
                alert("Login Successful");
                window.location.href = '../home-page/home.html'; 
            } else {
                passwordErr.style.display = "block";
                passwordErr.textContent = "Invalid username or password";
            }
        })
        .catch(error => console.error('Error:', error));
    }
});
