const container = document.querySelector("#container");

for (let row = 1; row < 17; row++) {
    for (let col = 1; col < 17; col++) {
        const div = document.createElement("div");
        div.setAttribute("id", `row${row}col${col}`);
        container.appendChild(div);
    }
}