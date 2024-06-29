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