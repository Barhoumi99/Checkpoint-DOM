const shop = document.querySelector(".shop");
const articles = document.querySelectorAll(".article");
const addButtons = document.querySelectorAll(".add-button");
const pickedItems = document.querySelector('.picked-items');
const hearts = document.querySelectorAll('.bi-heart-fill');
const finalPrice = document.getElementById('final-price');
const purchaseButton = document.querySelector('.purchase-button')

const imgFiles = [
    "images/MK_4_Sennheiser.webp",
    "images/MK_8_Sennheiser.webp",
    "images/HD_26-sennheiser.jpg",
    "images/Transmitter_Sennheiser.webp",
    "images/mic_stand.jpg",
    "images/acoustic_panels.webp"
];
const names = [
    'Senheiser MK4 Mic',
    'Sennheiser MK8 Mic',
    'HD 26 PRO Headphones',
    'XSW IEM SR Stereo Transmitter',
    'Microphone Stand',
    'Sound proofing Panels'
];
const prices = [
    299.95,
    699.00,
    299.95,
    349.00,
    23.90,
    34.90
]
for(let i = 0; i < articles.length; i++) {
    addButtons[i].addEventListener('click', () => {
        const div = document.createElement('div');
        const img = document.createElement('img');
        const designation = document.createElement('span');
        const iX = document.createElement('i')
        const divPP = document.createElement('div')
        const divUD = document.createElement('div')
        const plus = document.createElement('i')
        const minus = document.createElement('i')
        const quantity = document.createElement('span')



        img.setAttribute('src', imgFiles[i])
        img.classList.add('mini-img')
        designation.classList.add('designation')
        designation.innerText = names[i];
        iX.classList.add('bi')
        iX.classList.add('bi-x')
        divPP.classList.add('picked-price')
        divPP.innerText = prices[i]
        divUD.classList.add('up-down')
        plus.setAttribute('class', 'bi bi-plus-square')
        minus.setAttribute('class', 'bi bi-dash-square')
        quantity.classList.add('quantity')
        quantity.innerText = 1


        pickedItems.appendChild(div);
        div.setAttribute('class', 'picked-item')
        div.appendChild(img)
        div.appendChild(designation)
        div.appendChild(iX)
        iX.addEventListener('click', () => {
            iX.parentElement.remove()
            finalPrice.innerText = parseFloat(finalPrice.innerText) - parseInt(quantity.innerText) * prices[i]
            addButtons[i].innerText = 'ADD TO CART'
            addButtons[i].disabled = false;
            addButtons[i].style.cursor = "pointer"
        })
        div.appendChild(divPP)
        div.appendChild(divUD)
        divUD.appendChild(minus)
        divUD.appendChild(quantity)
        divUD.appendChild(plus)
        minus.addEventListener('click', () => {
            if(parseInt(quantity.innerText) > 0) {
                quantity.innerText = parseInt(quantity.innerText) - 1
                finalPrice.innerText = (parseFloat(finalPrice.innerText) - prices[i]).toFixed(2)
            }
            if(quantity.innerText == 0) {
                quantity.parentElement.parentElement.remove()
                addButtons[i].innerText = 'ADD TO CART'
                addButtons[i].disabled = false;
                addButtons[i].style.cursor = "pointer"
            }
        })
        plus.addEventListener('click', () => {
            quantity.innerText = parseInt(quantity.innerText) + 1
            finalPrice.innerText = (parseFloat(finalPrice.innerText) + prices[i]).toFixed(2)
        })

        addButtons[i].innerText = 'ADDED'
        addButtons[i].disabled = true;
        addButtons[i].style.cursor = "default"
        finalPrice.innerText = (parseFloat(finalPrice.innerText) + parseFloat(prices[i])).toFixed(2)
    })
}
for (let i = 0; i < hearts.length; i++) {
    hearts[i].style.color = "rgb(80, 80, 80)"; //gray
    hearts[i].addEventListener('click', () => {
        if (hearts[i].style.color === "rgb(255, 50, 50)") { //red
            hearts[i].style.color = "rgb(80, 80, 80)"; //gray
        } else {
            hearts[i].style.color = "rgb(255, 50, 50)"; //red
        }
    })
}
purchaseButton.addEventListener('click', () => {
    if(parseFloat(finalPrice.innerText) === 0) {
        alert('Your Cart is still Empty')
    } else {
        alert('Thank you for your purchase. Please visit us again :)')
    }
})
