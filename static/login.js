
document
.querySelector("#loginForm")
.addEventListener("submit", chekcforblank);

async function chekcforblank(event) {
event.preventDefault();
var username = document.getElementById("username").value;
var password = document.getElementById("password").value;

const result = await fetch("/login", {
    method: "POST",
    headers: {
        "content-type": "application/json",
    },
    body: JSON.stringify({
        username,
        password,
    }),
}).then((res) => res.json());

if (result.status === "ok") {
    window.location.href = "index.html";
}
if (result.status === "error") {
    alert(result.error);
}
}