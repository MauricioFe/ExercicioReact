window.addEventListener('load', start);
const clickArray = [];
function start() {
    const button = document.querySelector('#clickButton');
    button.addEventListener('click', handleButtonClick);
}
let item = '';
function handleButtonClick() {
    item = getNewTimestamp();
    clickArray.push(item);
    render();
}

function render() {
    const ul = document.querySelector('#data');
    const li = document.createElement('li');
    li.textContent = item;
    ul.appendChild(li)
    document.title = clickArray.length;
}