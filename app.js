const result = document.getElementById('result');
const calcu = document.getElementById('calcu');
const nums = document.querySelectorAll('.num');
const plus = document.getElementById('plus');
const minus = document.getElementById('minus');
const multip = document.getElementById('multip');
const divide = document.getElementById('divide');
const plusminus = document.getElementById('plusminus');
const percent = document.getElementById('percent');
const c = document.getElementById('c');
const ac = document.getElementById('ac');
const equal = document.getElementById('equal');

let way = '';

// 数字のボタンを押したとき
for (let num of nums) {
    num.addEventListener('click', () => {
        if (result.textContent.length >= 26) {
            addEventListener(alert('あいうえお'));
        } else if (result.textContent === '0' && num.textContent === '0') {
        } else if (result.textContent === '0') {
            result.textContent = num.textContent;
            way += num.textContent;
        } else {
            result.textContent += num.textContent;
            way += num.textContent;
        }
    });
}

const funbtn = (s, mark) => {
    s.addEventListener('click', () => {
        if (['+', 'ー', '×', '÷'].includes(result.textContent[result.textContent.length - 1])) {
            alert('無効な数式です');
        } else {
            way += mark;
            result.textContent += s.textContent;
        }
    })
}

funbtn(plus, '+');
funbtn(minus, '-');
funbtn(multip, '*');
funbtn(divide, '/');
funbtn(percent, '*(1/100)');

plusminus.addEventListener('click', () => {
    if(result.textContent === '0') return;
    if(result.textContent[0] === '-') {
        result.textContent = result.textContent.slice(1, result.textContent.length);
    } else {
        result.textContent = '-' + result.textContent;
    }
    way += '*(-1)';
});


c.addEventListener('click', () => {
    way = way.slice(0, -1);
    result.textContent = result.textContent.slice(0, -1);
});


ac.addEventListener('click', () => {
    result.textContent = '0';
    way = '';
});


equal.addEventListener('click', () => {
    result.textContent = String(eval(way));
    way = String(eval(way));
});
