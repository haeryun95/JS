// 순수 자바스크립트    --> defer를 안쓸때 다음과 같이하면 됨
// document.addEventListener("DOMContentLoaded", function () {
//     const appendBtn = document.querySelector(".append");
//     const contentDiv = document.querySelector(".content");

//     appendBtn.addEventListener("click", function () {
//         const newDiv = document.createElement("div");
//         newDiv.classList.add("box");
//         contentDiv.appendChild(newDiv);
//     });
// });

// 제이쿼리

function makeColor() {
    const randomColor = "#" + Math.round(Math.random() * 0xffff).toString(16);
    return randomColor;
}

$(document).ready(function () {
    // $(선택자 혹은 요소) = document.querySelector(ALL))('선택자, 요소')

    // const appendBtn = $(".append");
    // const contentDiv = $(".content");

    // console.log(appendBtn);
    // console.log(contentDiv);

    // appendBtn.click(function () {
    //     const newDiv = $(`<div></div>`);
    //     newDiv.addClass("box");
    //     contentDiv.append(newDiv);
    // });

    $(".append").click(function () {
        // const newDiv = $("<div></div>");
        // newDiv.addClass("box");
        $(".content").append(`<div class='box'></div>`);

        // $(선택자(요소명)).css('속성', '속성값')
        // $(".box").css("background-color", makeColor);
    });
});

$(".remove").click(function () {
    $(".box").remove();
});

// show / hide/ toggle
// display : block <==> display : none

$(".show").click(function () {
    $(".box").show();
});
$(".hide").click(function () {
    $(".box").hide();
});
$(".toggle").click(function () {
    $(".box").toggle();
});

// fade in / fade out / fade toggle
// fadeIn()안에 입력변수 duration, easing, complete
// fadeIn(duration,easing,complete)
// fadeIn() 사이에는 (duration, easing, complete)를 사용할 수 있으며, 생략도 가능
// duration = fast / slow 그리고 숫자로 표현이 가능하며, fast / slow 문자열이므로 "" 혹은 '' 를 사용한다
// 숫자는 1000당 1초로 동작
// fast - 200 / slow = 600 / default = 400으로 동작한다

// easing - linear / swing 을 사용할 수 있다.
// linear - 일정한 속도로 동작
// swing - 처음에 빨라졌다 천천히 느려짐(기본값)

// complete - 해당 이벤트가 완전히 종료 되었을 때 실행

$(".fadein").click(function () {
    $(".box").stop().fadeIn("fast"); // 200
});
$(".fadeout").click(function () {
    $(".box").stop().fadeOut(600, "linear");
});
$(".fadetoggle").click(function () {
    $(".box").stop().stop().fadeToggle();
});

//add class / remove class / toggle class

$(".addclass").click(function () {
    $(".box").addClass("red");
});
$(".removeclass").click(function () {
    $(".box").removeClass("red");
});
$(".toggleclass").click(function () {
    // (".box").toggleClass("red");
    $(".box").eq(2); //인덱스 2번과 같은 의미
    $(".box").eq(2).toggleClass("color");
});
