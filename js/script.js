
// 네브바 숨겼다 나타내기
let navBar = document.getElementById("nav-bar");

window.addEventListener("scroll", function () {
  let scrollPosition = window.scrollY;

  if (scrollPosition >= 570) {
    navBar.style.top = "0"; // 네브바를 보이도록 함
  } else {
    navBar.style.top = "-60px"; // 네브바를 숨김
  }
});

// 이미지 로고 1초뒤에
document.addEventListener("DOMContentLoaded", function () {
  setTimeout(function () {
    document.getElementById("chanelLogo").style.opacity = "1";
  }, 500);
// 텍스트 3초뒤에
  setTimeout(function () {
    document.getElementById("mainTitle").style.opacity = "1";
  }, 2000);
});
