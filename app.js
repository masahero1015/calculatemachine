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
let numarr = ['0'];

// 文字の大きさを変更
const numsize = () => {
    if (result.textContent.length < 12) {
        result.style.fontSize = '40px';
        result.style.padding = '10px 30px';
    }
    if (result.textContent.length >= 12) {
        result.style.fontSize = '20px';
        result.style.padding = '23px 30px';
    }
}

// 式の最大の長さ
const numMax = () => {
    if (result.textContent.length >= 25) {
        addEventListener(alert('これ以上は計算できません'));
        return;
    }
}


// 最後が四則演算マークだった場合の条件式の更新
const updateMark = () => {
    arrMinusOne = numarr.length - 1;
    lastNum = numarr[arrMinusOne];
    lastMark = lastNum === '+' || lastNum === 'ー' || lastNum === '×' || lastNum === '÷';
}

// 式の表示
const display = () => {
    result.textContent = '';
    for (let i = 0; i <= numarr.length - 1; i++) {
        result.textContent += numarr[i];
    }
}

// 数字のボタンを押したとき
for (let num of nums) {
    num.addEventListener('click', () => {
        numMax();
        updateMark();
        if (lastNum.includes('%')) {
            alert('無効な数式です');
            return;
        }
        if (lastMark) {
            numarr.push(num.textContent);
            way += num.textContent;
        } else if (lastNum === '0') {
            numarr[arrMinusOne] = num.textContent;
            way = num.textContent;
        } else {
            numarr[arrMinusOne] += num.textContent;
            way += num.textContent;
        }
        display();
        numsize();
    });
}

// 四則演算のボタンを押したとき
const funbtn = (sym, mark) => {
    sym.addEventListener('click', () => {
        updateMark();
        if (lastMark) {
            alert('無効な数式です');
        } else {
            way += mark;
            numarr.push(sym.textContent);
        }
        display();
        numsize();
    });
}

funbtn(plus, '+');
funbtn(minus, '-');
funbtn(multip, '*');
funbtn(divide, '/');

// %のボタンを押したとき
percent.addEventListener('click', () => {
    updateMark();
    if (numarr.length === 1 && numarr[0] === '0') return;
    way += '*(1/100)';
    lastNum += '%';
    display();
    numsize();
});

// ±のボタンを押したとき
plusminus.addEventListener('click', () => {
    if (result.textContent === '0') return;
    way += '*(-1)';
    if (numarr[arrMinusOne].startsWith('(-') && numarr[arrMinusOne].endsWith(')')) {
        numarr[arrMinusOne] = numarr[arrMinusOne].slice(2, -1);
    } else {
        numarr[arrMinusOne] = `(-${numarr[arrMinusOne]})`;
    }
    display();
    numsize();
});

// 小数点のボタンを押したとき
point.addEventListener('click', () => {
    updateMark();
    if (lastNum.includes('.') || lastMark) {
        alert('無効な数式です');
    } else {
        way += '.';
        numarr[arrMinusOne] += '.';
    }
    display();
    numsize();
})

// cのボタンを押したとき
c.addEventListener('click', () => {
    updateMark();
    if (numarr.length === 1 && numarr[0] === '0') return;
    if (numarr.length === 1 && numarr[0].length === 1) {
        way = '0';
        numarr.length = 1;
        numarr[0] = '0'
    } else {
        way = way.slice(0, -1);
        numarr[arrMinusOne] = numarr[arrMinusOne].slice(0, -1);
    }
    if (numarr[arrMinusOne] === '') {
        numarr.length--;
    }
    display();
    numsize();
});

// acのボタンを押したとき
ac.addEventListener('click', () => {
    result.textContent = '0';
    way = '0';
    numarr = ['0'];
    numsize();
});

// =のぼたんを押したとき
equal.addEventListener('click', () => {
    updateMark();
    if (lastMark) {
        alert('無効な数式です');
        return;
    }
    result.textContent = String(eval(way));
    way = String(eval(way));
    numarr.length = 1;
    numarr[0] = result.textContent;
    numsize();
});
