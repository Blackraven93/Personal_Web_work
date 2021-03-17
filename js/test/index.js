const form = document.querySelector("form"),
    inputValue = form.querySelector("input"),
    pendingUlTag = document.querySelector(".pending"),
    finishedUlTag = document.querySelector(".finished");

const pendingList = "pending",
    finishedList = "finished";

let toPending = [],
    toFinished = [];

function deleteToPending(event) {
    const btn = event.target;
    const li = btn.parentNode;
    pendingUlTag.removeChild(li);
    const cleanToPending = toPending.filter(function filterFn(toPending) {
        return toPending.id !== parseInt(li.id);
    });
    toPending = cleanToPending;
    saveToPending();
}

function deleteToFinished(event) {
    const btn = event.target;
    const li = btn.parentNode;
    finishedUlTag.removeChild(li);
    const cleanToFinished = toFinished.filter(function filterFn(toFinished) {
        return toFinished.id !== parseInt(li.id);
    });
    toFinished = cleanToFinished;
    saveToFinished();
}

function saveToPending() {
    localStorage.setItem(pendingList, JSON.stringify(toPending));
}

function saveToFinished() {
    localStorage.setItem(finishedList, JSON.stringify(toFinished));
}

function sendToFinished(event) {
    const btn = event.target;
    const li = btn.parentNode;
    pendingUlTag.removeChild(li);
    finishedUlTag.appendChild(li);
    const cleanToPending = toPending.filter(function filterFn(toPending) {
        return toPending.id !== parseInt(li.id);
    });
    const pushToFinished = toPending.filter(function filterFn(toPending) {
        return toPending.id === parseInt(li.id);
    });
    toPending = cleanToPending;
    toFinished.push(pushToFinished);
    saveToPending();
    saveToFinished();
}

function sendToPending(event) {
    const btn = event.target;
    const li = btn.parentNode;
    finishedUlTag.removeChild(li);
    pendingUlTag.appendChild(li);
    const cleanToFinished = toFinished.filter(function filterFn(toFinished) {
        return toFinished.id !== parseInt(li.id);
    });
    const pushToPending = toFinished.filter(function filterFn(toFinished) {
        return toFinished.id === parseInt(li.id);
    });
    toFinished = cleanToFinished;
    toPending.push(pushToPending);
    saveToPending();
    saveToFinished();
}

function paintToPending(text) {
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const moveBtn = document.createElement("button");
    delBtn.addEventListener("click", deleteToPending);
    delBtn.innerText = "❌";
    moveBtn.addEventListener('click', sendToFinished)
    moveBtn.innerText = "✅";
    const span = document.createElement("span");
    span.innerText = text;
    const newId = toPending.length + 1;
    li.appendChild(span);
    li.appendChild(delBtn);
    li.appendChild(moveBtn);
    li.id = newId;
    pendingUlTag.appendChild(li);
    const toPendingObj = {
        id: newId,
        text: text
    };
    toPending.push(toPendingObj);
    saveToPending();
}

function paintToFinished(text) {
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const moveBtn = document.createElement("button");
    delBtn.addEventListener("click", deleteToFinished);
    delBtn.innerText = "❌";
    moveBtn.addEventListener('click', sendToPending)
    moveBtn.innerText = "⏪";
    const span = document.createElement('span');
    span.innerText = text;
    li.appendChild(span);
    li.appendChild(delBtn);
    li.appendChild(moveBtn);
    // 자 여기까지는 같은데 여기서 로직을


}

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = inputValue.value;
    paintToPending(currentValue);
    inputValue.value = ""; //submit value 초기화
}

function makePanding(toPending) {
    paintToPending(toPending.text);
}

function makeFinished(toFinished) {
    paintToFinished(toFinished.text);
}

function loadPending() {
    const loadedToPending = localStorage.getItem(pendingList);
    if (loadedToPending !== null) {
        const parsedToPending = JSON.parse(loadedToPending);
        parsedToPending.forEach(makePanding);
    }
}

function loadFinished() {
    const loadToFinished = localStorage.getItem(finishedList);
    if (loadToFinished !== null) {
        const parsedToFinished = JSON.parse(loadToFinished);
        parsedToFinished.forEach()
    }
}

function init() {
    loadPending();
    loadFinished();
    form.addEventListener("submit", handleSubmit);
}

init();

/**
 * 코드를 하나씩 뜯어보자
 * init()
 *  1. 로컬 스토리지에서 객체 배열을 가져온다
 *  2. 만약에 객체 배열이 있을 경우
 *  3. Json으로 파싱하여 각각 makePanding()을 실행한다.
 *  something()
 *      1. paintToPending 함수에 객체의 text 값을 넣어준다.
 *      2. 이때 text는 객체를 생성할 때와
 *      3. html에 텍스트를 넣어 줄 때 사용된다.
 *  paintToPending()
 *      1. 제거 버튼을 생성하고 클릭 할 시
 *      2. html 태그와 localstorage에서 객체를 지우고
 *      3. 최신화하여 다시 문자열로 파싱 후 로컬스토리지에 전달해 준다.
 *      4. 또한 html에 태그를 만들어주고
 *      5. 생성된 테그의 내용을 객체로 만들어 push로 추가해준다.
 *
 * 고로 인터넷에 관점으로 이야기를 한다면.
 * 처음에 브라우저 창이 뜨고
 * 1. 로컬스토리지 부터 확인을 한다.
 * 2. 만약에 로컬 스토리지에 배열이 있다면.
 * 3. paintToPending을 이용하여 각각 가져와 html 화면에 띄어 준다.
 *
 *
 * okay finished로 가는 것 까지는 잘 옮겨짐
 * 태그랑 localstorage랑
 * 그럼 문제는
 * 1. 다시 pending으로 가는 문제!
 * 2. finished에서 제거하는 문제!
 */