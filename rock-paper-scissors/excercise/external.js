const p = document.createElement("p");
p.setAttribute("style", "color:red");
p.innerHTML="Hey Iam RED";
document.body.appendChild(p)

const h3 = document.createElement("h3");
h3.setAttribute("style","color:blue");
h3.innerHTML="Hey Iam blue";
document.body.appendChild(h3);

const div = document.createElement("div");
div.setAttribute("style","border:solid 2px black;background:pink;");
const h1 = document.createElement("h1");
h1.innerHTML="Iam inside the div";
div.appendChild(h1);
const p1 = document.createElement("p");
p1.textContent = "MEE TOO"
p1.setAttribute("style","padding:5px")
div.appendChild(p1);
document.body.appendChild(div);

