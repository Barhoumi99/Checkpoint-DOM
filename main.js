const shop = document.querySelector(".shop");
const articles = document.querySelectorAll(".article");
const addButtons = document.querySelectorAll(".add-button");
const pickedItems = document.querySelector('.picked-items');
const hearts = document.querySelectorAll('.bi-heart-fill');

//-----------------------------------

const div = document.createElement('div');
//-----------------------------------

function createItem(_class, name) {
    let item = document.createElement('div');
    item.innerHTML = `<div class=${_class} name=${name}>item</div>`;
    return item;
};

// function toggleColor(color) {
//     if (color == '#505050') {
//         color = '#ff3232';
//     } else {
//         color = '#505050';
//     }
// }
//-----------------------------------

for (let i = 0; i < hearts.length; i++) {
    hearts[i].style.color = "rgb(80, 80, 80)"; //gray
    hearts[i].addEventListener('click', () => {

        if (hearts[i].style.color === "rgb(255, 50, 50)") { //red
            console.log(hearts[i].style.color)
            hearts[i].style.color = "rgb(80, 80, 80)"; //gray
        } else { //gray
            hearts[i].style.color = "rgb(255, 50, 50)"; //red
        }
    })
}