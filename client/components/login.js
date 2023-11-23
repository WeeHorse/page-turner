export default function init(){
  return `
    <form onsubmit="login(); return false">
      <input name="email">
      <input name="password">
      <input type="submit" value="Login">
    </form>
  `
}

async function login(){
  const data = {
    email: $('[name=email]').val(),
    password: $('[name=password]').val()
  }
  const response = await fetch('/api/login', {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  })
  console.log(response)
  const result = await response.json()
  console.log(result)
  if(result.loggedIn){
    $('#login').html(`<button onclick="logout()">Logout</button>`)
  }
}

window.login = login // expose login to dom


async function logout(){
  let response = await fetch('/api/login', {
    method: 'delete'
  })
  let result = await response.json()
  console.log(result)
  if(!result.loggedIn){
    $('#login').html(init())
  }
}

window.logout = logout // expose logout to 

async function checkLogin(){
  let response = await fetch('/api/login')
  let result = await response.json()
  console.log(result)
  if(result.loggedIn){
    $('#login').html(`<button onclick="logout()">Logout</button>`)
  }
}
checkLogin() // call on load to see if we are already logged in