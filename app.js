let count = 1
let newgame = document.getElementById('new-btn')
newgame.addEventListener('click', () => reset())

let won = document.getElementById('won')


function myFun(data) {
    if (count <= 9) {
        if (count % 2 == 0) {
            document.getElementById(data.id).innerHTML = "x"
        }
        else {
            document.getElementById(data.id).innerHTML = "o"
        }
        count++;
        if (winner()) {
            // alert('you are winner')
            won.style.marginTop = '20vh'

        }
    }
    else {
        alert('match drawn')
        reset()
    }
}
function winner() {
    if (check('div1', 'div2', 'div3') || check('div4', 'div5', 'div6') || check('div7', 'div8', 'div9') || check('div1', 'div4', 'div7') || check('div2', 'div5', 'div8') || check('div3', 'div6', 'div9') || check('div1', 'div5', 'div9') || check('div1', 'div4', 'div7') || check('div2', 'div5', 'div8') || check('div3', 'div6', 'div9') || check('div1', 'div5', 'div9') || check('div1', 'div4', 'div7') || check('div2', 'div5', 'div8') || check('div3', 'div6', 'div9') || check('div1', 'div5', 'div9') || check('div1', 'div4', 'div7') || check('div2', 'div5', 'div8') || check('div3', 'div6', 'div9') || check('div1', 'div5', 'div9') || check('div3', 'div5', 'div7')) {
        return true
    }
}

function check(div1, div2, div3) {
    if (document.getElementById(div1).innerHTML != '' &&
        document.getElementById(div2).innerHTML != '' &&
        document.getElementById(div3).innerHTML != '' &&
        document.getElementById(div1).innerHTML == document.getElementById(div2).innerHTML &&
        document.getElementById(div2).innerHTML == document.getElementById(div3).innerHTML) {
        return true;
    }
}
function reset() {
    location.reload()
}