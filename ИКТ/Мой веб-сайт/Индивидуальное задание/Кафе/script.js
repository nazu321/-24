let popup = document.querySelector('.popup');
let btn = document.querySelector('.contact');

btn.addEventListener('click', () => {
    popup.classList = 'popup show'
    console.log(popup.classList);
})

btn.addEventListener('dblclick', () => {
    popup.classList = 'popup hide'
    console.log(popup.classList);
})