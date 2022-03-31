document.querySelector("#submit").addEventListener("submit", chekcforblank);

async function chekcforblank(event) {
  event.preventDefault();
  var name = document.getElementById("firstName").value;
  var username = document.getElementById("lastName").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var mobile = document.getElementById("passwordConfirm").value;

  const result = await fetch("/register", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      name,
      username,
      email,
      password,
      mobile,
    }),
  }).then((res) => res.json());

  if (result.status == "error") {
    alert(result.error);
  } else {
    alert("Success")
    window.location.href = "login.html";
  }
}


// document.querySelector("#font2").addEventListener("click", googleauth);
// async function googleauth() {
//   window.location.href = ('https://freshmenu-heroku.herokuapp.com/auth/google')
// }