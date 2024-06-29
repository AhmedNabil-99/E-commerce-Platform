const logedUser = localStorage.getItem("user_id")

document.addEventListener('DOMContentLoaded', () => {
    fetch(`https://dummyjson.com/users/${logedUser}`)
    .then(res => res.json())
    .then(data => {
        document.getElementById('firstName').textContent = data.firstName;
        document.getElementById('lastName').textContent = data.lastName;
        document.getElementById('birthDate').textContent = data.birthDate;
        document.getElementById('age').textContent = data.age;
        document.getElementById('gender').textContent = data.gender;
        document.getElementById('phone').textContent = data.phone;
        document.getElementById('email').textContent = data.email;
        document.getElementById('state').textContent = data.address.state;
        document.getElementById('country').textContent = data.address.state;
        document.getElementById('city').textContent = data.address.city;
        document.getElementById('address').textContent = data.address.address;
        document.getElementById('postalCode').textContent = data.address.postalCode;
    })
    .catch(error => console.error('Error:', error));
});
