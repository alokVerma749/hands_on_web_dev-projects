const goodBtn = document.querySelector("#good");
const cheapBtn = document.querySelector("#cheap");
const fastBtn = document.querySelector("#fast");

let arr = [];
let i = 1;
function handleClick(btn) {
    if (btn.value === "off") {
        if (i === 4) {
            i = 1;
            arr.splice(0, arr.length - 1)
        }
        arr.push(btn.name);
        i++;
    }
    if (btn.value === "off") {
        btn.value = "on";
        btn.checked = true;
    } else if (btn.value === "on") {
        btn.value = "off";
        btn.checked = false;
    }
    setTimeout(interactivity, 400)
}

function interactivity() {
    if ((arr[arr.length - 1] === "cheap")) {
        if ((fastBtn.checked) && (cheapBtn.checked)) {
            goodBtn.value = "off";
            goodBtn.checked = false;
            arr.splice(0, arr.length);
        }
    }
    else if ((arr[arr.length - 1] === "fast")) {
        if ((goodBtn.checked) && (fastBtn.checked)) {
            cheapBtn.value = "off";
            cheapBtn.checked = false;
            arr.splice(0, arr.length);
        }
    }
    else {
        cheapBtn.value = "off";
        cheapBtn.checked = false;
    }
}