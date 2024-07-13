const container = document.querySelector("#container");
const btn = document.querySelector("button");

makeGrid(16);
sketch();

btn.addEventListener("click", () => {
    let size = prompt("Enter the grid size (Maximum: 100)", "16");
    if (size != null) {
        container.innerHTML='';
        makeGrid(+size);
        sketch();
    }
})

function makeGrid(size) {

    for (let row = 1; row < size + 1; row++) {
        const div = document.createElement("div");
        div.setAttribute("id", `row${row}`);
        container.appendChild(div);
    }
    let row = 1;
    while (row < size+1) {
        for (let col = 1; col < size+1; col++) {
            const parent = document.querySelector(`#row${row}`);
            const column = document.createElement("div");
            column.setAttribute("id", `col`);
            parent.appendChild(column);
        }
        row++
    }
}

function entered(e) {
    e.target.classList.add("entered");
}

function sketch() {
    let pixels = document.querySelectorAll("#col");
    for (const pixel of pixels) {
        pixel.addEventListener("mouseenter", entered);
    }
}



