//다이얼 요소를 가져온다. (45씩 돈다)

const tvDialImg = document.querySelector(".tv-dial img");
const tvChannel = document.querySelectorAll(".tv-channel");

console.log(tvDialImg);
console.log(tvChannel);

let dialNum = 1;
let maxChannel = tvChannel.length;

// 1. tv-dial click
tvDialImg.addEventListener("click", function () {
    console.log(dialNum);
    // 1-1. tv-dial > img 가 45deg 회전
    tvDialImg.style.transform = `rotate(${45 * dialNum}deg)`;

    if (dialNum >= maxChannel) dialNum = 0;

    tvChannel.forEach(function (channel, _) {
        channel.classList.remove("on");
    });
    // 1-2. tvChannel(next) 이 classList  -> '.on' 추가

    tvChannel[dialNum].classList.add("on");
    dialNum = dialNum + 1;
});
