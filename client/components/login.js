const initialLogin = `
<form onsubmit="login(this)">
  <input name="email">
  <input name="password">
  <input type="submit" value="Login">
</form>
`

// run initial load
initialLoad()

function initialLoad(){
  renderLogin()
}

function renderLogin(){
  $('#login').html(initialLogin)
}

function login(target){
  console.log(target)
  return false
}
window.login = login // expose login to dom