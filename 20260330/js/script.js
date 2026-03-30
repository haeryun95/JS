// 1. 버튼 요소 가져오기 ->
// 2. 버튼에 이벤트를 부여하기  ->
// 3-1. body에 class '.dark' 를 부여함
// 3-2. 이미 그 클래스가 있으면 '.dark' 클래스를 제거 해야함
// 4. 버튼 클릭시 클래스가 정상적으로 부여or제거 되는지 확인

const buttonEl = document.querySelector("button");
const bodyEl = document.body;

const toggleClass = () => bodyEl.classList.toggle("dark");

// buttonEl.addEventListener("click", toggleClass);
buttonEl.onclick = toggleClass;
