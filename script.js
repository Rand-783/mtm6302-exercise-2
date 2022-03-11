const $content= document.getElementById('content')
const $popup= document.getElementById('popup')

const images = [
    'flower1jpg',
    'flower2',
    'flower3',
    'flower4',
    'flower5',
    'flower6',
    'flower7',
    'flower8',
    'flower9',
    'flower10',
    'flower11',
    'flower12',
]

for (let i = 0; i < 12; i++){
    $content.innerHTML += `<img src='images/${images[i]}.jpg'>`
}

$content.addEventListener('click', function(e){
    if(e.target.tagName == 'IMG') { 
    $popup.innerHTML = `<img src=${e.target.getAttribute('src')}
    >`
    $popup.classList.remove('hide')
}})

$popup.addEventListener('click', function () {
    $popup.classList.add('hide')

})