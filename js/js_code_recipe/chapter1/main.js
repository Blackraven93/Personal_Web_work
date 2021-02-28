console.log('main.js 입니다');
let myString = '제이펍';
let currentDate = new Date();
let myFunction = () => console.log('함수 확인') // 함수 대입 가능
myFunction();

let myName = '사자';
myName = '기린';
console.log(myName);


// 변수가 숫자라면 덧셈 가능
let number1 = 10;
let number2 = 20;
let sum = number1 + number2;
console.log(sum);

// 문자열 변수의 결합
let firstName = '브렌던 ';
let lastName = '아이크';
let fullName = firstName + lastName;
console.log(fullName);

// 변수 초기화 생략(빈그릇)
let value;
console.log(value);

let a = 1, b = 2, c = 3;
console.log(a, b, c);

// 9번 파트 참조
const array1 = [1, 2, 3];
const array2 = [1, 2, 3];
console.log(array1 == array2);

const array3 = [2, 3, 4];
const array4 = array3;
console.log(array4 == array3);

// 10번 파트
c = '자바';
b = '스크립트';
c += b;
console.log(c);

// 11번 파트
function myFunction1(a, b, c = 3) {
    const result = a + b + c + 2;
    return result
}
console.log(myFunction1(5, 5));

function myFunction2(a, b) {
    // a가 100이상이라면 a를 반환
    if (a >= 100) {
        return a;
    }

    // a가 100 미만이라면 b를 반환
    return b;
}

console.log(myFunction2(10, 5)); // 100 미만
console.log(myFunction2(101, 5)); // 100 이상


// 12번 파트
const calcSum = (a, b, c) => { // 괄호 생략 가능
    const result = a + b + c;
    return result;
};

const calcSum1 = a => { // 괄호 생략 가능(파라미터 1개일 때만)
    const result = a;
    return result;
};

// 같은 식
function sameCalcSum(a, b, c) {
    const result = a + b + c;
    return result
}

console.log(calcSum(1, 2, 3), calcSum1(1), sameCalcSum(1, 2, 3));

// 14번 파트
/**
 * 파라미터의 합계를 반환하는 함수
 * @param prices
 * @returns {number}
 */

function calcSum2(...prices) {
    let result = 0;
    for (const value of prices) {
        result += value;
    }
    return result;
}

const result1 = calcSum2(10, 20);
console.log(result1);

const result2 = calcSum2(5, 10, 15);
console.log(result2);

// 15번 파트
function myPrice(a) {
    if (a < 50) {
        console.log('50보다 작습니다');
    } else if (a <= 100) {
        console.log('50보다 크고 100과 같거나 작습니다.');
    } else {
        console.log('100보다 큽니다.');
    };
}

myPrice(49);

const randomNum = Math.random() * 10;

if (randomNum >= 5) {
    console.log('난수는 5이상');
} else {
    console.log('난수는 5미만');
}

// 16번 파트
function myFruit(fruit) {
    switch (fruit) {
        case '사과':
            console.log('사과입니다.');
            break;
        case '귤':
            console.log('귤입니다.');
            break;
        default:
            console.log('기타 과일입니다.')
            break;
    }
}


// 17번 파트 0~9까지 순서대로 출력
console.log('for을 이용한 반복문')
for (let i = 0; i < 10; i++) {
    console.log(i);
}

// 18번 파트
console.log('while을 이용한 반복문')
let t = 0
while (t < 10) {
    console.log(t);
    t += 1;
}

// 19번 파트
console.log('홀수만 출력')
for (index = 0; index < 10; index++) {
    if (index % 2 === 0) {
        continue;
    } else {
        console.log(index);
    };
}