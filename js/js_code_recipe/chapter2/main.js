// 20번 파트
const isIos = navigator.userAgent.includes('iPhone');

if (isIos) {
    console.log('you are iphone user');
} else {
    console.log("you aren't iphone user");
}

console.log(!!'yep');

// 23번 파트
/* 직사각형 */
const rectangle = document.querySelector('.rectangle');


/* 버튼을 누를 때마다 그라데이션 색상을 변경 */
function onClickButton() {
    // 0~359 사이 임의의 수를 가져오기
    const randomHue = Math.trunc(Math.random() * 360);
    // 그라데이션의 시작과 끝 색상을 결정
    const randomColorStart = `hsl(${randomHue}, 100%, 50%)`;
    const randomColorEnd = `hsl(${randomHue + 40}, 100%, 50%)`;

    // 직사각형의 그라데이션 처리 변수
    rectangle.style.setProperty('--start', randomColorStart);
    rectangle.style.setProperty('--end', randomColorEnd);
}
// 버튼 클릭 시 onClickButton() 실행
const buttonClick = document.querySelector('.button');
buttonClick.addEventListener('click', onClickButton);

// 정보 보호가 중요한 문자열 생성
const randomArray1 = crypto.getRandomValues(new Uint16Array(10));
randomJoinArray1 = randomArray1.join('');
// 임의의 정수(부호없는 16비트) 10개가 들어 있는 배열을 생성 32비트도 있음
console.log(randomJoinArray1);

// 24 자연로그, 자연상수
console.log(Math.log(3));

// 25 삼각 함수 사용하기
// 케릭터 이미지
/** 캐릭터 이미지 */
const character = document.querySelector('.character');

/** 각도 */
let degree = 0;

// 루프의 개시
loop();

/**
 * 화면이 갱신될 때마다 실행되는 함수
 */
function loop() {
    // 회전각을 라디안으로 구하기
    const rotation = (degree * Math.PI) / 180;
    // 회전각으로 위치 구하기
    const targetX = window.innerWidth / 2 + 100 * Math.cos(rotation) - 50;
    const targetY = window.innerHeight / 2 + 100 * Math.sin(rotation) - 50;
    // character 위치 반영하기
    character.style.left = `${targetX}px`;
    character.style.top = `${targetY}px`;
    // 각도 1도 증가시키기
    degree += 1;
    // 다음 화면 갱신 타이밍에서 loop( ) 실행
    requestAnimationFrame(loop);
}

console.log('JavaScript'.length);

/** 텍스트 영역(textarea) */

let textarea = document.querySelector('.textarea');

/** 입력중인 문자 수 */
let string_num = document.querySelector('.string_num');

//  텍스트를 입력할 때마다 onKeyUp( )을 실행
textarea.addEventListener('keyup', onKeyUp);

function onKeyUp() {
    // 입력된 텍스트
    const inputText = textarea.value;
    // 글자 수를 반영
    string_num.innerText = inputText.length;
}

// 31
console.log('JavaScript'.charAt(3));

// 32
console.log('반갑습니다'.slice(3, 1)); // 공백을 반환
console.log('반갑습니다'.substring(3, 1)); // 갑슴

// 33
console.log('Javascript'.substr(4, 6));

// 34 정규표현식에 유념
console.log('010-2333-4245'.replace(/-/g, ''));

// 35 문자열 나누기

// 37 
console.log('이것은 Test 입니다.'.toLowerCase());
// 한영 혼영 돼있어도 상관없음.

// 38

const todayWeather = new Date();

document.querySelector('.today_weather').innerHTML = `<h1> 오늘 ${todayWeather.getMonth() + 1}/${todayWeather.getDate()}의 날씨</h1>`;
