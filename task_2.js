

//შექმენი შემდეგი სტრუქტურა JS-ის გამოყენებით და დაამატეთ DOM-ში:
// <div id="card">
// <h2> Vaniko </h2>
// <a href="#"> Go to Profile </a>
// </div>

const body = document.getElementsByTagName("body")

const div = document.createElement("div")
document.body.appendChild(div)
div.setAttribute("id", "card")

const h2 = document.createElement("h2")
div.appendChild(h2)

h2.innerHTML = "Vaniko"

const a = document.createElement("a")
div.appendChild(a)
a.innerHTML = "Go to Profile"
a.setAttribute("href", "#")



