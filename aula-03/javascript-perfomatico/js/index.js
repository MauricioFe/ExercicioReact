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
    // ul.innerHTML ="";

    // let lis ='';
    // clickArray.map(item=>{
    //     lis += `<li>${item}</li>`;
    // });
    // ul.innerHTML = lis;
    document.title = clickArray.length;
}