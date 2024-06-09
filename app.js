const result = document.getElementById('result');
const calcu = document.getElementById('calcu');
const nums = document.querySelectorAll('.num');
const plus = document.getElementById('plus');
const minus = document.getElementById('minus');
const multip = document.getElementById('multip');
const divide = document.getElementById('divide');
const plusminus = document.getElementById('plusminus');
const percent = document.getElementById('percent');
const point = document.getElementById('point');
const c = document.getElementById('c');
const ac = document.getElementById('ac');
const equal = document.getElementById('equal');

let way = '0';
const numarr = [];
let pushnum = 0;

const numsize = () => {
    if (result.textContent.length >= 12) {
        result.style.fontSize = '20px';
        result.style.padding = '23px 30px';
    }
}

// 数字のボタンを押したとき
for (let num of nums) {
    num.addEventListener('click', () => {
        numsize();
        if (result.textContent.length >= 26) {
            addEventListener(alert('あいうえお'));
        } else if (result.textContent === '0' && num.textContent === '0') {
        } else if (result.textContent === '0') {
            result.textContent = num.textContent;
            way = num.textContent;
            pushnum = num.textContent;
        } else {
            result.textContent += num.textContent;
            way += num.textContent;
            pushnum += num.textContent;
        }
    });
}

const funbtn = (s, mark) => {
    s.addEventListener('click', () => {
        numsize();
        if (['+', 'ー', '×', '÷'].includes(result.textContent[result.textContent.length - 1])) {
            alert('無効な数式です');
        } else {
            way += mark;
            result.textContent += s.textContent;
            numarr.push(pushnum);
            numarr = '';
            console.log(numarr);
        }
    });
}

funbtn(plus, '+');
funbtn(minus, '-');
funbtn(multip, '*');
funbtn(divide, '/');

percent.addEventListener('click', () => {
    numsize();
    if (result.textContent === 0) return;
    way += '*(1/100)';
    result.textContent += percent.textContent;
})

plusminus.addEventListener('click', () => {
    if (result.textContent === '0') return;
    // if (result.textContent[0] === '-') {
    //     result.textContent = result.textContent.slice(1, result.textContent.length);
    // } else {
    //     result.textContent = '-' + result.textContent;
    // }
    way += '*(-1)';
    result.textContent += '×(-1)';
});

point.addEventListener('click', () => {
    if(result.textContent.includes('.')) {
        alert('無効な数式です');
    } else {
        way += '.';
        result.textContent += '.';
    }
})

c.addEventListener('click', () => {
    if (result.textContent.length === 1) {
        way = '0';
        result.textContent = '0';
    } else {
        way = way.slice(0, -1);
        result.textContent = result.textContent.slice(0, -1);
    }
});


ac.addEventListener('click', () => {
    result.textContent = '0';
    result.style.fontSize = '40px';
    result.style.padding = '10px 30px';
    way = '0';
});


equal.addEventListener('click', () => {
    result.textContent = String(eval(way));
    way = String(eval(way));
});
