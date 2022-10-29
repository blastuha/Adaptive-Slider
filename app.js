const images = document.querySelectorAll('.slider .slider-line img')
const sliderLine = document.querySelector('.slider-line')
let count = 0
let width
const nextBtn = document.querySelector('.next')
const prevBtn = document.querySelector('.prev')

function init() {
    console.log('resize')
    // узнаем ширину .slider
    width = document.querySelector('.slider').offsetWidth 
    // ширина sliderLine = длинне коллеции sliderLine
    sliderLine.style.with = width * images.length + 'px'
    // ширину изображения делаем = ширине изображения слайдера
    images.forEach( item => {
        item.style.width = width + 'px'
        // сохраняем пропорции изображений через высоту
        item.style.height = 'auto'
    })
    rollSlider()
}

// при изменении размера события, вызывается фун. init
window.addEventListener('resize', init)

init()

nextBtn.addEventListener('click', function(){
    count++
    if (count >= images.length) {
        count = 0
    }
    rollSlider()
})

prevBtn.addEventListener('click', function(){
    count--
    if (count < 0) {
        count = images.length -1
    }
    rollSlider()
})

//функция, отвещающая за рисование смещения
function rollSlider() {
    sliderLine.style.transform = 'translate(-' + count * width + 'px)'
} 