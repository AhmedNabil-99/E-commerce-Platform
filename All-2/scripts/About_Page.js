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
  
  
hiUser()