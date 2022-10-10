let first = 15
let second = 255
let sum1 = first + second
let button1 = 'как дела?'
// button1 = prompt('введите чтонибудь')
document.getElementById('label1').innerHTML = sum1

label1 = document.getElementById('label1')
make_style(label1, 'green', '10rem')
label2 = document.getElementById('label2')
make_style(label2, 'green', '10rem')
label3 = document.getElementById('label3')

function make_style (node, color='red', fontsize, back_color = 'black') {
    node.style.color = color
    node.style.background = back_color
    node.style.textAlign = 'center'
    node.style.padding = '1rem'
    if (fontsize) {
        node.style.fontSize = fontsize
    }
}

label1.onclick = function () {
    make_style(label1, 'yellow', "4rem", 'blue')
    make_style(label2, 'yellow', "4rem", 'blue')
}


function ert (test){
    return `Test function ${test}`
}

btnOn = document.getElementById('btnOn')
btnOff = document.getElementById('btnOff')

btnOn.onclick = function () {
    document.getElementById('myImage').src='images/pic_bulbon.gif'
}

btnOff.onclick = () => {
    document.getElementById('myImage').src='images/pic_bulboff.gif'
}

label3.innerHTML = ert('test param')
label3.href = 'https://yandex.ru'



console.log('1243sgfsdgfsdg213421')
//alert("Hello, world" + sum)