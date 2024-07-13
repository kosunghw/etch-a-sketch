const container = document.querySelector("#container");

for (let row = 1; row < 17; row++) {
    const div = document.createElement("div");
    div.setAttribute("id", `row${row}`);
    container.appendChild(div);
}

let row = 1;
while (row < 17) {
    for (let col = 1; col < 17; col++) {
        const parent = document.querySelector(`#row${row}`);
        const column = document.createElement("div");
        column.setAttribute("id", `col`);
        parent.appendChild(column);
    }
    row++
}

