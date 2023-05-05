
const form = document.querySelector("form");
const username = document.getElementById("username");
const password = document.querySelector("#password");

function login(e){
  e.preventDefault();
  console.log("hit login function");

  const body = {
    username: username.value,
    password: password.value
  };

  axios.post("http://localhost:4040/login", body).then((result) => {
    console.log(result.data);
    alert(result.data);
    // dom manipulation
  }).catch(err => console.log(err));


}

form.addEventListener("submit", login);