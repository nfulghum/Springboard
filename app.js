function countDown(num) {
    let timer = setInterval(function () {
        num--;
        if (num <= 0) {
            clearInterval(num);
            console.log('Done!')
        }
        else {
            console.log(num)
        }
    }, 1000)
}

function randomGame() {
    let num;
    let timesPicked = 0;
    let timer = setInterval(function () {
        num = Math.random();
        timesPicked++;
        if (num > .75) {
            clearInterval(timer);
            console.log(timesPicked + ' attempts')
        }
    }, 1000)
}