console.log("Hello");
let i = 10;
let numbers = [];
while (i <= 20) {
    numbers.push(i);
    i += 2;
}
console.log(numbers);
console.table(numbers);


let click_count = 0;
const btn = document.getElementById("btn");
btn.onwheel = (event) => {
    if (event.deltaY < 0) {
        click_count++;
    } else {
        click_count--;
    }
    btn.style.backgroundColor = getRandomColor();
    btn.innerText = click_count;
};
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    if (click_count == 0) {
        color = "#FFFFFF";
    }
    return color;
}

