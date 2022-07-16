
let cl = console.log


let imgOut = document.querySelector('.new-slider')

let count = 0
let index = 0

//cl(imgOut.children[count].style.zIndex = count)

const slide = function() { setInterval(() => {
    (count>2)?count=0:count;
    (index>2)?index=0:index;
    imgOut.children[0].style.zIndex = 0
    imgOut.children[1].style.zIndex = 0
    imgOut.children[2].style.zIndex = 0
    index++
    imgOut.children[count].style.zIndex = index
    count++
}, 2000);}

slide()
