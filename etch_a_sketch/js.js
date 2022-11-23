// const container = document.getElementById('container');
// const sub_container = document.createElement("div");
// sub_container.id = "sub_container"
// container.appendChild(sub_container)


// const pix = document.createElement("div");
// pix.className = "pix";
// sub_container.appendChild(pix);

const container = document.getElementById("container");

function makeRows(rows, cols) {
container.style.setProperty('--grid-rows', rows);
container.style.setProperty('--grid-cols', cols);
for (c = 0; c < (rows * cols); c++) {
let cell = document.createElement("div");
cell.innerText = (c + 1);
container.appendChild(cell).className = "grid-item";
}
let select_divs = container.querySelectorAll('div')
select_divs.forEach(y => y.addEventListener('mouseover',colorChange))
}

makeRows(10, 10);

let color_input = document.getElementById('color_input').value;
console.log(color_input)
let x = document.getElementsByClassName('grid-item');

function colorChange(){
    this.style.background = color_input;
}
for (let i = 0; i < x.length; i++){
    x[i].addEventListener('mouseover',colorChange)
}


