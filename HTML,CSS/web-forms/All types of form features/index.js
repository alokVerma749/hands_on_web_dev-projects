const price = document.querySelector('#price');
const output = document.querySelector('.price-output');
price.addEventListener('input', fun);
output.textContent = price.value;

function fun() {
    output.textContent = price.value;
}