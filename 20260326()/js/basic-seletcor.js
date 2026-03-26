console.dir(document.body);
//요소 노드 불러오기
//1. id 명으로 요소(정보) 불러오기

let firstTitle = document.getElementById("title"); //기능을 하는 속성 -> 메서드 / 정적인 속성 ->
console.dir(firstTitle);
firstTitle.classList.add("tiger");

console.log(firstTitle.classList);

//클래스명으로 요소(정보) 불러오기
let myList = document.getElementsByClassName("list");

//태그명으로 요소(정보) 불러오기
let paragraphs = document.getElementsByTagName("p");
console.log(paragraphs);

let paragraphsArray = Array.from(paragraphs);
console.log(paragraphsArray); //순수배열 array

//CSS 선택자로 요소 불러오기
let lists = document.querySelector(".red");
console.dir(lists);
let myLists = document.querySelectorAll(".container .list");
console.dir(myLists);

// NodeList => 유사 배열 => forEach를 쓸수잇음
// var array = [1, 2, 3] ---> 배열;
// array; // [1, 2, 3]
// 아래는 유사 배열
// var nodes = document.querySelectorAll('div'); // NodeList [div, div, div, div, div, ...]
// var els = document.body.children; // HTMLCollection [noscript, link, div, script, ...]

// myLists.style.backGroundColor = "red";

(() => myLists.forEach((element, idx) => (element.style.backgroundColor = `#${idx + 5}${idx + 5}${idx + 5}`)))();

let rainbowLists = document.querySelectorAll("#rainbow li");
let colors = ["red", "orange", "yellow", "green", "blue", "navy", "purple"];

(() =>
    rainbowLists.forEach((element, idx) => {
        element.style.backgroundColor = `${colors[idx]}`;
    }))();
